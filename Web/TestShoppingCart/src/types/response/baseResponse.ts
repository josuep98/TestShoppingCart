export interface BaseResponse<T> {
    statusCode: number;
    result: T | null;
}  