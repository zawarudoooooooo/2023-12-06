<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        goHomePage(){
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div class="logo">
        <img @click="goHomePage" alt="logo" src="../../public/Logo-remove.png"/>
    </div>
</template>

<style lang="scss" scoped>
.logo{
    width: 100vw;
    height: 30vh;
    text-align: center;

    img{
        width: 45vmin;
        height: 23vmin;

        &:hover{
            scale: 1.1;
        }

        &:active{
            scale: 1;
        }
    }
}
</style>