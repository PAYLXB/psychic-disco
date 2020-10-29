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
            path: '/my',
            name: 'My',
            component: () =>
                import ('@/views/my/index'),
            meta: { title: '挖矿类', keepAlive: false, fater: true }
        },
        {
            path: '/advertisementDetaile',
            name: 'AdvertisementDetaile',
            component: () =>
                import ('@/views/advertisementDetaile/index'),
            meta: { title: '广告类详情', keepAlive: false, fater: true }
        }
    ]
}]