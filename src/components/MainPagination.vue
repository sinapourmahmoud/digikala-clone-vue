<template>
  <div class="pagination">
    <a href="#" class="page-bar new"  @click.prevent="$emit('changePage',1)">new</a>
    <a href="#" class="page-bar" v-for="page in pagingallpages" :key="page" :class="page.curentpage ? 'active-pagination':''" @click.prevent="$emit('changePage',page.num)">{{page.num}}</a>

    <a href="#" class="page-bar old"  @click.prevent="$emit('changePage',allpages)">old</a>
  </div>
</template>

<script>

export default {
props:{
    allpages:{
        type:Number
    },
    currentpage:{
        type:Number
    },
},
  
computed:{
   
   filterPages(){
    if(this.currentpage==1){
        return 1
    }else if(this.currentpage==this.allpages){
        return this.allpages -4
    }else if(this.currentpage==2){
        return this.currentpage-1
    }
    
    else {
        return this.currentpage -2
    }

   },

   showenPages(){
    return Math.min(this.filterPages+4,this.allpages)
   },

    pagingallpages(){

        let givePages=[]
        for(let i=this.filterPages; i<=this.showenPages;i++){
            givePages.push({
                num:i,
                curentpage: i==this.currentpage
            })
        }
        return givePages
    }
}
}
</script>

<style scoped>
.pagination{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.6rem;
}
.page-bar{
    background-color: #fff;
    transition: 0.3s;
    border-radius: 5px;
    color: #4D525A;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active-pagination{
    background-color: #EF394E;
    color: white;
}
</style>