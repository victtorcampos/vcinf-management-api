export interface SuccessResponse<T> {
    success: true;
    data: T;
}

export interface ErrorResponse {
    success: false;
    error: {
        message: string;
        code?: string;
    };
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export const handleSuccess = <T>(data: T): SuccessResponse<T> => ({
    success: true,
    data,
});

export const handleError = (message: string, code?: string): ErrorResponse => ({
    success: false,
    error: { message, code },
});
