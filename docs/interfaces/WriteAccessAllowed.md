[@telegram.ts/types](../README.md) / [Exports](../modules.md) / WriteAccessAllowed

# Interface: WriteAccessAllowed

This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.

## Table of contents

### Properties

- [from\_attachment\_menu](WriteAccessAllowed.md#from_attachment_menu)
- [from\_request](WriteAccessAllowed.md#from_request)
- [web\_app\_name](WriteAccessAllowed.md#web_app_name)

## Properties

### from\_attachment\_menu

• `Optional` **from\_attachment\_menu**: `boolean`

True, if the access was granted when the bot was added to the attachment or side menu

#### Defined in

[messageTypes.d.ts:907](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L907)

___

### from\_request

• `Optional` **from\_request**: `boolean`

True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess

#### Defined in

[messageTypes.d.ts:903](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L903)

___

### web\_app\_name

• `Optional` **web\_app\_name**: `string`

Name of the Web App, if the access was granted when the Web App was launched from a link

#### Defined in

[messageTypes.d.ts:905](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L905)
