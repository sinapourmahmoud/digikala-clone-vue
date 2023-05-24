<template>
    <div class="filter-card">
        <h5 class="filter-title">

            فیلتر بر اساس
        </h5>
        <div class="filter-card-body">
            <form class="filter-group">
                <div class="prices">
                    <div>
                <label for="start">شروع قیمت از</label>
                <input type="number" class="filter-start" id="strat" v-model="startInput">
            </div>
            <div>
        <label for="end">نهایت قیمت</label>
        <input type="number" class="filter-start" id="end" v-model="endInput">
    </div>
                </div>
                <label for="search-product" class="name">نام محصول</label>
                <input type="text" class="search-product" id="search-product" v-model="nameInput">
            </form>
            <div class="filter-button">
                <a class="sabmit" @click.prevent="addFilter()">
                    فیلتر
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        nameInput:'',
        startInput:'',
        endInput:''
    }
},
methods:{
    addFilter(){
        if(this.nameInput!='' && this.startInput!='' && this.endInput!=''){
            this.$emit('addfilter',{name:this.nameInput,start:this.startInput,end:this.endInput})
            
        this.nameInput=''
        this.startInput=''
        this.endInput=''
        }
    }
}
}
</script>

<style scoped>

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
.filter-title{
    text-align: right;
}
@media screen and (max-width:768px){
    .prices{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
    .name{
        margin: 1rem 0;
    }
    
    .prices input{
        border: 0;
        width: 100%;
        outline: none;
        background-color: #E7E5E5;
        height: 1.5rem;
        padding: 0.3rem;
    }
    form{
        width: 100%;
    }
    .prices label{
    display: block;
    text-align: right;
    }
    .filter-card-body{
        width: 100%;
    }
}

</style>