<template>
    <div class="Chat">
        <navbar></navbar>
        <message></message>
    </div>
</template>
<script>
import navbar from '@/components/navbar';
import message from '@/components/message';
import service from '@/axios/service.js';
export default {
    components: {
        navbar,
        message
    }
}
</script>



<style lang="scss" scoped>
.Chat{
    margin: 0 auto;
    width: 960px;
    height: 500px;
    border: 1px solid black;
}

</style>