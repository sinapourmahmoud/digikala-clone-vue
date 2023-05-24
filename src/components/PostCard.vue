<template>
    <div class="post-card" @click.prevent="$router.push(`/category/${list.code}`)">
        <div class="post-img">
           
            <img :src="list.logo" alt="post">
           
       
        </div>
        <div class="post-content">
            
            <p class="post-title">{{list.title_fa}}</p>
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
methods:{

}
}
</script>

<style>
    .post-content{
        width: 100%;
        padding: 0.3rem;
    }

    .post-img{
        width: 100%;
        height: 12rem;
     
        
    }

    .post-img img{
        transition: 0.5s;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .post-card{
      
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }
    .post-card:hover .post-img img{
        transform: scale(1.1);
    }
.post-title{
    color: black;
    text-align: center;
}

</style>