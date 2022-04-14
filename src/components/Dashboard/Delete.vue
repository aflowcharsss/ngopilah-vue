<script setup>
import Heading from '../Heading.vue';
// import Input from '../Input.vue';

const heading = {
    primary: "Hapus Data Produk",
    paraOne: "Yakin Mau Hapus Ni Produk?",
};

defineEmits('close');
</script>


<template>
    <div class="wrapper">
        <div class="spacing">
            <Heading :primary="heading.primary" :paraOne="heading.paraOne" />
        </div>
        <button class="btn-close" @click="$emit('close')">
            <svg class="ph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
        </button>

        <div class="delete">
            <button class="btn">
                <span class="text">
                    Say Yes, Say Yes 
                </span>

                <div class="icon">
                    <svg class="ph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="92" cy="108" fill="#065f46" r="12"></circle><line x1="152" y1="108" x2="176" y2="108" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M169.6,152a48.1,48.1,0,0,1-83.2,0" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                </div>
            </button>
            <button class="btn">
                <span class="text">
                    Coz I Need You No
                </span>

                <div class="icon">
                    <svg class="ph" xmlns="http://www.w3.org/2000/svg" fill="#065f46" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#065f46" stroke-miterlimit="10" stroke-width="16"></circle><line x1="184" y1="96" x2="152" y2="128" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="184" y1="128" x2="152" y2="96" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="96" x2="72" y2="128" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="128" x2="72" y2="96" fill="none" stroke="#065f46" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="180" r="12"></circle></svg>
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply relative container mx-auto;
}

.wrapper .spacing {
    @apply mt-32;
}

.btn-close{
    @apply absolute top-8 right-8;
}

.delete {
    @apply space-x-6 flex justify-center items-center;
}

.btn {
    @apply px-6 py-3 border-[1.5px] border-emerald-800 uppercase text-sm mt-8 flex items-center space-x-2 font-medium; 
}   
</style>