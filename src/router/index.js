import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
import SearchView from "@/views/SearchView.vue";
import RecipeView from "@/views/RecipeView.vue";
import IngredientView from "@/views/IngredientView.vue";
import MixMatchView from "@/views/MixMatchView.vue";
import GlassView from "@/views/GlassView.vue";
import CategoryView from "@/views/CategoryView.vue";
import AlcoholicView from "@/views/AlcoholicView.vue";
import DrawView from "@/views/DrawView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //开发使用根路径
  // history: createWebHistory('/whatToMix/'), //部署使用 /whatToMix/ 路径作为 应用的基础路径

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView
    },
    {
      path: '/ingredient/:name',
      name: 'ingredient',
      component: IngredientView
    },
    {
      path: '/mixMatch',
      name: 'mixMatch',
      component: MixMatchView
    },
    {
      path: '/glass',
      name: 'glass',
      component: GlassView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/Alcoholic',
      name: 'Alcoholic',
      component: AlcoholicView
    },
    {
      path: '/Draw',
      name: 'Draw',
      component: DrawView
    },

  ],
})

// 路由守卫
router.beforeEach((to, _, next) => {
  console.log('Navigating to:', to.path); // 添加日志
  next();  // 确保调用 next()，让路由继续
});

export default router
