<!-- 只能有一个template，一个template只能有一个子div，子div中可以有无限制个div盒子等 -->
<!-- 支持html语法 -->
<template>
  <div>
    <div class="top">
      <div class="topdiv">
        <el-avatar icon="el-icon-user-solid" @click="alterUserMsg"></el-avatar>
      </div>
      <div class="topdiv">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="topdiv">
        <el-avatar>user</el-avatar>
      </div>
    </div>
    <div class="leftdiv">
      <el-row class="tac">
        <el-col :span="12">
          <h5 style="color:black;">默认颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">分组4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="rightdiv">
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in selectType"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="inputTxt" placeholder="请输入内容" style="width:120px"></el-input>
      <el-button class="searchButton" type="info" @click="searchInfo" round>查询</el-button>
      <el-button class="resetButton" plain @click="resetValue">重置</el-button>
      <el-table :data="tableData" border style="width: 70%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="80"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import maincss from "@/css/main.css";
import axios from "axios";
export default {
  methods: {
    alterUserMsg() {
      alert("1");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    searchInfo() {
      this.tableData = [
        {
          date: "2016-05-01",
          name: "王大虎",
          age: 28,
          address: "上海市普陀区金沙江路 1519 弄"
        }
      ];
      if (this.inputTxt != "") {
        alert("您输入了：" + this.inputTxt);
      }
      //   axios
      //     .get("http://www.baidu.com")
      //     .then(resp => {
      //       console.log(resp.data);
      //     })
      //     .catch(err => {
      //       console.log(err.data);
      //       console.log("出错了");
      //     });
      axios({
        type: "GET",
        url: "http://www.baidu.com",
        success: function(data) {
          console.log(data);
          alert("get from baidu");
        },
        error: function(data) {
          alert(data);
          alert(url);
        }
      });
    },
    resetValue() {
      this.tableData = [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 27,
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ];
      this.inputTxt = "";
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 27,
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      selectType: [
        {
          value: "name",
          label: "姓名"
        },
        {
          value: "age",
          label: "年龄"
        }
      ],
      selectValue: "",
      inputTxt: ""
    };
  },
  beforeCreate
};
</script>