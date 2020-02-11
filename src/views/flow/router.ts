import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/flow/FlowMenu.vue'),
      children: [
        {
          path: '/todo',
          component: () => import('@/views/flow/Todo.vue')
        },
        {
          path: '/bind',
          component: () => import('@/views/flow/Bind.vue')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/todo' });
  }
  next();
});

export default router;
