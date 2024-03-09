[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / WebAppButton

# Interface: WebAppButton

[KeyboardButton](../modules/KeyboardButton.md).WebAppButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`WebAppButton`**

## Table of contents

### Properties

- [text](KeyboardButton.WebAppButton.md#text)
- [web\_app](KeyboardButton.WebAppButton.md#web_app)

## Properties

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)

___

### web\_app

• **web\_app**: [`WebAppInfo`](WebAppInfo.md)

If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.

#### Defined in

[markupTypes.d.ts:170](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L170)
