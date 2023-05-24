<template>
    <div class="container">
        <div class="bread-crumb">
            <router-link class="active-bread bread-item" :to="$route.params.id">کالای سوپر مارکتی</router-link>/
            <router-link class="active-bread bread-item" to="/category">دسته بندی ها</router-link>/
            <router-link class="not-active-bread bread-item" to="/">خانه</router-link>
        
        </div>
        
        </div>
        <section class="results">
            <div class="container">
                <div class="grid-items">
                    <div class="grid-i">

                        

                        <div class="products-container">

                            <ProductCard v-for="array in arrays" :key="array" :list="array" ></ProductCard>
                    </div>
                <MainPagination :allpages="10" @changePage="changePage" :currentpage="currentpage"></MainPagination>
                </div>
                    <div class="grid-i">

                       <FilterBox @addfilter="filtering"></FilterBox>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
import MainPagination from "@/components/MainPagination.vue";
import FilterBox from "../components/FilterBox.vue";
export default {
    props:['id'],
    components: { ProductCard, MainPagination, FilterBox },
    data(){


        return{
            arrays:[],
            curentTab:'all',
            currentpage:1,
        }
    },
created(){
this.fetching(1,this.id)

},
methods:{

    changePage(page){
this.fetching(page,this.id)
    }
    ,
    fetching(page=1,id){
        fetch(`https://leverapi.f4rd1n.ir/api/digikala/categories/${id}/search?page=${page}`)
.then(response => response.json())
.then(json => {

    console.log(json.results.products);
    this.arrays=json.results.products
    this.currentpage=page
})
    },
    addfilter({name,start,end}){
        fetch(`https://leverapi.f4rd1n.ir/api/digikala/search/?price[max]=${end}&price[min]=${start}&q=${name}&page=${this.currentpage}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    // changeTab(value){
    //     this.curentTab=value
    // }
},
computed:{
    // curentProducts(){
    //     if(this.curentTab=='all'){
    //         return this.arrays
    //     }else if(this.curentTab=='newest'){
    //         return this.arrays.filter(item=> item.type=='newest')
    //     }else if(this.curentTab=='populer'){
    //         return this.arrays.filter(item=> item.type=='populer')
    //     }

    // }
}
,
watch:{
    id(newVal){
        this.fetching(1,newVal)
    }
}
}
</script>

<style>
    .filter-card-body{
        margin: 1rem 0;
    }
    .bread-crumb{
        margin: 2rem 0;
    }
    .bread-crumb{
        display: flex;
        align-items:center ;
        justify-content: end;
        gap: 1rem;
    }
    .not-active-bread{
        color: #7F817F;
    }
    .bread-item{
        font-size: 17px;
    }
    .router-link-active{
        color:  rgb(7, 190, 190) !important;
    }      .sorth{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1rem;
        border-bottom: 1px solid #B8BABD;
    }
    .filter-card{
        background-color: white;
        border-radius: 5px;
    }
    .search-product{
        width: 98%;
        border:0;
        outline: none;
        background-color: #E7E5E5;
        height: 1.5rem;
        padding: 0.3rem;

    }
    .name{
        text-align: right;
        display: block;
        margin-right: 0.3rem;
    }
    .filter-button{
        margin-top: 1rem;


    }
    .filter-button .sabmit{
        text-align: center;
        background-color: #EF394E;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        padding: 4px 8px;
        display: block;
        width: 98%;
    }
    .filter-card-body{
     text-align: center;
    }
    @media screen and (min-width:768px)
{
    .grid-items{
        display: grid;
        grid-template-columns: auto 23rem;
        gap: 0.2rem;
        
    }
    

    .products-container{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .product-card{
        flex: 0 1 33%;
        margin-top: 2px;
    }
    .prices{
        display: flex;
        align-items: center;
        padding: 0.3rem;
        gap: 0.2rem;
        margin-bottom: 1rem;
    }
    .prices input{
        border: 0;
        outline: none;
        background-color: #E7E5E5;
        height: 1.5rem;
        padding: 0.3rem;
    }
    .prices label{
    display: block;
    text-align: right;
    }
}
@media screen and (max-width:768px){
    .products-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .product-card{
        flex: 0 1 48%;
        margin-top: 2px;
    }
    .grid-i{
        margin-top: 1rem;
    }
}
</style>