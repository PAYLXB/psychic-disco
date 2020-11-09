const p1 = `<p style="font-size: 14px;text-indent: 28px;margin:10px 0">`
const p2 = `</p>`
let img = {
    bssj: [
        require('./../assets/image/bssj1.png'),
        require('./../assets/image/bssj2.png'),
        require('./../assets/image/bssj3.png'),
        require('./../assets/image/bssj4.png'),
    ],
    hldu: [
        require('./../assets/image/hldu1.png'),
        require('./../assets/image/hldu2.png'),
        require('./../assets/image/hldu3.png'),
        require('./../assets/image/hldu4.png'),
    ],
    ttyy: [
        require('./../assets/image/ttyy1.png'),
        require('./../assets/image/ttyy2.png'),
        require('./../assets/image/ttyy3.png'),
    ],
    lt: [
        require('./../assets/image/lt1.jpg'),
        require('./../assets/image/lt2.jpg'),
        require('./../assets/image/lt3.jpg'),
    ],
    ezf: [
        require('./../assets/image/ezf1.jpg'),
        require('./../assets/image/ezf2.jpg'),
    ],
}

let code = {
    ay: require('./../assets/codeImg/ay.jpg'),
    bssj: require('./../assets/codeImg/bssj.jpg'),
    cyss: require('./../assets/codeImg/cyss.jpg'),
    ddh: require('./../assets/codeImg/ddh.jpg'),
    dq: require('./../assets/codeImg/dq.jpg'),
    ezf: require('./../assets/codeImg/ezf.jpg'),
    fy: require('./../assets/codeImg/fy.jpg'),
    hbly: require('./../assets/codeImg/hbly.jpg'),
    hldu: require('./../assets/codeImg/hldu.jpg'),
    lsdsp: require('./../assets/codeImg/lsdsp.jpg'),
    lt: require('./../assets/codeImg/lt.jpg'),
    qc: require('./../assets/codeImg/qc.jpg'),
    qqbl: require('./../assets/codeImg/qqbl.jpg'),
    ttyy: require('./../assets/codeImg/ttyy.jpg'),
    ty: require('./../assets/codeImg/ty.jpg'),
    ubsh: require('./../assets/codeImg/ubsh.jpg'),
    wb: require('./../assets/codeImg/wb.jpg'),
    xp: require('./../assets/codeImg/xp.jpg'),
    yddsp: require('./../assets/codeImg/yddsp.jpg'),
    yfsj: require('./../assets/codeImg/yfsj.jpg'),
    zm: require('./../assets/codeImg/zm.jpg'),
    zsb: require('./../assets/codeImg/zsb.jpg'),
    zysk: require('./../assets/codeImg/zysk.jpg'),
}

const data = [
    {
        title: '本色世界',
        label: '本色世界注册领取任务：',
        detail: '注册登陆→首页→实名认证→首页→最右下角转运福→我的福袋→新人赠送旺财福袋',
        task: '转运福→开始转运→3个小时过后收取',
        img: img.bssj,
        //下载标题
        downloadTitle: '本色世界下载网站 ：',
        //下载地址
        downloadUrl: 'http://d.bensew.cn',
        //下载备注
        downloadInfo: '',
        //交易地址标题
        sellUrlTitle: '',
        //交易地址
        sellUrl: '',
        //交易APP下载地址标题
        sellAppTitle: '本色交易平台BFX下载地址：',
        //交易APP下载地址
        sellAppUrl: 'https://d.bfxbuy.com/',
        //提现渠道
        channel: '支付宝',
        //邀请码
        code: code.bssj
    },
    {
        title: '欢乐兑U',
        label: '欢乐兑平台规则兑换任务：',
        detail: '挖矿模式：我的→实名认证→首页→购物卡→领取会员购物卡→点激活→首页→开始任务',
        task: '任务：每天首页→购物卡右边→开始任务→3个小时领取',
        img: img.hldu,
        //下载标题
        downloadTitle: '欢乐兑U 商城APP苹果安卓通用下载地址：',
        //下载地址
        downloadUrl: 'http://web.yphnet.com/user/down',
        //下载备注
        downloadInfo: '',
        //交易地址标题
        sellUrlTitle: '',
        //交易地址
        sellUrl: '',
        //交易APP下载地址标题
        sellAppTitle: '交易APP苹果 、安卓最新的下载地址',
        //交易APP下载地址
        sellAppUrl: 'https://app.niaodun.cn/qiye/uotcs/',
        //提现渠道
        channel: '支付宝',
        //邀请码
        code: code.hldu
    },
    {
        title: '天天有鱼',
        label: '天天有鱼注册领取任务：',
        detail: '注册登陆→我的→实名认证→首页→银鱼商店→领取银鱼→九鱼聚财',
        task: '3小时后手动点击一下领取',
        img: img.ttyy,
        //下载标题
        downloadTitle: '',
        //下载地址
        downloadUrl: '',
        //下载备注
        downloadInfo: '',
        //交易地址标题
        sellUrlTitle: '',
        //交易地址
        sellUrl: '',
        //交易APP下载地址标题
        sellAppTitle: '天天有鱼平台交易：',
        //交易APP下载地址
        sellAppUrl: '内网交易',
        //提现渠道
        channel: '支付宝',
        //邀请码
        code: code.ttyy
    },
    {
        title: 'E支付',
        label: 'E支付注册领取任务：',
        detail: '注册登陆→我的→实名认证→矿场→已购买',
        task: '任务：3小时后手动点击一下领取，看一分钟广告。发现→看广告领UEP→领取→看二十次广告',
        img: img.ezf,
        //下载标题
        downloadTitle: '',
        //下载地址
        downloadUrl: '',
        //下载备注
        downloadInfo: '',
        //交易地址标题
        sellUrlTitle: '',
        //交易地址
        sellUrl: '',
        //交易APP下载地址标题
        sellAppTitle: 'E支付平台交易：',
        //交易APP下载地址
        sellAppUrl: '内网交易',
        //提现渠道
        channel: '支付宝',
        //邀请码
        code: code.ezf
    },
    {
        title: '链淘',
        label: '链淘注册领取任务：',
        detail: '注册登陆→我的→设置→账户安全→实名认证→获得一个总产12.95枚ccq的初级任务',
        task: '任务：完成每日任务即可',
        img: img.lt,
        //下载标题
        downloadTitle: '',
        //下载地址
        downloadUrl: '',
        //下载备注
        downloadInfo: '',
        //交易地址标题
        sellUrlTitle: '',
        //交易地址
        sellUrl: '',
        //交易APP下载地址标题
        sellAppTitle: '链淘平台交易：',
        //交易APP下载地址
        sellAppUrl: '目前还未开放交易平台（可通过线下交易，目前一个ccq价格在10元左右一个！）',
        //提现渠道
        channel: '支付宝',
        //邀请码
        code: code.lt
    },
]

export default data