[@telegram.ts/types](../README.md) / [Exports](../modules.md) / UserFromGetMe

# Interface: UserFromGetMe

This object represents a Telegram user or bot that was returned by `getMe`.

## Hierarchy

- [`User`](User.md)

  ↳ **`UserFromGetMe`**

## Table of contents

### Properties

- [added\_to\_attachment\_menu](UserFromGetMe.md#added_to_attachment_menu)
- [can\_join\_groups](UserFromGetMe.md#can_join_groups)
- [can\_read\_all\_group\_messages](UserFromGetMe.md#can_read_all_group_messages)
- [first\_name](UserFromGetMe.md#first_name)
- [id](UserFromGetMe.md#id)
- [is\_bot](UserFromGetMe.md#is_bot)
- [is\_premium](UserFromGetMe.md#is_premium)
- [language\_code](UserFromGetMe.md#language_code)
- [last\_name](UserFromGetMe.md#last_name)
- [supports\_inline\_queries](UserFromGetMe.md#supports_inline_queries)
- [username](UserFromGetMe.md#username)

## Properties

### added\_to\_attachment\_menu

• `Optional` **added\_to\_attachment\_menu**: ``true``

True, if this user added the bot to the attachment menu

#### Inherited from

[User](User.md).[added_to_attachment_menu](User.md#added_to_attachment_menu)

#### Defined in

[manageTypes.d.ts:48](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L48)

___

### can\_join\_groups

• **can\_join\_groups**: `boolean`

True, if the bot can be invited to groups. Returned only in getMe.

#### Defined in

[manageTypes.d.ts:56](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L56)

___

### can\_read\_all\_group\_messages

• **can\_read\_all\_group\_messages**: `boolean`

True, if privacy mode is disabled for the bot. Returned only in getMe.

#### Defined in

[manageTypes.d.ts:58](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L58)

___

### first\_name

• **first\_name**: `string`

User's or bot's first name

#### Inherited from

[User](User.md).[first_name](User.md#first_name)

#### Defined in

[manageTypes.d.ts:38](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L38)

___

### id

• **id**: `number`

Unique identifier for this user or bot.

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

[manageTypes.d.ts:34](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L34)

___

### is\_bot

• **is\_bot**: ``true``

True, if this user is a bot

#### Overrides

[User](User.md).[is_bot](User.md#is_bot)

#### Defined in

[manageTypes.d.ts:53](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L53)

___

### is\_premium

• `Optional` **is\_premium**: ``true``

True, if this user is a Telegram Premium user

#### Inherited from

[User](User.md).[is_premium](User.md#is_premium)

#### Defined in

[manageTypes.d.ts:46](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L46)

___

### language\_code

• `Optional` **language\_code**: `string`

IETF language tag of the user's language

#### Inherited from

[User](User.md).[language_code](User.md#language_code)

#### Defined in

[manageTypes.d.ts:44](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L44)

___

### last\_name

• `Optional` **last\_name**: `string`

User's or bot's last name

#### Inherited from

[User](User.md).[last_name](User.md#last_name)

#### Defined in

[manageTypes.d.ts:40](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L40)

___

### supports\_inline\_queries

• **supports\_inline\_queries**: `boolean`

True, if the bot supports inline queries. Returned only in getMe.

#### Defined in

[manageTypes.d.ts:60](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L60)

___

### username

• **username**: `string`

User's or bot's username

#### Overrides

[User](User.md).[username](User.md#username)

#### Defined in

[manageTypes.d.ts:54](https://github.com/telegramsjs/types/blob/d08200f/src/manageTypes.d.ts#L54)
