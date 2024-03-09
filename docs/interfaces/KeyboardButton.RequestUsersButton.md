[@telegram.ts/types](../README.md) / [Exports](../modules.md) / [KeyboardButton](../modules/KeyboardButton.md) / RequestUsersButton

# Interface: RequestUsersButton

[KeyboardButton](../modules/KeyboardButton.md).RequestUsersButton

## Hierarchy

- [`CommonButton`](KeyboardButton.CommonButton.md)

  ↳ **`RequestUsersButton`**

## Table of contents

### Properties

- [request\_users](KeyboardButton.RequestUsersButton.md#request_users)
- [text](KeyboardButton.RequestUsersButton.md#text)

## Properties

### request\_users

• **request\_users**: [`KeyboardButtonRequestUsers`](KeyboardButtonRequestUsers.md)

If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.

#### Defined in

[markupTypes.d.ts:150](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L150)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed

#### Inherited from

[CommonButton](KeyboardButton.CommonButton.md).[text](KeyboardButton.CommonButton.md#text)

#### Defined in

[markupTypes.d.ts:146](https://github.com/telegramsjs/types/blob/d08200f/src/markupTypes.d.ts#L146)
