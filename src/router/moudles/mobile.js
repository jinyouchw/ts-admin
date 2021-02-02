export default [
  {
    path: "/reporting",
    name: "reporting",
    component: () => import("@/views/mobile/index.vue"),
    meta: {
      title: "消防隐患直报平台"
    }
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/mobile/success.vue"),
    meta: {
      title: "填报成功"
    },
    beforeEnter: (to, from, next) => {
      // ...做路由校验，在填报成功的情况下才能进入该路由
      next(true);
    }
  }
];
