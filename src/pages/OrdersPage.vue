<template>
  <div class="row q-pt-md q-ml-lg">
    <div class="col-2">
      <p style="color: #123499" class="text-bold">Order From Date</p>
      <q-input v-model="orderFromDate" style="max-width: 150px" outlined dense autofocus type="date" />
    </div>
    <div class="col-2">
      <p style="color: #123499" class="text-bold">Order To Date</p>
      <q-input v-model="orderToDate" style="max-width: 150px" outlined dense autofocus type="date" />
    </div>
    <div class="col-2">
      <p style="color: #123499" class="text-bold">Courier Status</p>
      <q-select filled dense style="width: 200px; max-height: 100px" v-model="orderStatus"
        :options="orderStatusOptions" />
    </div>
    <div class="col-2 q-ml-lg q-mt-lg">
      <q-btn unelevated color="primary" label="Search" no-caps :disable="validateSearch" @click="getSearchData" />
    </div>
  </div>
  <div class="q-ml-md q-mt-lg q-mr-lg q-pa-md">
    <div>
      <q-btn color="green" class="q-mb-md" style="width: 20px" no-caps @click="excelExport">
        <div class="row justify-start items-center">
          <q-icon name="fas fa-file-excel" />
          <span class="q-ml-sm"></span>
        </div>
      </q-btn>
      <q-btn v-if="orderStatus === 'Yet to be Couriered'" color="primary" class="q-mb-md float-right"
        style="width: 20px" no-caps :disable="validateSearch || !rows.length" @click="openFileUploadModal = true">
        <custom-tooltip :content="fileUploadTooltipContent" :max-width="'20rem'" />
        <div class="row justify-start items-center">
          <q-icon name="fas fa-upload" />
          <span class="q-ml-sm"></span>
        </div>
      </q-btn>
      <q-btn v-if="orderStatus === 'Yet to be Couriered'" color="primary" class="q-mb-md float-right q-mr-md"
        style="width: 20px" no-caps :disable="validateSearch || !rows.length" @click="getOrdersCsvTemplate">
        <custom-tooltip :content="fileDownloadTooltipContent" :max-width="'20rem'" />
        <div class="row justify-start items-center">
          <q-icon name="fas fa-download" />
          <span class="q-ml-sm"></span>
        </div>
      </q-btn>
    </div>
    <q-table :ref="orderTable" class="orders-table" flat bordered title="Orders" :rows="rows" :columns="columns"
      v-model:pagination="pagination" row-key="order_id" @request="onEachPageRequest" v-model:selected="selected"
      :filter="filter">
      <template v-slot:top-right>
        <q-input v-if="showFilter" filled borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn class="q-ml-sm" icon="filter_list" @click="showFilter = !showFilter" flat />
      </template>

      <template #body-cell-orderStatus="props">
        <q-td :props="props">
          <q-chip :color="orderStatusColor(props.row.order_status)" text-color="white" dense class="text-weight-bolder"
            square>{{ props.row.order_status }}</q-chip>
        </q-td>
      </template>
    </q-table>
    <div class="q-pa-lg flex flex-center">
      <q-pagination  v-model="pagination.page" :max="pagination.totalPages" :max-pages="6" @update:model-value="pageSelected" :boundary-numbers="true" :ellipses="true" />
    </div>
    <q-btn class="q-mt-md" color="primary" label="Edit"
      :disable="!selected.length || selected[0].order_status === 'Delivered'" @click="editOrderDetails" />
  </div>
  <div v-if="selected.length" class="q-ml-md q-mt-sm q-mr-lg q-pa-md">
    <q-table class="orders-table" flat bordered title="Order Items" :rows="rowsOrderItems" :columns="columnsOrderItems"
      row-key="order_id" :filter="filter" />
  </div>
  <edit-order-details-modal v-if="openNewUserPopup" v-model="openNewUserPopup" :show-new-user-popup="openNewUserPopup"
    :close-new-user-popup="closeNewUserPopup" :selected-data="selected" />
  <open-orders-file-upload-modal v-if="openFileUploadModal" v-model="openFileUploadModal"
    :show-orders-file-upload-popup="openFileUploadModal" :close-orders-file-upload-popup="closeOrdersFileUploadPopup" />
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useQuasar, QSpinnerFacebook } from "quasar";
import { useGeneralStore } from "src/stores/general";
import { exportToExcel } from "src/utils/exportToExcel";
import { storeToRefs } from "pinia";
import EditOrderDetailsModal from "src/components/popups/editOrderDetailsModal.vue";
import OpenOrdersFileUploadModal from "src/components/popups/openOrdersFileUploadModal.vue";
import CustomTooltip from "src/components/shared/CustomTooltip.vue";



// Store Initialization
const generalStore = useGeneralStore();

// Variable Initializations
const openNewUserPopup = ref(false);
const openFileUploadModal = ref(false);
const { orders } = storeToRefs(generalStore);
let columnsData = [
  {
    name: "orderId",
    required: true,
    label: "Order Id",
    align: "left",
    field: (row) => row.order_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "orderDate",
    label: "Order Date",
    field: "order_date",
    sortable: true,
    align: "center",
  },
  {
    name: "customerName",
    label: "Customer Name",
    field: "customer_name",
    align: "center",
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    field: "mobile_number",
    align: "center",
  },
  {
    name: "referrerId",
    label: "Referrer Id",
    field: "referrer_id",
    align: "center",
  },
  {
    name: "referrerName",
    label: "Referrer Name",
    field: "referrer_name",
    align: "center",
  },
  {
    name: "referrerMobileNumber",
    label: "Referrer Mobile Number",
    field: "referrer_mobile_number",
    align: "center",
  },
  {
    name: "totalProductPrice",
    label: "Total Product Price",
    field: "total_product_price",
    align: "center",
  },
  {
    name: "cgst",
    label: "CGST Amount",
    field: "order_cgst_amount",
    align: "center",
  },
  {
    name: "sgst",
    label: "SGST Amount",
    field: "order_sgst_amount",
    align: "center",
  },
  {
    name: "igst",
    label: "IGST Amount",
    field: "order_igst_amount",
    align: "center",
  },
  {
    name: "gstTotal",
    label: "GST Total Amount",
    field: "order_gst_total_amount",
    align: "center",
  },
  {
    name: "orderTotal",
    label: "Order Total Amount",
    field: "order_total_amount",
    align: "center",
  },
  {
    name: "orderStatus",
    label: "Order Status",
    field: "order_status",
    align: "center",
  },
  {
    name: "courierDate",
    label: "Courier Date",
    field: "courier_date",
    align: "center",
  },
  {
    name: "deliveryThrough",
    label: "Courier Company Name",
    field: "delivery_through",
    align: "center",
  },
  {
    name: "deliveryNumber",
    label: "Courier Tracking Number",
    field: "delivery_number",
    align: "center",
  },
  {
    name: "deliveryAddress",
    label: "Delivery Address",
    field: "delivery_address",
    align: "center",
  },
  {
    name: "deliveryDate",
    label: "Delivery Date",
    field: "delivery_date",
    align: "center",
  },
  {
    name: "paymentMode",
    label: "Payment Mode",
    field: "payment_mode",
    align: "center",
  },
  {
    name: "paymentStatus",
    label: "Payment Status",
    field: "payment_status",
    align: "center",
  },
  {
    name: "paymentDate",
    label: "Payment Date",
    field: "payment_date",
    align: "center",
  },
  {
    name: "paymentReference",
    label: "Payment Reference",
    field: "payment_reference",
    align: "center",
  },
];
let columnsDataOrderItems = [
  {
    name: "uid",
    required: true,
    label: "Order Item Id",
    align: "left",
    field: (row) => row.order_item_number,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "productName",
    label: "Product Name",
    field: "product_name",
    align: "center",
  },
  {
    name: "quantity",
    label: "Quantity",
    field: "quantity",
    align: "center",
  },
  {
    name: "hsnCode",
    label: "HSN Code",
    field: "hsn_code",
    align: "center",
  },
  {
    name: "price",
    label: "Price (INR)",
    field: "price",
    align: "center",
  },
  {
    name: "cgstPercentage",
    label: "CGST (%)",
    field: "cgst_percentage",
    align: "center",
  },
  {
    name: "cgstAmount",
    label: "CGST Amount (INR)",
    field: "cgst_amount",
    align: "center",
  },
  {
    name: "sgstPercentage",
    label: "SGST (%)",
    field: "sgst_percentage",
    align: "center",
  },
  {
    name: "sgstAmount",
    label: "SGST Amount (INR)",
    field: "sgst_amount",
    align: "center",
  },
  {
    name: "igstPercentage",
    label: "IGST (%)",
    field: "igst_percentage",
    align: "center",
  },
  {
    name: "igstAmount",
    label: "IGST Amount (INR)",
    field: "igst_amount",
    align: "center",
  },
  {
    name: "gstTotalAmount",
    label: "GST Total (INR)",
    field: "gst_total_amount",
    align: "center",
  },
  {
    name: "totalAmount",
    label: "Total (INR)",
    field: "total_amount",
    align: "center",
  },
];
const pagination = ref({
  page: 1, // Current page
  rowsPerPage: 10, // Rows per page
  rowsNumber: 10, // Total rows (set dynamically)
  totalPages:0
})
const columns = ref(columnsData);
const rows = ref([]);
const columnsOrderItems = ref(columnsDataOrderItems);
const rowsOrderItems = ref([]);
const selected = ref([]);
const filter = ref("");
const showFilter = ref(false);
const orderStatus = ref("All");
const orderFromDate = ref("");
const orderToDate = ref("");
let orderStatusData = [
  { label: "all", name: "All" },
  { label: "yet_to_be_couriered", name: "Yet to be Couriered" },
  { label: "in_transit", name: "In transit" },
  { label: "delivered", name: "Delivered" },
  { label: "cancelled", name: "Cancelled" },
];
const fileDownloadTooltipContent = ref("Orders Template Download");
const fileUploadTooltipContent = ref("Orders Data Upload");
const $q = useQuasar();

// Computed
const orderStatusOptions = computed(() => {
  return orderStatusData.map((orderStatus) => orderStatus.name);
});

const getOrderStatus = computed(() => {
  let requiredOrderStatus = orderStatusData.find(
    (order) => order.name === orderStatus.value
  );
  return requiredOrderStatus.label;
});


const pageSelected = (value)=>{
  pagination.value.page = value;
  ordersList();
}

const validateSearch = computed(() => {
  return !orderFromDate.value || !orderToDate.value;
});

// Functions
const showLoader = () => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: "light-blue",
    messageColor: "white",
    backgroundColor: "light-blue",
    message: "",
  });
};
// onMounted(() => {
//   generalStore.getOrdersCount().then((res) => {
//      pagination.value.totalPages = res.data.order_count;
//   });
// });
const hideLoader = () => {
  $q.loading.hide();
};

const closeNewUserPopup = (refreshData = false) => {
  openNewUserPopup.value = false;

  if (refreshData === true) {
    selected.value = [];
    ordersList();
  }
};

const closeOrdersFileUploadPopup = (refreshData = false) => {
  openFileUploadModal.value = false;

  if (refreshData === true) {
    ordersList();
  }
};

const editOrderDetails = () => {
  openNewUserPopup.value = true;
};

const orderStatusColor = (orderStatus) => {
  if (orderStatus === "Yet to be Couriered") {
    return "orange";
  } else if (orderStatus === "In Transit") {
    return "purple";
  } else if (orderStatus === "Delivered") {
    return "green";
  }

  return "red";
};

const ordersList = () => {
   showLoader();
  let queryParams = {
    fromDate: orderFromDate.value,
    toDate: orderToDate.value,
    orderStatus: getOrderStatus.value,
    page:pagination.value.page,
    rowsPerPage:10
  };
  generalStore
    .getOrders(queryParams)
    .then((res) => {
      console.log("res", pagination.value);
      orders.value = res.data?.data;
      rows.value = [...res.data?.data];
      pagination.value.totalPages = res.data?.total_page_count;
    })
    .catch((err) => {
      console.log("errror", err);
    })
    .finally(() => {
      hideLoader();
    });
};

const onEachPageRequest = (prop) => {
  generalStore.searchOrderNumber(prop.filter).then((res) => {
    rows.value = res.data;
  }).catch((err) => {
    console.log("err", err);
  });
 console.log(prop)
}

const displayOrderItems = () => {
  let requiredOrderItems = orders.value.find(
    (order) => order.order_id === selected.value[0].order_id
  ).order_items;

  rowsOrderItems.value = requiredOrderItems;
};

const getSearchData = () => {
  if (orderToDate.value < orderFromDate.value) {
    $q.notify({
      message:
        "Order From Date should be less than or equal to Order To Date!!!",
      type: "warning",
      position: "top",
    });

    return;
  }

  selected.value = [];
  ordersList();
};

const getOrdersCsvTemplate = () => {
  showLoader();

  let payload = {
    fromDate: orderFromDate.value,
    toDate: orderToDate.value,
    orderStatus: getOrderStatus.value,
  };

  generalStore
    .getOrdersCsvTemplate(payload)
    .then((res) => {
      let url = window.URL.createObjectURL(new Blob([res.data]));
      let link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Yet_To_Be_Couriered_Orders.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((err) => {
      console.log("err", err);
    })
    .finally(() => {
      hideLoader();
    });
};

const excelExport = () => {
  showLoader();
  let orderStatusReplacedSpaces = orderStatus.value.replace(/ /g, "_");
  let fileName = `Registration_Payments_All.xlsx`;

  if (!validateSearch.value) {
    fileName = `Registration_Payments_${orderStatusReplacedSpaces}_from_${orderFromDate.value}_to_${orderToDate.value}.xlsx`;
  }

  let requiredData = [];

  for (let row of rows.value) {
    let data = {
      "Order Id": row.order_id,
      "Order Date": row.order_date,
      "Customer Name": row.customer_name,
      "Mobile Number": row.mobile_number,
      "Referrer Id": row.referrer_id,
      "Referrer Name": row.referrer_name,
      "Referrer Mobile Number": row.referrer_mobile_number,
      "Total Product Price": row.total_product_price,
      "CGST Amount": row.order_cgst_amount,
      "SGST Amount": row.order_sgst_amount,
      "IGST Amount": row.order_igst_amount,
      "GST Total Amount": row.order_gst_total_amount,
      "Order Total Amount": row.order_total_amount,
      "Order Status": row.order_status,
      "Courier Date": row.courier_date,
      "Courier Company Name": row.delivery_through,
      "Courier Tracking Number": row.delivery_number,
      "Delivery Address": row.delivery_address,
      "Delivery Date": row.delivery_date,
      "Payment Mode": row.payment_mode,
      "Payment Status": row.payment_status,
      "Payment Date": row.payment_date,
    };

    requiredData.push(data);
  }

  exportToExcel(requiredData, fileName);
  hideLoader();
};

// Watchers
watch(selected, (value) => {
  if (value.length) {
    displayOrderItems();
  } else {
    rowsOrderItems.value = [];
  }
});
</script>

<style>
.orders-table .q-table__title {
  color: #1a43bf;
  font-weight: bold;
}

.orders-table thead {
  color: #123499;
}
</style>
