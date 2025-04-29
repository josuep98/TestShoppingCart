import { AxiosResponse } from "axios";
import { BaseResponse } from "../types/response/baseResponse";
import { axiosInstance } from "./axiosInstance";
import { PurchaseItem } from "../types/request/purchase";

export async function saveProducts(request: PurchaseItem[]): Promise<BaseResponse<string>> {
    const response: AxiosResponse<BaseResponse<string>> = await axiosInstance.post<BaseResponse<string>>('/Purchase/save', request);
    return response.data;
}