<template>
    <ul class="dropdown-list" :class="details ? 'active' : ''">
        <li class="dropdown-item" :class="curent =='supermarket' ? 'active' : ''" @click="$emit('changeCurent','supermarket')">
            <router-link href="#" class="dropdown-link" to="/category/food-beverage">لوازم سوپرمارکت</router-link>
        </li>
        <li class="dropdown-item" :class="curent =='digital' ? 'active' : ''" @click="$emit('changeCurent','digital')">
            <router-link href="#" to="/category/electronic-devices" class="dropdown-link">کالای دیجیتال</router-link>
        </li>
        <li class="dropdown-item" :class="curent =='phone' ? 'active' : ''" @click="$emit('changeCurent','phone')">
            <router-link href="#" to="/category/mobile" class="dropdown-link">موبایل</router-link>
        </li>
        <li class="dropdown-item" :class="curent =='house' ? 'active' : ''" @click="$emit('changeCurent','house')">
            <router-link href="#" to="/category/mother-and-child" class="dropdown-link">لوازم منزل</router-link>
        </li>
        <li class="dropdown-item">
            <router-link href="#" to="/category" class="dropdown-link">دسته بندی</router-link>
        </li>
    </ul>
</template>

<script>
export default {
props:['curent','details'],
data(){
    return{
        category:[]
    }
},

created(){
    fetch('https://leverapi.f4rd1n.ir/api/digikala')
    .then(res=> res.json())
    .then(data=>{
      
        this.category=data.results.categories
    })
    .catch(err=>{
        console.log(err);
    })
},
}
</script>

<style>

</style>