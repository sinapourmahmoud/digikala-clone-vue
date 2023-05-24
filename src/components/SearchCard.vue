<template>
    <div class="search-card">
        <div class="search-card-header">
            <p class="search-title">جستوجو</p>
        </div>
        <div class="search-card-body">
            <form class="filter-search">
                <input type="text" class="card-search" placeholder="جستوجو کنید"  v-model="input">
                <a href="#" class="search-icon" @click.prevent="searchData()"><i class='bx bx-search-alt-2'></i></a>
            </form>

            <div class="radio-inputs">
                <div class="radio-input">
                    <input type="checkbox" id="supermarket">
                    <label for="supermarket">سوپر مارکت</label>
                </div>
                <div class="radio-input">
                    <input type="checkbox" id="tecnology">
                    <label for="tecnology">تکنولوژی</label>
                </div>
            </div>
        </div>
                </div>
</template>

<script>
export default {
data(){
    return{
        input:''
    }
},
methods:{
    searchData(){
        this.$emit('searchData',this.input)
        this.input=''
    }
}
}
</script>

<style scoped>

    .search-card{
        background-color: white;
        border-radius: 5px;
    }
    .search-card-header{
        display: flex;
        padding: 0;
        justify-content: end;
    }.search-title{
      
        margin-right: 15px;
        background-color: #EE384E;
        padding: 0.3rem;
        color: white;
        font-size: 15px;
        display: inline-block;
        border-radius: 0 0 5px 5px;
    }
    .search-card-body{
        margin-top: 0.8rem;
        padding: 0.4rem;
    }
    .card-search{
        width: 100%;
        outline: none;
        border: 0;
        background-color: #E7E5E5;
        height: 2rem;
        text-align: right;
        border-radius: 5px;
        padding: 0.3rem;
    }
    .card-search::placeholder{
text-align: right;
    }
    .filter-search{
        position:relative;
    }
    .search-icon{
        position: absolute;
        color: #b1b0b0;
        left: 4px;
        top: 50%;
        transform: translateY(-46%);
    }
    .radio-input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
    }
</style>