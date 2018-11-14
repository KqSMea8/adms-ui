<template>
  <el-card class="box-card">
    <el-form v-model="form" ref="form" label-width="50px" class="login">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          account: '',
          password: ''
        }
      }
    },
    methods:{
        onSubmit(){
            
        }
    }
  }

</script>

<style lang="css">
  .box-card {
    position: absolute;
    width: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .login{
      width: 80%;
      margin-top: 20px;
      margin-left: 20px;
  }

</style>
