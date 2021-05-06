import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(/* webpackChunkName: "register" */ "@/views/Register.vue"),
  },
  {
    path: "/create-institution",
    name: "CreateInstitution",
    component: () => import(/* webpackChunkName: "create-institution" */ "@/views/CreateInstitution.vue"),
  },
  {
    path: '/create-account',
    name: "CreateAccount",
    component: () => import(/* webpackChunkName: "create-account" */ "@/views/CreateAccount.vue"),
  },
  {
    path: '/create-operation',
    name: 'CreateOperation',
    component: () => import(/* webpackChunkName: "create-operation" */ "@/views/CreateOperation.vue")
  },
  {
    path: '/report-one',
    name: 'CreateReportOne',
    component: () => import(/* webpackChunkName: "create-report-one" */ "@/views/CreateReportOne.vue")
  },
  {
    path: '/report-two',
    name: 'CreateReportTwo',
    component: () => import(/* webpackChunkName: "create-report-two" */ "@/views/CreateReportTwo.vue")
  },
  {
    path: '/report-three',
    name: 'CreateReportThree',
    component: () => import(/* webpackChunkName: "create-report-three" */ "@/views/CreateReportThree.vue")
  },
  {
    path: '/report-four',
    name: 'CreateReportFour',
    component: () => import(/* webpackChunkName: "create-report-four" */ "@/views/CreateReportFour.vue")
  },
  {
    path: '/report-five',
    name: 'CreateReportFive',
    component: () => import(/* webpackChunkName: "create-report-five" */ "@/views/CreateReportFive.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
