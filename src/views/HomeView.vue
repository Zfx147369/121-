<template>
  <el-container>
    <el-aside>
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          router
        >
          <el-sub-menu
            :index="item.id"
            v-for="(item, index) in list"
            :key="index"
          >
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              :index="ite.id"
              v-for="(ite, index) in item.name1"
              :key="index"
              @click="arr"
              >{{ ite.name }}</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>
        <div class="c"><el-button class="a" @click="app">打开大屏</el-button>
      <text class="b">管理员</text></div></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang='ts'>
import { reactive } from "vue";
import { systemAPi } from "../api";
import { useRouter } from "vue-router";
const router = useRouter();

const app=()=>{
  localStorage.removeItem("token");
  router.push("/long");
}

const arr = () => {
  router.push("/adinde");
};

const list = reactive<any>([
  {
    name: "工作台",
    id: "1",
  },
  {
    name: "园区管理",
    id: "2",
  },
  {
    name: "行车管理",
    id: "3",
    name1: [
      { name: "区域管理", id: "1" },
      { name: "月卡管理", id: "2" },
      { name: "停车缴费管理", id: "3" },
      { name: "计费规则管理", id: "4" },
    ],
  },
  {
    name: "一体杆管理",
    id: "4",
  },
  {
    name: "系统管理",
    id: "5",
  },
]);

// const ass = reactive<any>({
//   list: [],
// });

// systemAPi().then((res) => {
//   console.log(res);
//   ass.list = res;
// });
</script>
<style scoped lang='scss'>
.c{
  margin-left: 85%;
}
</style>
