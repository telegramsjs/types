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
  /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. */
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
  /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. */
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
  /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. */
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

/** This object describes the state of a revenue withdrawal operation. Currently, it can be one of
- RevenueWithdrawalStatePending
- RevenueWithdrawalStateSucceeded
- RevenueWithdrawalStateFailed */
export type RevenueWithdrawalState =
  | RevenueWithdrawalStatePending
  | RevenueWithdrawalStateSucceeded
  | RevenueWithdrawalStateFailed;

/** The withdrawal is in progress. */
export interface RevenueWithdrawalStatePending {
  /** Type of the state, always “pending” */
  type: "pending";
}

/** The withdrawal succeeded. */
export interface RevenueWithdrawalStateSucceeded {
  /** Type of the state, always “succeeded” */
  type: "succeeded";
  /** Date the withdrawal was completed in Unix time */
  date: number;
  /** An HTTPS URL that can be used to see transaction details */
  url: string;
}

/** The withdrawal failed and the transaction was refunded. */
export interface RevenueWithdrawalStateFailed {
  /** Type of the state, always “failed” */
  type: "failed";
}

/** This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
- TransactionPartnerFragment
- TransactionPartnerUser
- TransactionPartnerOther */
export type TransactionPartner =
  | TransactionPartnerFragment
  | TransactionPartnerUser
  | TransactionPartnerOther;

/** Describes a withdrawal transaction with Fragment. */
export interface TransactionPartnerFragment {
  /** Type of the transaction partner, always “fragment” */
  type: "fragment";
  /** State of the transaction if the transaction is outgoing */
  withdrawal_state?: RevenueWithdrawalState;
}

/** Describes a transaction with a user. */
export interface TransactionPartnerUser {
  /** Type of the transaction partner, always “user” */
  type: "user";
  /** Information about the user */
  user: User;
}

/** Describes a transaction with an unknown source or recipient. */
export interface TransactionPartnerOther {
  /** Type of the transaction partner, always “other” */
  type: "other";
}

/** Describes a Telegram Star transaction. */
export interface StarTransaction {
  /** Unique identifier of the transaction. Coincides with the identifer of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users. */
  id: string;
  /** Number of Telegram Stars transferred by the transaction */
  amount: number;
  /** Date the transaction was created in Unix time */
  date: number;
  /** Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions */
  source?: TransactionPartner;
  /** Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions */
  receiver?: TransactionPartner;
}

/** Contains a list of Telegram Star transactions. */
export interface StarTransactions {
  /** The list of transactions */
  transactions: StarTransaction[];
}
