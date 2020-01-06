<template>
    <div class="Friend">
        <navbar></navbar>
        <message></message>
    </div>
</template>
<script>
import navbar from '@/components/navbar';
import message from '@/components/message';
export default {
    components: {
        navbar,
        message
    }
}
</script>



<style lang="scss" scoped>
.Friend{
    margin: 0 auto;
    width: 960px;
    height: 500px;
    border: 1px solid black;
}

</style>