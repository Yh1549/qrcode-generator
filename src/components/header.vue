<script setup></script>
<template>
<div class="w-full navbar  bg-neutral text-neutral-content">
  <div class="flex-1">
    <p class=" mx-2 normal-case text-xl">QRCode Generator</p>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">

      <button class="btn btn-square btn-ghost" @click="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button>
      <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li class="text-secondary">測試,產生json格式qrcode</li>
      </ul>
    </div>
    </div>
  </div>
</template>