import type { ChosenInlineResult, InlineQuery } from "./inlineTypes";
import type {
  User,
  Chat,
  ChatJoinRequest,
  ChatMemberUpdated,
  ChatBoostRemoved,
  ChatBoostUpdated,
  BusinessConnection,
  BusinessMessagesDeleted,
} from "./manageTypes";
import type { CallbackQuery } from "./markupTypes";
import type {
  Message,
  MessageReactionCountUpdated,
  MessageReactionUpdated,
  Poll,
  PollAnswer,
} from "./messageTypes";
import type { PreCheckoutQuery, ShippingQuery } from "./invoiceTypes";

/**
 * Namespace used internally to define more accurate message update types.
 */
export declare namespace Update {
  /** Internal type holding properties that message updates in private chats share. */
  interface Private {
    chat: Chat.PrivateChat;
  }

  /**
   * Internal type holding properties that message updates in channels share.
   */
  interface Channel {
    chat: Chat.ChannelChat;
  }

  /**
   * Internal type holding properties that message updates outside of channels share.
   */
  interface NonChannel {
    chat: Exclude<Chat, Chat.ChannelChat>;
    from: User;
  }

  /**
   * Internal type holding properties that updates about edited messages share.
   */
  interface Edited {
    /**
     * Date the message was last edited in Unix time.
     */
    edit_date: number;
  }
}

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 */
export interface Update {
  /**
   * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.
   * This ID becomes especially handy if you're using webhooks, as it allows you to ignore repeated updates or restore the correct update sequence if they get out of order.
   * If there are no new updates for at least a week, the identifier of the next update will be chosen randomly instead of sequentially.
   */
  update_id: number;

  /**
   * New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: Message & Update.NonChannel;

  /**
   * New version of a message known to the bot that has been edited.
   */
  edited_message?: Message & Update.Edited & Update.NonChannel;

  /**
   * New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channel_post?: Message & Update.Channel;

  /**
   * New version of a channel post known to the bot that has been edited.
   */
  edited_channel_post?: Message & Update.Edited & Update.Channel;

  /** The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot */
  business_connection?: BusinessConnection;

  /** New non-service message from a connected business account */
  business_message?: Message & Update.Private;

  /** New version of a message from a connected business account */
  edited_business_message?: Message & Update.Edited & Update.Private;

  /** Messages were deleted from a connected business account */
  deleted_business_messages?: BusinessMessagesDeleted;

  /** A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots. */
  message_reaction?: MessageReactionUpdated;

  /** Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. */
  message_reaction_count?: MessageReactionCountUpdated;

  /**
   * New incoming inline query.
   */
  inline_query?: InlineQuery;

  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner.
   * Please refer to our documentation on collecting feedback for details on how to enable these updates for your bot.
   */
  chosen_inline_result?: ChosenInlineResult;

  /**
   * New incoming callback query.
   */
  callback_query?: CallbackQuery;

  /**
   * New incoming shipping query. Only for invoices with flexible price.
   */
  shipping_query?: ShippingQuery;

  /**
   * New incoming pre-checkout query. Contains full information about checkout.
   */
  pre_checkout_query?: PreCheckoutQuery;

  /**
   * New poll state. Bots receive updates only about stopped polls and polls sent by the bot.
   */
  poll?: Poll;

  /**
   * A user changed their answer in a non-anonymous poll.
   * Bots receive new votes only in polls that were sent by the bot itself.
   */
  poll_answer?: PollAnswer;

  /**
   * The bot's chat member status was updated in a chat.
   * For private chats, this update is received only when the bot is blocked or unblocked by the user.
   */
  my_chat_member?: ChatMemberUpdated;

  /**
   * A chat member's status was updated in a chat.
   * The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
   */
  chat_member?: ChatMemberUpdated;

  /**
   * A request to join the chat has been sent.
   * The bot must have the can_invite_users administrator right in the chat to receive these updates.
   */
  chat_join_request?: ChatJoinRequest;

  /** A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. */
  chat_boost?: ChatBoostUpdated;

  /** A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. */
  removed_chat_boost?: ChatBoostRemoved;
}
