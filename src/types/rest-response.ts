export type RestResponse<T> = {
    status: string;
    message: string;
    errorDetail: string | null;
    data: T;
    path: string;
    timestamp: string;
};
