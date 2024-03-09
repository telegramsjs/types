[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / WebAppButton

# Interface: WebAppButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).WebAppButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`WebAppButton`**

## Table of contents

### Properties

- [text](InlineKeyboardButton.WebAppButton.md#text)
- [web\_app](InlineKeyboardButton.WebAppButton.md#web_app)

## Properties

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)

___

### web\_app

• **web\_app**: [`WebAppInfo`](WebAppInfo.md)

Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot.

#### Defined in

[markupTypes.d.ts:25](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L25)
