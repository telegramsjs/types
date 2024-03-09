[@telegram.ts/types](../README.md) / [Exports](../modules.md) / WebhookInfo

# Interface: WebhookInfo

Describes the current status of a webhook.

## Table of contents

### Properties

- [allowed\_updates](WebhookInfo.md#allowed_updates)
- [has\_custom\_certificate](WebhookInfo.md#has_custom_certificate)
- [ip\_address](WebhookInfo.md#ip_address)
- [last\_error\_date](WebhookInfo.md#last_error_date)
- [last\_error\_message](WebhookInfo.md#last_error_message)
- [last\_synchronization\_error\_date](WebhookInfo.md#last_synchronization_error_date)
- [max\_connections](WebhookInfo.md#max_connections)
- [pending\_update\_count](WebhookInfo.md#pending_update_count)
- [url](WebhookInfo.md#url)

## Properties

### allowed\_updates

• `Optional` **allowed\_updates**: (``"message"`` \| ``"poll"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"``)[]

A list of update types the bot is subscribed to. Defaults to all update types except chat_member

#### Defined in

[manageTypes.d.ts:28](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L28)

___

### has\_custom\_certificate

• **has\_custom\_certificate**: `boolean`

True, if a custom certificate was provided for webhook certificate checks

#### Defined in

[manageTypes.d.ts:14](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L14)

___

### ip\_address

• `Optional` **ip\_address**: `string`

Currently used webhook IP address

#### Defined in

[manageTypes.d.ts:18](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L18)

___

### last\_error\_date

• `Optional` **last\_error\_date**: `number`

Unix time for the most recent error that happened when trying to deliver an update via webhook

#### Defined in

[manageTypes.d.ts:20](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L20)

___

### last\_error\_message

• `Optional` **last\_error\_message**: `string`

Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook

#### Defined in

[manageTypes.d.ts:22](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L22)

___

### last\_synchronization\_error\_date

• `Optional` **last\_synchronization\_error\_date**: `number`

Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters

#### Defined in

[manageTypes.d.ts:24](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L24)

___

### max\_connections

• `Optional` **max\_connections**: `number`

The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery

#### Defined in

[manageTypes.d.ts:26](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L26)

___

### pending\_update\_count

• **pending\_update\_count**: `number`

Number of updates awaiting delivery

#### Defined in

[manageTypes.d.ts:16](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L16)

___

### url

• `Optional` **url**: `string`

Webhook URL, may be empty if webhook is not set up

#### Defined in

[manageTypes.d.ts:12](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L12)
