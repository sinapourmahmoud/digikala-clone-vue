<template>
    <div class="spanser-card">
        <img :src="list.url" alt="banner" class="spansers-image">
    
</div>
</template>

<script>
export default {
props:{
    list:{
        type:Object
    }
}
}
</script>

<style scoped>
.spanser-card{
    width: 8rem;
    height: 8rem;
}
.spanser-card .spansers-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media screen and(max-width:768px) {
    .spanser-card{
        width: 2rem;
        height: 2rem;
    }
}
</style>