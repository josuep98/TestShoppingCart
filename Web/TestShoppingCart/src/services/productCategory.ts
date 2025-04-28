import { AxiosResponse } from "axios";
import { BaseResponse } from "../types/response/baseResponse";
import { ProductCategory } from "../types/response/productCategory/productCategory";
import { axiosInstance } from "./axiosInstance";

export async function getAllProducts(): Promise<BaseResponse<ProductCategory[]>> {
    const response: AxiosResponse<BaseResponse<ProductCategory[]>> = await axiosInstance.get<BaseResponse<ProductCategory[]>>('/ProductCategory/getAll');
    return response.data;
}