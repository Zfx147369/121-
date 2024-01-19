<template>
  <div>
    <h4 @click="ass">返回月卡</h4>
    
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
const route = useRouter();
const ass = () => {
  route.push("/adinde");
};
</script>
<style scoped lang='scss'>
</style>
