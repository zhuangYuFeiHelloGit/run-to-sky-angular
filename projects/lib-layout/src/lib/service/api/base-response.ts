export interface BaseResponse<T> {
    data: T,
    message: string,
    code: number
}