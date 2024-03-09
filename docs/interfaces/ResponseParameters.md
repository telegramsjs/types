[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ResponseParameters

# Interface: ResponseParameters

Describes additional parameters provided in an API error response.

## Table of contents

### Properties

- [migrate\_to\_chat\_id](ResponseParameters.md#migrate_to_chat_id)
- [retry\_after](ResponseParameters.md#retry_after)

## Properties

### migrate\_to\_chat\_id

• `Optional` **migrate\_to\_chat\_id**: `number`

The group has been migrated to a supergroup with the specified identifier.

#### Defined in

[telegramTypes.d.ts:35](https://github.com/telegramsjs/types/blob/d08200f/src/telegramTypes.d.ts#L35)

___

### retry\_after

• `Optional` **retry\_after**: `number`

In case of exceeding flood control, the number of seconds left to wait before the request can be repeated.

#### Defined in

[telegramTypes.d.ts:39](https://github.com/telegramsjs/types/blob/d08200f/src/telegramTypes.d.ts#L39)
