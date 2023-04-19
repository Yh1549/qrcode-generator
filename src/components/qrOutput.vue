<script setup>

import { useStore } from '../store';
const Store=useStore();

</script>
<template>
<section class="w-1/2 flex flex-col justify-center items-center">
  <figure class="qrcode">
      <vue-qrcode
      :value="Store.qrcode_value"
      tag="img"
      :options="{
        color: {
          dark: '#0074d9',
          light: '#7fdbff',
        },
        errorCorrectionLevel: 'Q',
        width: 300,
      }"
    ></vue-qrcode>
    <img
    class="qrcode__image"
    src="../assets/ub-logo-only.svg"
    />
  </figure>
  
  <div class=" items-center text-center my-2">
    <h2 class="font-bold text-xl">qrcode output :</h2>
    <p class="my-2">{{ Store.qrcode_value }}</p>
  </div>

</section>
</template>
<style scoped>
.qrcode {
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>