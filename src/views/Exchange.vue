<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goShareHousePage(){
                this.$router.push("/ShareHouse")
            }
        }
    }

</script>

<template>
<i class="fa-solid fa-house" @click="goShareHousePage"></i>

    <div class="content">
        <div class="schoolArea">
            <span>學校生活</span>
                <div class="schoolContainer">

                </div>
            <span>社團生活</span>
                <div class="clubContainer">
                    
                </div>    
        </div>
    </div>
    


</template>

<style lang="scss" scoped>

</style>