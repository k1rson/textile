import { createRouter, createWebHistory } from 'vue-router'

// enums
import { AppLayoutsEnum } from '../enums/appLayouts.enum'
import { RouteNamesEnum } from '../enums/routeNames.enum'

// route middlewares
import { loadLayoutMiddleware } from '../middlewares/router/loadLayout.middleware'

const routes = [
  {
    path: '/',
    name: RouteNamesEnum.home,
    component: () => import('../views/HomeViews/HomeView.vue'),
    meta: {
      layout: AppLayoutsEnum.default
    }
  },

  // auth-system
  {
    path: '/auth',
    children: [
      {
        path: 'sign-in/',
        name: RouteNamesEnum.signIn,
        component: () => import('../views/AuthViews/SignInView.vue'),
        meta: {
          layout: AppLayoutsEnum.auth
        }
      },
      {
        path: 'reset-password/',
        name: RouteNamesEnum.resetPassword,
        component: () => import('../views/AuthViews/ResetPasswordView.vue'),
        meta: {
          layout: AppLayoutsEnum.auth
        }
      }
    ]
  },

  // unknown routes
  {
    path: '/:pathMatch(.*)*',
    name: RouteNamesEnum.notFoundRoute,
    component: () => import('../views/ErrorViews/NotFoundPageView.vue'),
    meta: {
      layout: AppLayoutsEnum.error
    }
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)
