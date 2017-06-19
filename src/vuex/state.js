export default  {
    // 登录账号
    accoutName: '',

    // 商品列表
    shoppingList: [
        {name: '限购型黑猫', coding: '00000000', price: 9999, category: '生鲜水果',number: 1, date: '2017-7-31',},
        {name: 'Sunny Estate 澳洲牛排六片装组合', coding: '00000001', price: 109, category: '生鲜水果',number: 5, date: '2018-5-20',},
        {name: '人头马 V.S.O.P特优香槟干邑白兰地', coding: '00000002', price: 499, category: '酒水饮料',number: 3, date: '2027-3-11',},
        {name: '北京延庆缙阳御杏3斤装', coding: '00000003', price: 79, category: '生鲜水果',number: 10, date: '2017-7-1',},
        {name: '阿根廷船冻红对虾10/20 2kg', coding: '00000004', price: 178, category: '生鲜水果',number: 5, date: '2018-7-7',},
        {name: '枫缇 葡萄干黄油曲奇饼干 130g', coding: '00000005', price: 16.8, category: '休闲零食',number: 9, date: '2018-01-19',},
        {name: '包锘BONO 特级初榨橄榄油 3L', coding: '00000006', price: 159, category: '粮油副食',number: 6, date: '2019-2-28',},
        {name: '蜜纽康Manuka Health 野花蜂蜜', coding: '00000007', price: 79, category: '粮油副食',number: 1, date: '2021-11-6',},
        {name: '养乐多活菌型乳酸菌乳饮品100ml*5', coding: '00000008', price: 11, category: '酒水饮料',number: 6, date: '2017-8-23',},
        {name: '科尔沁麻辣牛肉干105g', coding: '00000009', price: 11.9, category: '休闲零食',number: 11, date: '2017-12-21',},
        {name: '妮维雅男士洗面奶深层清洁控油去油补水保湿洁面乳', coding: '00000010', price: 32.5, category: '日常洗护',number: 6, date: '2019-9-4',},
        {name: '鲁花玉米油5L 非转基因 物理压榨 食用油', coding: '00000011', price: 75.9, category: '粮油副食',number: 8, date: '2019-11-2-30',},
        {name: '德芙 士力架花生夹心巧克力240g', coding: '00000012', price: 23.8, category: '休闲零食',number: 9, date: '2018-1-6',},
        {name: '有友 山椒泡凤爪100g', coding: '00000013', price: 6.9, category: '休闲零食',number: 17, date: '2017-12-18',},
        {name: '新希望牛奶香蕉牛奶200ml*12盒*1箱', coding: '00000014', price: 29.9, category: '酒水饮料',number: 4, date: '2017-10-15',},
        {name: '越南进口 中原G7 三合一速溶咖啡800g', coding: '00000015', price: 35.8, category: '酒水饮料',number: 7, date: '2018-2-7',},
        {name: '澳洲嫩肩牛排200g(2片)原切牛排', coding: '00000016', price: 29.9, category: '生鲜水果',number: 6, date: '2018-3-14',},
        {name: '52度剑南春浓香型白酒500ml*6瓶', coding: '00000017', price: 2148, category: '酒水饮料',number: 2, date: '2027-7-4',},
        {name: '黑人牙膏双重薄荷225g去口臭清新口气防蛀', coding: '00000018', price: 13.9, category: '日常洗护',number: 11, date: '2019-1-26',},
        {name: '良品铺子海带丝香辣味218g', coding: '00000019', price: 11.9, category: '休闲零食',number: 27, date: '2018-5-16',},
        {name: '甘源蟹黄味瓜子仁285g', coding: '00000020', price: 9.9, category: '休闲零食',number: 9, date: '2018-3-24',},
        {name: '三只松鼠 芒果干116g', coding: '00000021', price: 9.9, category: '休闲零食',number: 17, date: '2017-11-27',},
        {name: '卜珂蔓越莓曲奇饼干200g/袋', coding: '00000022', price: 9.9, category: '休闲零食',number: 8, date: '2018-5-19',},
        {name: '名仁苏打水弱碱性无汽饮用水无糖饮料375ml*24瓶', coding: '00000023', price: 65, category: '酒水饮料',number: 4, date: '2017-12-11',},
        {name: '双汇火腿肠王中王30g*8支', coding: '00000024', price: 7.9, category: '休闲零食',number: 5, date: '2018-6-6',},
        {name: '泰金香茉莉香米5kg', coding: '00000025', price: 29.5, category: '粮油副食',number: 11, date: '2017-11-24',},
        {name: '农心 辛拉面辣白菜特惠8连包', coding: '00000026', price: 28.8, category: '粮油副食',number: 9, date: '2018-4-25',},
        {name: '太太乐 鸡精227g/袋', coding: '00000027', price: 9.9, category: '粮油副食',number: 7, date: '2018-11-11',},
        {name: '海飞丝洗发水 清爽去油型男女士洗发露750ml去屑止痒', coding: '00000028', price: 55.8, category: '日常洗护',number: 5, date: '2019-1-23',},
        {name: '潘婷洗发水 丝质顺滑洗发露750ml', coding: '00000029', price: 39.8, category: '日常洗护',number: 5, date: '2019-2-1',},
        {name: '佳沛新西兰阳光金奇异果原箱22-25个134-175g/个金果', coding: '00000030', price: 168.8, category: '生鲜水果',number: 5, date: '2017-9-19',},
    ],
    // 购物车按钮数字
    shoppingCartListNumberFlag: false,

    // 购物车显示
    shoppingCartFlag: 'noShopping',
    // 购物车中商品列表
    shoppingCartList: [],
    // 购物车中每种商品的数量
    shoppingNumber: [],
    // 购物车中商品选中状态
    // 全选状态
    checkAllFlag: true,
    // 各个商品选中状态
    shoppingFlag : [],

    // 结算界面
    checkOutFlag: false,

    // 收银记录列表
    shoppingRecordList: [],

    // 消息通知部分
    // 消息提醒
    newMessageNumberFlag: false,
    // 消息列表显示
    messageFlag: 'noMessage',
    // 消息列表
    newMessageList: [],
    messageList: [],
    // 消息设置
    // 保质期
    dateLimit: 30,
    // 库存
    numberLimit: 3,
}