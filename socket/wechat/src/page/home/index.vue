<template>
    <div class="Home">
        <navbar></navbar>
    </div>
</template>



<style lang="scss" scoped>
.Home{
    .head{
        color:red
    }
}
</style>


<script>
import navbar from '@/components/navbar'

export default {
    name : 'Home',
    components: {
        navbar
    }
    
}
</script>