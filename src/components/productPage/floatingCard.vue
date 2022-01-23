<template>
<div class="floating-card-prod__pos-wrp">
    <div class="floating-card-prod">
        <div class="floating-card-prod__wrp">
        <img src="/img/img-card-prod.png" alt="Товар">
        <div class="floating-card-prod__icon-wrp">
            <a href="#">
            <img class="floating-card-prod__icon-like" src="/icon/like-icon-card-prod.svg" alt="Избранное">
            </a>
            <a href="#">
            <img src="/icon/compare-card-prod-iocn.svg" alt="Сравнение">
            </a>
        </div>
        <div class="floating-card-prod__price-wrp">
            <p class="floating-card-prod__price">2 625 грн</p>
            <p class="floating-card-prod__price-sale">2 625 грн</p>
            <p class="floating-card-prod__old-price">3 500 грн</p>
        </div>
        <h2 class="floating-card-prod__name">Наружная IP Камера</h2>
        <p class="floating-card-prod__art">GV-074-IP-H-COА14 COO21 - 201080p</p>
        <div class="vue-btnBuy"></div>
        <div class="floating-card-prod__btn-wrp">
            <button class="floating-card-prod__btn"><a href="#specific">Характеристики</a></button>
            <button class="floating-card-prod__btn"><a href="#descriptiom">Описание</a></button>
            <button class="floating-card-prod__btn"><a href="#reviews">Отзывы</a></button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "floatingCard"
};
</script>

<style scoped src="../../assets/scss/productPage/main_card.scss" lang="scss"></style>
