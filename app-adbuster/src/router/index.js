import Vue from 'vue'
import Router from 'vue-router'
import SlideAd from "../components/game/SlideAd.vue"
import EmergeAd from "../components/game/EmergeAd.vue"
import ExpandAd from '../components/game/ExpandAd.vue'
import MovieAd from '../components/game/MovieAd.vue'
import TopButton from '../components/Top/TopButton.vue'
import PlayScreen from '../components/Play/PlayScreen.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/top")
    },
    
    {
      path: '/game/select',
      name: 'game-selct',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/game/game-select")
    },
    {
      path: '/game/start',
      name: 'game-start',
      component: ()=>
        import(/* webpackChunkName: "top" */"../pages/game/game-start")
    },
    {
      path: '/game/slide',
      name: 'slide',
      component: SlideAd
    },
    {
      path: '/game/emerge',
      name: 'emerge',
      component: EmergeAd
    },
    {
      path: '/game/expand',
      name: 'expand',
      component: ExpandAd
    },
    {
      path: '/game/movie',
      name: 'movie',
      component: MovieAd
    },
    {
      path: '/game/emerge',
      name: 'topbutton',
      component: TopButton
    },
    {
      path: '/play/playscreen',
      name: 'playscreen',
      component: PlayScreen
    },
  ]
})
