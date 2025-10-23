import { useCallback, useEffect, useState } from "react";

type AsyncStatus = "idle" | "pending" | "success" | "error";

interface AsyncState<TData> {
  data: TData | null;
  error: Error | null;
  status: AsyncStatus;
}

interface UseAsyncOptions<TArgs extends unknown[]> {
  immediate?: boolean;
  initialArgs?: TArgs;
}

interface ErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (value: unknown): value is ErrorWithMessage => {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof (value as { message: unknown }).message === "string"
  );
};

const normalizeError = (value: unknown): Error => {
  if (value instanceof Error) {
    return value;
  }

  if (isErrorWithMessage(value)) {
    return new Error(value.message);
  }

  try {
    return new Error(JSON.stringify(value));
  } catch {
    return new Error(String(value));
  }
};

/**
 * Generic async hook to manage the lifecycle of promise-based operations.
 * Handles loading, success, and error states in a type-safe manner.
 */
function useAsync<TResult, TArgs extends unknown[] = []>(
  asyncFunction: (...args: TArgs) => Promise<TResult>,
  options: UseAsyncOptions<TArgs> = {}
) {
  const { immediate = true, initialArgs } = options;
  const [state, setState] = useState<AsyncState<TResult>>({
    data: null,
    error: null,
    status: "idle",
  });

  const execute = useCallback(
    async (...args: TArgs) => {
      setState((prev) => ({
        ...prev,
        status: "pending",
        error: null,
      }));

      try {
        const data = await asyncFunction(...args);
        setState({
          data,
          error: null,
          status: "success",
        });
        return data;
      } catch (error) {
        const normalized = normalizeError(error);
        setState({
          data: null,
          error: normalized,
          status: "error",
        });
        throw normalized;
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (!immediate) {
      return;
    }

    void execute(
      ...((initialArgs ?? []) as unknown as TArgs)
    );
  }, [execute, immediate, initialArgs]);

  const reset = useCallback(() => {
    setState({
      data: null,
      error: null,
      status: "idle",
    });
  }, []);

  return { ...state, execute, reset } as const;
}

export type { AsyncState, AsyncStatus, UseAsyncOptions };
export { useAsync, isErrorWithMessage };
