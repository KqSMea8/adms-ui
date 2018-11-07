<template>
<div>
<add-campaign></add-campaign>
<div v-for="s in space" :key="s">
    <br>
</div>
<cam-List></cam-List>
</div>    
</template>
<script>
import addCampaign from './components/form'
import camList from './components/table'
    export default {
        components: {
            addCampaign,
            camList
        },
        data(){
            return {
                space:[0,1,2,3,4,5,6,7,8]
            }
        }
    }
</script>