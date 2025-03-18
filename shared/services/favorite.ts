import { Media } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./constants";

export const getFavorite = async (query: string): Promise<Media[]> => {
    const { data } = await axiosInstance.get<Media[]>(
        ApiRoutes.SEARCH_RELATED_WITH_USER_FAVORITE,
        {params: {query}}
    );

    return data
}