[@telegram.ts/types](../README.md) / [Exports](../modules.md) / KeyboardButtonRequestChat

# Interface: KeyboardButtonRequestChat

This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed.

## Table of contents

### Properties

- [bot\_administrator\_rights](KeyboardButtonRequestChat.md#bot_administrator_rights)
- [bot\_is\_member](KeyboardButtonRequestChat.md#bot_is_member)
- [chat\_has\_username](KeyboardButtonRequestChat.md#chat_has_username)
- [chat\_is\_channel](KeyboardButtonRequestChat.md#chat_is_channel)
- [chat\_is\_created](KeyboardButtonRequestChat.md#chat_is_created)
- [chat\_is\_forum](KeyboardButtonRequestChat.md#chat_is_forum)
- [request\_id](KeyboardButtonRequestChat.md#request_id)
- [user\_administrator\_rights](KeyboardButtonRequestChat.md#user_administrator_rights)

## Properties

### bot\_administrator\_rights

• `Optional` **bot\_administrator\_rights**: [`ChatAdministratorRights`](ChatAdministratorRights.md)

An object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:252](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L252)

___

### bot\_is\_member

• `Optional` **bot\_is\_member**: `boolean`

Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:254](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L254)

___

### chat\_has\_username

• `Optional` **chat\_has\_username**: `boolean`

Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:246](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L246)

___

### chat\_is\_channel

• **chat\_is\_channel**: `boolean`

Pass True to request a channel chat, pass False to request a group or a supergroup chat.

#### Defined in

[markupTypes.d.ts:242](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L242)

___

### chat\_is\_created

• `Optional` **chat\_is\_created**: `boolean`

Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:248](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L248)

___

### chat\_is\_forum

• `Optional` **chat\_is\_forum**: `boolean`

Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:244](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L244)

___

### request\_id

• **request\_id**: `number`

Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message

#### Defined in

[markupTypes.d.ts:240](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L240)

___

### user\_administrator\_rights

• `Optional` **user\_administrator\_rights**: [`ChatAdministratorRights`](ChatAdministratorRights.md)

An object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.

#### Defined in

[markupTypes.d.ts:250](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L250)
