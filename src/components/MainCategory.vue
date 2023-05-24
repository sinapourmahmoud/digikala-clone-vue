<template>
    <div class="category">
        <div class="category-img">
            <img :src="list.url" alt="">
        </div>
        <p class="category-content">{{list.title}}</p>
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
.category-content{
    text-align: center;
    font-size: 18px;
    font-weight: 400;
}
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>