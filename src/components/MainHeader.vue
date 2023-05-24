<template>
  <header>
    <div class="top-header">
      <div class="header-options">
        <a href="#" class="shopping-card"><i class="bx bx-cart"></i></a>|
        <a href="#" class="login"
          >ورود | ثبت نام

          <i class="bx bx-user"></i>
        </a>
      </div>
      <div class="right-header">
        <div class="search-box">
          <form @submit.prevent="submitSearch">
            <input
              type="text"
              class="search-input"
              v-model="input"
              placeholder="جستوجو..."
            />
            <a href="#" class="submit"><i class="bx bx-search-alt-2"></i></a>
          </form>
        </div>
        <div class="logo-nav">
          <router-link to="/" class="logo"
            ><img src="./../assets/logo.svg"
          /></router-link>
          <a href="#" class="toggle" @click.prevent="sideOut = true"
            ><i class="bx bx-menu"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <nav class="nav" :class="sideOut ? 'side-out' : ''">
        <a href="#" class="x" @click.prevent="sideOut = false"
          ><i class="bx bx-x"></i
        ></a>
        <ul class="list">
          <li class="list-item">
            <a href="#" class="nav-link"
              >تماس با ما
              <i class="bx bx-conversation"></i>
            </a>
          </li>
          <li class="list-item">
            <a href="#" class="nav-link">
              درباره ما

              <i class="bx bx-notepad"></i>
            </a>
          </li>
          <li class="list-item">
            <a href="#" class="nav-link"
              >پرفروش ترین ها

              <i class="bx bx-dollar"></i>
            </a>
          </li>
          <li class="list-item">
            <a href="#" class="nav-link"
              >تازه ترین ها

              <i class="bx bx-store-alt"></i>
            </a>
          </li>
          <li class="list-item" @click="openMega = !openMega">
            <a href="#" class="nav-link">
              دسته بندی
              <i class="bx bx-chevron-up chevron"></i>
              <i class="bx bx-menu grid"></i>
            </a>
          </li>
          <div class="dropdown" :class="openMega ? 'active' : ''">
            <div class="mega-content">
              <div class="mega-img">
                <img
                  src="./../assets/42ea15b1419c29502e17d6e96446f635e7ec95e5_1660557176.jpg"
                  alt="mrgabaner"
                />
              </div>
              <ul
                class="mage-list"
                v-for="changer in megaChanger()"
                :key="changer"
              >
                <li class="maga-item" v-for="change in changer" :key="change">
                  <a href="#" class="mega-link">
                    {{ change.title }}
                  </a>
                </li>
              </ul>
            </div>
            <MegaMenu
              :curent="curentMega"
              @changeCurent="finishCurent"
              :details="openMega"
            ></MegaMenu>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import MegaMenu from "./MegaMenu.vue";
export default {
  components: {
    MegaMenu,
  },
  data() {
    return {
      curentMega: "supermarket",
      openMega: false,
      sideOut: false,
      input: "",
    };
  },
  created() {
    fetch("https://leverapi.f4rd1n.ir/api/digikala")
      .then((res) => res.json())
      .then()
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    submitSearch() {
      if (this.input !== null || this.input !== "") {
        this.$router.push(`/search/${this.input}`);
      }
    },
    finishCurent(curent) {
      this.curentMega = curent;
    },
    megaChanger() {
      if (this.curentMega == "phone") {
        return [
          [
            { title: "اپل" },
            { title: "سامسونگ" },

            { title: "شیایومی" },
            { title: "هوآوه" },
            { title: "ال جی" },
          ],
          [
            { title: "اپل" },
            { title: "سامسونگ" },
            { title: "شیایومی" },
            { title: "هوآوه" },
            { title: "ال جی" },
          ],
        ];
      } else if (this.curentMega == "house") {
        return [
          [
            { title: "مبل" },
            { title: "تلوزیون" },

            { title: "کولر" },
            { title: "یخچال" },
            { title: "فریزر " },
          ],
          [
            { title: "فرش" },
            { title: "پادری" },
            { title: "پارکت" },
            { title: "ماهواره" },
            { title: "پنکه" },
          ],
        ];
      } else if (this.curentMega == "digital") {
        return [
          [
            { title: "لپ تاپ" },
            { title: "گوشی" },

            { title: "تب لت" },
            { title: "یس" },
            { title: "موس " },
          ],
          [
            { title: "مانیتور" },
            { title: "پادری" },
            { title: "پارکت" },
            { title: "ماهواره" },
            { title: "پنکه" },
          ],
        ];
      } else if (this.curentMega == "supermarket") {
        return [
          [
            { title: "چیپس" },
            { title: "پفک" },

            { title: "پاستیل" },
            { title: "لواشک" },
            { title: "سیگار " },
          ],
          [
            { title: "یخ مک" },
            { title: "بستنی" },
            { title: "دمپایی" },
            { title: "نوشابه" },
            { title: "آب معدنی" },
          ],
        ];
      }
    },
  },
  computed: {},
};
</script>

<style>
.x {
  display: none;
}
header {
  background-color: white;
  padding: 1rem;
  padding-bottom: 5px !important;
}
.submit {
  position: absolute;
  right: 10px;
  font-size: 20px;
  color: #cececf;

  top: 32%;
}
.search-box input {
  border: 0;
  outline: none;
  background-color: #f0f0f1;
  border-radius: 8px;
  padding: 0.5rem;
  padding-right: 2rem !important;
}
.search-box form {
  position: relative;
}
.shopping-card {
  color: black;
  font-size: 25px;
}
.login {
  color: black;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 8px 16px;
}
.nav .list .list-item .nav-link {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.678);
}
.dropdown-link {
  color: #7f817f;
  transition: 0.3s;
  font-size: 15px;
  transition: 0.3s;
}
.mega-link {
  color: #7f817f;
  transition: 0.3s;
  font-size: 17px;
  transition: 0.3s;
}
@media screen and (min-width: 768px) {
  .toggle {
    display: none;
  }
  .top-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right-header {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .search-box {
    width: 45rem;
  }

  .search-box input {
    width: 100%;
    height: 3rem;
    text-align: right;
    position: relative;
  }
  .search-box input::placeholder {
    text-align: right;
  }
  .header-options {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .nav {
    text-align: right;
    margin-bottom: 1rem;
  }
  .bottom-header {
    margin-top: 1.2rem;

    padding-top: 1rem;
  }
  .nav .list .list-item {
    display: inline-block;
    margin-right: 1.5rem;
    padding-bottom: 0.3rem;
    transition: all 0.3s ease-in;
    position: relative;
    z-index: 100;
  }

  .nav .list .list-item::before {
    position: absolute;
    content: "";

    height: 2px;
    background-color: red;
    width: 0;

    transition: all 0.3 ease-in;

    bottom: -1.3rem;
    left: 0;
  }
  .nav .list .list-item:hover::before {
    right: 0;
    transition: 0.3s;
    z-index: 1;
    width: 100%;
  }

  .nav .list .list-item:last-child .nav-link {
    color: rgb(47, 51, 58);
    font-size: 16px;
  }
  .nav .list .list-item:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.062);
    padding-left: 1.5rem !important;
  }
  .dropdown {
    position: absolute;

    opacity: 0;
    visibility: hidden;
    top: 23%;
    width: 70rem;

    right: 2rem;
    height: 18rem;
    z-index: 100000;
    border-radius: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.062);
    display: grid;
    grid-template-columns: auto 10rem;
    background-color: #fff;
    gap: 1rem;
  }
  .dropdown.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-item {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .dropdown-item:first-child {
    margin-top: 0;
  }

  .dropdown-item.active {
    background-color: #eee;
    color: red;
  }
  .dropdown-item.active .dropdown-link {
    color: red;
    transition: 0.3s;
  }
  .dropdown-list {
    border-left: 1px solid rgba(0, 0, 0, 0.062);
    background-color: white;
    border-radius: 0 5px 5px 0;
  }
  .mega-content {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .mega-link:hover {
    color: red;
  }
  .mega-img {
    width: 27rem;
    height: 15rem;
    border-radius: 5px;
  }
  .mega-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .maga-item {
    margin-bottom: 1rem;
  }
  .chevron {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .top-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .header-options {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .right-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .search-box {
    order: 2;
    width: 100%;
  }
  .search-box input {
    width: 100%;
  }
  .logo-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
  }
  .mega-content {
    display: none;
  }
  .nav {
    position: fixed;
    background-color: #fff;
    top: 0;
    right: -100%;
    transition: 0.3s;
    height: 100vh;
    width: 40%;
    z-index: 10000000;
  }
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: start;
  }
  .list-item {
    padding: 1rem;
    padding-right: 2rem !important;
  }
  .nav-link {
    font-size: 16px !important;
  }
  .nav-link i {
    margin-left: 0.5rem;
    color: rgb(143, 142, 142);
  }

  .dropdown-list {
    margin-right: 2rem;
  }
  .dropdown-item {
    margin-bottom: 1rem;
  }
  .dropdown-link {
    text-align: right;
    display: block;
  }
  .grid {
    display: none;
  }
  .x {
    display: block;
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: rgb(193, 189, 168);
  }
  .dropdown-list {
    display: none;
  }
  .dropdown-list.active {
    display: block;
  }
  .chevron {
    transition: all 0.3s;
  }
  .dropdown-list.active ~ .chevron {
    transform: scale(5);
  }
  .nav.side-out {
    right: 0;
  }
}
</style>
