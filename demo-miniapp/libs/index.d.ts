/**
 * 查询指定accode、指定cp码抽奖数据接口 查询互斥关系
 * @param params.acCodes accode列表 {string}
 * @param params.campIds 海豚cp码列表 {string}
 * @param options  {object}
 * @param options.query  {object} 【必传】authCode|lunaSessionId|uid authCode或者lunaSessionId或者直接传uid {string}
 * @param options.query.uid  {string}
 * @param options.query.appId  {string}
 * @param options.query.authCode  {string}
 * @param options.query.lunaSessionId  {string}
 * @returns code 返回代码 {number}
 * @returns lunaBuryUid {string}
 * @returns lunaSessionId {string}
 * @returns message 返回处理消息 {string}
 * @returns result {object} 是list集合，集合里是UserPrizeVO对象
 * @returns success {boolean}
 * @returns timestamp {number}
 * @returns traceNo {string}
 */
declare function queryByAcCodesAndCampIds(params?: any, options?: any): any;

/**
 * https://yapi.gyjxwh.com/project/284/interface/api/34299
 * @param data.acCode 活动编码
 * @param data.authCode appId对应获取的authcode
 * @param data.appId 小程序appId
 * @returns
 */
declare function queryUnDuplicateList(params?: any, options?: any): any;

/**
* 扶摇-查询可兑换奖品列表
* https://yapi.gyjxwh.com/project/284/interface/api/31733
* @param data
* @param data.acCode * 活动id
* @param data.uid 用户uid
*/
declare function queryAwardList(params?: any, options?: any): any;

/**
 * 积分抽奖：签到完成任务完成后去抽奖
 * @param data 积分抽奖接口
 * @param data.acCode 活动编码
 * @param data.activityPrizeId 奖品ID
 * @param data.appId 小程序appId
 * @param data.authCode 小程序appId对应获取的authcode
 * @returns
 */
declare function exchangeDraw(params?: any, options?: any): any;

/**
 * 奖品兑换接口 /app/activity/sign/exchange https://yapi.gyjxwh.com/project/284/interface/api/32147
 * @使用场景：用户点击兑换按钮，兑换奖品时候调用
 * @param data.activityPrizeId 奖品id
 * @param data.acCode 活动编码
 * @param data.apmbA 埋点
 * @param data.lunaSessionId 扶摇的用户id，约几个小时会变一次
 * @param data.distinguishCertificateAppId 发送现金奖品专用，用于区分证书（固定，非必须）
 * @param data.reason 转账理由（固定，非必须）
 * @returns
 */
declare function exchange(params?: any, options?: any): any;

/**
* 查询用户是否订阅过模板消息通知（不需acCode） /app/MessageSubscription/v2/query
* @param {object} data
* @param {string} data.templateId 模板id
* @param {string} data.lunaSessionId 会话id
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function qryMsgSubscription(params?: any, options?: any): any;

/**
* 删除模板消息订阅关系 /app/MessageSubscription/delete
* @param {object} data
* @param {string} data.templateId 模板id
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function delMsgSubscription(params?: any, options?: any): any;

/**
* 批量查询模板消息是否订阅   /app/MessageSubscription/batchQuery
* @param {object} data
* @params {string} data.templateIds 模版消息 templateIds: [ "64fc6db0f62549b69009698fbf05f1d7", "bcff0f0794d341bb85b377fd94caaac0", ]
* @param {string} data.activityId 活动id，为空时，默认活动id为 1523484398L
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function batchQueryMsgSubscription(params?: any, options?: any): any;

/**
* 批量添加模板消息   /app/MessageSubscription/batchAdd
* @param {object} data
* @params {string} data.subscriParam key如下：
       templateId ，
       subscriptionType ，
       activityId，
           formId 非必须，
           [{"templateId":"xxxx",subscriptionType:'1',activityId:'xxxxx'},
         {"templateId":"xxx",subscriptionType:'1',activityId:'xxxxx'}] ，然后进行url编码
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function batchAddMsgSubscription(params?: any, options?: any): any;

/**
* 新增用户模板消息订阅关系 不需acCode /app/MessageSubscription/v2/add
* @param {object} data
* @param {string} data.templateId 模板id
* @param {string} data.subscriptionType 订阅类型(1长期订阅,2一次性订阅, 3表单动作提交订阅)
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function addMsgSubscription(params?: any, options?: any): any;

/**
* 推啊事件上报接口   /app/advert/eventReport
* @param {object} data
* @param {string} data.orderId 广告订单id
* @param {string} data.event 上报事件类型'show' 'click'
* @param {string} data.projectId 媒体密钥
* @param {string} data.advertId 广告位id
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function advertEventReport(params?: any, options?: any): any;

/**
* 修改已读状态 /app/user/prize/update-user-prize
* @ 使用场景
用户点击开奖信息后,标记该条开奖信息为已读状态.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {string} data.userPrizeId
* @param {object} options
* @returns
*/
declare function updateReadStatus(params?: any, options?: any): any;

/**
* 保存用户头像、昵称 /app/user/share-info
* @使用场景:用户未授权时拉取授权弹框,若用户同意授权,保存用户的头像和昵称.
* @param {object} data
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function saveUserShareInfo(params?: any, options?: any): any;

/**
* 记录逛一逛次数 /app/statistics/prize/click
* @使用场景:
* 用户点击逛一逛时,跳转的为商户链接时且用户浏览时长大于5S返回后触发,记录用户逛一逛次数.(目前是商户链接浏览>=5s等换非商户链接逛一逛3次).
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {number} data.activityPrizeId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.incrCount
* @param {object} options
* @returns
*/
declare function saveStrollCount(params?: any, options?: any): any;

/**
* 商户链接点击数统计 /app/award/statistics/uv
* @ 使用场景:
用户点击逛一逛时,若为商户链接,调用该接口,统计商户链接点击数.
* @param {object} data
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {string} data.jumpUrlMD5
* @param {object} options
* @returns
*/
declare function saveClickStatisticsUv(params?: any, options?: any): any;

/**
* 根据用户中奖记录id查询实物奖品中奖信息 /app/user/prize/query-by-user-prize-id
* @使用场景:
根据用户中奖记录id查询实物奖品中奖信息
* @param {object} data
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {string} data.userPrizeId
* @param {object} options
* @returns
*/
declare function queryWinInfoByUserPrizeId(params?: any, options?: any): any;

/**
* 查询用户头像、昵称信息
* @ 使用场景: 查询用户头像、昵称信息.
* @param {object} data
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {object} options
* @returns
*/
declare function queryUserShareInfo(params?: any, options?: any): any;

/**
* 查询用户参与活动中奖情况：待开奖/已结束 /app/user/prize/query-user-prize
* @使用场景:
* 查询用户参与的活动的中奖情况,如查询开奖中、已开奖、未开奖奖品,可应用于消息页面,中奖记录页面,全部抽奖页面.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.queryType
* @param {number} data.currentPage
* @param {number} data.size
* @param {object} options
* @returns
*/
declare function queryUserPrize(params?: any, options?: any): any;

/**
* 抽奖结果通知-消息订阅查询接口 /app/ttjl/MessageSubscription/query
* @使用场景:
查询用户是否订阅了抽奖结果消息通知.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.activityPrizeId
* @param {string} data.templateId
* @param {string} data.jackPotDateString
* @param {object} options
* @returns
*/
declare function queryttjlMsgSubscription(params?: any, options?: any): any;

/**
* 统计活动奖品的逛一逛次数 /app/statistics/prize/click/static
* @使用场景:
* 查询用户当前逛一逛完成次数，判断逛一逛任务是否完成.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.activityPrizeId
* @param {object} options
* @returns
*/
declare function queryStrollCount(params?: any, options?: any): any;

/**
* 查询活动奖品分享次数 /app/award/shareNum/get
* @ 使用场景:
查询活动奖品分享次数.
* @param {object} data
* @param {number} data.activityPrizeId
* @param {object} options
* @returns
*/
declare function queryShareNum(params?: any, options?: any): any;

/**
* 查询奖品对应所有中奖用户记录 /app/user/prize/query/activity-prize-jackpot-record
* @ 奖品开奖后,查询该奖品对应所有中奖用户记录.
* @param {object} data
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.activityPrizeId
* @param {string} data.dateString
* @param {object} options
* @returns
*/
declare function queryPrizeJackpotList(params?: any, options?: any): any;

/**
* 查询锦鲤奖品列表 /app/award/luckyCharm/list
* @ 查询锦鲤奖品列表,如天天锦鲤首页奖品列表.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {object} options
* @returns
*/
declare function queryLuckyAlarmList(params?: any, options?: any): any;

/**
* 查询锦鲤奖品详情 /app/award/luckyCharm/detail
* @ 使用场景:
查询锦鲤奖品详情,返回基本信息、是否已开奖、中奖概率、是否已参与抽奖等.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.activityPrizeId
* @param {string} data.dateString
* @param {object} options
* @returns
*/
declare function queryLuckyAlarmDetail(params?: any, options?: any): any;

/**
* 获取弹幕 /app/award/getBulletChat
* @使用场景:
获取首屏弹幕(中奖人头像+中奖人昵称+奖品).
* @param {object} data
* @param {object} options
* @returns
*/
declare function getBulletChat(params?: any, options?: any): any;

/**
* 抽奖结果通知模板消息-消息订阅接口 /app/ttjl/MessageSubscription/add
* @ 使用场景:
用户同意订阅抽奖结果消息后,调用该接口订阅.
* @param {object} data
* @param {string} data.acCode
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {number} data.activityPrizeId
* @param {string} data.templateId
* @param {string} data.jackPotDateString
* @param {object} options
* @returns
*/
declare function addttjlMsgSubscription(params?: any, options?: any): any;

/**
* 活动奖品分享次数+1 /app/award/shareNum/add
* @ 使用场景:
用户分享成功一次,就调用一次该接口.该活动奖品分享次数＋1,返回总分享数.
* @param {object} data
* @param {number} data.activityPrizeId
* @param {object} options
* @returns
*/
declare function addShareNum(params?: any, options?: any): any;

/**
* 统计灯火任务用户点击浏览阿里妈妈商品次数 /app/jjqb/statisticsNumber 使用场景参考：https://gy19pay.yuque.com/rz0bki/qx8no6/lb55vgwz06il4rpf
* @param {object} data
* @param {string} data.acCode
* @param {string} data.taskId
* @param {string} data.appId
* @param {string} data.authCode
* @param {object} options
* @returns
*/
declare function saveStatisticsNumber(params?: any, options?: any): any;

/**
* 查询用户灯火任务页面用户浏览阿里妈妈商品的次数 /app/jjqb/queryStatisticsNumber 使用场景参考：https://gy19pay.yuque.com/rz0bki/qx8no6/lb55vgwz06il4rpf
* @param {object} data
* @param {string} data.acCode
* @param {string} data.taskId
* @param {string} data.appId
* @param {string} data.authCode
* @param {object} options
* @returns
*/
declare function queryStatisticsNumber(params?: any, options?: any): any;

/**
* 获取金额明细 /app/user/prize/cashAmountDetailed
* @param {object} data
* @param {string} data.acCode
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {number} data.pageNum
* @param {number} data.pageSize
* @param {object} options
* @returns
*/
declare function queryCashAmountDetails(params?: any, options?: any): any;

/**
* 获取现金金额 /app/user/prize/cashAmount
* @param {object} data
* @param {string} data.acCode
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function queryCashAmount(params?: any, options?: any): any;

/**
* 存钱大赛我的参赛记录 /app/jjqb/getJoinRecord
* @param {object} data
* @param {string} data.acCode
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function getJoinRecord(params?: any, options?: any): any;

/**
* 存钱大赛页面info /app/jjqb/getInfo
* @param {object} data
* @param {string} data.acCode
* @param {string} data.lunaSessionId
* @param {string} data.authCode
* @param {string} data.appId
* @param {object} options
* @returns
*/
declare function getJJqbMatchInfo(params?: any, options?: any): any;

/**
* 弹幕 /app/user/prize/bulletChatMessage
* @param {object} data
* @param {string} data.acCode
* @param {object} options
* @returns
*/
declare function getBulletChatMsg(params?: any, options?: any): any;

/**
 * 首页-查询积分明细 /app/integral/query
 * */
declare function queryIntegral(params?: any, options?: any): any;

/**
* 扶摇-查询当前用户所拥有的可用积分
* https://yapi.gyjxwh.com/project/284/interface/api/31670
* @ /app/activity/sign/queryCreditBalance
* @param data
* @param data.acCode * 活动id
* @param data.lunaSessionId * 会话id
* @param data.rewardValueType 奖励类型，默认1
* @param options
* @returns result 积余额
*/
declare function queryCreditBalance(params?: any, options?: any): any;

/**
* 扶摇-查询集分宝明细
* https://yapi.gyjxwh.com/project/284/interface/api/36834
* @ /app/alipaypoint/queryRecordList
* @param acCode
* @param pageSize //大小
* @param pageNum * //页码
* @param authType //认证方式
* @returns result //积余额
*/
declare function queryAlipayPointList(params?: any, options?: any): any;

/**
* 扶摇-查询当前用户集分宝余额
* https://yapi.gyjxwh.com/project/284/interface/api/36831
* @ /app/alipaypoint/queryBalance
* @param data
* @param uid
* @param data.lunaSessionId * 会话id
* @param options
* @returns result 积余额
*/
declare function queryAlipayPointBalance(params?: any, options?: any): any;

/**
 * 签到区查询连续签到天数/周期内连续签到状态 V1
 * yapi地址：https://yapi.gyjxwh.com/project/284/interface/api/37455
 * @param {string} data.acCode 活动code
 * @param {string} data.lunaSessionId 扶摇会话id
 * @param {number} data.sort 排序 传1即可
 * @param {string} data.appId 小程序应用id
 * @param {string} data.authCode 支付宝授权code
 *
 * @returns {boolean} success 请求是否成功
 * @returns {string} message 响应提示信息
 * @returns {number} code 响应状态码
 * @returns {string} lunaSessionId 扶摇会话id
 * @returns {string} lunaBuryUid
 * @returns {string} traceNo 扶摇查日志使用
 * @returns {number} timestamp 时间戳
 * @returns {number} result.currentContinueDays 连续签到天数
 * @returns {number} result.obtainableCredit 第二天签到能获得
 * @returns {boolean} result.signedToday 今天是否签到
 * @returns {string} result.creditName 积分名称
 * @returns {number} result.activityTaskRecordList.id 任务完成记录主键Id
 * @returns {number} result.activityTaskRecordList.trId 签到活动任务配置code，全局唯一，确保幂等
 * @returns {number} result.activityTaskRecordList.activityId 活动id
 * @returns {number} result.activityTaskRecordList.taskCode 任务code，全局唯一，确保幂等
 * @returns {string} result.activityTaskRecordList.taskTime 任务开始时间
 * @returns {string} result.activityTaskRecordList.finishTime 任务完成时间
 * @returns {string} result.activityTaskRecordList.taskDesc 任务描述
 * @returns {string} result.activityTaskRecordList.taskStatus 任务状态
 * @returns {string} result.activityTaskRecordList.taskCompKey json格式，保存任务业务值变量
 * @returns {string} result.activityTaskRecordList.remark 备注
 * @returns {number} result.activityTaskRecordList.creditRecord 积分记录
 * @returns {number} result.activityTaskRecordList.signboard 是否签到 0：已签到 1：未签到
 * @returns {number} result.activityTaskRecordList.continuityCount 连续任务次数
 * @returns {string} result.activityTaskRecordList.acPriceBackgroudUrl 背景图片地址
 * @returns {string} result.activityTaskRecordList.detailPicUrl 详情页图片地址
 * @returns {number} result.activityTaskRecordList.activityPrizeId 活动奖品id
 *
 * @returns {number} result.activityTaskRecordList.prize.id 奖品id
 * @returns {number} result.activityTaskRecordList.prize.activityPrizeId 活动奖品id
 * @returns {number} result.activityTaskRecordList.prize.latestVersion 奖品版本号
 * @returns {string} result.activityTaskRecordList.prize.prizeName 奖品名称
 * @returns {string} result.activityTaskRecordList.prize.prizeDesc 奖品描述
 * @returns {string} result.activityTaskRecordList.prize.prizeType 奖品类型
 * @returns {string} result.activityTaskRecordList.prize.prizeVerifyUrl 商品链接
 * @returns {string} result.activityTaskRecordList.prize.prizeImageUrl 图片链接
 * @returns {string} result.activityTaskRecordList.prize.outMerchantId 外部商户id 例如 spi
 * @returns {string} result.activityTaskRecordList.prize.outPrizeId 外部商户商品id,例如 cspi
 * @returns {number} result.activityTaskRecordList.prize.position 奖品位置
 * @returns {string} result.activityTaskRecordList.prize.userPrizeId 用户抽奖记录ID
 * @returns {string} result.activityTaskRecordList.prize.prizeVerifyUrlS 商品链接
 * @returns {string} result.activityTaskRecordList.prize.prizeExt 奖品扩展字段
 * @returns {string} result.activityTaskRecordList.prize.outCouponId 外部券标识
 * @returns {object} result.activityTaskRecordList.prize.prizeExt2 奖品扩展字段（JSON格式）
 * @returns {string} result.activityTaskRecordList.prize.outItemId 外部奖品id
 * @returns {object} result.activityTaskRecordList.prize.advertInfo 推啊奖品信息
 * @returns {object} result.activityTaskRecordList.prize.couponCodeInfo 小金盒聚宝盆券码信息
 * @returns {object[]} result.activityTaskRecordList.prize.prizeBagContentList 奖品包内容
 * @returns {object} result.activityTaskRecordList.prize.campaignInfo 海豚平台获奖信息.
 * @returns {string} result.activityTaskRecordList.prize.externalInfo 外部奖品获奖信息
 * @returns {object} result.activityTaskRecordList.prize.outPrizeCommonInfo 外部奖品公共信息
 * @returns {string} result.activityTaskRecordList.prize.exchangeAmount 兑奖奖品兑换的面额
 *
 * @returns {object} result.activityTaskRecordList.rewardPrize 奖品信息
 * @returns {string} result.activityTaskRecordList.needDraw 前端展示去领奖
 * @returns {boolean} result.activityTaskRecordList.withinSeventyTwoHours 前端展示是否是72小时内
 * @returns {boolean} result.activityTaskRecordList.receiveAwardStatus 前端展示是否领过奖品
 * @returns {number} result.activityTaskRecordList.actrcId 签到活动任务配置code
 *
 * @returns {string} result.activityTaskRecordListLastWeek
 * @returns {string} result.creditUnit 积分单位
 */
declare function queryUserSignV1(params?: any, options?: any): any;

/**
 * 冲鸭签到接口
 * yapi地址：https://yapi.gyjxwh.com/project/284/interface/api/37740
 * @param {string} data.acCode 活动code
 * @param {string} data.lunaSessionId 扶摇会话id
 * @param {string} data.taskId 任务id
 * @returns {number} id 任务完成记录主键Id
 * @returns {number} tenantId SaaS租户id
 * @returns {number} instanceId SaaS实例id
 * @returns {string} createBy 记录创建者
 * @returns {string} gmtCreate 创建时间
 * @returns {string} gmtModified 更新时间
 * @returns {number} recordStatus 数据记录逻辑删除标识 false 正常 true 已删除
 * @returns {number} partId 分区iD
 * @returns {number} actrcId 签到活动任务配置code，全局唯一，确保幂等
 * @returns {number} userId 用户id
 * @returns {number} activityId 活动code，全局唯一，确保幂等
 * @returns {number} taskId 任务code，全局唯一，确保幂等
 * @returns {string} taskTime 任务开始时间
 * @returns {string} finishTime 任务完成时间
 * @returns {string} taskDesc 任务描述
 * @returns {string} taskStatus 任务状态
 * @returns {string} taskOrderId 任务第三方，唯一值，比如订单号
 * @returns {string} taskCompKey json格式，保存任务业务值变量
 * @returns {string} remark 备注
 * @returns {number} continuityCount 连续任务次数
 * @returns {number} amountValue 积分值
 * @returns {number}taskSort 排序
 *
 * @returns {number} prize.id 奖品id
 * @returns {number} prize.latestVersion 奖品版本号
 * @returns {string} prize.prizeName 奖品名称
 * @returns {string} prize.prizeDesc 奖品描述
 * @returns {string} prize.prizeType 奖品类型
 * @returns {string} prize.prizeVerifyUrl 商品链接
 * @returns {string} prize.prizeImageUrl 图片链接
 * @returns {string} prize.outMerchantId 外部商户id 例如 spi
 * @returns {string} prize.outPrizeId 外部商户商品id,例如 cspi
 * @returns {number} prize.position 奖品位置
 * @returns {string} prize.userPrizeId 用户抽奖记录ID
 * @returns {string} prize.prizeVerifyUrlS 商品链接
 * @returns {string} prize.prizeExt 奖品扩展字段
 * @returns {string} prize.outCouponId 外部券标识
 * @returns {object} prize.prizeExt2 奖品扩展字段（JSON格式）
 * @returns {string} prize.outItemId 外部奖品id
 *
 * @returns {string} prize.advertInfo.orderId  推啊广告订单ID，每次广告请求生成唯一订单
 * @returns {string} prize.advertInfo.bannerPngUrl 广告素材图片
 * @returns {string} prize.advertInfo.thumbnailPngUrl 广告素材缩略图
 * @returns {string} prize.advertInfo.title 广告标题
 * @returns {string} prize.advertInfo.couponRemark 优惠券描述
 * @returns {string} prize.advertInfo.buttonText 按钮文案
 * @returns {string} prize.advertInfo.promoteUrl 广告落地页链接
 * @returns {string} prize.advertInfo.description 广告描述
 * @returns {number} prize.advertInfo.advertId 广告ID，每个广告唯一标识
 * @returns {number} prize.advertInfo.isFreeAdvert
 *
 * @returns {string} prize.couponCodeInfo.shuffleCode 小金盒聚宝盆券码信息
 * @returns {number} prize.couponCodeInfo.shuffleType 券码类型 1表示自选码 2表示已经翻牌
 *
 * @returns {number} prize.prizeBagContentList.id 主键id
 * @returns {number} prize.prizeBagContentList.latestVersion 奖品版本号
 * @returns {string} prize.prizeBagContentList.prizeName 奖品名称
 * @returns {string} prize.prizeBagContentList.prizeDesc 奖品描述
 * @returns {string} prize.prizeBagContentList.prizeType 奖品类型
 * @returns {string} prize.prizeBagContentList.prizeVerifyUrl 商品链接
 * @returns {string} prize.prizeBagContentList.prizeImageUrl 图片链接
 * @returns {string} prize.prizeBagContentList.outMerchantId 外部商户id 例如 spi
 * @returns {string} prize.prizeBagContentList.outPrizeId 外部商户商品id,例如 cspi
 * @returns {number} prize.prizeBagContentList.position 奖品位置
 * @returns {string} prize.prizeBagContentList.userPrizeId 用户抽奖记录ID
 * @returns {string} prize.prizeBagContentList.prizeVerifyUrlS 商品链接
 * @returns {string} prize.prizeBagContentList.prizeExt 奖品扩展字段
 * @returns {string} prize.prizeBagContentList.outCouponId 外部券标识
 * @returns {object} prize.prizeBagContentList.prizeExt2 奖品扩展字段（JSON格式）
 * @returns {string} prize.prizeBagContentList.outItemId 奖品类型 {外部奖品id}
 * @returns {object} prize.prizeBagContentList.advertInfo 推啊奖品信息
 * @returns {object} prize.prizeBagContentList.couponCodeInfo 小金盒聚宝盆券码信息
 * @returns {object []} prize.prizeBagContentList.prizeBagContentList 奖品包内容，跟外侧数据结构一样
 * @returns {object} prize.prizeBagContentList.campaignInfo 海豚平台获奖信息
 * @returns {string} prize.prizeBagContentList.externalInfo 外部奖品获奖信息
 * @returns {string} prize.prizeBagContentList.activityPrizeId 活动奖品id
 * @returns {object} prize.prizeBagContentList.outPrizeCommonInfo 外部奖品公共信息-前端用
 * @returns {number} prize.prizeBagContentList.exchangeAmount 兑奖奖品兑换的面额
 *
 *
 * @returns {string} prize.campaignInfo.prizeId 海豚平台奖品id
 * @returns {string} prize.campaignInfo.prizeName 奖品名称
 * @returns {string} prize.campaignInfo.campLogId 活动流水id
 * @returns {string} prize.campaignInfo.campId 活动id
 * @returns {string} prize.campaignInfo.prizeFlag 奖品唯一标识
 * @returns {string} prize.campaignInfo.extendField 拓展字段
 * @returns {boolean} prize.campaignInfo.success 是否成功发奖
 * @returns {string} prize.campaignInfo.displayName  昵称
 * @returns {string} prize.campaignInfo.outPrizeId  外部奖品Id
 * @returns {string} prize.campaignInfo.prizeLogId  支付日志id
 * @returns {string} prize.campaignInfo.usageStatus 核销状态 .
 * @returns {string} prize.campaignInfo.writeOffTime 券核销时间
 * @returns {string} prize.campaignInfo.couponTradeNo 券使用时支付宝交易号,对应trade_no
 * @returns {string} prize.campaignInfo.templateId 券模板id
 * @returns {string} prize.campaignInfo.contributionAccount 出资账号
 * @returns {string} prize.campaignInfo.totalAmount 券总金额
 * @returns {string} prize.campaignInfo.remainingAmount 剩余金额
 * @returns {string []} prize.campaignInfo.outStatus 账单详情
 * @returns {string} prize.campaignInfo.billDetails 拓展字段
 *
 * @returns {string} prize.externalInfo 外部奖品获奖信息
 *
 * @returns {string} prize.outPrizeCommonInfo.outId 外部奖品id
 * @returns {string} prize.outPrizeCommonInfo.outType 外部奖品类型
 * @returns {string} prize.outPrizeCommonInfo.outName 外部奖品名称
 * @returns {string} prize.outPrizeCommonInfo.outPngUrl 外部奖品图片
 * @returns {string} prize.outPrizeCommonInfo.outThumbnailPngUrl 外部奖品缩略图图片
 * @returns {string} prize.outPrizeCommonInfo.outDesc 外部奖品描述
 * @returns {string} prize.outPrizeCommonInfo.outExt 外部奖品扩展字段
 *
 * @returns {string} prize.exchangeAmount 兑奖奖品兑换的面额
 * @returns {number} prize.activityPrizeId 活动奖品id
 */
declare function getTaskSignIn(params?: any, options?: any): any;

/**
 * 冲鸭奖品发放接口
 * yapi地址：https://yapi.gyjxwh.com/project/284/interface/api/37741
 * @param {string} data.acCode 活动code
 * @param {string} data.lunaSessionId 扶摇会话id
 * @param {string} data.taskId 任务id
 * @param {string} data.actrcId 签到活动任务配置code
 * @returns {number} id 任务完成记录主键Id
 * @returns {number} tenantId SaaS租户id
 * @returns {number}instanceId SaaS实例id
 * @returns {string} createBy 记录创建者
 * @returns {string} gmtCreate 创建时间
 * @returns {string} gmtModified 更新时间
 * @returns {number} recordStatus 数据记录逻辑删除标识 false 正常 true 已删除
 * @returns {number} partId 分区iD
 * @returns {number} actrcId 签到活动任务配置code，全局唯一，确保幂等
 * @returns {number} userId 用户id
 * @returns {number} activityId 活动code，全局唯一，确保幂等
 * @returns {number} taskId 任务code，全局唯一，确保幂等
 * @returns {string} taskTime 任务开始时间
 * @returns {string} finishTime 任务完成时间
 * @returns {string} taskDesc 任务描述
 * @returns {string} taskStatus 任务状态
 * @returns {string} taskOrderId 任务第三方，唯一值，比如订单号
 * @returns {string} taskCompKey json格式，保存任务业务值变量
 * @returns {string} remark 备注
 * @returns {number} continuityCount 连续任务次数
 * @returns {number} amountValue 积分值
 * @returns {number}taskSort 排序
 *
 * @returns {number} prize.id 奖品id
 * @returns {number} prize.latestVersion 奖品版本号
 * @returns {string} prize.prizeName 奖品名称
 * @returns {string} prize.prizeDesc 奖品描述
 * @returns {string} prize.prizeType 奖品类型
 * @returns {string} prize.prizeVerifyUrl 商品链接
 * @returns {string} prize.prizeImageUrl 图片链接
 * @returns {string} prize.outMerchantId 外部商户id 例如 spi
 * @returns {string} prize.outPrizeId 外部商户商品id,例如 cspi
 * @returns {number} prize.position 奖品位置
 * @returns {string} prize.userPrizeId 用户抽奖记录ID
 * @returns {string} prize.prizeVerifyUrlS 商品链接
 * @returns {string} prize.prizeExt 奖品扩展字段
 * @returns {string} prize.outCouponId 外部券标识
 * @returns {object} prize.prizeExt2 奖品扩展字段（JSON格式）
 * @returns {string} prize.outItemId 外部奖品id
 *
 * @returns {string} prize.advertInfo.orderId  推啊广告订单ID，每次广告请求生成唯一订单
 * @returns {string} prize.advertInfo.bannerPngUrl 广告素材图片
 * @returns {string} prize.advertInfo.thumbnailPngUrl 广告素材缩略图
 * @returns {string} prize.advertInfo.title 广告标题
 * @returns {string} prize.advertInfo.couponRemark 优惠券描述
 * @returns {string} prize.advertInfo.buttonText 按钮文案
 * @returns {string} prize.advertInfo.promoteUrl 广告落地页链接
 * @returns {string} prize.advertInfo.description 广告描述
 * @returns {number} prize.advertInfo.advertId 广告ID，每个广告唯一标识
 * @returns {number} prize.advertInfo.isFreeAdvert
 *
 * @returns {string} prize.couponCodeInfo.shuffleCode 小金盒聚宝盆券码信息
 * @returns {number} prize.couponCodeInfo.shuffleType 券码类型 1表示自选码 2表示已经翻牌
 *
 * @returns {number} prize.prizeBagContentList.id 主键id
 * @returns {number} prize.prizeBagContentList.latestVersion 奖品版本号
 * @returns {string} prize.prizeBagContentList.prizeName 奖品名称
 * @returns {string} prize.prizeBagContentList.prizeDesc 奖品描述
 * @returns {string} prize.prizeBagContentList.prizeType 奖品类型
 * @returns {string} prize.prizeBagContentList.prizeVerifyUrl 商品链接
 * @returns {string} prize.prizeBagContentList.prizeImageUrl 图片链接
 * @returns {string} prize.prizeBagContentList.outMerchantId 外部商户id 例如 spi
 * @returns {string} prize.prizeBagContentList.outPrizeId 外部商户商品id,例如 cspi
 * @returns {number} prize.prizeBagContentList.position 奖品位置
 * @returns {string} prize.prizeBagContentList.userPrizeId 用户抽奖记录ID
 * @returns {string} prize.prizeBagContentList.prizeVerifyUrlS 商品链接
 * @returns {string} prize.prizeBagContentList.prizeExt 奖品扩展字段
 * @returns {string} prize.prizeBagContentList.outCouponId 外部券标识
 * @returns {object} prize.prizeBagContentList.prizeExt2 奖品扩展字段（JSON格式）
 * @returns {string} prize.prizeBagContentList.outItemId 奖品类型 {外部奖品id}
 * @returns {object} prize.prizeBagContentList.advertInfo 推啊奖品信息
 * @returns {object} prize.prizeBagContentList.couponCodeInfo 小金盒聚宝盆券码信息
 * @returns {object []} prize.prizeBagContentList.prizeBagContentList 奖品包内容，跟外侧数据结构一样
 * @returns {object} prize.prizeBagContentList.campaignInfo 海豚平台获奖信息
 * @returns {string} prize.prizeBagContentList.externalInfo 外部奖品获奖信息
 * @returns {string} prize.prizeBagContentList.activityPrizeId 活动奖品id
 * @returns {object} prize.prizeBagContentList.outPrizeCommonInfo 外部奖品公共信息-前端用
 * @returns {number} prize.prizeBagContentList.exchangeAmount 兑奖奖品兑换的面额
 *
 *
 * @returns {string} prize.campaignInfo.prizeId 海豚平台奖品id
 * @returns {string} prize.campaignInfo.prizeName 奖品名称
 * @returns {string} prize.campaignInfo.campLogId 活动流水id
 * @returns {string} prize.campaignInfo.campId 活动id
 * @returns {string} prize.campaignInfo.prizeFlag 奖品唯一标识
 * @returns {string} prize.campaignInfo.extendField 拓展字段
 * @returns {boolean} prize.campaignInfo.success 是否成功发奖
 * @returns {string} prize.campaignInfo.displayName  昵称
 * @returns {string} prize.campaignInfo.outPrizeId  外部奖品Id
 * @returns {string} prize.campaignInfo.prizeLogId  支付日志id
 * @returns {string} prize.campaignInfo.usageStatus 核销状态 .
 * @returns {string} prize.campaignInfo.writeOffTime 券核销时间
 * @returns {string} prize.campaignInfo.couponTradeNo 券使用时支付宝交易号,对应trade_no
 * @returns {string} prize.campaignInfo.templateId 券模板id
 * @returns {string} prize.campaignInfo.contributionAccount 出资账号
 * @returns {string} prize.campaignInfo.totalAmount 券总金额
 * @returns {string} prize.campaignInfo.remainingAmount 剩余金额
 * @returns {string []} prize.campaignInfo.outStatus 账单详情
 * @returns {string} prize.campaignInfo.billDetails 拓展字段
 *
 * @returns {string} prize.externalInfo 外部奖品获奖信息
 *
 * @returns {string} prize.outPrizeCommonInfo.outId 外部奖品id
 * @returns {string} prize.outPrizeCommonInfo.outType 外部奖品类型
 * @returns {string} prize.outPrizeCommonInfo.outName 外部奖品名称
 * @returns {string} prize.outPrizeCommonInfo.outPngUrl 外部奖品图片
 * @returns {string} prize.outPrizeCommonInfo.outThumbnailPngUrl 外部奖品缩略图图片
 * @returns {string} prize.outPrizeCommonInfo.outDesc 外部奖品描述
 * @returns {string} prize.outPrizeCommonInfo.outExt 外部奖品扩展字段
 *
 * @returns {string} prize.exchangeAmount 兑奖奖品兑换的面额
 * @returns {number} prize.activityPrizeId 活动奖品id
 */
declare function getTaskFinishAward(params?: any, options?: any): any;

/**
  * 签到区查询连续签到天数/周期内连续签到状态
  * yapi地址：https://yapi.gyjxwh.com/project/284/interface/api/37455
  * @param {string} data.acCode 活动code
  * @param {string} data.lunaSessionId 扶摇会话id
  * @param {string} data.appId 小程序应用id
  * @param {string} data.authCode 支付宝授权code
  *
  * @returns {boolean} success 请求是否成功
  * @returns {string} message 响应提示信息
  * @returns {number} code 响应状态码
  * @returns {string} lunaSessionId 扶摇会话id
  * @returns {string} lunaBuryUid
  * @returns {string} traceNo 扶摇查日志使用
  * @returns {number} timestamp 时间戳
  * @returns {number} result.currentContinueDays 连续签到天数
  * @returns {number} result.obtainableCredit 第二天签到能获得
  * @returns {boolean} result.signedToday 今天是否签到
  * @returns {string} result.creditName 积分名称
  * @returns {number} result.activityTaskRecordList.id 任务完成记录主键Id
  * @returns {number} result.activityTaskRecordList.trId 签到活动任务配置code，全局唯一，确保幂等
  * @returns {number} result.activityTaskRecordList.activityId 活动id
  * @returns {number} result.activityTaskRecordList.taskCode 任务code，全局唯一，确保幂等
  * @returns {string} result.activityTaskRecordList.taskTime 任务开始时间
  * @returns {string} result.activityTaskRecordList.finishTime 任务完成时间
  * @returns {string} result.activityTaskRecordList.taskDesc 任务描述
  * @returns {string} result.activityTaskRecordList.taskStatus 任务状态
  * @returns {string} result.activityTaskRecordList.taskCompKey json格式，保存任务业务值变量
  * @returns {string} result.activityTaskRecordList.remark 备注
  * @returns {number} result.activityTaskRecordList.creditRecord 积分记录
  * @returns {number} result.activityTaskRecordList.signboard 是否签到 0：已签到 1：未签到
  * @returns {number} result.activityTaskRecordList.continuityCount 连续任务次数
  * @returns {string} result.activityTaskRecordList.acPriceBackgroudUrl 背景图片地址
  * @returns {string} result.activityTaskRecordList.detailPicUrl 详情页图片地址
  * @returns {number} result.activityTaskRecordList.activityPrizeId 活动奖品id
  *
  * @returns {number} result.activityTaskRecordList.prize.id 奖品id
  * @returns {number} result.activityTaskRecordList.prize.activityPrizeId 活动奖品id
  * @returns {number} result.activityTaskRecordList.prize.latestVersion 奖品版本号
  * @returns {string} result.activityTaskRecordList.prize.prizeName 奖品名称
  * @returns {string} result.activityTaskRecordList.prize.prizeDesc 奖品描述
  * @returns {string} result.activityTaskRecordList.prize.prizeType 奖品类型
  * @returns {string} result.activityTaskRecordList.prize.prizeVerifyUrl 商品链接
  * @returns {string} result.activityTaskRecordList.prize.prizeImageUrl 图片链接
  * @returns {string} result.activityTaskRecordList.prize.outMerchantId 外部商户id 例如 spi
  * @returns {string} result.activityTaskRecordList.prize.outPrizeId 外部商户商品id,例如 cspi
  * @returns {number} result.activityTaskRecordList.prize.position 奖品位置
  * @returns {string} result.activityTaskRecordList.prize.userPrizeId 用户抽奖记录ID
  * @returns {string} result.activityTaskRecordList.prize.prizeVerifyUrlS 商品链接
  * @returns {string} result.activityTaskRecordList.prize.prizeExt 奖品扩展字段
  * @returns {string} result.activityTaskRecordList.prize.outCouponId 外部券标识
  * @returns {object} result.activityTaskRecordList.prize.prizeExt2 奖品扩展字段（JSON格式）
  * @returns {string} result.activityTaskRecordList.prize.outItemId 外部奖品id
  * @returns {object} result.activityTaskRecordList.prize.advertInfo 推啊奖品信息
  * @returns {object} result.activityTaskRecordList.prize.couponCodeInfo 小金盒聚宝盆券码信息
  * @returns {object[]} result.activityTaskRecordList.prize.prizeBagContentList 奖品包内容
  * @returns {object} result.activityTaskRecordList.prize.campaignInfo 海豚平台获奖信息.
  * @returns {string} result.activityTaskRecordList.prize.externalInfo 外部奖品获奖信息
  * @returns {object} result.activityTaskRecordList.prize.outPrizeCommonInfo 外部奖品公共信息
  * @returns {string} result.activityTaskRecordList.prize.exchangeAmount 兑奖奖品兑换的面额
  *
  * @returns {object} result.activityTaskRecordList.rewardPrize 奖品信息
  * @returns {string} result.activityTaskRecordList.needDraw 前端展示去领奖
  * @returns {boolean} result.activityTaskRecordList.withinSeventyTwoHours 前端展示是否是72小时内
  * @returns {boolean} result.activityTaskRecordList.receiveAwardStatus 前端展示是否领过奖品
  * @returns {number} result.activityTaskRecordList.actrcId 签到活动任务配置code
  *
  * @returns {string} result.activityTaskRecordListLastWeek
  * @returns {string} result.creditUnit 积分单位
  */
declare function queryUserSign(params?: any, options?: any): any;

/**
 * 扶摇-抽奖 /app/activity/draw
 * @param data
 * @param data.acCode 活动编码
 * @param data.appId
 * @param data.drawPosition 抽奖位置，可选，主要是针对翻牌活动
 * @param data.lunaSessionId 会话id
 * @param data.extData 扩展数据，目前存放的是手机号
 * @param options
 * @returns lunaSessionId
 * @returns result
 * @returns result.id
 * @returns result.latestVersion
 * @returns result.outMerchantId
 * @returns result.outPrized
 * @returns result.prizeDesc
 * @returns result.prizeImageUrl
 * @returns result.prizeName
 * @returns result.prizeType
 * @returns result.prizeVerifyUrl
 * @returns result.userPrized
 * @returns result.position
 * @returns result.outCouponId
 * @returns result.advertInfo
 * @returns result.campaignInfo
 * @returns result.couponCodeInfo
 * @returns result.prizeBagContentList 奖品包内容，跟外侧数据结构一样
 */
declare function draw(params?: any, options?: Object): any;

/**
 * 邀请任务/完成邀请任务接口 /app/task/completeInvitation 使用场景：https://gy19pay.yuque.com/rz0bki/qx8no6/vgag30
 * @param {object} data
 * @param {string} data.authCode
 * @param {string} data.shareCode
 * @param {string} data.appId
 * @param {string} data.apmbA
 * @param {object} options
 * @returns
 */
declare function taskCompleteInvitation(params: any, options?: Object): any;

/**
* 获取用户当天活动弹屏限制 /app/task/query/userlimit 使用场景：是否当天首次（签到、首屏弹窗等）的逻辑场景均可以用这个
* @param {object} data
* @param {string} data.acCode
* @param {string} data.alipayUserId
* @param {string} data.gyUserId
* @param {string} data.authType
* @param {string} data.lunaSessionId
* @param {string} data.cycleFlag
* @param {object} options
* @returns
*/
declare function queryUserLimit(params: any, options?: Object): any;

/**
* 查询单个任务详情 /app/task/query/task-one 使用场景：https://gy19pay.yuque.com/rz0bki/qx8no6/vcbucg
* @param {object} data
* @param {string} data.acCode
* @param {string} data.taskId
* @param {string} data.authCode
* @param {string} data.appId
* @param {string} data.authType
* @param {object} options
* @returns
*/
declare function queryTaskOne(params: any, options?: Object): any;

/**
* 查询任务列表   /app/task/query/task  GET
* @param {object} data
* @param {string} data.acCode
* @param {string} data.taskId
* @param {string} data.authCode
* @param {string} data.isSendMessage
* @param {string} data.unionChannel
* @param {string} data.authType
* @param {string} data.apmbA
* @param {object} data.options
* @returns
*/
declare function queryTaskList(params: any, options?: Object): any;

/**
* 获取用户指定条件下完成任务的数量 /app/task/getUserTaskFinshedCount
* @param {object} data
* @param {string} data.acCode
* @param {string} data.condition
* @param {string} data.authType
* @param {object} options
* @returns
*/
declare function getUserTaskFinshedCount(params: any, options?: Object): any;

/**
* 获取用户当天完成任务次数 /app/task/query/frequency
* @param {object} data
* @param {string} data.acCode
* @param {string} data.alipayUserId
* @param {string} data.gyUserId
* @param {string} data.lunaSessionId
* @param {string} data.authType
* @param {object} options
* @returns
*/
declare function getUserFrequency(params: any, options?: Object): any;

/**
 * 邀请任务/获取shareCode 使用场景：https://gy19pay.yuque.com/rz0bki/qx8no6/vgag30
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.authCode
 * @param {string} data.appId
 * @param {string} data.taskId
 * @param {string} data.authType
 * @param {object} options
 * @returns
 */
declare function getTaskShareCode(params: any, options?: Object): any;

/**
 * 事件任务冲鸭信息 /app/task/event/cyInfo
 * @param {object} data
 * @param {string} data.taskId
 * @param {string} data.lunaSessionId
 * @param {object} options
 * @returns
 */
declare function getTaskEventCyInfo(params: any, options?: Object): any;

/**
 * 事件任务参数 /app/task/event/paramInfo
 * @param {object} data
 * @param {string} data.taskId
 * @param {string} data.acCode
 * @param {string} data.apmbA
 * @param {string} data.lunaSessionId
 * @param {object} options
 * @returns
 */
declare function getEventParamInfo(params: any, options?: Object): any;

/**
 * 获取邀请任务被邀请人信息 /app/task/getBeInvitedInfo
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.taskId
 * @param {object} options
 * @returns
 */
declare function getBeInvitedInfo(params: any, options?: Object): any;

/**
 * 完成任务签到并领取奖励 /app/task/finish/v1
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.taskId
 * @param {string} data.extData
 * @param {string} data.lon
 * @param {string} data.lat
 * @param {string} data.networkType
 * @param {string} data.appFlowType
 * @param {string} data.saveFailRecord
 * @param {string} data.appId
 * @param {string} data.au
 * @param {object} options
 * @returns
 */
declare function finishTaskV1(params: any, options?: Object): any;

/**
* 完成任务签到接口,/app/task/finish
* @param {object} data
* @param {string} data.appId
* @param {string} data.authCode
* @param {string} data.lunaSessionId
* @param {string} data.acCode
* @param {string} data.taskId
* @param {string} data.authType
* @param {object} options
* @returns
*/
declare function finishSignTask(params: any, options?: Object): any;

/**
 * 完成任务接口，/app/task/plugin/urlgenerate 任务完成链路几乎100%使用这个接口
 * 之前的/app/task/urlgenerate、/app/task/alipaypoint/urlgenerate都可以使用此接口替换
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.taskId
 * @param {string} data.unionTaskId
 * @param {string} data.unionChannel
 * @param {string} data.authType
 * @param {string} data.authCode
 * @param {string} data.lunaSessionId
 * @param {string} data.apmbA
 * @param {string} data.fenTuiCompleteId
 * @param {string} data.outTaskId
 * @param {string} data.appId
 * @param {string} data.unionTaskType
 * @param {string} data.behaviorParam
 * @param {string} data.unionContent
 * @param {string} data.campaignTaskId
 * @param {string} data.campaignTaskType
 * @param {string} data.apmbA
 * @param {string} data.parentUserPrizeId
 * @param {string} data.appChannel
 * @param {object} options
 * @returns
 */
declare function finishPluginTask(params: any, options?: Object): any;

/**
 * 获取用户点击的云码任务列表 /app/task/clickTaskInfo 使用场景：https://gy19pay.yuque.com/rz0bki/qx8no6/yz2gts
 * @param {object} data
 * @param {string} data.appId
 * @param {string} data.acCode
 * @param {string} data.taskId
 * @param {string} data.unionTaskId
 * @param {string} data.actionType
 * @param {string} data.alipayUid
 * @param {string} data.creditName
 * @param {string} data.creditUnit
 * @param {string} data.taskSubject
 * @param {string} data.rewardValue
 * @param {string} data.taskType
 * @param {string} data.unionTaskType
 * @param {string} data.contentType
 * @param {string} data.shopNick
 * @param {string} data.unionContent
 * @param {object} options
 * @returns
 */
declare function clickTaskInfo(params: any, options?: Object): any;

/**
 * 海豚任务补偿 /app/task/campaign/reissue https://gy19pay.yuque.com/rz0bki/qx8no6/ccg88d
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.taskId
 * @param {string} data.lunaSessionId
 * @param {string} data.appId
 * @param {string} data.authCode
 * @param {object} options
 * @returns
 */
declare function campaignTaskReissue(params: any, options?: Object): any;

/**
 * 海豚任务上报 /app/task/campaign/signUp  https://gy19pay.yuque.com/rz0bki/qx8no6/ccg88d
 * @param {object} data
 * @param {string} data.acCode
 * @param {string} data.taskProcessStatus
 * @param {string} data.taskId
 * @param {string} data.campaignTaskId
 * @param {string} data.lunaSessionId
 * @param {string} data.appId
 * @param {string} data.authCode
 * @param {object} options
 * @returns
 */
declare function campaignSignUp(params: any, options?: Object): any;

/**
   * 查询用户奖品列表 活动中滚动的大奖公示
   * @param {object} params
   * @param {string} params.acCode
   * @returns {object} res
   * @returns {array} res.result list集合
   */
declare function queryWinningPrizeInfo(params?: any, options?: Object): any;

/**
   * 查询用户信息
   * @param {object} params
   * @param {string} params.appid
   * @param {string} params.lunaSessionId
   * @param {string} params.authCode
   * @returns {any}
   */
declare function queryUserInfo(params?: any, options?: Object): any;

/**
   * 查询活动富文本信息 建议使用接口/app/activity/getUiContent代替
   * @param {object} params
   * @param {string} params.acCode
   * @returns {string}
   */
declare function queryRichText(params?: any, options?: Object): any;

/**
   * 查询用户往期开奖记录接口 现聚宝盆活动用
   * @param {object} params
   * @param {string} params.acCode
   * @param {string} params.uid
   * @param {string} params.drawRuleId
   * @param {string} params.drawRuleType
   * @returns {any}
   */
declare function queryPrizeShuffleInfo(params?: any, options?: Object): any;

/**
   * 查询用户奖品列表
   * @param {object} params
   * @param {string} params.acCode
   * @param {string} params.uid
   * @returns {any}
   */
declare function queryPrizeInfo(params?: any, options?: Object): any;

/**
   * 查询用户聚宝盆中奖记录
   * @param {object} params
   * @param {string} params.acCode
   * @param {string} params.stageName
   * @param {string} params.pageNo
   * @param {string} params.pageSize
   * @returns {any}
   */
declare function queryJackpotWinningList(params?: any, options?: Object): any;

/**
   * 查询分期信息
   * @param {object} params
   * @param {string} params.acCode
   * @param {string} params.drawRuleType
   * @returns {any}
   */
declare function queryJackpotStageNameList(params?: any, options?: Object): any;

/**
   * 查询分期信息 现聚宝盆活动用
   * @params {object} params
   * @params {string} params.acCode
   * @params {string} params.drawRuleType
   * @params {string} params.authCode
   * @returns {any}
   */
declare function queryDrawRuleLatest(params?: any, options?: Object): any;

/**
   * 查询海豚券的是否核销
   * @params {object} params
   * @params {string} params.userPrizeId
   * @params {string} params.appId
   * @returns {any}
   */
declare function queryCampaignCouponStatus(params?: any, options?: Object): any;

/**
   * 查询活动uiContent接口
   * @params {object} params
   * @params {string} params.uid
   * @params {string} params.acCode
   * @params {string} params.appId
   * @returns {any}
   */
declare function getUiContent(params?: any, options?: Object): any;

/**
 * 统计活动的抽奖人数和抽奖次数
 * @params {object} params
 * @params {string} params.acCode
 * @params {string} params.countType 数量类别，TOTAL_COUNT抽奖总次数，PERSON_COUNT抽奖总人数
 * @returns code 返回代码 {number}
 * @returns lunaBuryUid {string}
 * @returns lunaSessionId {string}
 * @returns message 返回处理消息 {string}
 * @returns result {number} 活动的抽奖人数和抽奖次数
 * @returns success {boolean}
 * @returns timestamp {number}
 * @returns traceNo {string}
 */
declare function getAcCount(params?: any, options?: Object): any;

/**
 * /**
   * 实物奖品领取 (填写姓名、电话、地址、身份证号)
   * @params {object} params
   * @params {string} params.id 用户抽奖记录id
   * @params {string} params.name 用户姓名
   * @params {string} params.phone 用户手机号
   * @params {string} params.address 用户地址
   * @params {string} params.drawType 抽奖类型,PHONE_RED_PACKET话费红包(只用手机号)，IN_KIND实物(手机、地址、姓名),COUPON_CODE券码类型抽奖，DRAW_TICKET天天锦鲤实物奖品.PRIZE_BAG奖品包奖品
   * @params {string} params.lunaSessionId
   * @params {string} params.idNumber 身份证号码
   * @params {string} params.prizeIdInPrizeBag 奖品包中的prizeId，只有奖品包需要用
   * @params {string} params.ext
   * @params {string} params.orderStatus
   * @params {string} params.ip
   * @returns {any}
   */
declare function addWinnningInfo(params: any, options?: Object): any;

/**
* getActivityInfo，查询活动信息接口，/app/activity/info/all， yapi链接：https://yapi.gyjxwh.com/project/284/interface/api/29762
* @params {object} params
* @params {string} params.acCode【必传】活动编码 {string}
* @params {string} params.authCode 支付宝校验码或者微信校验码（非加密模式）{string}
* @params {string} params.appId 应用id（非加密模式）{string}
* @returns res 返回代码 {number}
* @returns code 返回代码 {number}
* @returns lunaBuryUid {string}
* @returns lunaSessionId {string}
* @returns message 返回处理消息 {string}
* @returns result
* @returns result.acCode 活动外链 {string}
* @returns result.acEndTime 活动结束时间 {string}
* @returns result.acStartTime 活动开始时间 {string}
* @returns result.acStatus 活动状态 TRIAL_VERSION体验版，ONLINE上线，OFFLINE下线，TERM终止 {string}
* @returns result.acTitle 活动标题 {string}
* @returns result.decParams 解密后的参数拼接字符串 {string}
* @returns result.id 主键id {number}
* @returns result.isDrawVO
* @returns result.isDrawVO.errorCode {number}
* @returns result.isDrawVO.isDraw 是否有抽奖资格,true为有，false为无 {boolean}
* @returns result.isDrawVO.msg 抽奖结果描述语言 {string}
* @returns result.isDrawVO.remainingCount 剩余抽奖次数 {number}
* @returns result.uiContent ui数据JSON字符串 {string}
* @returns success {boolean}
* @returns timestamp {number}
* @returns traceNo {string}
*/
declare function getActivityInfo(params?: any, options?: Object): any;

/** 扶摇工具类 */
declare class FY {
    /** 平台对象 */
    private _engine;
    _modules: any;
    store: any;
    request: Function;
    get: Function;
    post: Function;
    setStore: Function;
    constructor(engine: any);
}

declare const _default: {
    common: {
        getActivityInfo: typeof getActivityInfo;
        addWinnningInfo: typeof addWinnningInfo;
        getAcCount: typeof getAcCount;
        getUiContent: typeof getUiContent;
        queryCampaignCouponStatus: typeof queryCampaignCouponStatus;
        queryDrawRuleLatest: typeof queryDrawRuleLatest;
        queryJackpotStageNameList: typeof queryJackpotStageNameList;
        queryJackpotWinningList: typeof queryJackpotWinningList;
        queryPrizeInfo: typeof queryPrizeInfo;
        queryPrizeShuffleInfo: typeof queryPrizeShuffleInfo;
        queryRichText: typeof queryRichText;
        queryUserInfo: typeof queryUserInfo;
        queryWinningPrizeInfo: typeof queryWinningPrizeInfo;
    };
    task: {
        campaignSignUp: typeof campaignSignUp;
        campaignTaskReissue: typeof campaignTaskReissue;
        clickTaskInfo: typeof clickTaskInfo;
        finishPluginTask: typeof finishPluginTask;
        finishSignTask: typeof finishSignTask;
        finishTaskV1: typeof finishTaskV1;
        getBeInvitedInfo: typeof getBeInvitedInfo;
        getEventParamInfo: typeof getEventParamInfo;
        getTaskEventCyInfo: typeof getTaskEventCyInfo;
        getTaskShareCode: typeof getTaskShareCode;
        getUserFrequency: typeof getUserFrequency;
        getUserTaskFinshedCount: typeof getUserTaskFinshedCount;
        queryTaskList: typeof queryTaskList;
        queryTaskOne: typeof queryTaskOne;
        queryUserLimit: typeof queryUserLimit;
        taskCompleteInvitation: typeof taskCompleteInvitation;
    };
    draw: {
        draw: typeof draw;
    };
    sign: {
        queryUserSign: typeof queryUserSign;
        getTaskFinishAward: typeof getTaskFinishAward;
        getTaskSignIn: typeof getTaskSignIn;
        queryUserSignV1: typeof queryUserSignV1;
    };
    point: {
        queryAlipayPointBalance: typeof queryAlipayPointBalance;
        queryAlipayPointList: typeof queryAlipayPointList;
        queryCreditBalance: typeof queryCreditBalance;
        queryIntegral: typeof queryIntegral;
    };
    jjWallet: {
        getBulletChatMsg: typeof getBulletChatMsg;
        getJJqbMatchInfo: typeof getJJqbMatchInfo;
        getJoinRecord: typeof getJoinRecord;
        queryCashAmount: typeof queryCashAmount;
        queryCashAmountDetails: typeof queryCashAmountDetails;
        queryStatisticsNumber: typeof queryStatisticsNumber;
        saveStatisticsNumber: typeof saveStatisticsNumber;
    };
    jinli: {
        addShareNum: typeof addShareNum;
        addttjlMsgSubscription: typeof addttjlMsgSubscription;
        getBulletChat: typeof getBulletChat;
        queryLuckyAlarmDetail: typeof queryLuckyAlarmDetail;
        queryLuckyAlarmList: typeof queryLuckyAlarmList;
        queryPrizeJackpotList: typeof queryPrizeJackpotList;
        queryShareNum: typeof queryShareNum;
        queryStrollCount: typeof queryStrollCount;
        queryttjlMsgSubscription: typeof queryttjlMsgSubscription;
        queryUserPrize: typeof queryUserPrize;
        queryUserShareInfo: typeof queryUserShareInfo;
        queryWinInfoByUserPrizeId: typeof queryWinInfoByUserPrizeId;
        saveClickStatisticsUv: typeof saveClickStatisticsUv;
        saveStrollCount: typeof saveStrollCount;
        saveUserShareInfo: typeof saveUserShareInfo;
        updateReadStatus: typeof updateReadStatus;
    };
    tuia: {
        advertEventReport: typeof advertEventReport;
    };
    message: {
        addMsgSubscription: typeof addMsgSubscription;
        batchAddMsgSubscription: typeof batchAddMsgSubscription;
        batchQueryMsgSubscription: typeof batchQueryMsgSubscription;
        delMsgSubscription: typeof delMsgSubscription;
        qryMsgSubscription: typeof qryMsgSubscription;
    };
    exchange: {
        exchange: typeof exchange;
        exchangeDraw: typeof exchangeDraw;
        queryAwardList: typeof queryAwardList;
        queryUnDuplicateList: typeof queryUnDuplicateList;
    };
    dv: {
        queryByAcCodesAndCampIds: typeof queryByAcCodesAndCampIds;
    };
} & FY;

export { _default as default };
