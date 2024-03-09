[@telegram.ts/types](../README.md) / [Exports](../modules.md) / InlineQueryResultVenue

# Interface: InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.

Note: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.

## Table of contents

### Properties

- [address](InlineQueryResultVenue.md#address)
- [foursquare\_id](InlineQueryResultVenue.md#foursquare_id)
- [foursquare\_type](InlineQueryResultVenue.md#foursquare_type)
- [google\_place\_id](InlineQueryResultVenue.md#google_place_id)
- [google\_place\_type](InlineQueryResultVenue.md#google_place_type)
- [id](InlineQueryResultVenue.md#id)
- [input\_message\_content](InlineQueryResultVenue.md#input_message_content)
- [latitude](InlineQueryResultVenue.md#latitude)
- [longitude](InlineQueryResultVenue.md#longitude)
- [reply\_markup](InlineQueryResultVenue.md#reply_markup)
- [thumbnail\_height](InlineQueryResultVenue.md#thumbnail_height)
- [thumbnail\_url](InlineQueryResultVenue.md#thumbnail_url)
- [thumbnail\_width](InlineQueryResultVenue.md#thumbnail_width)
- [title](InlineQueryResultVenue.md#title)
- [type](InlineQueryResultVenue.md#type)

## Properties

### address

• **address**: `string`

Address of the venue

#### Defined in

[inlineTypes.d.ts:353](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L353)

___

### foursquare\_id

• `Optional` **foursquare\_id**: `string`

Foursquare identifier of the venue if known

#### Defined in

[inlineTypes.d.ts:355](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L355)

___

### foursquare\_type

• `Optional` **foursquare\_type**: `string`

Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)

#### Defined in

[inlineTypes.d.ts:357](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L357)

___

### google\_place\_id

• `Optional` **google\_place\_id**: `string`

Google Places identifier of the venue

#### Defined in

[inlineTypes.d.ts:359](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L359)

___

### google\_place\_type

• `Optional` **google\_place\_type**: `string`

Google Places type of the venue. (See supported types.)

#### Defined in

[inlineTypes.d.ts:361](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L361)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[inlineTypes.d.ts:345](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L345)

___

### input\_message\_content

• `Optional` **input\_message\_content**: [`InputMessageContent`](../modules.md#inputmessagecontent)

Content of the message to be sent instead of the venue

#### Defined in

[inlineTypes.d.ts:365](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L365)

___

### latitude

• **latitude**: `number`

Latitude of the venue location in degrees

#### Defined in

[inlineTypes.d.ts:347](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L347)

___

### longitude

• **longitude**: `number`

Longitude of the venue location in degrees

#### Defined in

[inlineTypes.d.ts:349](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L349)

___

### reply\_markup

• `Optional` **reply\_markup**: [`InlineKeyboardMarkup`](InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[inlineTypes.d.ts:363](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L363)

___

### thumbnail\_height

• `Optional` **thumbnail\_height**: `number`

Thumbnail height

#### Defined in

[inlineTypes.d.ts:371](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L371)

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

Url of the thumbnail for the result

#### Defined in

[inlineTypes.d.ts:367](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L367)

___

### thumbnail\_width

• `Optional` **thumbnail\_width**: `number`

Thumbnail width

#### Defined in

[inlineTypes.d.ts:369](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L369)

___

### title

• **title**: `string`

Title of the venue

#### Defined in

[inlineTypes.d.ts:351](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L351)

___

### type

• **type**: ``"venue"``

Type of the result, must be venue

#### Defined in

[inlineTypes.d.ts:343](https://github.com/telegramsjs/types/blob/d08200f/src/inlineTypes.d.ts#L343)
