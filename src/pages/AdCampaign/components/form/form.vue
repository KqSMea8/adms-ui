<template>
    <el-form ref="form" :model="form" class="form" label-width="80px">
        <el-form-item label="计划名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="预算">
            <el-input v-model="form.budget" placeholder="单位：元"></el-input>
        </el-form-item>
        <el-form-item label="选择时段">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-date-picker type="date" placeholder="结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import {ADD_AD_CAMPAIGN_URL} from '@/api/urls'
    export default {
        name:'add-campaign',
        data() {
            return {
                form: {
                    name: '',
                    budget: '',
                    date1: '',
                    date2: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form.date1)
                 console.log(this.form.date1.getTime())
                return
                let self = this
                this.$axios.post(ADD_AD_CAMPAIGN_URL,{
                    mode:0,
                    data:{
                        name:self.form.name,
                        budget:self.form.budget,
                    }
                })
            }
        }
    }
</script>
<style>
    .form {
        margin-top: 20px;
        margin-left: 10px;
        width: 40%;
    }
</style>