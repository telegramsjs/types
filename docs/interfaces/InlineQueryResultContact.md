[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultContact

# Interface: InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [first\_name](InlineQueryResultContact.md#first_name)
- [id](InlineQueryResultContact.md#id)
- [input\_message\_content](InlineQueryResultContact.md#input_message_content)
- [last\_name](InlineQueryResultContact.md#last_name)
- [phone\_number](InlineQueryResultContact.md#phone_number)
- [reply\_markup](InlineQueryResultContact.md#reply_markup)
- [thumbnail\_height](InlineQueryResultContact.md#thumbnail_height)
- [thumbnail\_url](InlineQueryResultContact.md#thumbnail_url)
- [thumbnail\_width](InlineQueryResultContact.md#thumbnail_width)
- [type](InlineQueryResultContact.md#type)
- [vcard](InlineQueryResultContact.md#vcard)

## Properties

### first\_name

• **first\_name**: `string`

Contact's first name

#### Defined in

[inlineTypes.d.ts:384](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L384)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[inlineTypes.d.ts:380](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L380)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the contact

#### Defined in

[inlineTypes.d.ts:392](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L392)

___

### last\_name

• `Optional` **last\_name**: `string`

Contact's last name

#### Defined in

[inlineTypes.d.ts:386](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L386)

___

### phone\_number

• **phone\_number**: `string`

Contact's phone number

#### Defined in

[inlineTypes.d.ts:382](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L382)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:390](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L390)

___

### thumbnail\_height

• `Optional` **thumbnail\_height**: `number`

Thumbnail height

#### Defined in

[inlineTypes.d.ts:398](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L398)

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

Url of the thumbnail for the result

#### Defined in

[inlineTypes.d.ts:394](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L394)

___

### thumbnail\_width

• `Optional` **thumbnail\_width**: `number`

Thumbnail width

#### Defined in

[inlineTypes.d.ts:396](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L396)

___

### type

• **type**: ``"contact"``

Type of the result, must be contact

#### Defined in

[inlineTypes.d.ts:378](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L378)

___

### vcard

• `Optional` **vcard**: `string`

Additional data about the contact in the form of a vCard, 0-2048 bytes

#### Defined in

[inlineTypes.d.ts:388](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L388)
