[@telegram.ts/types](../README.md) / [Exports](../modules.md) / CallbackQuery

# Interface: CallbackQuery

This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.

NOTE: After the user presses a callback button, Telegram clients will display a progress bar until you call answerCallbackQuery. It is, therefore, necessary to react by calling answerCallbackQuery even if no notification to the user is needed (e.g., without specifying any of the optional parameters).

## Table of contents

### Properties

- [chat\_instance](CallbackQuery.md#chat_instance)
- [data](CallbackQuery.md#data)
- [from](CallbackQuery.md#from)
- [game\_short\_name](CallbackQuery.md#game_short_name)
- [id](CallbackQuery.md#id)
- [inline\_message\_id](CallbackQuery.md#inline_message_id)
- [message](CallbackQuery.md#message)

## Properties

### chat\_instance

• **chat\_instance**: `string`

Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.

#### Defined in

[markupTypes.d.ts:118](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L118)

___

### data

• `Optional` **data**: `string`

Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.

#### Defined in

[markupTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L120)

___

### from

• **from**: [`User`](User.md)

Sender

#### Defined in

[markupTypes.d.ts:112](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L112)

___

### game\_short\_name

• `Optional` **game\_short\_name**: `string`

Short name of a Game to be returned, serves as the unique identifier for the game

#### Defined in

[markupTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L122)

___

### id

• **id**: `string`

Unique identifier for this query

#### Defined in

[markupTypes.d.ts:110](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L110)

___

### inline\_message\_id

• `Optional` **inline\_message\_id**: `string`

Identifier of the message sent via the bot in inline mode, that originated the query.

#### Defined in

[markupTypes.d.ts:116](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L116)

___

### message

• `Optional` **message**: [`MaybeInaccessibleMessage`](../modules.md#maybeinaccessiblemessage)

Message sent by the bot with the callback button that originated the query

#### Defined in

[markupTypes.d.ts:114](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L114)
