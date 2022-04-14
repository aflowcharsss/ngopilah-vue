<script setup>
import { ref, defineEmits } from "vue";
import Heading from "../Heading.vue";
import Input from "../Input.vue";

const heading = {
  primary: "Tambah Data Produk",
  paraOne: "Silahkan Isi Detail Produknya Yaa",
};

let form = ref({
  photo: "",
  name: "",
  type: "",
  stock: "",
  price: "",
});

console.log(form.value);

defineEmits("close");
</script>

<template>
  <div class="wrapper">
    <Heading :primary="heading.primary" :paraOne="heading.paraOne" />
    <button class="btn-close" @click="$emit('close')">
      <svg class="ph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          stroke="#065f46"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          stroke="#065f46"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </button>

    <label for="photo">Photo</label>
    <Input forWho="product" name="Produk" v-model="form.name" />
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative container mx-auto;
}

.btn-close {
  @apply absolute top-8 right-8;
}

.btn-submit {
  @apply w-full h-full text-center uppercase py-4 border-[1.5px] border-emerald-800 font-medium tracking-wider;
}
</style>
