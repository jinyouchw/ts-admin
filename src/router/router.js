
const routes = [
  {
    path: "/",
    name: "home",
    // redirect: "/manage",
    component: () => import("@/layouts/home.vue"),
    meta: {
      title: "主页"
    },
    children: []
  }
];
export default routes;
