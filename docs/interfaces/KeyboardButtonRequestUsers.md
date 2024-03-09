[@telegram.ts/types](../README.md) / [Exports](../modules.md) / KeyboardButtonRequestUsers

# Interface: KeyboardButtonRequestUsers

This object defines the criteria used to request suitable users. The identifiers of the selected users will be shared with the bot when the corresponding button is pressed.

## Table of contents

### Properties

- [max\_quantity](KeyboardButtonRequestUsers.md#max_quantity)
- [request\_id](KeyboardButtonRequestUsers.md#request_id)
- [user\_is\_bot](KeyboardButtonRequestUsers.md#user_is_bot)
- [user\_is\_premium](KeyboardButtonRequestUsers.md#user_is_premium)

## Properties

### max\_quantity

• `Optional` **max\_quantity**: `boolean`

The maximum number of users to be selected; 1-10. Defaults to 1.

#### Defined in

[markupTypes.d.ts:234](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L234)

___

### request\_id

• **request\_id**: `number`

Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message

#### Defined in

[markupTypes.d.ts:228](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L228)

___

### user\_is\_bot

• `Optional` **user\_is\_bot**: `boolean`

Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:230](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L230)

___

### user\_is\_premium

• `Optional` **user\_is\_premium**: `boolean`

Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:232](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L232)
