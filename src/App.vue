<template>
<MainHeader></MainHeader>
  <router-view/>
  <MainFooter></MainFooter>
</template>
<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue';
  export default{
    components:{
    MainHeader,
    MainFooter
},
    data(){
      return{

      }
    }
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body{
  scroll-behavior: smooth;
}
a{
  text-decoration: none;

}

.container{
  max-width: 1200px;
  margin: 0 auto;

}
ul{
  list-style-type: none;
}
body{
  overflow-x: hidden;
  background-color: rgb(247, 247, 247);
}
</style>
