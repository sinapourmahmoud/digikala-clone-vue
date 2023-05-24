<template>
    <div class="back" :class="list==false ? 'close' : ''">
        <a href="#" class="close" @click.prevent="$emit('closeModal')"><i class='bx bxs-x-circle'></i></a>
  <div class="card" :class="list==false ? 'close-modal' : ''">
    <div class="card-header">
        <p class="card-title">دیدگاه شما</p>
        <small class="text-muted">نام کالا</small>
    </div>
    <div class="card-container">
        <div class="grid-item item1">
            <p class="rules">دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.</p>
            <small class="rule-content">
                لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:

لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.
از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی نظیر شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر کاربران در فرآیند انتخاب و خرید یک محصول است.
با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در این بخش خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.
افزودن عکس و ویدیو به نظرات:
با مطالعه‌ی این لینک می‌توانید مفید‌ترین الگوی عکاسی از کالایی که خریداری کرده‌اید را مشاهده کنید.
پیشنهاد می‌شود قوانین کامل ثبت نظر را در این صفحه مطالعه کنید.

هرگونه نقد و نظر در خصوص سایت دیجی‌کالا، مشکلات دریافت خدمات و درخواست کالا و نیز گزارش تخلف فروش (نظیر گزارش کالای غیراصل یا مغایر) را با ایمیل  info@digikala.com  یا با شماره‌ی  ۶۱۹۳۰۰۰۰ - ۰۲۱  در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری کنید.
            </small>
        </div>
        <div class="grid-item item2">
            <p class="comment-add-title">
                دیدگاه حود را وارد نمایید
            </p>
            <div class="comment-property">
                <form class="form">
                    <div class="input-group">
                        <p class="input-title">عنوان نظر</p>
                        <input type="text" class="input-text">
                    </div>
                    <div class="input-group">
                        <p class="input-title">دیدگاه خود را وارد نمایید</p>
                        <textarea cols="30" rows="10" class="input-text"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="card-footer">
        <p class="footer-text">تایید قوانین <small class="text-blue">قوانین دیجی کالا</small></p>
        <a href="#" class="add-comment">ارسال دیدگاه</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
props:['list']
}
</script>

<style scoped>
  
.card{
    background-color: white;
    border-radius: 5px;
display: block;

    position: fixed;
    top: 20%;
    z-index: 20;
    padding: 0.5rem;
}
.card.close-modal{
    display: none;
}
.back.close{
    display: none;
}
.card.card.close-modal ~ .close{
    display: none;
}
.card-title{
    font-size: 18px;
}
.rules{
    font-size: 17px;
    text-align: right;
    font-weight: 800;
}
.rule-content{
    text-align: right;
    display: block;
    font-size: 15px;
    line-height: 1rem;
}
.comment-add-title{
    text-align: right;
    font-size: 18px;
}
.input-text{
    width: 100%;
    height: 1.8rem;
    border: 1px solid #E0E0E2;
    border-radius: 5px;

    padding: 0.3rem;
    outline: none;
}
.input-title{
    text-align: right;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.text-blue{
    color: rgb(4, 151, 219);
}
.footer-text{
    color: rgb(66, 64, 64);
}
.add-comment{
    color: white;
    background-color:#EF4056 ;
    border-radius: 5px;
    padding: 6px 20px;
    width: 100%;
    text-align: center;
}
@media screen and (min-width:768px) {
    .card-footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
      
    }
    .input-group{
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    .card-footer{
        margin-top: 1rem;
       border-top: 1px solid #E0E0E2;
       padding: 1rem;
    }
.card-container{
    display: grid;
    margin-top: 1rem;
    grid-template-columns: repeat(2,1fr);
}
.grid-item{
    
    padding: 0.6rem;
   
}
.item1{
    border: 1px solid #E0E0E2;
     border-radius: 5px;
}
.card{
    overflow-y: auto;
    overflow-x:hidden ;
    width: 35rem;
    height: 30rem;
}
.card-header{
    display: flex;
    flex-direction: column;
    align-items: end;
border-bottom: 1px solid #E0E0E2;
padding-bottom: 0.5rem;
}
}
.back{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
}
.close{
    position: fixed;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
}
@media screen and (max-width:768px){
    .card{
        position: fixed;
        width: 100%;
        transition: height 0.5s ease-in;
        height: 100%;
     
        top: 0;
        z-index: 20;
        left: 0;
        background-color: white;
  }
  .back{
    background-color: transparent;
  }
  .card-header{
   
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #E0E0E2;
    padding-bottom: 1rem;
  }
  .item1{
    display: none;
  }
  .card-footer{
display: flex;
margin-top: 1rem;
flex-direction: column;

gap: 1rem;
  }
  .close{
    color: black;
    z-index: 30;
  }
}
</style>