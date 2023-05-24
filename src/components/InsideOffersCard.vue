<template>
    <div class="offer-card">
        <div class="offer-img-handler">
            <img class="offer-img" :src="offer.image" alt="">
       
       
        </div>
        <div class="offer-body">
            <router-link :to="`/products/${offer.id}`" class="offer-title">
               {{offer.title_fa}}
            </router-link>
            <div class="offer-price">
                <p class="last-price">{{offer.price.current_price}}</p>
                <small class="offer-of">{{offer.price.discount_percent
                }}%</small>
            </div>
            <small class="text-muted first-price">{{offer.price.prev_price}}</small>
        </div>
    </div>
</template>

<script>
export default {
props:['offer'],
created(){
    console.log(this.offer);
}
}
</script>

<style scoped>
.offer-card{
    background-color: white;
    padding: 0.3rem;

}

.offer-img-handler{
    width: 100%;
    height: 10rem;
}
.offer-img-handler img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.offer-title{
    text-align: right;
    display: block;
    color: black;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 17px;
}
.offer-price{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.offer-of{
    background-color: #EF394E;
    padding: 2px 4px;
    border-radius: 5px;
    color: white;
}
.first-price{
    text-decoration: line-through;
}
@media screen and (min-width:768px) {
    .offer-card:not(:first-child){
        border-right: 1px solid #F0F0F1;
    }
}
</style>