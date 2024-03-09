[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [InlineKeyboardButton](../modules/InlineKeyboardButton.md) / UrlButton

# Interface: UrlButton

[InlineKeyboardButton](../modules/InlineKeyboardButton.md).UrlButton

## Hierarchy

- [`AbstractInlineKeyboardButton`](InlineKeyboardButton.AbstractInlineKeyboardButton.md)

  ↳ **`UrlButton`**

## Table of contents

### Properties

- [text](InlineKeyboardButton.UrlButton.md#text)
- [url](InlineKeyboardButton.UrlButton.md#url)

## Properties

### text

• **text**: `string`

Label text on the button

#### Inherited from

[AbstractInlineKeyboardButton](InlineKeyboardButton.AbstractInlineKeyboardButton.md).[text](InlineKeyboardButton.AbstractInlineKeyboardButton.md#text)

#### Defined in

[markupTypes.d.ts:13](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L13)

___

### url

• **url**: `string`

HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings.

#### Defined in

[markupTypes.d.ts:17](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L17)
