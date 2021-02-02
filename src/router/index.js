import Vue from "vue";
import Router from "vue-router";
import routes from "./router";

Vue.use(Router);
const router = new Router({
  routes,
  mode: "history"
});

// 路由重复报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  setTimeout(function() {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
  }, 0);
  next();
});
router.afterEach((to, from, next) => {

});
export default router;
