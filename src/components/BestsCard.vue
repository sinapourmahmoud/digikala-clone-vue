<template>
    <div class="best" :class="list.color=='green'? 'green-card' : 'purple-card'">
        <div class="best-left">
            <a href="#" class="go-best">
                <i class='bx bx-chevron-left'></i>
               بیش از 100 کالا
            </a>
            <div class="best-img">
                
                    <img src="https://dkstatics-public.digikala.com/digikala-products/8d6e6114fe0f36b097c6267613c7210fc3982805_1657627870.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" alt="best">
                    
                    <span class="best-offer">65%</span>
               
            </div>

        </div>
        <div class="best-right">
            <a href="#" class="best-last-off">

                تا{{list.off}} تخفیف
            </a>
            <div class="super-product">
                <img :src="list.image2" alt="super">
            </div>
            <div class="sabad">
                <img :src="list.image1" alt="sabad">
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
}
}
</script>

<style scoped>
.best{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #EBEEEA;
    border-radius: 10px;
}
.best-left{
    display: flex;
    align-items: center ;
    gap: 2rem;
}
.best-img{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    position: relative;
}
.best-img img{
    width: 100% ;
    height: 100% ;
     border-radius: 50%;
    object-fit: cover;
}
.best-offer{
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    background-color: red;
    border-radius: 50%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    font-size: 12px;
    color: #fff;
}
.go-best{
    background-color: white;
    padding: 0.6rem 0.7rem;
    border-radius: 15px;
    
    font-size: 16px;
}
.best.green-card .go-best{
    color: #45AE00;
}
.best.purple-card .go-best{
    color: #941B80;
}
.best-right{
    display: flex;
    align-items: center;
}
.best-last-off{
 
    padding: 0.4rem 0.8rem;
    color: #fff;
    border-radius: 10px;

}
.best.green-card .best-last-off{
    background: #39AE00;


}
.best.purple-card .best-last-off{
    background: #941B80;


}
.sabad{
    width: 66px;
    height: 64px;
    
}
.sabad img{
    width: 100%;
    height: 100%;
    
}
@media screen and (min-width:768px) {
    .best-last-off{
        margin-right: 1.5rem;
    }
}
@media screen and (max-width:768px) {
    .best{
        display: flex;
        flex-direction: column;

    }
    .sabad{
        display: none;
    }
    .best-left{
        margin-bottom: 1rem;
    }
    .best-img{
        width: 3.5rem;
        height: 3.5rem;
    }
    .best-right{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .best-last-off{
        margin-right: 1rem;
    }
}
</style>