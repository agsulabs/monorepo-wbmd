import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { AppControllerHealthData, AppControllerLiveData, AppControllerReadyData } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
export declare const appControllerHealth: <ThrowOnError extends boolean = false>(options?: Options<AppControllerHealthData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").HealthResponseDto, unknown, ThrowOnError, "fields">;
export declare const appControllerLive: <ThrowOnError extends boolean = false>(options?: Options<AppControllerLiveData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<{
    status?: string;
    info?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    error?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    details?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    };
}, {
    status?: string;
    info?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    error?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    details?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    };
}, ThrowOnError, "fields">;
export declare const appControllerReady: <ThrowOnError extends boolean = false>(options?: Options<AppControllerReadyData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<{
    status?: string;
    info?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    error?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    details?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    };
}, {
    status?: string;
    info?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    error?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    } | null;
    details?: {
        [key: string]: {
            status: string;
            [key: string]: unknown | string;
        };
    };
}, ThrowOnError, "fields">;
//# sourceMappingURL=sdk.gen.d.ts.map