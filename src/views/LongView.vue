<template>
    <div class="login-bg">
      <div class="login">
        <el-form
          label-position="top"
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          status-icon
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" @click="login(ruleFormRef)">
              登录
            </el-button>
            <el-button @click="reset(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
    <script setup lang="ts">
  import { loginApi } from "../api";
  import { reactive, ref } from "vue";
  import { ElMessage } from "element-plus";
  import { useRouter } from "vue-router";
  let router = useRouter();
  const ruleFormRef = ref("");
  
  // 表单数据
  const ruleForm = reactive({
    username: "demo",
    password: "zh@hm#23"
  });
  
  // 表单验证
  const rules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  });
  
  const login = async (formEl: any) => {
    if (!formEl) return;
    await formEl.validate((valid: any) => {
      if (valid) {
        loginApi(ruleForm).then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.data.token);
          ElMessage.success("登录成功");
  
          router.push("/");
        });
      } else {
        ElMessage.error("用户名或密码错误");
      }
    });
  };
  
  const reset = (ruleFormRef: any) => {};
  
  </script>
  
  
    <style lang="scss" scoped>
  .login-bg {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 500px 300px;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 100px;
  
    .login {
      width: 300px;
      height: 300px;
    }
  }
  </style>
    