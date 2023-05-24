<template>
    <div class="offers-card">
        <div class="offers-img">
            <img :src="offer.url" alt="offers">
        </div>
        <div class="offers-body">
            <a href="#" class="offers-link">{{offer.title}}</a>
            <span class="offers-off">{{offer.off}}</span>
        </div>
    </div>
</template>

<script>
export default {
props:{
    offer:{
        type:Object
    }
},
created(){
    console.log(this.offer);
}
}
</script>

<style scoped>
.offers-img{
    width: 100%;
    height: 8rem;
}
.offers-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.offers-card{
    padding: 0.4rem;

}
.offers-body{
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.offers-off{
    font-size: 14px;
    background:#EF394E;
    color: white;
    margin-right: 0.2rem;
    padding: 4px 6px;
    border-radius: 10px;

}
.offers-link{
    color: #51555eda;
    font-size: 16px;
}

</style>