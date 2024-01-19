<template>
  <div>
    <el-form model="form" class="b">
      <el-form-item label="车牌名称">
        <el-input type="text" placeholder="请输入内容" class="a" />
      </el-form-item>
      <el-form-item label="车牌姓名">
        <el-input type="text" placeholder="请输入内容" class="a" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select placeholder="全部">
          <el-option label="有效" value="shanghai" />
          <el-option label="无效" value="beijing" />
        </el-select>
      </el-form-item>
      <el-button class="d">查询</el-button>
    </el-form>
    <el-button class="d" @click="acc">添加月卡</el-button
    ><el-button>批量删除</el-button>

    <el-table :data="ass.list" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="180" type="index" />
      <el-table-column prop="personName" label="车主名称" width="180" />
      <el-table-column prop="phoneNumber" label="联系方式" />
      <el-table-column prop="carNumber" label="车牌号码" />
      <el-table-column prop="carBrand" label="车辆品牌" />
      <el-table-column prop="totalEffectiveDate" label="剩余天数" />
      <el-table-column prop="ass" label="状态">
        <template #default="scope">
          <div v-if="scope.row.cardStatus == 0">有效</div>
          <div v-else>无效</div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template #default="scope">
          <el-button>续费</el-button>
          <el-button>查看</el-button>
          <el-button>编辑</el-button>
          <el-button @click="app(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { parkingAPi, delApi } from "../api";
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const route = useRouter();

const list = reactive<any>({
  page: "1",
  pageSize: "10",
  carNumder: "", //车牌号
  personName: "", //名称
  cardStatus: "",
  phoneNumber: "", //手机号
  phonclpq: "",
  shengxiatianshu: "",
});
const ass = reactive<any>({
  list: [],
});

parkingAPi(list).then((res) => {
  console.log(res);
  ass.list = res.data.data.rows;
});

const amm = reactive<any>({
  id: ass.list.id,
});

const app = (row: any) => {
  console.log(row);
  amm.id = row.id;
  console.log(amm.id);
  ElMessage.success("删除成功");
};

delApi(amm).then((res) => {
  console.log(res);
});

const acc = () => route.push("/about");
</script>
<style scoped lang='scss'>
.a {
  width: 200px;
  height: 35px;
}
.b {
  display: flex;
}
.d {
  background-color: #4870ff;
  color: #fff;
}
</style>
