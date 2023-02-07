<template>
  <h2 class="red">{{ props.msg }}</h2>
  <button @click="clickThis">子传父TS</button>
  <h2 class="red" v-for="item in labels"><span> 默认值：{{ item }}</span></h2>
  <h3>{{ testName }}</h3>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref, inject} from "vue"

const testName = inject('test', '默认值')

// 采用ts专有声明，有默认值
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
/*ts专有*/
const emit = defineEmits<{
  (e: 'click1', num: number): void
}>()
const clickThis = () => {
  emit('click1', 2)
  isActive.value = !isActive.value
}
const isActive = ref(true)

</script>

<style scoped>

.red {
  /*color: aqua;*/
  color: v-bind('isActive?"red": "blue"');
}
</style>