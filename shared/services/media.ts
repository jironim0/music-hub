import { Media } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Media[]> => {
    const { data } = await axiosInstance.get<Media[]>(
        ApiRoutes.SEARCH_MEDIA,
        {params: {query}}
    );

    return data
}