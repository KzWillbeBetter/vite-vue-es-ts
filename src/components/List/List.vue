<template>
  <div>
    <select name="abc" v-model="name">
      <option value="富贵老师">富贵老师</option>
      <option value="西门老师">西门老师</option>
      <option value="嘤嘤老师">嘤嘤老师</option>
    </select>
  </div>
  <input v-model="name" type="text" />
  <ul v-for="item in newList" :key="item">
    <li>{{ item.name }}</li>
  </ul>
</template>

<script setup>
import queryList1 from "./queryList.js";
import addList1 from "./addList.js";

const { list, name } = queryList1();
console.log(list, name.value);
const newList = addList1(list);
</script>

<style scoped>
ul,
li {
  list-style: none;
}
</style>
