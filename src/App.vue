<template>
  <div>
    <el-button type="primary">{{ name }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const name: any = ref("god");
</script>
<style></style>
