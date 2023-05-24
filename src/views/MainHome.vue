<template>
<div class="home">
    <div class="container">
        <div class="grid-container">  
            
            <div class="item grid-item-3">

                <img src="./../assets/banner3.jpg" class="banner banner3" v-if="num==0">
                <img src="./../assets/banner4.jpg" class="banner banner4" v-else-if="num==1">
                <img src="./../assets/banner5.jpg" class="banner banner5" v-else-if="num==2">
                <img src="./../assets/banner6.jpg" class="banner banner6" v-else-if="num==3">

                <div class="dots">
                    <div class="dot" v-for="(dot,index) in dots" :key="dot" :class="dot.active==true ? 'active' : ''" @click.prevent="GoTo(index)"></div>
                    
                </div>

            </div>
            <div class="item little grid-item-1">
                
                    <img src="./../assets/banner1.jpg" alt="banner1" class="banner1 banner">
                
            </div>
            <div class="item little grid-item-2">

                <img src="./../assets/banner2.jpg" alt="banner2" class="banner2 banner">

            </div>

            
        </div>
    
    </div>

    <section class="options">   
        <div class="container">
            <div class="option-cards">

                <div class="option-card">
                    <div class="option-img">
                        <a href="#" class="more"><i class='bx bx-dots-horizontal-rounded'></i></a>
                    </div>
                    <a href="#" class="option-link">بیشتر</a>
                </div>
            <Options v-for="option in options" :key="option" :list="option"></Options>


            </div>
        </div>
    </section>
    <section class="offers">
        <div class="container">
            <div class="best-offers">
                <offers-card v-for="offer in offers " :key="offer" :offer="offer"></offers-card>
                <div class="offers-title">
                    <div class="offer-img-handler">
                        <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="bestoffers">
                    </div>
                    <a href="#" class="more-offers">

                        <i class='bx bx-chevron-left'></i>
                        مشاهده همه
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="bests">
        <div class="container">


            <bests-card v-for="superr in supers" :key="superr" :list="superr"></bests-card>
        </div>
    </section>
    <section class="ads">
        <div class="container">
            <div class="ads-grid">
                <div class="ads-content">
                    <img class="ads-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/13e55d069d9d8c710cc74bd212ec46300304b33b_1662574743.jpg?x-oss-process=image/quality,q_95" alt="ads">
                </div>
                <div class="ads-content">
                    <img class="ads-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/319f32d6d22b68baa7aa2bafaeba45ea2ff28018_1662564155.jpg?x-oss-process=image/quality,q_95" alt="ads">
                </div>
                <div class="ads-content">
                    <img class="ads-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/465049bf974851ebd7ec9547feeb7c74753619a6_1662729646.jpg?x-oss-process=image/quality,q_95" alt="ads">
                </div>
                <div class="ads-content">
                    <img class="ads-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a8b4f0e0942a78d8c299f2b77cfe391fdc768b6f_1662729380.jpg?x-oss-process=image/quality,q_95" alt="ads">
                </div>
            </div>
        </div>
    </section>
    <section class="categories">
        <div class="container">
            <h4 class="categories-title">دسته بندی ها</h4>
            <div class="category-container">


                <MainCategory :list="category" v-for="category in categories" :key="category"></MainCategory>
            </div>
        </div>
    </section>
    <section class="sec-ads">
        <div class="container">
            <div class="advertisment-grid">
                <div class="ads-grid-item">
                    <img class="adver-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c244ef7114a1705f38866a00e11240dd0017e185_1662551998.jpg?x-oss-process=image/quality,q_95" alt="banner">
                </div>
                <div class="ads-grid-item">
                    <img class="adver-img" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f8b380eaedd1f122de217e3fb874078adb76ef34_1662576250.jpg?x-oss-process=image/quality,q_95" alt="banner">
                </div>
            </div>
        </div>
    </section>
    <section class="spansers">
        
        <div class="container">
            <div class="spanser-cards">
<h4 class="categories-title">محبوب ترین کالا ها</h4>
<div class="spanser-container">


    <SpanserCard v-for="spanser in spansers" :key="spanser" :list="spanser"></SpanserCard>

</div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import OffersCard from '@/components/OffersCard.vue'
import Options from '@/components/MainOprions.vue'
import BestsCard from '@/components/BestsCard.vue'
import MainCategory from '../components/MainCategory.vue'
import SpanserCard from '@/components/SpanserCard.vue'
export default{
  components: { OffersCard, Options, BestsCard, MainCategory, SpanserCard },
    data(){

        
        return{
            dots:[{dot:1,active:true},{dot:2,active:false},{dot:3,active:false},{dot:4,active:false}],
        num:0,
        mainUrl:{},
        interval:null,
        categories:[
            {url:'https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png' ,title:'موبایل' },
            {url:'https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png' ,title:'موبایل'},
       { url:'https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png' ,title:'موبایل'},
       { url:'https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png' ,title:'موبایل'},
        {url:'https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png' ,title:'موبایل'},
        {url:'https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png' ,title:'موبایل'},
                
        ],
        offers:[
            {url:'https://dkstatics-public.digikala.com/digikala-products/88afb852655ba9f5466604098abe470e9707271b_1596273048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:12000 ,off:'25%'},
            {url:'https://dkstatics-public.digikala.com/digikala-products/3414637.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:130000 ,off:'25%'},
            {url:'https://dkstatics-public.digikala.com/digikala-products/e178959c9b2582f9d29717a5888c7fc330c19591_1662555522.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:130000 ,off:'25%'},
            {url:'https://dkstatics-public.digikala.com/digikala-products/b5f57e09d38c74c0406f33eb64769dd8d2e386c5_1662549438.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:130000 ,off:'25%'},
            {url:'https://dkstatics-public.digikala.com/digikala-products/5f6e90654a2202bf8bfcc2568c150f578a259169_1659250630.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:130000 ,off:'25%'},
            {url:'https://dkstatics-public.digikala.com/digikala-products/9322baef597bd4d190615c26056b35d05515dea5_1661338623.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' ,title:130000 ,off:'25%'},
        ],
        spansers:[
            {url:'https://dkstatics-public.digikala.com/digikala-brands/3f0e8a262651232007912c06d7cd69f7d9b4bfa4_1662306119.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80'},
            {url:'https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' },
            {url:'https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' },
            {url:'https://dkstatics-public.digikala.com/digikala-brands/bff03daf9cf71a71b7e41b31255ba9e747d1a01f_1644133724.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' },
            {url:'https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' },
            {url:'https://dkstatics-public.digikala.com/digikala-brands/100010929.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' },
        ],
        options:[
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png'
               , title:'ماموریت ها '
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/258db5bf0ff7b28dbae1bfb3dfaa71bfff32faf9_1654679397.png'
               , title:'حراج ها '
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/d25c551f15afbe37332585853b5aa51dca4f5e93_1661170707.png'
               , title:'بازگشت به مدرسه'
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/280c887d3f64aba7baf543406ea26ff6f949faae_1662206390.png'
               , title:'مهربانی در مهر'
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1648897095.png'
               , title:'دیجی پی'
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1655015296.png'
               , title:'قرعه کشی آیفون'
               
            },
            {
                url:'https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png'
               , title:'دیجی کالا چت'
               
            },
        ],
        supers:[
            {
                image1:'https://www.digikala.com/statics/img/png/amazing/fresh.png',
                image2:'https://www.digikala.com/statics/img/svg/typography/fresh.svg',
                off:'56%',
                color:'green'

            },
            {
                image1:'https://www.digikala.com/statics/img/png/amazing/plus.png',
                image2:'https://www.digikala.com/statics/img/svg/typography/plus.svg',
                off:'78%',
                color:'purple'

            },

        ]
        } 

    },
    mounted(){
       
      this.interval=setInterval(this.goNext,4000)
    },
    methods:{
        goNext(){
            this.num++
            if(this.num== 4){
                this.num=0
            }
            this.dots=this.dots.map((item,index)=>{
                if(this.num==index){
                    return {
                        ...item,
                        active:true
                    }
                }else{
                    return{...item,active:false} 
                }
            })
        },
        GoTo(ind){
            this.dots=this.dots.map((item,index)=>{
                this.num=ind
                if(index==ind){
                    return {
                        ...item,
                        active:true
                    }
                }else{
                    return{
                        ...item,
                        active:false
                    }
                }
            })
        }

    }

}
</script>
<style>
    .grid-item-3{
        position:relative;
    }
    .dots{
        position: absolute;
        display: flex;
       
        width: 5rem;
        align-items: center;
        justify-content: center;
        height: 30px;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
    }
    .dot{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin-left: 5px;
        background-color:rgb(139,113,80) ;
        cursor: pointer;
        transition: width 0.3s ease-in;
       
    }
    .dot.active{
        animation: width 0.5s forwards;
       background-color: #fff;
        
         
        border-radius: 5px;
    }
    .home{
        margin-top: 0.5rem;
    }
    .banner{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        animation: showbanner 1s forwards;
    }

    .option-cards{
        display: flex;
        align-items: center;
        justify-content: space-between;
       gap: 1rem;
       
    }
    .options{
        margin-top: 2rem;
    }
    .option-card{
        flex: 0 1 12.5%;
        display: flow;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
    }
    .option-img{
        width: 52px;
        height: 52px;
        margin: 0 auto;
    }
    .option-img img{
        width: 100%;
        height: 100%;
    }
    .option-link{
        text-align: center;
        display: block;
        margin-top: 0.7rem;
        color: #525262;
        font-size: 15px;
    }
    .more{
       
       
       display: flex;
       align-items: center;
       justify-content: center;
       width: 3rem;
       margin: 0 auto;
       height: 3rem !important;
        background: #F0F0F1;
        border-radius: 50%;
    }
    .more i{
        font-size: 2rem;
        color: #A1A3A8;
    }
    .best-offers{
        background-color: #EF3E54;
        padding: 0.6rem;
        border-radius: 10px;
    }
    .offers{
        margin-top: 1.5rem;
    }
    .offers-card{
        background-color: white;
        padding: 0.2rem;
    }
    .more-offers{
        display: block;
        text-align: center;
        font-size: 17px;
        color: #fff;
        font-weight: 600;
    }
    .offers{
        margin: 1rem 0;
    }
    .best{
        margin: 1rem 0 ;
    }
    .ads-img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .ads-content{
        border-radius: 10px;
    }
    .categories-title{
        text-align: center;
        display: block;
        font-weight: 600;
        font-size: 24px;
        margin: 1rem 0;
    }
    .categories{
        margin: 1rem 0;
    }
    .category-img{
        width: 10rem;
        height: 10rem;
    }
    .category-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .category-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sec-ads{
        margin: 1.5rem 0;
    }
.adver-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.ads-grid-item{
    border-radius: 10px;
}
@keyframes width{
    from{
        width: 5px;
    }
    to{
        width: 16px;
    }
}
@keyframes showbanner {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
       
    }
}
@media screen and (min-width:768px){
    .grid-container{
        display: grid;
        grid-template-columns: 23rem auto;
        grid-template-rows: repeat(2,1fr);
        gap: 0.5rem;
        min-height: 55vh;
    }
    .item{
        border-radius: 5px;
    }
    .grid-item-3{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
      
    }
    .grid-item-2{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .grid-item-1{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }
   .best-offers{
    display: flex;
    gap: 0.2rem;
   } 
    .offers-title,.offers-card{
        flex: 0 1 14.5%;
    }
.ads-grid{
    display: grid;
    grid-template-columns:repeat(4,1fr) ;
    gap: 0.3rem;
}
.advertisment-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
}
.spanser-cards{
    border-radius: 10px;
    border: 1px solid #E0E0E2;
    padding: 1rem;
}
.spanser-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

}

@media screen and (max-width:768px) {
    .grid-container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        width: 95%;
        margin: 0 auto;
        gap: 1rem;
    }
    .option-cards{
        flex-wrap: wrap;
    }
    .option-card{
        flex :0 1 25%;
    }
    .best-offers{
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;

    }
    .offers-title,.offers-card{
        flex: 1 1 49%;
    }

    .offer-img-handler{
        display: block;
        text-align: center;
        
    }
    .ads-grid{
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
 
    }
    .ads-content{
        flex: 0 1 48%;
      
        
    }
    .category-container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .category{
        flex: 0 1 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .spanser-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .spanser-card:nth-child(4),
    .spanser-card:nth-child(5),
    .spanser-card:nth-child(6){
        display: none;
    }
}

</style>
