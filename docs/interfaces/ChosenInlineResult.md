[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChosenInlineResult

# Interface: ChosenInlineResult

Represents a result of an inline query that was chosen by the user and sent to their chat partner.

Note: It is necessary to enable inline feedback via

**`Bot Father`**

in order to receive these objects in updates.

## Table of contents

### Properties

- [from](ChosenInlineResult.md#from)
- [inline\_message\_id](ChosenInlineResult.md#inline_message_id)
- [location](ChosenInlineResult.md#location)
- [query](ChosenInlineResult.md#query)
- [result\_id](ChosenInlineResult.md#result_id)

## Properties

### from

• **from**: [`User`](User.md)

The user that chose the result

#### Defined in

[inlineTypes.d.ts:705](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L705)

___

### inline\_message\_id

• `Optional` **inline\_message\_id**: `string`

Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.

#### Defined in

[inlineTypes.d.ts:709](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L709)

___

### location

• `Optional` **location**: [`Location`](Location.md)

Sender location, only for bots that require user location

#### Defined in

[inlineTypes.d.ts:707](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L707)

___

### query

• **query**: `string`

The query that was used to obtain the result

#### Defined in

[inlineTypes.d.ts:711](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L711)

___

### result\_id

• **result\_id**: `string`

The unique identifier for the result that was chosen

#### Defined in

[inlineTypes.d.ts:703](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L703)
