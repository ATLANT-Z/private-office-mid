<template>
  <div class="main-wrapper">
    <MenuOffice></MenuOffice>
    <router-view></router-view>
  </div>
  <LoginPop/>
  <PreOrderPop/>
  <ToTopBtn/>
</template>

<script>
import LoginPop from "./components/LoginPop";
import MenuOffice from "./components/MenuOffice";
import ToTopBtn from "./components/ui/ToTopBtn";
import PreOrderPop from "@component/Products/PreOrderPop";

export default {
  name: "PrivateOffice",
  components: {
    PreOrderPop,
    ToTopBtn,
    MenuOffice,
    LoginPop,
  },
  mounted() {
    // console.log(this.$store);
  }
};
</script>

<style lang="scss">
@import "assets/scss/style";

.myBtn {
  padding: 12px;
  background-color: #cdcdcd;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #8a8a8a;
    color: white;
  }
}

.main-wrapper {
  width: 100%;
  max-width: 1550px;

  //display: flex;
  //justify-content: center;

  display: grid;
  gap: 24px;
  grid-template-columns: 280px calc(100% - (280px + 24px));

  margin: auto;
  padding: 16px 16px 64px;

  @include bigMobile{
    grid-template-columns: 100%;
  }

  @include mobile {
    padding: 0;
  }
}

.main-body {
  background: #ffffff;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @include mobile {
    box-shadow: none;
  }
}
</style>
