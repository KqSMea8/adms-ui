<template>
    <el-table :data="tableData" class="table">
        <el-table-column label="计划ID" width="180"> 
        </el-table-column>
        <el-table-column label="计划名称">
        </el-table-column>
        <el-table-column label="账号ID" width="180">
        </el-table-column>
        <el-table-column label="预算">
        </el-table-column>
        <el-table-column label="开始时间">
        </el-table-column>
        <el-table-column label="结束时间">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: 'cam-list',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style>
.table{
    width: 90%;
    margin-left: 10px;
}
</style>
