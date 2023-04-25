<!--
 * @Description: 导航栏
 * @Author: ZY
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 19:16:50
-->
<template>
  <div class="navbar">
    <!-- <Hamburger
      id="hamburger-container"
      :is-active="true"
      class="hamburger-container"
      @toggle-click="toggleSideBar"
    /> -->
    <BreadCrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->
        <Screenfull class="right-menu-item hover-effect" />
        <a-tooltip :content="t('navbar.size')" effect="dark" placement="bottom">
          <SizeSelect class="right-menu-item hover-effect" />
        </a-tooltip>
        <LangSelect class="right-menu-item hover-effect" />
      </template>
      <a-dropdown class="right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="Logo" class="user-avatar" />
        </div>
        <template #overlay>
          <a-menu>
            <router-link to="/profile/">
              <a-menu-item>
                <UserOutlined />
                <Icon co :style="{ color: 'hotpink' }"></Icon>
                <span style="margin-left: 10px">{{ t("用户详情") }}</span>
              </a-menu-item>
            </router-link>
            <!-- <router-link to="/">
              <a-menu-item>
                {{ t("navbar.dashboard") }}
              </a-menu-item>
            </router-link>
            <a target="_blank" href="https://github.com/rcyj-FED/vue3-composition-admin">
              <a-menu-item>
                {{ t("navbar.github") }}
              </a-menu-item>
            </a> -->
            <a-menu-item @click="logout">
              <LogoutOutlined />
              <span style="margin-left: 10px">{{ t("退出登出") }}</span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import BreadCrumb from "@/components/bread-crumb/Index.vue";
import Hamburger from "@/components/hamburger/Index.vue";
// import Screenfull from '@/components/screenfull/Index.vue'
// import LangSelect from '@/components/lang_select/Index.vue'
// import SizeSelect from '@/components/size_select/Index.vue'
import { defineComponent } from "vue";
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import Logo from "@/assets/images/home/logo.png";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons-vue";
import Icon from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    BreadCrumb,
    Hamburger,
    // Screenfull,
    // LangSelect,
    // SizeSelect,
    LogoutOutlined,
    UserOutlined,
    Icon,
  },
  setup() {
    const store = useStore();
    console.log(">>> routes", store.state.routes.routes);

    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const sidebar = computed(() => {
      return { isActive: true };
    });
    const device = computed(() => {
      return "pc";
    });
    const avatar = computed(() => {
      return "";
    });
    const state = reactive({
      toggleSideBar: () => {
        // store.dispatch(AppActionTypes.ACTION_TOGGLE_SIDEBAR, false)
      },
      logout: () => {
        // useStore().dispatch(UserActionTypes.ACTION_LOGIN_OUT)
        // router.push(`/login?redirect=${route.fullPath}`).catch((err) => {
        //   console.warn(err);
        // });
        // console.log(">>>change router", store);

        // console.log('>>> value', router.currentRoute.value);

      },
    });
    return {
      sidebar,
      device,
      avatar,
      Logo,
      ...toRefs(state),
      t,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    :hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    :focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }

    .hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }

    .avatar-wrapper {
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      margin-top: 5px;
      margin-right: 16px;
      margin-left: 16px;
      position: relative;

      .a-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
