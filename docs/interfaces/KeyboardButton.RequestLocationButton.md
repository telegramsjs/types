[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / RequestLocationButton

# Interface: RequestLocationButton

[KeyboardButton](../modules/KeyboardButton.md).RequestLocationButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`RequestLocationButton`**

## Table of contents

### Properties

- [request\_location](KeyboardButton.RequestLocationButton.md#request_location)
- [text](KeyboardButton.RequestLocationButton.md#text)

## Properties

### request\_location

• **request\_location**: `boolean`

If True, the user's current location will be sent when the button is pressed. Available in private chats only.

#### Defined in

[markupTypes.d.ts:162](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L162)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)
