import {ref, watch} from "vue";

let queryList1 = function queryList() {
    const name = ref('富贵老师')
    const list = [
        {id: 0, name: '周额'},
        {id: 1, name: '旭日'}
    ]
// 监视ref所定义的一个响应式数据
    watch(name, (newValue, oldValue) => {
        console.log("sum ==> ", newValue, oldValue);
    });
    return {
        name,
        list
    }
}

// export {queryList1, queryList2}

export default queryList1