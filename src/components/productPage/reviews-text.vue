<template>
  <section class="card-prod-reviews" id="reviews">
    <div class="card-prod-reviews__wrp">
      <h3 class="card-prod-reviews__title"><strong>Отзывы</strong> <span
          class="card-prod-specific__article">GV-074-IP-H-COА14-20 3МР (Lite)</span>
      </h3>
    </div>
    <div class="card-prod-reviews__btn-wrp">
      <p class="card-prod-reviews__btn-text">Оставьте свой отзыв об этом товаре</p>
      <button @click="$showId('rev-pop-up')" class="card-prod-reviews__btn">Написать отзыв</button>
    </div>
    <div class="card-prod-reviews__box">
      <div>
        <div class="card-prod-reviews__wrp-name">
          <a href="#"><img class="card-prod-reviews__img-name" src="" alt="фотография"
                           onerror="this.src='/icon/no-photo-card-prod.png'"></a>
          <div class="card-prod-reviews__name-pos">
            <p class="card-prod-reviews__name">Виктор Иванов</p>
            <img src="/icon/star-card-product-total.svg" alt="рейтинг">
          </div>
        </div>
        <div class="card-prod-reviews__text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas culpa est nobis hic temporibus recusandae
            omnis vitae quo saepe distinctio assumenda natus rem, voluptatum placeat cumque sunt quasi eum quam.
          </p>
        </div>
        <div class="card-prod-reviews__likes">
          <div class="card-prod-reviews__like-wrp">
            <img src="/icon/like-card-prod-icon.svg" alt="Понравилось">
            <div class="card-prod-reviews__text-like">
              <p class="card-prod-reviews__text-like-green">Понравилось</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="card-prod-reviews__like-wrp">
            <img src="/icon/dislike-card-prod-icon.svg" alt="Недостатки">
            <div class="card-prod-reviews__text-like">
              <p class="card-prod-reviews__text-dislike-red">Недостатки</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="card-prod-reviews__answer">
          <p class="card-prod-reviews__answer-pos">
            <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="reply" ></SvgIcon>
            Ответить
          </p>
          <p class="card-prod-reviews__answer-pos">
            <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="answer"></SvgIcon>
            ответ
          </p>
        </div>
        <div class="card-prod-reviews__line"></div>
        <div class="card-prod-reviews__wrp-gv">
          <div class="card-prod-reviews__line-ver"></div>
          <div>
            <div class="card-prod-reviews__wrp-name">
              <a href="#"><img class="card-prod-reviews__img-name" src="" alt="фотография"
                               onerror="this.src='/icon/no-photo-card-prod.png'"></a>
              <div class="card-prod-reviews__name-pos">
                <p class="card-prod-reviews__name">GreenVision</p>
              </div>
            </div>
            <div class="card-prod-reviews__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas culpa est nobis hic temporibus
                recusandae omnis vitae quo saepe distinctio assumenda natus rem, voluptatum placeat cumque sunt quasi
                eum quam.
              </p>
            </div>
            <div class="card-prod-reviews__answer">
              <p class="card-prod-reviews__answer-pos">
                <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="reply" ></SvgIcon>
                Ответить
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-prod-reviews__box">
      <div>
        <div class="card-prod-reviews__wrp-name">
          <a href="#"><img class="card-prod-reviews__img-name" src="" alt="фотография"
                           onerror="this.src='/icon/no-photo-card-prod.png'"></a>
          <div class="card-prod-reviews__name-pos">
            <p class="card-prod-reviews__name">Виктор Иванов</p>
            <img src="/icon/star-card-product-total.svg" alt="рейтинг">
          </div>
        </div>
        <div class="card-prod-reviews__text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas culpa est nobis hic temporibus recusandae
            omnis vitae quo saepe distinctio assumenda natus rem, voluptatum placeat cumque sunt quasi eum quam.
          </p>
        </div>
        <div class="card-prod-reviews__likes">
          <div class="card-prod-reviews__like-wrp">
            <img src="/icon/like-card-prod-icon.svg" alt="Понравилось">
            <div class="card-prod-reviews__text-like">
              <p class="card-prod-reviews__text-like-green">Понравилось</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="card-prod-reviews__like-wrp">
            <img src="/icon/dislike-card-prod-icon.svg" alt="Недостатки">
            <div class="card-prod-reviews__text-like">
              <p class="card-prod-reviews__text-dislike-red">Недостатки</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="card-prod-reviews__answer">
          <p class="card-prod-reviews__answer-pos">
            <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="reply" ></SvgIcon>
            Ответить
          </p>
          <p class="card-prod-reviews__answer-pos">
            <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="answer"></SvgIcon>
            ответ
          </p>
        </div>
        <div class="card-prod-reviews__line"></div>
        <div class="card-prod-reviews__wrp-gv">
          <div class="card-prod-reviews__line-ver"></div>
          <div>
            <div class="card-prod-reviews__wrp-name">
              <a href="#"><img class="card-prod-reviews__img-name" src="" alt="фотография"
                               onerror="this.src='/icon/no-photo-card-prod.png'"></a>
              <div class="card-prod-reviews__name-pos">
                <p class="card-prod-reviews__name">GreenVision</p>
              </div>
            </div>
            <div class="card-prod-reviews__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas culpa est nobis hic temporibus
                recusandae omnis vitae quo saepe distinctio assumenda natus rem, voluptatum placeat cumque sunt quasi
                eum quam.
              </p>
            </div>
            <div class="card-prod-reviews__answer">
              <p class="card-prod-reviews__answer-pos">
                <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="reply" ></SvgIcon>
                Ответить
              </p>
              <p class="card-prod-reviews__answer-pos">
                <SvgIcon  class="card-prod-reviews__answer-pos-icon" icon="answer"></SvgIcon>
                ответ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "@/tools/svg/SvgIcon";
export default {
  name: "reviewsText",
  components: {SvgIcon},
  data() {},
}
</script>

<style lang="scss" src="../../assets/scss/productPage/main_card.scss" scoped>

</style>
