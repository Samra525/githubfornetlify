const c1 = () => import(/* webpackChunkName: "page--src-pages-blog-html-blog-post-one-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\blogHtml\\blogPostOne.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-blog-html-blog-post-three-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\blogHtml\\blogPostThree.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-blog-html-blog-post-two-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\blogHtml\\blogPostTwo.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\templates\\Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src-templates-reddit-post-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\templates\\RedditPost.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-team-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\Team.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\node_modules\\gridsome\\app\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\SAMRA AWAIS\\Desktop\\ssg2\\my-gridsome-site\\src\\pages\\Index.vue")

export default [
  {
    path: "/blog-html/blog-post-one/",
    component: c1
  },
  {
    path: "/blog-html/blog-post-three/",
    component: c2
  },
  {
    path: "/blog-html/blog-post-two/",
    component: c3
  },
  {
    path: "/blog/blog-post-four/",
    component: c4
  },
  {
    path: "/blog/blog-post-one/",
    component: c4
  },
  {
    path: "/blog/blog-post-three/",
    component: c4
  },
  {
    path: "/blog/blog-post-two/",
    component: c4
  },
  {
    path: "/reddit/:id/",
    component: c5
  },
  {
    path: "/team/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
