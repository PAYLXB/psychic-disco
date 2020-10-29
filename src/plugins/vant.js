// 按需全局引入 vant组件
import Vue from 'vue'
import {
    Button,
    List,
    Cell,
    CellGroup,
    Tabbar,
    TabbarItem,
    NavBar,
    NoticeBar,
    Sticky,
    Col,
    Row,
    Icon,
    Tab,
    Tabs,
    PullRefresh,
    ImagePreview,
    Image as VanImage
} from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.use(NavBar)
Vue.use(NoticeBar)
Vue.use(Sticky)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(ImagePreview)
Vue.use(VanImage)
Vue.use(PullRefresh)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Tab).use(Tabs)