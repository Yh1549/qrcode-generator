<script setup>
import qrInput from './components/qrInput.vue';
import qrOutput from './components/qrOutput.vue';
import headerCom from './components/header.vue';
</script>

<template>
<headerCom/>
<main class="w-full flex h-[600px]">
    <qrInput></qrInput>
    <qrOutput></qrOutput>
</main>
</template>
<style scoped>

</style>
