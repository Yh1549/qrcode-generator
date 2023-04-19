<script setup>
import { useStore } from '../store';

const Store = useStore();

const generate =()=>{
  if(Store.qrcode_text.account!= "" && Store.qrcode_text.money!= ""){
    Store.qrcode_value = JSON.stringify(Store.qrcode_text);
  }
}
</script>
<template>
<section class="w-1/2 flex flex-col justify-center items-center">
    <div class="form-control w-full max-w-xs mx-auto">
      <label class="label">
        <span class="label-text font-bold">交易帳號</span>
        <!-- <span class="label-text-alt">Top Right label</span> -->
      </label>
      <input type="text" placeholder="請輸入帳號" class="input input-bordered w-full max-w-xs" v-model="Store.qrcode_text.account" />
      <label class="label">
        <!-- <span class="label-text-alt">Bottom Left label</span> -->
        <!-- <span class="label-text-alt">Bottom Right label</span> -->
      </label>
    </div>
    <div class="form-control w-full max-w-xs  mx-auto">
      <label class="label">
        <span class="label-text font-bold">交易金額</span>
        <!-- <span class="label-text-alt">Top Right label</span> -->
      </label>
      <input type="text" placeholder="請輸入金額" class="input input-bordered w-full max-w-xs" v-model="Store.qrcode_text.money" />
      <label class="label">
        <!-- <span class="label-text-alt">Bottom Left label</span> -->
        <!-- <span class="label-text-alt">Bottom Right label</span> -->
      </label>
    </div>   
    <button type="button" class="btn btn-primary" @click="generate">generate</button>


  </section>
</template>