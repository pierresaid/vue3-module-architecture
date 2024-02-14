import axios, { type AxiosInstance } from 'axios'

export class HttpClient {
  private readonly instance: AxiosInstance;
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.instance = axios.create({ baseURL: baseUrl })
    this.baseUrl = baseUrl
  }

  /**
   * Http GET `url`
   * @param params Query Params
   * @param route
   */
  async get<T = any>(route: string = '', params: Record<string, unknown> = {}) {
    const { data } = await this.instance.get<T>(`${this.baseUrl}${route}`, { params })
    return data
  }

  /**
   * Http POST `url`
   * @param body
   * @param params Query Params
   * @param route
   */
  async post<T = any>(route: string = '', body: Record<string, unknown> = {}, params: Record<string, unknown> = {}) {
    const { data } = await this.instance.post<T>(`${this.baseUrl}${route}`, body, { params })
    return data
  }

  /**
   * Http PUT `url`
   * @param body
   * @param params Query Params
   * @param route
   */
  async put<T = any>( route: string = '', body: Record<string, unknown>, params: Record<string, unknown> = {}) {
    const { data } = await this.instance.put<T>(`${this.baseUrl}${route}`, body, { params })
    return data
  }

  /**
   * Http PUT `url`
   * @param body
   * @param params Query Params
   * @param route
   */
  async patch<T = any>(route: string = '', body: Record<string, unknown> = {}, params: Record<string, unknown> = {}) {
    const { data } = await this.instance.patch<T>(`${this.baseUrl}${route}`, body, { params })
    return data
  }

  /**
   * Http DELETE `url`
   * @param params Query Params
   * @param route
   */
  async delete<T = any>(route: string = '', params: Record<string, unknown> = {}) {
    const { data } = await this.instance.delete<T>(`${this.baseUrl}${route}`, { params })
    return data
  }
}
