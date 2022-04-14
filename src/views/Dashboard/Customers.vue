<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

import Heading from "../../components/Heading.vue";
import TableCustomer from "../../components/TableCustomer.vue";

const router = useRouter();

const heading = {
  primary: "Hey Min, Mau Ngapain?",
  paraOne: "Pingin Tambah Item?",
  ctaOne: "Klik Disini",
  urlOneTo: "customers/add",
};

let customers = ref([]);

onMounted(async () => {
  getCustomers();
});

const getCustomers = async () => {
  const response = await axios.get("http://ngopilah.test/api/customers");
  customers.value = response.data.data;
};

console.log(customers);
</script>

<template>
  <section class="products">
    <div class="wrapper">
      <Heading
        :primary="heading.primary"
        :paraOne="heading.paraOne"
        :ctaOne="heading.ctaOne"
        :urlOneTo="heading.urlOneTo"
      />

      <div class="table">
        <div class="wrapper head">
          <h6 class="col-1">No</h6>
          <h6 class="col-2">Identitas</h6>
          <h6 class="col-3">Nama</h6>
          <h6 class="col-4">Kontak</h6>
          <h6 class="col-5">Email</h6>
          <h6 class="col-6">Alamat</h6>
          <h6 class="col-7">Diskon</h6>
          <h6 class="col-8">Tipe Diskon</h6>
          <h6 class="col-9">Edit</h6>
          <h6 class="col-10">Hapus</h6>
        </div>

        <div v-for="customer in customers" :key="customer.id">
          <TableCustomer
            :col1="customer.id"
            :col2="customer.identity"
            :col3="customer.name"
            :col4="customer.contact"
            :col5="customer.email"
            :col6="customer.address"
            :col7="customer.discount"
            :col8="customer.discount_type"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.products .wrapper {
  @apply container mx-auto;
}

.root {
  @apply relative pt-8 pb-4 flex justify-center items-center space-x-4;
}

.root .btn {
  @apply px-3 py-2 border-[1.5px] border-emerald-900 text-xs font-semibold text-emerald-900 cursor-pointer uppercase;
}

.modal {
  @apply fixed inset-0 bg-emerald-900 bg-opacity-10 w-full h-full flex justify-center items-center z-20;
}

.modal > div {
  @apply bg-emerald-50 p-16 rounded-xl min-w-full h-screen;
}

.table {
  @apply w-full pt-8 pb-12;
}

.table .wrapper {
  @apply grid grid-cols-24 gap-x-4 items-center border-b-[1.5px] border-emerald-800;
}

.wrapper .head {
  @apply py-4 uppercase;
}

.wrapper .col-1 {
  @apply col-span-1;
}

.wrapper .col-2 {
  @apply col-span-3;
}

.wrapper .col-3 {
  @apply col-span-3;
}

.wrapper .col-4 {
  @apply col-span-3;
}

.wrapper .col-5 {
  @apply col-span-4;
}

.wrapper .col-6 {
  @apply col-span-3;
}

.wrapper .col-7 {
  @apply col-span-2;
}

.wrapper .col-8 {
  @apply col-span-3;
}

.wrapper .col-9 {
  @apply col-span-1;
}

.wrapper .col-10 {
  @apply col-span-1;
}
</style>
