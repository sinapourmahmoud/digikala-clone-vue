<template>
    <div class="product-card">
        <div class="product-card-img">
            <img :src="list.image" alt="card">
            <a href="#" class="add" @click.prevent="saled=!saled">
                <i class='bx bx-plus icon-item plus-icon' :class="saled ? 'hiden-icon' : ''"></i>
                <i class='bx bx-minus icon-item min-icon' :class="!saled ? 'hiden-icon' : ''"></i>
            </a>
        </div>
        <div class="product-card-content">
            <router-link href="#" class="product-title" :to="`/products/${list.id}`">{{list.title_fa}}</router-link>
            <div class="card-rate-send">
                <div class="rate">
                    <i class='bx bxs-star'></i>
                    <small>3.7</small>
                </div>
                <div class="send">
                    <small>فروشنده</small>
                    <i class='bx bx-user'></i>
                </div>
            </div>
            <div class="price-bar">
 <p class="product-price">
                {{list.price.current_price}} تومان
            </p>
            <small class="off-bar">{{list.price.discount_percent}}%</small>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
props:{
    list:{
      type:Object  
    }
},
data(){
    return{
        saled:false
    }
}
}
</script>

<style scoped>
.product-card-img{
    width: 100%;
    border-radius: 5px 5px 0 0;
    height: 13rem;
    position: relative;

}
.product-card-img img{
    width: 100%;
    border-radius: 5px 5px 0 0;
    height: 100%;
    object-fit: cover;
}
.add{
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background: white;
    color: red;
    
    right: 10px;

}
.product-card{
    background-color:#fff ;
}
.card-rate-send
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.rate i {
    color: rgb(249,188,0);
}
.send i {
    color: #D86B00;
}
.send small{
    color: rgb(116,120,126);
}
.product-title{
    color:#4D525A;
    text-align: right;
    display: block;
    font-size: 16px;
    margin: 1rem 0;
}
.product-price{
    margin-top: 0.5rem;
}
.product-card{
    padding: 0.4rem;
    border-radius: 5px;
    cursor: pointer;
}
.price-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.4rem;
}
.off-bar{
    background-color: #EF394E;
    color: white;
    padding: 0.2rem;
    border-radius: 5px;
}
.hiden-icon{
    display: none;
}
</style>