import { UseQueryResult } from "@tanstack/react-query";
import { useQueryFactory } from "@/core/hooks/useQueryFactory";
import { QueryParams, QueryResult, QueryFactoryOptions, QueryFactoryParams, QueryFactoryResult } from "../types/api";

export function withDataFactory<
    TParams extends QueryParams = QueryParams, 
    TResult extends QueryResult = QueryResult, 
    TOptions extends QueryFactoryOptions = QueryFactoryOptions
>(
    queryHook: (params: QueryFactoryParams<TParams, TOptions>) => UseQueryResult<QueryFactoryResult<TResult, TOptions>, Error>,
    options?: TOptions
) {
    return function HOC<TProps extends object = object>(
        WrappedComponent: React.ComponentType<
        TProps & ReturnType<typeof useQueryFactory<TResult, TParams, TOptions>>
        >
    ) {
        return function DataProviderComponent(props: TProps & { params?: QueryFactoryParams<TParams, TOptions> }) {
            const queryResult = useQueryFactory(queryHook, props.params, options);
            return <WrappedComponent {...props} {...queryResult} />;
        };
    };
}