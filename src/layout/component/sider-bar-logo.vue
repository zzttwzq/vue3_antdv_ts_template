<!--
 * @Description: 侧边栏logo(需要跟随侧边栏折叠)
 * @Author: ZY
 * @Date: 2020-12-25 11:34:37
 * @LastEditors: ZY
 * @LastEditTime: 2021-04-09 15:43:28
-->
<template>
  <div>
    <div style="height: 30px; width: 100%; background: #fff"></div>
    <div class="sidebar-logo-container" :class="[collapse ? 'collapse' : 'notitle']">
      <transition name="sidebarLogoFade">
        <router-link v-if="false" key="collapse" class="sidebar-logo-link" to="/">
          <img src="favicon.ico" class="sidebar-logo" />
        </router-link>
        <router-link v-else key="expand" class="sidebar-logo-link" to="/">
          <img class="sidebar-logo" :src="Logo" />
          <h1 class="sidebar-title">Vue<span style="color: #57caeb">3</span>tst</h1>
        </router-link>
      </transition>
    </div>
    <div style="height: 20px; width: 100%; background: #fff"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import settings from '@/config/default/setting.config'
import Logo from "@/assets/images/home/logo.png";

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const title = "title"; //settings.title
    return {
      title,
      Logo,
    };
  },
});
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .sidebar-logo {
      display: inline-block;
      height: 100%;
    }

    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #435ebe;
      font-weight: 600;
      line-height: 50px;
      font-size: 24px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 12px;
    }
  }
  .notitle {
    .sidebar-title {
      display: none;
    }
    .sidebar-logo {
      height: 60%;
    }
  }
}
</style>
