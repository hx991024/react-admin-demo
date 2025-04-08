import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { get } from 'lodash-es'

const createService = () => {
  const service = axios.create()
  // 请求拦截器
  service.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  )
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      const resData = response.data
      const resCode = resData.code
      switch (resCode) {
        case 200:
          return resData
        case 500:
          message.error(resData.message)
          return resData
        default:
          return resData
      }
    },
    error => {
      // Status 是 HTTP 状态码
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '登录过期，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求地址出错'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP 版本不受支持'
          break
        default:
          break
      }
      return Promise.reject(error)
    }
  )
  return service
}

const createRequestFunction = (service: AxiosInstance) => {
  return <T>(config: AxiosRequestConfig): Promise<T> => {
    const configDefault = {
      headers: {
        // 携带 Token
        // Authorization: getToken(),
        'Content-Type': get(config, 'headers.Content-Type', 'application/json'),
      },
      timeout: 30 * 60 * 1000,
      baseURL: import.meta.env.VITE_BASE_API,
      data: {},
    }
    return service(Object.assign(configDefault, config))
  }
}

/** 用于网络请求的实例 */
export const service = createService()
/** 用于网络请求的方法 */
export const request = createRequestFunction(service)
