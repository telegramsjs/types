[@telegram.ts/types](../README.md) / [Exports](../modules.md) / LinkPreviewOptions

# Interface: LinkPreviewOptions

Describes the options used for link preview generation.

## Table of contents

### Properties

- [is\_disabled](LinkPreviewOptions.md#is_disabled)
- [prefer\_large\_media](LinkPreviewOptions.md#prefer_large_media)
- [prefer\_small\_media](LinkPreviewOptions.md#prefer_small_media)
- [show\_above\_text](LinkPreviewOptions.md#show_above_text)
- [url](LinkPreviewOptions.md#url)

## Properties

### is\_disabled

• `Optional` **is\_disabled**: `boolean`

True, if the link preview is disabled

#### Defined in

[messageTypes.d.ts:993](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L993)

___

### prefer\_large\_media

• `Optional` **prefer\_large\_media**: `boolean`

True, if the media in the link preview is suppposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview

#### Defined in

[messageTypes.d.ts:999](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L999)

___

### prefer\_small\_media

• `Optional` **prefer\_small\_media**: `boolean`

True, if the media in the link preview is suppposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview

#### Defined in

[messageTypes.d.ts:997](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L997)

___

### show\_above\_text

• `Optional` **show\_above\_text**: `boolean`

True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text

#### Defined in

[messageTypes.d.ts:1001](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L1001)

___

### url

• `Optional` **url**: `string`

URL to use for the link preview. If empty, then the first URL found in the message text will be used

#### Defined in

[messageTypes.d.ts:995](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L995)
