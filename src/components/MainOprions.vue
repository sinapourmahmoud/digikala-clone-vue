<template>

    <div class="option-card">
        <div class="option-img">
            <img :src="list.url" alt="option">
        </div>
        <a href="#" class="option-link"> {{list.title}}</a>
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

<style>

</style>