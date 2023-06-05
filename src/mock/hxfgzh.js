import Mock from "mockjs";
let dataList = [
    {
        name:'江苏苏鹰信息科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'2000'
    },
    {
        name:'江苏苏鹰信息科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'2000'
    },
    {
        name:'江苏苏鹰信息科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'2000'
    },
    {
        name:'江苏苏鹰信息科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'2000'
    },
    {
        name:'江苏苏鹰信息科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'2000'
    }
]

let dataListTwo = [
    {
        name:'江苏中软国际科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'3000'
    },
    {
        name:'江苏中软国际科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'3000'
    },
    {
        name:'江苏中软国际科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'3000'
    },
    {
        name:'江苏中软国际科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'3000'
    },
    {
        name:'江苏中软国际科技有限公司',
        date:'2022/03/22',
        position:'快递分拣员',
        money:'3000'
    }
]
Mock.mock('/xmdt','get',option =>  {
    const { username,password,value} = JSON.parse(option.body)
    if (username == 'lhd' && password == '211314' && value =='xmdt') {
      return {
        dataList,
        code: 200,
        msg: '获取成功'
      }
    } else {
      return {
        dataListTwo,
        code: 200,
        msg: '获取失败'
      }
    }
})