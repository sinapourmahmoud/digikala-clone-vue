<template>
        <section class="product">
            <div class="container">
                <div class="card-product">
                    <div class="product-item first-item">
                        <h5 class="product-title">{{list.seo.title}}</h5>
                        <small class="text-muted english-name">{{list.product.category.title_en}}</small>
                        <div class="rating">
                            <small class="star-rate">
                              ({{list.product.rating.count}})   {{list.product.rating.rate}}  
                                <i class='bx bxs-star star-rate-icon'></i>
                                
                            </small>
                            <a href="#" class="commends-link">
                                 دیدگاه 12
                            </a>
                            <a href="#" class="questions-link">
                                پرسش 12
                            </a>
                        </div>
                        <div class="Specifications">
                            <div class="price-part">
                                <h5 class="price-part-title">
                                  :  رنگ 
                                </h5>
                                <div class="color-picker">
                                    <div class="color-card" v-for="color in colors" :key="color"  :style="{'background-color': color.hex_code}" v-show="colors.length">
                                        
                                    </div>

                                </div>
                            </div>
                           
                        </div>
                        <div class="vishegi-saler">
                   
                            <div class="saler">
                                <div class="saler-card">
                                    <div class="saler-card-body">
                                        <div class="saler-header-side">
                                            <a href="#" class="saler-link">فروشنده</a>
                                            <h4 class="saler-title">فروشنده</h4>
                                        </div>
                                    </div>
                                    <div class="saler-option">
                                        <a href="#" class="saler-option-link">کالا ی اورجینال
                                            <i class='bx bx-home-alt-2'></i>
                                            
                                        </a>
                                    </div>
                                    <div class="saler-option">
                                        <a href="#" class="saler-option-link">گارانتی اصالت و سلامت فیزیکی کالا
                                            <i class='bx bxs-check-shield'></i>
                                            
                                        </a>
                                    </div>
                                    <div class="saler-option">
                                        <a href="#" class="saler-option-link">موجود در انبار فروشنده
                                            <i class='bx bxs-package'></i>
                                            
                                        </a>
                                    </div>
                                    <div class="saler-part">
                                    <div class="saler-price"> 
                                         <div class="price-box">
                                            <div class="last-price">
                                                <small class="off-price">16%</small>
                                                <small class="old-price text-muted">15200 تومان</small>
                                            </div>
                                                <p class="new-price">12000 تومان</p>
                                        </div>

                                        <small class="price-info text-muted">
                                            قیمت فروشنده
                                            <i class='bx bx-info-circle'></i>
                                        </small>
                                      
                                    </div>
                                </div>
                                <a href="#" class="buy-button">افزودن به سبد خرید</a>
                                </div>
                            </div>

                            <div class="vishegis">
                                <h5 class="price-part-title">ویژگی</h5>
    
                                <p class="information" v-for="(info, index) in information" :key="info" v-show="index <4">
                                    {{info.title}}: <span>{{info.values[0]}}</span>
                                    <i class='bx bxs-circle circle'></i>
                                </p>
                                
                                <div class="free-send">
                                    <div class="free-img">
                                        <img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="truck">
                                    </div>
                                    <div class="free-title">
                                        <p class="free-send-titl">
                                            ارسال رایگان
                                        </p>
                                        <small class="text-muted">برای خرید های بالای 25000 تومان</small>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="product-item">
                        <div class="right-side">
                        <div class="product-img-handler">
                            <img :src="currentimg" alt="">
                        </div>
                        <div class="product-options">
                            <ul class="icon-bar">
                                <li class="icon-bar-item">
                                    <a href="#" class="icon-bar-link">
                                        <i class='bx bx-heart'></i>
                                    </a>
                                    </li>
                                    <li class="icon-bar-item">
                                    <a href="#" class="icon-bar-link">
                                        <i class='bx bxs-share-alt'></i>
                                    </a></li>
                                    <li class="icon-bar-item">
                                    <a href="#" class="icon-bar-link">
                                        <i class='bx bxs-bell-ring'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div class="image-options">
                            <div class="image-option" v-for="(image , index) in images" :key="image" v-show="index>5" @click="currentimg= image" :class="currentimg==image ? 'image-active' : ''">
                                <img :src="image">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>



        <ProductInfo :list="list"></ProductInfo>
        <section class="inside-offers">
            <div class="container">
                <div class="offers-container">

                    <InsideOffersCard v-for="(offer, index) in offers" :key="offer" :offer="offer" :class="index<=5 ? '' :'hide-card'"></InsideOffersCard>

                </div>
            </div>
        </section>
</template>

<script>
import ProductInfo from "../components/ProductInfo.vue";
import InsideOffersCard from "../components/InsideOffersCard.vue";
export default {
    props: ["id"],
    data() {
        return {
           
            list: [],
            colors: [],
            images: [],
            currentimg: "",
            offers:[],
            information: [],
        };
    },
    created() {
        this.fetching(this.id)
    },
    components: { ProductInfo, InsideOffersCard },
 methods:{
    fetching(id){
        fetch(`https://leverapi.f4rd1n.ir/api/digikala/product/${id}`)
            .then(res => res.json())
            .then(data => {
            this.list = data.results;
            
            this.images = this.list.product.images;
            this.colors = this.list.product.mainDetails.colors;
            this.information = this.list.product.information;
    
            this.currentimg = this.images[0];
            console.log(this.list.recommendations);
            this.offers=this.list.recommendations
        })
            .catch(err => {
            console.log(err);
        });
    }
 },

    watch:{
    id(newVal){
        this.fetching(newVal)
    }
}
 
}
</script>

<style>
    .hide-card{
        display: none;
    }
    .product{
        background-color: #fff;
    }
    .information{
        color: #9a9aac;
        font-size: 15px;
    }
    .information > span{
        color: black;
        font-size: 17px;
        margin-right: 0.2rem;
    }
    .circle{
        font-size: 10px;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }
    .color-picker{
        display: flex;
        align-items: center;
        justify-content: end;

       
    }
    .color-card{
        margin-left: -1rem;
        margin-top:1rem;
        margin-bottom:1rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem;
        transition:  transform 0.5s ease;

    }
    .color-card:hover ~ .color-card{
        transform: translateX(10px);
    }

    .price-part-title{
        font-size: 17px;
    }
.rating{
    margin: 1rem 0;
}
.rating a{
    font-size: 15px;
}
    .star-rate-icon{
        color: yellow;
    }
.commends-link, .questions-link{
    margin: 0 1rem;
    color: #37BFD3;
}
.bread-crumb{
    text-align: right;
}
.image-option{
    padding: 0.2rem;
    border-radius: 5px;
    
}
.image-option.image-active{
    border: 3px solid #E0E0E2;
}
.first-item{
    padding: 0.7rem;
}
.english-name{
    margin-top: 0.5rem;
}
.product-title{
    font-size: 25px;
}
.text-muted{
    color: #C0C2C5;
}
.saler-header-side{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.saler-link{
    color: #84DAF1;
}
.saler-option{
    margin: 1rem 0;
    border-bottom: 1px solid #E0E0E2;
    padding-bottom: 0.5rem;
}
.saler-option-link{
    color: #000;
    font-size: 17px;
}
.saler-price{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.last-price{
    margin-bottom: 0.5rem;
}
.old-price{
    margin-left: 0.5rem;
    text-decoration: line-through;
}
.off-price{
    background-color: #EF394E;
    color: white;
    padding: 2px 4px;
    border-radius: 5px;
}
.new-price{
    font-size: 18px;
}
.buy-button{
    background-color: #EF394E;
    color: white;
    margin-top: 0.5rem;
    padding: 6px 8px;
    border-radius: 5px;
}
.free-send{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid #dcdddf;
    margin: 1rem 0;
}
@media screen and (min-width:768px){

    .card-product{
        display: grid;
        grid-template-columns: auto 20rem;
        gap: 1rem;
       
    }
    .product-img-handler{
        width: 17rem;
        height: 100%;
    }
    .product-img-handler img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-option{
        width: 3rem;
        height: 3rem;
    }
    .image-option img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-options{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    .right-side{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .icon-bar{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
    .icon-bar-item{
        
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .icon-bar-link{
        color: #424750;
        font-size: 20px;
    }
    .first-item{
        text-align: right;
    }
    .vishegi-saler{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .saler{
        flex: 0 1 40%;
        background-color: #F7F7F8;
        padding: 0.5rem;
        border-radius: 10px;
        border: 1px solid #E0E0E2;
    }
    .buy-button{
        display: block;
        text-align: center;
    }
  
    .vishegis{
        flex: 0 1 55%;
    }
    .offers-container{
        display: flex;
        align-items: flex-start;
        
    }
    .offer-card{
        flex: 0 0 16.6%;
    }
}
@media screen and (max-width:768px){
    .card-product{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .product-title, .english-name, .rating , .saler-option,
    .price-part-title{
        display: block;
        text-align: right;

    }
    .saler-header-side{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .saler-option{
        margin-top: 2rem;
    }
    .saler-price{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buy-button{
        display: block;
        text-align: center;
    }
    .vishegis{
        margin: 1rem 0;
    }
    .information{
       text-align: right;
       margin-top: 1rem;
    }
    .product-img-handler{
        width: 96%;
        height: 50vh;
        background: #81858B;
        text-align: center;
        margin: 0 auto;
        order: 2;
        padding: 1px;
        border-radius: 5px;
    }
    .product-img-handler img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .right-side{
        display: flex;
        flex-direction: column;
    }
    .icon-bar-item{
        display: inline-block;
        margin-right: 1rem;
    }
    .icon-bar-link{
        font-size: 1.2rem;
        color: #424750;
    }
    .product-options{
       text-align: right;
       display: block;
     
       
    }
    .image-options{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1rem 0;
    }
    .image-option{
        width: 5rem;
        height: 5rem;
    }
    .image-option img{
        width: 100%;
        height: 100%;
    }
    .first-item{
        order: 2;
    }
    
    .offers-container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        
    }
    .offer-card{
        flex: 0 0 33%;
    }
}
</style>