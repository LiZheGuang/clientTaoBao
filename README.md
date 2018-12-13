[TOC]

### POST /commodity/creation
#### 创建商品
> 创建商品

输入参数：


```javascript
{
	"category":"book", 
	"title":"洋葱数学物理七年级快速提分高效班",
	"marketRprice":8500,
	"salePrice":6500,
	"promotionPrice":5500,
	"promotionEndTime":"1544177129002",
	"picture":["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782013&di=0fc4b5dbb2d7a9996997c8da97cb9852&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2018%2F0426%2F20180426035739175560.jpg"],
	"press":"中华人民大学出版社",
	"skuData":{
		"repertory":1499
	}
}
```
* `200`:

```javascript
{
    code:200
}
```

* * *

### PUT /commodity/creation
> 修改商品（暂支持tile,与商品价salePrice）

```javascript
{
	"id":"5c0a49f99c5e4ccad36d9276",
	"title":"最新修改的",
	"salePrice":6666
}
```

* * *

### POST /commodity/editStatus
>商品上下架

@id 
@status 1上架 0下架

```javascript
{
	"id":"5c0a49f99c5e4ccad36d9276",
	"status":1
}
```

* * *

### GET /commodity/list
> 通过status状态来查询商品 
> 0未上架商品
> 1上架商品

```javascript
{
    status:0
}
```

**返回示例**
* `200`:

```javascript
{
    "code": 200,
    "list": [
        {
            "picture": [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782013&di=0fc4b5dbb2d7a9996997c8da97cb9852&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2018%2F0426%2F20180426035739175560.jpg"
            ],
            "status": 1,
            "_id": "5c0a49f99c5e4ccad36d9276",
            "category": "book",
            "title": "最新修改的",
            "marketRprice": 8500,
            "salePrice": 6666,
            "promotionPrice": 5500,
            "promotionEndTime": "1544177129002",
            "press": "中华人民大学出版社",
            "skuData": {
                "repertory": 1499
            },
            "creationTime": "2018-12-07T10:22:49.413Z",
            "__v": 0
        }
    ]
}
```
* * *

### GET /commodity/title

>返回某个名称的商品（上架中的） 
>分页暂未开发

```javascript
{
    title:"商品查询"
}
```
**返回值**

*`200`:

```javascript
{
    "code": 200,
    "list": [
        {
            "picture": [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782013&di=0fc4b5dbb2d7a9996997c8da97cb9852&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2018%2F0426%2F20180426035739175560.jpg"
            ],
            "status": 1,
            "_id": "5c0e10cc6d7580faaadf0878",
            "category": "video",
            "title": "洋葱小帅",
            "marketRprice": 8500,
            "salePrice": 6500,
            "promotionPrice": 5500,
            "promotionEndTime": "1544177129002",
            "press": "中华人民大学出版社",
            "skuData": {
                "repertory": 1499
            },
            "creationTime": "2018-12-10T07:07:56.123Z",
            "__v": 0
        }
    ]
}
```

* * *

### GET/commodity/detail

> 获取商品详情

```javascript
{
id:"5c0e10dd6d7580faaadf0879"
}
```

* `200`:

```javascript
{
    "code": 200,
    "data": {
        "picture": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782013&di=0fc4b5dbb2d7a9996997c8da97cb9852&imgtype=jpg&er=1&src=http%3A%2F%2Fimage13.m1905.cn%2Fuploadfile%2F2018%2F0426%2F20180426035739175560.jpg"
        ],
        "status": 1,
        "_id": "5c0e10dd6d7580faaadf0879",
        "category": "book",
        "title": "淘气包马小跳",
        "marketRprice": 8500,
        "salePrice": 6500,
        "promotionPrice": 5500,
        "promotionEndTime": "1544177129002",
        "press": "中华人民大学出版社",
        "skuData": {
            "repertory": 1499
        },
        "creationTime": "2018-12-10T07:08:13.418Z",
        "__v": 0
    }
}
```

### POST /press
>创建出版社
```javascript
{
	"pressName":"海南出版社",
	"site":"北京朝阳区人民路",
	"officialUrl":"http://www.bjrmcbs.com",
	"phone":"123456"
}
```

* `200:`

```javascript
{
    "code": 200,
    "msg": "出版社创建成功"
}
```

* * *

### POST /user
#### 创建用户
>创建用户
```javascript
{
	"account":"18810798237",
	"password":"123"
}
```

* `200:`
```javascript
{
    "code": 200,
    "msg": "注册完成",
    "token":""
}
```

### POST /commodity/shoppingCart    
#### 加入购物车
> 加入购物车
```javascript
{
	"abbrId":"5c10ba34292d356ea3adc0a8",
	"amount":10,
	"userId":"5c10c3fe88532770d91d26b0"
}
```

* `200:`

```javascript
{
    "code": 200,
    "data": "加入购物车成功"
}
```

* * *

### POST /order/verify 
#### 确认订单
>确认订单

```javascript
{
	"abbrId":"5c10ba34292d356ea3adc0a8",
	"userId":"5c10c3fe88532770d91d26b0",
	"price":5500,
	"amount":10
}
```

* `200:`

```javascript
{
    "code": 200,
    "msg": "确认订单",
    "data": {
        "orderTitle": "淘气包马小跳上集",
        "version": "亚马逊精选版",
        "picture": [
            {
                "_id": "5c10ba34292d356ea3adc0a9",
                "url": "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E4%B8%89%E4%BD%93&step_word=&hs=0&pn=12&di=91572017350&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=777645829%2C1873139044&os=2373354084%2C1656594747&simid=0%2C0&adpicid=0&lpn=0&ln=1805&fr=&fmq=1544512931149_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171005%2Ff7073fce3f454b44a1376aa4310b7dff.jpeg&gsm=3c&rpstart=0&rpnum=0&tabname=&islist=&querylist=&selected_tags=",
                "urlTitle": "淘气包马小跳"
            }
        ],
        "price": 55000,
        "shoppingData": {
            "_id": "5c10d5aedb2dfa74d3e69a85",
            "price": 5500,
            "goodsId": "5c10ba34292d356ea3adc0a7",
            "abbrId": "5c10ba34292d356ea3adc0a8",
            "amount": 10,
            "userId": "5c10c3fe88532770d91d26b0",
            "creationTime": "2018-12-12T09:32:30.777Z",
            "__v": 0
        },
        "userInfo": {
            "nickName": "洋葱小葱",
            "avatarUrl": "",
            "gender": 0,
            "_id": "5c10c3fe88532770d91d26b0",
            "__v": 0
        }
    }
}
```

* * *

### POST /order
#### 生成订单
>生成订单

```javascript
{
	"abbrId":"5c10ba34292d356ea3adc0a8",
	"userId":"5c10c4ec88532770d91d26b1",
	"orderPrice":55000,
	"amount":10
}
```


### POST /order/call

#### 取消订单

>取消订单

```javascript
{
	"orderId":"5c11fdb714eb041c5a397fb8"
}
```

* * *

### GET /order

#### 订单详情
>订单详情

```javascript
{
    orderId:'5c121a5f9bd83434359ecfad'
}
```

* `200:`

```javascript
{
    "code": 200,
    "data": {
        "_id": "5c121a5f9bd83434359ecfad",
        "orderPrice": 55000,
        "amount": 15,
        "orderTitle": "淘气包马小跳上集",
        "version": "亚马逊精选版",
        "status": 0,
        "userId": {
            "nickName": "洋葱小葱",
            "avatarUrl": "",
            "_id": "5c10c4ec88532770d91d26b1",
            "account": "18810798231"
        },
        "profile": "天通苑西园一区",
        "abbrId": {
            "_id": "5c10ba34292d356ea3adc0a8",
            "title": "淘气包马小跳上集",
            "version": "亚马逊精选版",
            "picture": [
                {
                    "_id": "5c10ba34292d356ea3adc0a9",
                    "url": "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E4%B8%89%E4%BD%93&step_word=&hs=0&pn=12&di=91572017350&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=777645829%2C1873139044&os=2373354084%2C1656594747&simid=0%2C0&adpicid=0&lpn=0&ln=1805&fr=&fmq=1544512931149_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171005%2Ff7073fce3f454b44a1376aa4310b7dff.jpeg&gsm=3c&rpstart=0&rpnum=0&tabname=&islist=&querylist=&selected_tags=",
                    "urlTitle": "淘气包马小跳"
                }
            ],
            "goodsId": "5c10ba34292d356ea3adc0a7"
        },
        "pressesId": {
            "_id": "5c10b0f145253d6299773068",
            "pressName": "北京出版社",
            "site": "北京朝阳区人民路",
            "officialUrl": "http://www.bjrmcbs.com",
            "phone": "123456"
        },
        "creationTime": "2018-12-13T08:37:51.720Z"
    }
}
```