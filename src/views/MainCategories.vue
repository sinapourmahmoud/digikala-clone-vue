<template>
    <div class="container">
<div class="bread-crumb">
    <router-link class="active-bread bread-item" to="/category">دسته بندی ها</router-link>/
    <router-link class="not-active-bread bread-item" to="/">خانه</router-link>

</div>

</div>


<div class="container">
  
    <div class="posts ">
        <div class="category-posts">



            <PostCard v-for="category in mainCategories" :key="category" :list="category"></PostCard>

        </div>
    

</div>
</div>
</template>

<script>
import PostCard from "../components/PostCard.vue";
export default {
    
    components: { PostCard },
    data(){
        return{
            // categories:[
            //     {
            //         title:'تکنولوژی',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/fd58fd733346e6d31bd35b6b109ab648f34a8797_1656424547.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80',
            //         products:[{
            //             title:'گوشی'
            //         },{
            //             title:'پلی استیشن4'
            //         },{
            //             title:'کامپیوتر'
            //         },{
            //             title:'لپ تاپ'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            //     {
            //         title:'سوپر مارکت',
            //         image:'https://dkstatics-public.digikala.com/digikala-products/2374744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
            //         products:[{
            //             title:'پفک'
            //         },{
            //             title:'چیپس'
            //         },{
            //             title:'لواشک'
            //         },{
            //             title:'یخ مک'
            //         }
                
                
                
            //     ]
            //     },
            // ],

            mainCategories:[]
        }
    },
    created(){
        fetch('https://leverapi.f4rd1n.ir/api/digikala')
        .then(res=> res.json())
        .then(json=>{
           
            this.mainCategories=json.results.categories
            console.log(json.results.categories);
        })
    },


    methods:{
        newResult(input){
           
            this.mainCategories=[...this.categories];
           
                this.mainCategories=this.mainCategories.map(item=>{
                    if(item.title.indexOf(input)!=-1){
                        return item
                    }
                })
        }
    }
}

</script>

<style>
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
}  
@media screen and (min-width:768px) {


.category-posts{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.post-card{
    flex: 0 1 24%;
}


}
@media screen and (max-width:768px) {

 
.category-posts{
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.post-card{
    flex: 0 1 32%;
}

}
</style>