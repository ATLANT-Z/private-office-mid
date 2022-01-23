<template>
<div>
              <div class="card-prod-info-deliv">
                <div class="card-prod-info-deliv__title-wrp">
                  <h3 class="card-prod-info-deliv__title">Доставка</h3>
                </div>
                <div>
                  <div class="card-prod-info-deliv__btn-wrp">
                    <div class="card-prod-info-deliv__line"></div> 
                    <button 
                    v-on:click="odActive" 
                    v-bind:class="{ cardProdInfoDelivActiveOd: isActive}" class="card-prod-info-deliv__btn-od">Одесса</button>
                    <button 
                    v-on:click="uaActive"
                    v-bind:class="{ cardProdInfoDelivActiveOd: isActiveUa}" class="card-prod-info-deliv__btn-ua">По Украине</button>
                  </div>
                </div>
                <div class="card-prod-info-deliv__wrp-condi">
                  <div class="card-prod-info-deliv__wrp-od-pos" v-bind:class="{ cardProdInfoDelivActive: isActive}">
                    <div class="card-prod-info-deliv__wrp-condi-od">
                      <div class="card-prod-info-deliv__wrp-text-od">
                        <strong>Самовывоз</strong> <span class="card-prod-info-deliv__text-gray"> завтра </span><span class="card-prod-info-deliv__text-green">Бесплатно</span>
                      </div>
                      <div>
                        <strong>Курьер</strong><span class="card-prod-info-deliv__text-gray"> завтра с 10:00 до 17:00 </span><span class="card-prod-info-deliv__text-green">Бесплатно</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-prod-info-deliv__wrp-ua-pos" v-bind:class="{ cardProdInfoDelivActive: isActiveUa}">
                    <div >
                      <div class="card-prod-info-deliv__wrp-text-od">
                        <strong>Отделение “Новая Почта”</strong>
                        <span class="card-prod-info-deliv__text-gray"> отправим завтра </span><strong>от 56 грн</strong>
                      </div>
                      <div>
                        <strong>Отделение “УкрПочта”</strong>
                        <span class="card-prod-info-deliv__text-gray">  отправим завтра </span><span><strong>от 56 грн</strong></span>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div> 
</template>

<script>

export default ({
    name: 'delivery',
    data() {
        return {
            isActive: true,
            isActiveUa: false
        }
    }, 
    methods: {
      odActive () {
        this.isActiveUa = false,
        this.isActive = true
      console.log("1");
      },
      uaActive () {
        this.isActive = false,
        this.isActiveUa = true
        console.log("2");
      }
    }
  })
</script>

<style lang="scss" src="@style/productPage/main_card.scss" scoped>



</style>
