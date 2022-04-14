<template>
  <div class="wrapper">
    <Heading :primary="heading.primary" :paraOne="heading.paraOne" />

    <form class="form">
      <div class="col-1">
        <label class="label" for="photo">No</label>
        <input type="text" class="input" v-model="form.no" />
      </div>
      <div class="col-2">
        <label class="label" for="photo">Produk</label>
        <input type="text" class="input" v-model="form.name" />
      </div>

      <div class="col-3">
        <label class="label" for="photo">Produk</label>
        <select name="type" class="input" id="type" v-model="form.type">
          <option value="kg">Kg</option>
          <option value="pcs">Pcs</option>
        </select>
      </div>

      <div class="col-4">
        <label class="label" for="stock">Stok</label>
        <input type="text" class="input" v-model="form.stock" />
      </div>

      <div class="col-5">
        <label class="label" for="price">Harga</label>
        <input type="text" class="input" v-model="form.price" />
      </div>

      <div class="col-6">
        <label class="label" for="photo">Photo</label>
        <input type="text" class="input" v-model="form.photo" />
      </div>
      <p>{{ form }}</p>
      <button
        class="uppercase border-[1.5px] border-emerald-800 py-4 font-medium col-span-3"
        @click.prevent="submitItem()"
      >
        Simpan Item
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import Heading from "../../components/Heading.vue";

const router = useRouter();

const heading = {
  primary: "Tambah Data Produk",
  paraOne: "Silahkan Isi Detail Produknya Yaa",
};

const form = ref({
  no: "",
  name: "",
  type: "",
  stock: "",
  price: "",
  photo: "",
});

const submitItem = () => {
  const formData = new FormData();
  formData.append("no", form.value.no);
  formData.append("name", form.value.name);
  formData.append("type", form.value.type);
  formData.append("stock", form.value.stock);
  formData.append("price", form.value.price);
  formData.append("photo", form.value.photo);

  axios({
    method: "post",
    url: "http://ngopilah.test/api/items/create",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
      form.value.no = "";
      form.value.name = "";
      form.value.type = "";
      form.value.stock = "";
      form.value.price = "";
      form.value.photo = "";

      router.push("/");
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};
</script>

<style scoped lang="postcss">
.wrapper {
  @apply relative container mx-auto;
}

.form {
  @apply py-16 grid grid-cols-3 gap-x-8 gap-y-8;
}

.label {
  @apply text-2xl;
}

.input {
  @apply bg-emerald-50 border-b-[1.5px] border-emerald-800 text-lg w-full py-3 outline-none;
}

.btn-submit {
  @apply w-full h-full text-center uppercase py-4 border-[1.5px] border-emerald-800 font-medium tracking-wider;
}
</style>
