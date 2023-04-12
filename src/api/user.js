import { TEST, } from '@/api/'
import { request, METHOD } from '@/utils/request'

export async function test(params) {
    return request(TEST, METHOD.POST, params ? params : {})
}