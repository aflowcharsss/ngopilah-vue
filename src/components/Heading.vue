<script setup>
defineProps({
  primary: String,
  paraOne: String,
  paraTwo: String,
  paraThree: String,
  ctaOne: String,
  ctaTwo: String,
  isButtonOne: Boolean,
  propsClick: Boolean,
  urlOneTo: String,
  urlTwoTo: String,
});

</script>

<template>
  <div class="heading">
    <div class="wrapper">
      <h3 class="primary">{{ primary }}?</h3>
      <div class="secondary">
        <p class="para">{{ paraOne }}</p>
        <div v-if="ctaOne">
          <button class="cta" v-if="isButtonOne" @click="propsClick">{{ ctaOne }}</button>
          <router-link :to="'/' + urlOneTo" v-else class="cta">{{
            ctaOne
          }}</router-link>
        </div>
        <p class="para">{{ paraTwo }}</p>

        <button class="cta" v-if="isButton = false">{{ ctaTwo }}</button>
        <router-link v-else :to="'/' + urlTwoTo" v-if="ctaTwo" class="cta">{{
          ctaTwo
        }}</router-link>
        <p v-if="paraThree" class="para">{{ paraThree }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply text-center space-y-4;
}

.primary {
  @apply font-extralight text-4xl uppercase;
}

.secondary {
  @apply uppercase flex items-center justify-center space-x-4;
}

.para {
  @apply text-sm;
}

.cta {
  @apply px-3 py-2 border-[1.5px] border-emerald-800 text-xs font-semibold text-emerald-800 cursor-pointer uppercase;
}
</style>
