[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / RequestContactButton

# Interface: RequestContactButton

[KeyboardButton](../modules/KeyboardButton.md).RequestContactButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`RequestContactButton`**

## Table of contents

### Properties

- [request\_contact](KeyboardButton.RequestContactButton.md#request_contact)
- [text](KeyboardButton.RequestContactButton.md#text)

## Properties

### request\_contact

• **request\_contact**: `boolean`

If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.

#### Defined in

[markupTypes.d.ts:158](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L158)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)
