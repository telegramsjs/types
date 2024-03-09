[@telegram.ts/types](../README.md) / [Exports](../modules.md) / ChatPhoto

# Interface: ChatPhoto

This object represents a chat photo.

## Table of contents

### Properties

- [big\_file\_id](ChatPhoto.md#big_file_id)
- [big\_file\_unique\_id](ChatPhoto.md#big_file_unique_id)
- [small\_file\_id](ChatPhoto.md#small_file_id)
- [small\_file\_unique\_id](ChatPhoto.md#small_file_unique_id)

## Properties

### big\_file\_id

• **big\_file\_id**: `string`

File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.

#### Defined in

[manageTypes.d.ts:253](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L253)

___

### big\_file\_unique\_id

• **big\_file\_unique\_id**: `string`

Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[manageTypes.d.ts:255](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L255)

___

### small\_file\_id

• **small\_file\_id**: `string`

File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.

#### Defined in

[manageTypes.d.ts:249](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L249)

___

### small\_file\_unique\_id

• **small\_file\_unique\_id**: `string`

Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.

#### Defined in

[manageTypes.d.ts:251](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L251)
