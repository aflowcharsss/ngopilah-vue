<script setup>
defineProps({
  forWho: String,
  isIcon: Boolean,
  name: String,
  modelValue: String,
});

const emit = defineEmits(["update:modalValue"]);

function updateValue(value) {
  emit("update:modalValue", value);
}
</script>

<template>
  <div class="wrapper">
    <label :for="forWho" class="label">{{ name }}</label>

    <input
      :id="forWho"
      class="input"
      type="text"
      :value="modelValue"
      v-on:input="updateValue($event.target.value)"
    />
    <!-- With Icon -->
    <div v-if="(isIcon = true)" class="icon">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative;
}

.label {
  @apply absolute bottom-8 left-0 text-xl;
}

.input {
  @apply relative w-full h-full bg-inherit border-b-[1.5px] border-emerald-800 outline-none text-lg;
}

.icon {
  @apply absolute bottom-8 right-0;
}
</style>
