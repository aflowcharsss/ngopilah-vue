<script setup>
import { ref } from "vue";
import axios from 'axios';

import Heading from "../../components/Heading.vue";
import Table from "../../components/Table.vue";
import Add from "../../components/Dashboard/Add.vue";

const heading = {
  primary: "Hey Min, Mau Ngapain?",
  paraOne: "Silahkan Pilih Menu Dibawah Ya Min",
};

// const products = [
//   {
//     id: 1,
//     image: "1-aceh-gayo-anaerob.png",
//     name: "Aceh Gayo Anaerob",
//     price: 85000,
//     type: "Arabica",
//     rating: 4.9,
//     transaction: 102,
//   },
//   {
//     id: 2,
//     image: "2-aceh-gayo-atu-litang.png",
//     name: "Aceh Gayo Atu Lintang",
//     price: 130000,
//     type: "Arabica",
//     rating: 4.9,
//     transaction: 106,
//   },
//   {
//     id: 3,
//     image: "3-bali-kintamani.png",
//     name: "Bali Kintamani",
//     price: 150000,
//     type: "Arabica",
//     rating: 5.0,
//     transaction: 86,
//   },
//   {
//     id: 4,
//     image: "4-bali-ulian.png",
//     name: "Bali Ulian",
//     price: 85000,
//     type: "Arabica",
//     rating: 5.0,
//     transaction: 25,
//   },
// ];

let products = ref(null);

axios.get('http://ngopilah.test/api/products')
  .then(get => 
    products.value = get.data.data
  )
  .catch(error => console.log(error));

const isOpen = ref(false);
</script>

<template>
  <section class="products">
    <div class="wrapper">
      
      <Heading
        :primary="heading.primary"
        :paraOne="heading.paraOne"
      />

      <div class="root">
        <button class="btn" @click="isOpen = true">Tambah Produk</button>
        <button class="btn" >Lihat Pengguna</button>

        <Teleport to="body">
          <div v-if="isOpen" class="modal">
            <!-- Add Products -->
            <Add @close="isOpen = false" />
          </div>
        </Teleport>
      </div>

      <div class="table">
        <div class="wrapper head">
          <h6 class="number">No</h6>
          <h6 class="photo">Foto</h6>
          <h6 class="product">Produk</h6>
          <h6 class="type">Tipe</h6>
          <h6 class="rating">Rating</h6>
          <h6 class="total">Total</h6>
          <h6 class="edit">Edit</h6>
          <h6 class="delete">Hapus</h6>
        </div>

        <div v-for="product in products">
          <Table
            :id="product.id"
            :image="product.image"
            :name="product.name"
            :price="product.price"
            :type="product.type"
            :rating="product.rating"
            :transaction="product.transaction"
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

.wrapper .number {
  @apply col-span-2;
}

.wrapper .photo {
  @apply col-span-4;
}

.wrapper .product {
  @apply col-span-5;
}

.wrapper .type {
  @apply col-span-3;
}

.wrapper .rating {
  @apply col-span-3;
}

.wrapper .total {
  @apply col-span-3;
}

.wrapper .edit {
  @apply col-span-2;
}

.wrapper .delete {
  @apply col-span-2;
}
</style>
