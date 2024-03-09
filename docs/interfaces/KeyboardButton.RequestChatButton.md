[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / RequestChatButton

# Interface: RequestChatButton

[KeyboardButton](../modules/KeyboardButton.md).RequestChatButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`RequestChatButton`**

## Table of contents

### Properties

- [request\_chat](KeyboardButton.RequestChatButton.md#request_chat)
- [text](KeyboardButton.RequestChatButton.md#text)

## Properties

### request\_chat

• **request\_chat**: [`KeyboardButtonRequestChat`](KeyboardButtonRequestChat.md)

If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.

#### Defined in

[markupTypes.d.ts:154](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L154)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)
