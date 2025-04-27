"use client"

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { MutationDataOrUndefined, MutationResult, TrackedMutationState, UseTanstackMutationParams } from "../types/api";



export function useTanstackMutation<
    TVariables extends MutationDataOrUndefined = undefined,
    TData extends MutationResult = void,
    TContext = unknown
>(
    ...params: UseTanstackMutationParams<TVariables, TData, TContext>
) {
    const [ mutationFn, states, resetDelay = 0, options = {} ] = params;

    const [uiState, setUiState] = useState<TrackedMutationState>('idle');
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const mutation = useMutation<TData, AxiosError, TVariables, TContext>({
        mutationFn,
        ...options,
        onMutate: async (vars) => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            setUiState('pending');
            return options.onMutate?.(vars);
        },
        onSuccess: async (data, vars, ctx) => {
            setUiState('success');
            options.onSuccess?.(data, vars, ctx);
        },
        onError: async (error, vars, ctx) => {
            setUiState('error');
            options.onError?.(error, vars, ctx);
        },
        onSettled: async (data, error, vars, ctx) => {
            options.onSettled?.(data, error, vars, ctx);

            timeoutRef.current = setTimeout(() => {
                setUiState('idle');
            }, resetDelay);
        },
    });

    // Convert internal state to UI text
    const statusText =
        uiState === 'idle'
            ? states?.idle
            : uiState === 'pending'
                ? states?.pending
                : uiState === 'success'
                    ? states?.success ?? states?.idle
                    : states?.error ?? states?.idle;

    return {
        ...mutation,
        uiState,
        statusText,
        isPending: uiState === 'pending',
    };
}