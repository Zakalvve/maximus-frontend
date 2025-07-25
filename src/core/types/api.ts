import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export type QueryParamsOrUndefined = object | undefined
export type QueryParams = Exclude<QueryParamsOrUndefined, undefined>
export type QueryResult = unknown

export type QueryFactoryOptions = { pagination?: boolean; sorting?: boolean } | undefined;

export interface PagedQuery extends QueryParams {
    page: number;
    perPage: number;
}

export interface SortableQuery extends QueryParams {
    sortColumnName: string;
    isAsc: boolean;
    sortableColumns?: string[];
}

export interface PagedResponse<TData> {
    items: TData[];
    totalCount: number;
}


// Ensures correct query parameters when pagination/sorting are enabled
export type QueryFactoryParams<TParams extends QueryParamsOrUndefined, TOptions extends QueryFactoryOptions> = TParams &
    (TOptions extends { pagination: true } ? PagedQuery : object) &
    (TOptions extends { sorting: true } ? SortableQuery : object);

// Ensures correct query response type when pagination is enabled
export type QueryFactoryResult<TResult extends QueryResult, TOptions extends QueryFactoryOptions> = TOptions extends { pagination: true }
    ? PagedResponse<TResult>
    : TResult;

export type MutationDataOrUndefined = object | undefined
export type MutationData = Exclude<MutationDataOrUndefined, undefined>
export type MutationResult = unknown

export type TrackedMutationState = 'idle' | 'pending' | 'success' | 'error';

export interface TrackedMutationUIStates {
    idle: string;
    pending: string;
    success?: string;
    error?: string;
}

export type UseTanstackMutationParams<
    TVariables extends MutationDataOrUndefined = undefined,
    TData extends MutationResult = void,
    TContext = unknown> =
    [
        mutationFn: (data: TVariables) => Promise<TData>,
        states?: TrackedMutationUIStates,
        resetDelay?: number,
        options?: Omit<UseMutationOptions<TData, AxiosError, TVariables, TContext>, 'mutationFn'>
    ]

export type ISOString = string & { __brand: 'ISOString' }