import type { User } from "./manageTypes";

/**
 * This interface represents a labeled portion of the price for goods or services.
 */
export interface LabeledPrice {
  /** The label of the portion. */
  label: string;
  /**
   * The price of the product in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, the amount would be 145.
   * See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
   * (2 for the majority of currencies).
   */
  amount: number;
}

/**
 * This interface contains basic information about an invoice.
 */
export interface Invoice {
  /** The name of the product. */
  title: string;
  /** The description of the product. */
  description: string;
  /** A unique bot deep-linking parameter that can be used to generate this invoice. */
  start_parameter: string;
  /** The three-letter ISO 4217 currency code. */
  currency: string;
  /**
   * The total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, the total_amount would be 145.
   * See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
   * (2 for the majority of currencies).
   */
  total_amount: number;
}

/**
 * This interface represents a shipping address.
 */
export interface ShippingAddress {
  /** The two-letter ISO 3166-1 alpha-2 country code. */
  country_code: string;
  /** The state, if applicable. */
  state: string;
  /** The city. */
  city: string;
  /** The first line for the address. */
  street_line1: string;
  /** The second line for the address. */
  street_line2: string;
  /** The address postal code. */
  post_code: string;
}

/**
 * This interface represents information about an order.
 */
export interface OrderInfo {
  /** The user's name. */
  name?: string;
  /** The user's phone number. */
  phone_number?: string;
  /** The user's email. */
  email?: string;
  /** The user's shipping address. */
  shipping_address?: ShippingAddress;
}

/**
 * This interface represents a shipping option.
 */
export interface ShippingOption {
  /** The shipping option identifier. */
  id: string;
  /** The title of the option. */
  title: string;
  /** The list of price portions. */
  prices: LabeledPrice[];
}

/**
 * This interface contains basic information about a successful payment.
 */
export interface SuccessfulPayment {
  /** The three-letter ISO 4217 currency code. */
  currency: string;
  /**
   * The total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, the total_amount would be 145.
   * See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
   * (2 for the majority of currencies).
   */
  total_amount: number;
  /** The bot-specified invoice payload. */
  invoice_payload: string;
  /** The identifier of the shipping option chosen by the user. */
  shipping_option_id?: string;
  /** The order information provided by the user. */
  order_info?: OrderInfo;
  /** The Telegram payment identifier. */
  telegram_payment_charge_id: string;
  /** The provider payment identifier. */
  provider_payment_charge_id: string;
}

/**
 * This interface contains information about an incoming shipping query.
 */
export interface ShippingQuery {
  /** The unique query identifier. */
  id: string;
  /** The user who sent the query. */
  from: User;
  /** The bot-specified invoice payload. */
  invoice_payload: string;
  /** The user-specified shipping address. */
  shipping_address: ShippingAddress;
}

/**
 * This interface contains information about an incoming pre-checkout query.
 */
export interface PreCheckoutQuery {
  /** The unique query identifier. */
  id: string;
  /** The user who sent the query. */
  from: User;
  /** The three-letter ISO 4217 currency code. */
  currency: string;
  /**
   * The total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45, the total_amount would be 145.
   * See the 'exp' parameter in currencies.json for the number of digits past the decimal point for each currency
   * (2 for the majority of currencies).
   */
  total_amount: number;
  /** The bot-specified invoice payload. */
  invoice_payload: string;
  /** The identifier of the shipping option chosen by the user. */
  shipping_option_id?: string;
  /** The order information provided by the user. */
  order_info?: OrderInfo;
}
