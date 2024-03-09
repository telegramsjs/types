[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultLocation

# Interface: InlineQueryResultLocation

Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [heading](InlineQueryResultLocation.md#heading)
- [horizontal\_accuracy](InlineQueryResultLocation.md#horizontal_accuracy)
- [id](InlineQueryResultLocation.md#id)
- [input\_message\_content](InlineQueryResultLocation.md#input_message_content)
- [latitude](InlineQueryResultLocation.md#latitude)
- [live\_period](InlineQueryResultLocation.md#live_period)
- [longitude](InlineQueryResultLocation.md#longitude)
- [proximity\_alert\_radius](InlineQueryResultLocation.md#proximity_alert_radius)
- [reply\_markup](InlineQueryResultLocation.md#reply_markup)
- [thumbnail\_height](InlineQueryResultLocation.md#thumbnail_height)
- [thumbnail\_url](InlineQueryResultLocation.md#thumbnail_url)
- [thumbnail\_width](InlineQueryResultLocation.md#thumbnail_width)
- [title](InlineQueryResultLocation.md#title)
- [type](InlineQueryResultLocation.md#type)

## Properties

### heading

• `Optional` **heading**: `number`

For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.

#### Defined in

[inlineTypes.d.ts:324](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L324)

___

### horizontal\_accuracy

• `Optional` **horizontal\_accuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[inlineTypes.d.ts:320](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L320)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[inlineTypes.d.ts:312](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L312)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the location

#### Defined in

[inlineTypes.d.ts:330](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L330)

___

### latitude

• **latitude**: `number`

Location latitude in degrees

#### Defined in

[inlineTypes.d.ts:314](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L314)

___

### live\_period

• `Optional` **live\_period**: `number`

Period in seconds for which the location can be updated, should be between 60 and 86400.

#### Defined in

[inlineTypes.d.ts:322](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L322)

___

### longitude

• **longitude**: `number`

Location longitude in degrees

#### Defined in

[inlineTypes.d.ts:316](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L316)

___

### proximity\_alert\_radius

• `Optional` **proximity\_alert\_radius**: `number`

For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.

#### Defined in

[inlineTypes.d.ts:326](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L326)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:328](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L328)

___

### thumbnail\_height

• `Optional` **thumbnail\_height**: `number`

Thumbnail height

#### Defined in

[inlineTypes.d.ts:336](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L336)

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

Url of the thumbnail for the result

#### Defined in

[inlineTypes.d.ts:332](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L332)

___

### thumbnail\_width

• `Optional` **thumbnail\_width**: `number`

Thumbnail width

#### Defined in

[inlineTypes.d.ts:334](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L334)

___

### title

• **title**: `string`

Location title

#### Defined in

[inlineTypes.d.ts:318](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L318)

___

### type

• **type**: ``"location"``

Type of the result, must be location

#### Defined in

[inlineTypes.d.ts:310](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L310)
