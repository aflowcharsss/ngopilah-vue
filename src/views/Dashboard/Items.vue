<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Heading from "../../components/Heading.vue";
import TableItems from "../../components/Table/TableItems.vue";
import Add from "../../components/Dashboard/Add.vue";

const heading = {
  primary: "Hey Min, Mau Ngapain?",
  paraOne: "Silahkan Pilih Menu Dibawah Ya Min",
};

let isOpen = ref(true);
let items = ref([]);

onMounted(async () => {
  getItems();
});

const getItems = async () => {
  const response = await axios.get("http://ngopilah.test/api/items");
  items.value = response.data.data;
};
</script>

<template>
  <section class="products">
    <div class="wrapper">
      <Heading :primary="heading.primary" :paraOne="heading.paraOne" />

      <div class="root">
        <button class="btn" @click="isOpen = true">Tambah Produk</button>
        <button class="btn">Lihat Pengguna</button>

        <Teleport to="body">
          <div v-if="isOpen" class="modal">
            <!-- Add Products -->
            <Add @close="isOpen = false" />
          </div>
        </Teleport>
      </div>

      <div class="table">
        <div class="wrapper head">
          <h6 class="col-1">No</h6>
          <h6 class="col-2">Foto</h6>
          <h6 class="col-3">Produk</h6>
          <h6 class="col-4">Tipe</h6>
          <h6 class="col-5">Stok</h6>
          <h6 class="col-6">Harga</h6>
          <h6 class="edit">Edit</h6>
          <h6 class="delete">Hapus</h6>
        </div>

        <div v-for="item in items" :key="item.id">
          <TableItems
            :col1="item.id"
            :col2="item.photo"
            :col3="item.name"
            :col4="item.type"
            :col5="parseInt(item.stock)"
            :col6="parseInt(item.price)"
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
  @apply col-span-2;
}

.wrapper .col-2 {
  @apply col-span-4;
}

.wrapper .col-3 {
  @apply col-span-5;
}

.wrapper .col-4 {
  @apply col-span-3;
}

.wrapper .col-5 {
  @apply col-span-3;
}

.wrapper .col-6 {
  @apply col-span-3;
}

.wrapper .edit {
  @apply col-span-2;
}

.wrapper .delete {
  @apply col-span-2;
}
</style>
