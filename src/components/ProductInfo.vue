<template>
    <section class="product-info">
        <div class="container">
            <div class="product-info-card">
                <div class="product-info-header">
                    <ul class="product-navbar">
                       
                       <li class="product-item">
                            <a href="#" class="product-link" @click.prevent="changePage('دیدگاه')" :class="currentpage=='دیدگاه' ? 'active-link' : ''">دیدگاه</a>
                        </li>
                        
                        <li class="product-item">
                            <a href="#" class="product-link" @click.prevent="changePage('مشخصات')" :class="currentpage=='مشخصات' ? 'active-link' : ''">مشخصات</a>
                        </li> 
                         <li class="product-item">
                            <a href="#" class="product-link" @click.prevent="changePage('معرفی')" :class="currentpage=='معرفی' ? 'active-link' : ''">معرفی</a>
                        </li>
                    </ul>
                </div>
                <div class="product-info-body">
                    
                    <div class="product-info-title">
                        <h4 class="title">
                            {{currentpage}}
                        </h4>
                    </div>
                    <div class="content">
                        <div class="interview" v-if="currentpage=='معرفی'">
                        <p class="text-content">{{list.product.introduce}}</p>
                    </div>
                    <div class="options" v-else-if="currentpage=='مشخصات'">


                        <div class="main-informations">
                            <div class="information" v-for="information in informations" :key="information"> 
                                 <div class="information-content">
                                    <p class="information-text" v-for="value in information.values" :key="value">{{value}}</p>
                                </div>
                                <p class="information-titles">{{information.title}}</p>
                              
                            </div>
                        </div>
                    </div>
                    <div class="comments" v-else-if="currentpage=='دیدگاه'">
                        <div class="comment-bar">
                            <div class="add-comment-box">
                                <div class="add-comment-card">
                                    <div class="rate-box">
                                        <p class="add-comment-title"><small class="text-muted">{{this.list.product.rating.count}}</small> {{this.list.product.rating.rate}}</p>
                                        <div class="starts-box">
                                            <small class="rate-star">
                                                <i class='bx bxs-star'></i>
                                            </small>
                                            <small class="rate-star">
                                                <i class='bx bxs-star'></i>
                                            </small>
                                            <small class="rate-star">
                                                <i class='bx bxs-star'></i>
                                            </small>
                                            <small class="rate-star">
                                                <i class='bx bxs-star'></i>
                                            </small>
                                            <small class="rate-star">
                                                <i class='bx bxs-star'></i>
                                            </small>
                                        </div>
                                        <p class="please-add">
                                            شما هم نظر خود را وارد نمایید
                                        </p>
                                        <a href="#" class="add-comment" @click.prevent="openModal()">ثبت دیدگاه</a>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-box-container">
                                <div class="main-comment">
                                    
                                    <div class="comment-card" v-for="comment in comments " :key="comment">
                                        <div class="comment-card-header">
                                            <div class="title-rate">
                                                <p class="title-comment" v-show="comment.title">
                                                    {{comment.title}}
                                                </p>
                                                <p class="title-comment" v-show="!comment.title">بدون عنوان</p>
                                                <small class="rate-box" :class="comment.rate >=4 ? 'green-back' : comment.rate >=3 && comment.rate< 4 ? 'yellow-back' : 'red-back'">{{comment.rate}}</small>
                                            </div>
                                        </div>
                                        <div class="comment-body">
                                            <div>
                                            <div class="data-time comment-item">
                                                <span class="time-box text-muted">{{comment.created_at
                                                }}</span>


                                                <span class="time-box text-muted">{{comment.user_name}}</span>
                                            </div>
                                            <div class="data-time comment-item">
                                               
                                                <p class="comment-content">{{comment.body}}</p>
                                            </div>
                                            <div class="like-dislike comment-item">
                                                
                                                <a href="#" class="like-icon dislike"><i class='bx bxs-dislike' ></i> {{comment.reactions.dislikes}}</a>
                                                <a href="#" class="like-icon like"><i class='bx bxs-like' ></i>{{comment.reactions.likes}}</a>
                                                </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div ></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <CommentModal :list="modalOpened" @closeModal="closeModal"></CommentModal>
</template>

<script>
import CommentModal from './CommentModal.vue'
export default {
    props: ["list"],
    data() {
        return {
            modalOpened:false,
            currentpage: "معرفی",
            informations: [],
            comments: [],
        };
    },
    created() {
        this.informations = this.list.product.information;
       
        this.comments = this.list.product.last_comments;
    },
    methods: {
        changePage(name) {
            this.currentpage = name;
        },
        openModal(){
            this.modalOpened=true
        },
        closeModal(){
            this.modalOpened=false
        }
    },
    components: { CommentModal }
}
</script>

<style scoped>
    .active-link{
        color: red !important;
        position: relative !important;
    }
    .active-link::before{
        background: red;
content: "";

position: absolute;
width: 100%;
height: 2px;
left: 0;
bottom: -0.6rem;
z-index: 1;
    }
 
    .product-info-body{
        padding: 0.5rem;
    }
.product-info{
    margin: 1.5rem 0;
}
.product-info-card{
    background: white;
   
    border-radius: 10px;
}
.information-titles{
    width: 10rem;
}
.product-item{
    display: inline-block;
    margin-right: 1.5rem;
}
.product-info-header{
    border-bottom: 1px solid #C0C7D6;
    padding: 0.5rem;
}
.product-link{
    color: #81858B;
    position:relative;
}

.title{
    position: relative;
}
.title::before{
    position: absolute;
    content: "";
    z-index: 1;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: red;
}
.content{
    display: block;
}
.content{
    margin-top: 2rem;
    text-align: right;
    color: rgba(0, 0, 0, 0.61);
}
.main-informations{
    padding: 1rem;
}
.information{
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    justify-content: end;
}
.information:not(:first-child){
    margin-top: 1rem;
}
.information-content{
    flex:1 1 auto;
    padding-bottom: 1rem;
}
.information:not(:last-child) .information-content{
    border-bottom: 1px solid #F0F0F1;
}
.information-text:not(:first-child){
    margin-top: 0.5rem;
}
.information-text{
   font-size: 17px;
   color:rgba(0, 0, 0, 0.671) ;
}
.comment-bar{
    position: relative;
    min-height: 7rem;
}
.add-comment-title{
    font-size: 18px;
    color: black;
}
.add-comment-title small{
    margin-right: 0.5rem;
    font-size: 15px;
}
.rate-star{
    font-size: 17px;
    margin-top: 0.5rem;
    color: #F0F0F1;
}
.please-add{
    color: #81858B;
    font-size: 16px;
    margin-top: 0.5rem;
}
.add-comment{
    display: block;
    text-align: center;
    background-color: white;
    border: 1px solid red;
    margin-top: 0.5rem;
    color: red;
    border-radius: 5px;
    padding: 6px;
}
.time-box{
    font-size: 14px;
    margin-right: 0.5rem;
}
.comment-item:not(:last-child){
    border-bottom: 1px solid #C0C7D6;
}
.comment-item{
    padding: 1rem 0;
}
.comment-content{
    font-size: 16px;
}

.rate-box.green-back{
    background-color: green;
}
.rate-box.yellow-back{
    background-color: rgb(255, 174, 0);
}
.rate-box.red-back{
    background-color: red;
}   

.title-rate .rate-box {
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
        
    }
    
.like-dislike{
    display: flex;
    align-items:
    center ;
    gap: 0.5rem;
    

}
.like-icon{
     color: #A1A3A8;
}
@media screen and (min-width:768px){
.product-navbar ,.product-info-title{
    text-align: right;
}
.product-info-title{
    padding-right:1rem ;
}
.title{
    display: inline-block;
}
.add-comment-box{
    position: absolute;
    right: 0;
    top: 0;
    width: 17rem;

    height: 10rem;
}
.comment-box-container{

    display: grid;
    grid-template-columns: auto 17rem;

}
.comment-box-container{
    padding: 1rem;
}
.title-rate{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
}
.title-rate p {
    font-size: 18px;
    
}
.comment-body{
    padding: 1.5rem;
}
.like-dislike{
    display: flex;
    align-items:
    center ;
    gap: 0.5rem;
    

}
.like-icon{
     color: #A1A3A8;
}
}
@media screen and (max-width:768px){
.title{
    display: inline-block;

}
.product-info-title , .product-navbar{
    text-align: right;
}
.comment-bar{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.rate-box{
    margin-block: 1rem;
}
.title-comment{
    margin-bottom: 1rem;
}
.like-dislike{
    justify-content: end;
}
}
</style>