export default [
  {
    path: "/screen",
    name: "screen",
    component: () => import("@/views/screen/index.vue"),
    meta: {
      title: "大屏"
    },
    children: [
      {
        path: "/manage",
        name: "manage",
        component: () => import("@/views/screen/manage/index.vue"),
        meta: {
          title: "综治"
        }
      },
      {
        path: "/enterprise",
        name: "enterprise",
        component: () => import("@/views/screen/enterprise/index.vue"),
        meta: {
          title: "企业"
        }
      },
      {
        path: "/economics",
        name: "economics",
        component: () => import("@/views/screen/economics/index.vue"),
        meta: {
          title: "经济"
        }
      },
      {
        path: "/investment",
        name: "investment",
        component: () => import("@/views/screen/investment/index.vue"),
        meta: {
          title: "固投"
        }
      }
    ]
  }
];
