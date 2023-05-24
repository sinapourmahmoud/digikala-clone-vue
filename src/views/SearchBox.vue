<template>
  <div class="countainer">
    <div class="line-flex">
      <h4>
        نتایج جستوجو برای : <span>{{ data }}</span>
      </h4>
    </div>
    <div class="cards-countainer">
      <div v-for="item in list" :key="item" class="product-card">
        <ProductCard :list="item"></ProductCard>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  data() {
    return {
      list: [],
      data: "",
    };
  },

  methods: {
    async fetchingData() {
      console.log(this.$route.params.id);
      let data = await fetch(
        `https://leverapi.f4rd1n.ir/api/digikala/search?q=${this.$route.params.id}`
      );
      let res = await data.json();
      this.list = res.results.products;
      this.data = this.$route.params.id;
    },
  },
  created() {
    this.fetchingData();
  },
  watch: {
    $route(newVal) {
      this.fetchingData(newVal.params.id);
    },
  },
  components: { ProductCard },
};
</script>
<style scoped>
.countainer {
  max-width: 1200px;
  margin: 30px auto;
}
.line-flex {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}
.line-flex h4 {
  font-size: 18px;
  font-weight: 500;
}
.line-flex h4 span {
  font-size: 19px;
  font-weight: 600;
}
.cards-countainer {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 2px;
}
.product-card {
  flex: 0 0 24%;
}
</style>
