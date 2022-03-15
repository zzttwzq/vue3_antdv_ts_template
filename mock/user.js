import Mock from 'mockjs'
import { LOGIN } from '@/api/'

Mock.mock(LOGIN, 'post', ({ body }) => {
    console.log(body)

    const dataArr = Mock.mock({
        'message': '@GOODS',
        'data': {
            'roleId|+1': 0,
        },
    }).list

    return dataArr
})