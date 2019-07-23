// api接口的统一管理
import { post } from './http'

// 比如:http://www.baiodu.com/api/v1/users/my_address/address_edit_before  有这样一个请求

export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p)
