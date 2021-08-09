<template>
    <div class="promotion-img">
        <img class="promotion-img__bg" :src="stock.bgSrc" alt="акционный продукт"/>
        <img class="promotion-img__product" :src="stock.imgSrc" alt="Акция"/>
        <div class="promotion-data-wrp">
            <div class="promotions-data">
                <p>{{getDayBeginEnd(stock.beginDate, stock.endDate)}}</p>
                <a href="#">
                    <p>{{stock.title}}</p>
                </a>
            </div>
            <div class="promotion-days-left past"
                 v-if="getDateTimeType(stock.beginDate, stock.endDate).past">
                <p>Было</p>
                <p class="promotion-days-left__text">{{getDaysBetween(new Date(), stock.endDate)}}</p>
                <p>дней назад</p>
            </div>
            <div class="promotion-days-left"
                 v-else-if="getDateTimeType(stock.beginDate, stock.endDate).present">
                <p>Осталось</p>
                <p class="promotion-days-left__text">{{getDaysBetween(new Date(), stock.endDate)}}</p>
                <p>дней</p>
            </div>
            <div class="promotion-days-left future"
                 v-else-if="getDateTimeType(stock.beginDate, stock.endDate).future">
                <p>Начнётся через</p>
                <p class="promotion-days-left__text">{{getDaysBetween(new Date(), stock.beginDate)}}</p>
                <p>дней</p>
            </div>
        </div>
    </div>
</template>

<script>
	const monthsNames = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];
	
	export default {
		props: {
			stock: Object
		},
		methods: {
			getDayBeginEnd(begin, end) {
				const beginDate = new Date(begin);
				const endDate = new Date(end);
				
				return beginDate.getDate() + ' ' + monthsNames[beginDate.getMonth()] + ' - ' +
					endDate.getDate() + ' ' + monthsNames[endDate.getMonth()];
				
			},
			getDaysBetween(begin, end) {
				const beginDate = new Date(begin);
				const endDate = new Date(end);
				
				const days = Math.floor(
					(endDate - beginDate) / (1000 * 3600 * 24)
				);
				
				return Math.abs(days);
			},
			getDateTimeType(begin, end) {
				const beginDate = new Date(begin);
				const endDate = new Date(end);
				const now = new Date();
				
				return {
					past: now > endDate,
					present: endDate > now && now > beginDate,
					future: now < beginDate
				};
			}
		},
	};
</script>
