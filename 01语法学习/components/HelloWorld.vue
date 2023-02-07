<template>
  <div>
    <!--    <h1>父传子默认值：{{ msg }}</h1>-->
    <h1>父传子：{{ msg.info }}</h1>
    <button type="button" @click="clickThis">子传父</button>
    <h3>{{ testName }}</h3>
  </div>
</template>
<script setup>
import {defineEmits, onMounted} from "vue"
import {defineProps} from "vue";
import {inject} from "vue";

const testName = inject('test', '默认值')

const props = defineProps({
  msg: {
    type: Object,// 如果可能存在多个类型，则可以写成 [String,Number]
    default: '默认值21213321',
  },
},);// 对象形式声明 props
const emit = defineEmits(['click'])

const clickThis = () => {
  emit('click', 'kzGod')
}
</script>

<style scoped>
</style>
