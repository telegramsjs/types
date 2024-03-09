/**
 * Represents the response from the API, which can be either a success or an error.
 * If 'ok' is true, the request was successful, and the result of the query can be found in the 'result' field.
 * In case of an unsuccessful request, 'ok' is false, and the error is explained in the 'description' field.
 * An optional 'error_code' field of type number may be returned, but its contents are subject to change in the future.
 * Some errors may also have an additional 'parameters' field of type ResponseParameters,
 * which can provide information to automatically handle the error.
 */
export type ApiResponse<T> = ApiError | ApiSuccess<T>;

/**
 * Represents an API error response.
 */
export interface ApiError {
  ok: false;
  error_code: number;
  description: string;
  parameters?: ResponseParameters;
}

/**
 * Represents a successful API response.
 * 'ok' is true, and the result of the query can be found in the 'result' field.
 */
export interface ApiSuccess<T> {
  ok: true;
  result: T;
}

/**
 * Describes additional parameters provided in an API error response.
 */
export interface ResponseParameters {
  /** The group has been migrated to a supergroup with the specified identifier. */
  migrate_to_chat_id?: number;
  /**
   * In case of exceeding flood control, the number of seconds left to wait before the request can be repeated.
   */
  retry_after?: number;
}

/**
 * All methods in the Bot API are case-insensitive.
 * All queries must be made using UTF-8.
 */
