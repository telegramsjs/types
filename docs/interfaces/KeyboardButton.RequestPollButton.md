[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / RequestPollButton

# Interface: RequestPollButton

[KeyboardButton](../modules/KeyboardButton.md).RequestPollButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`RequestPollButton`**

## Table of contents

### Properties

- [request\_poll](KeyboardButton.RequestPollButton.md#request_poll)
- [text](KeyboardButton.RequestPollButton.md#text)

## Properties

### request\_poll

• **request\_poll**: [`KeyboardButtonPollType`](KeyboardButtonPollType.md)

If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.

#### Defined in

[markupTypes.d.ts:166](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L166)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)
