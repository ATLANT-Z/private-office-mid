<template>
    <article class="reviews-wrp-title">
        <div class="reviews-icon-mob-wrp">
            <img src="@/assets/icons/my-orders-icon.svg" alt="товар"/>
            <h1>Мои отзывы</h1>
        </div>
        <div class="reviews-list-wrp">
            <div class="wrp-cont-rev">
                <div class="wrp-reviews">
                    <div class="reviews-product-wrp">
                        <img src="@/assets/img/Komplekt_videonablyudeniya_1.png" alt=""/>
                        <p>Комплект видеонаблюдения GV-K-G01/04 720Р</p>
                    </div>
                    <div class="wrp-revires-btn">
                        <a href="#">
                            <button class="btn-reviews-green">
                                Посмотреть ваш отзыв
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="wrp-cont-rev">
                <div class="wrp-reviews">
                    <div class="reviews-product-wrp">
                        <div class="number-counter">1</div>
                        <img src="@/assets/img/Komplekt_videonablyudeniya_1.png" alt=""/>
                        <p>Комплект видеонаблюдения GV-K-G01/04 720Р</p>
                    </div>
                    <div class="wrp-revires-btn">
                        <div class="wrp-answer-reviews">
                            <div class="menu-cab-menu-cab">1</div>
                            <p>ответ</p>
                        </div>
                        <a href="#">
                            <button class="btn-reviews-green">Просмотреть</button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="wrp-cont-rev">
                <div class="wrp-reviews">
                    <div class="reviews-product-wrp">
                        <img src="@/assets/img/Komplekt_videonablyudeniya_1.png" alt=""/>
                        <p>Комплект видеонаблюдения GV-K-G01/04 720Р</p>
                    </div>
                    <div class="wrp-revires-btn">
                        <div class="wrp-bonus-reviews">
                            <img src="@/assets/img/bonus_gv.png" alt="бунусы"/>
                            <p>+10 бонусных гривен за отзыв</p>
                        </div>
                        <a href="#">
                            <button class="btn-reviews-green">Оставить отзыв</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
	
	export default {
		data() {
			return {
				testVal: null,
			}
		},
		async mounted() {
		
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
    .btn-reviews-green {
        @include btnGreen;
    }
 
    .wrp-reviews {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @extend %text-main;
        font-weight: 600;
        font-size: 16px;
    }

    .reviews-wrp-title {
        @include wrpTitle;
    }

    .reviews-icon-mob-wrp > img {
        margin-right: 22px;
        display: none;
    }

    .reviews-icon-mob-wrp {
        margin-bottom: 24px;
    }

    .reviews-icon-mob-wrp {
        @include fontHeaderPage();
        color: #232536;
        display: flex;
        align-items: center;
    }

    .reviews-list-wrp {
        margin-bottom: 24px;
        @include wrpGeneral;
    }

    .wrp-cont-rev {
        margin-bottom: 10px;
        padding-right: 14px;
        // padding-left: 28px;
        @include wrpCont;
    }

    .reviews-product-wrp {
        padding-left: 24px;
        position: relative;
        @extend %pos-left-flex;
    }
    .menu-cab-menu-cab,
    .wrp-bonus-reviews > img,
    .reviews-product-wrp > img {
        margin-right: 16px;
    }

    .reviews-product-wrp > p {
        max-width: 220px;
        padding-right: 10px;
    }

    .wrp-bonus-reviews {
        position: relative;
        @extend %pos-left-flex;
    }


    .wrp-answer-reviews {
        @extend %pos-left-flex;
    }

    .wrp-answer-reviews {
        margin-right: 37px;
    }

    .wrp-bonus-reviews {
        margin-right: 63px;
    }

    .wrp-bonus-reviews > p {
        max-width: 198px;
    }

    .wrp-revires-btn {
        display: flex;
    }

    .menu-cab-line-reviews {
        @include lineMyOrder;
    }

    .number-counter {
        display: none;
        position: absolute;
        top: 8px;
        left: 17px;
        @include numberCounter;
    }

    //мобильная версия

    @media (max-width: 1427px) {
        .reviews-list-wrp {
            width: 1000px;
        }
        .my-orders-heading {
            max-width: 420px;
        }
    }

    @media (max-width: 1327px) {
        .reviews-list-wrp {
            width: 950px;
        }
        .my-orders-heading {
            max-width: 375px;
        }
    }

    @media (max-width: 1285px) {
        .reviews-list-wrp {
            width: 900px;
        }
        .my-orders-heading {
            max-width: 315px;
        }
        .wrp-reviews {
            font-weight: 400;
        }
        .wrp-bonus-reviews > p {
            font-size: 12px;
            font-weight: 600;
        }
        .wrp-bonus-reviews {
            // padding-left: 9px;
            margin-right: 9px;
        }
    }

    @media (max-width: 1220px) {
        .reviews-icon-mob-wrp {
            padding-left: 15px;
        }
        .wrp-cont-rev{
            // padding-left: 24px;
            padding-right: 0;
        }
        .wrp-answer-reviews {
            display: none;
        }
        .number-counter {
            display: block;
        }
        .reviews-list-wrp {
            width: 363px;
            padding: 14px 9px;
        }
        .wrp-reviews {
            flex-direction: column;
        }
        .wrp-revires-btn {
            margin-bottom: 16px;
        }
        .btn-reviews-green {
            padding: 10px 10px;
        }
        .wrp-bonus-reviews > p {
            width: 97px;
        }
        .reviews-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .reviews-icon-mob-wrp > img {
            display: block;
        }
        .my-orders-wrp > .reviews-icon-mob-wrp > h1 {
            font-size: 16px;
        }
        .reviews-wrp-title {
            padding: 0;
        }
    }

    @media (max-width: 710px) {
        .menu-orders-wrp {
            display: none;
        }
    }

</style>
