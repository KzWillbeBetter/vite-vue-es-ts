<template>
  <div>
<!--    <List></List>-->
    <div class="border">
      <h3>JS 父子之间通信</h3>
      <div>MyName:{{ name }}</div>
<!--      <div>MyName:{{ aaa }}</div>-->
      <HelloWorld @click="accept" :msg="obj"/>
    </div>
    <div class="border">
      <h3>TS 父子之间通信</h3>
      <Modal @click1="recevied" :msg="msg"></Modal>
    </div>
  </div>

</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal/Index.vue'
import {provide, reactive, ref} from "vue";
import List from "./components/List/List.vue";

provide('test', '23')
const obj = reactive({
  info: '我是父组件的值'
})
const name: any = ref('god')
const msg = ref('ZHONGGUONB')
// const props: any = ref('kzkkz')
// const aaa='1'
const accept = (e: string) => {
  console.log('父组件拿到的值', e)
  name.value = e
}

const recevied = (e: string) => {
  console.log('父组件拿到的值', e)
  msg.value = 'nb'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  margin-top: 60px;
}

.border {
  border: 1px seagreen solid;
}
</style>
