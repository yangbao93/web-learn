<template>
    <div>
        <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        {{input}}
       <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
        </el-input>
    </div>
</template>
<script>
export default {
    name: 'test',
    data() {
      return {
        input: '123',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {
       
    },
    created() {
 
    },
    methods: {
        init() {
            console.log(13333);
        }
    }
};
</script>