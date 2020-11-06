/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
    path: '/',
    component: () =>
        import ('@/views/layouts/index'),
    redirect: '/home',
    meta: {
        title: '首页',
        keepAlive: false
    },
    children: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('@/views/home/index'),
            meta: { title: '首页', keepAlive: false, fater: true }
        },
        {
            path: '/advertisement',
            name: 'Advertisement',
            component: () =>
                import ('@/views/advertisement/index'),
            meta: { title: '广告类', keepAlive: false, fater: true }
        },
        {
            path: '/btb',
            name: 'Btb',
            component: () =>
                import ('@/views/btb/index'),
            meta: { title: '挖矿类', keepAlive: false, fater: true }
        },
        {
            path: '/advertisementDetaile',
            name: 'AdvertisementDetaile',
            component: () =>
                import ('@/views/advertisementDetaile/index'),
            meta: { title: '广告类详情', keepAlive: false, fater: true }
        },
        {
            path: '/btbDetaile',
            name: 'BtbDetaile',
            component: () =>
                import ('@/views/btbDetaile/index'),
            meta: { title: '挖矿类详情', keepAlive: false, fater: true }
        }
    ]
}]