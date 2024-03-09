[@telegram.ts/types](../README.md) / [Exports](../modules.md) / Message

# Namespace: Message

## Table of contents

### Interfaces

- [CaptionableMessage](../interfaces/Message.CaptionableMessage.md)
- [CommonMessage](../interfaces/Message.CommonMessage.md)
- [MediaMessage](../interfaces/Message.MediaMessage.md)
- [ServiceMessage](../interfaces/Message.ServiceMessage.md)

### Type Aliases

- [AnimationMessage](Message.md#animationmessage)
- [AudioMessage](Message.md#audiomessage)
- [BoostAddedMessage](Message.md#boostaddedmessage)
- [ChannelChatCreatedMessage](Message.md#channelchatcreatedmessage)
- [ChatSharedMessage](Message.md#chatsharedmessage)
- [ConnectedWebsiteMessage](Message.md#connectedwebsitemessage)
- [ContactMessage](Message.md#contactmessage)
- [DeleteChatPhotoMessage](Message.md#deletechatphotomessage)
- [DiceMessage](Message.md#dicemessage)
- [DocumentMessage](Message.md#documentmessage)
- [ForumTopicClosedMessage](Message.md#forumtopicclosedmessage)
- [ForumTopicCreatedMessage](Message.md#forumtopiccreatedmessage)
- [ForumTopicEditedMessage](Message.md#forumtopiceditedmessage)
- [ForumTopicReopenedMessage](Message.md#forumtopicreopenedmessage)
- [GameMessage](Message.md#gamemessage)
- [GeneralForumTopicHiddenMessage](Message.md#generalforumtopichiddenmessage)
- [GeneralForumTopicUnhiddenMessage](Message.md#generalforumtopicunhiddenmessage)
- [GiveawayCompletedMessage](Message.md#giveawaycompletedmessage)
- [GiveawayCreatedMessage](Message.md#giveawaycreatedmessage)
- [GiveawayMessage](Message.md#giveawaymessage)
- [GiveawayWinnersMessage](Message.md#giveawaywinnersmessage)
- [GroupChatCreatedMessage](Message.md#groupchatcreatedmessage)
- [InvoiceMessage](Message.md#invoicemessage)
- [LeftChatMemberMessage](Message.md#leftchatmembermessage)
- [LocationMessage](Message.md#locationmessage)
- [MessageAutoDeleteTimerChangedMessage](Message.md#messageautodeletetimerchangedmessage)
- [MigrateFromChatIdMessage](Message.md#migratefromchatidmessage)
- [MigrateToChatIdMessage](Message.md#migratetochatidmessage)
- [NewChatMembersMessage](Message.md#newchatmembersmessage)
- [NewChatPhotoMessage](Message.md#newchatphotomessage)
- [NewChatTitleMessage](Message.md#newchattitlemessage)
- [PassportDataMessage](Message.md#passportdatamessage)
- [PhotoMessage](Message.md#photomessage)
- [PinnedMessageMessage](Message.md#pinnedmessagemessage)
- [PollMessage](Message.md#pollmessage)
- [ProximityAlertTriggeredMessage](Message.md#proximityalerttriggeredmessage)
- [StickerMessage](Message.md#stickermessage)
- [StoryMessage](Message.md#storymessage)
- [SuccessfulPaymentMessage](Message.md#successfulpaymentmessage)
- [SupergroupChatCreated](Message.md#supergroupchatcreated)
- [TextMessage](Message.md#textmessage)
- [UsersSharedMessage](Message.md#userssharedmessage)
- [VenueMessage](Message.md#venuemessage)
- [VideoChatEndedMessage](Message.md#videochatendedmessage)
- [VideoChatParticipantsInvitedMessage](Message.md#videochatparticipantsinvitedmessage)
- [VideoChatScheduledMessage](Message.md#videochatscheduledmessage)
- [VideoChatStartedMessage](Message.md#videochatstartedmessage)
- [VideoMessage](Message.md#videomessage)
- [VideoNoteMessage](Message.md#videonotemessage)
- [VoiceMessage](Message.md#voicemessage)
- [WebAppDataMessage](Message.md#webappdatamessage)
- [WriteAccessAllowedMessage](Message.md#writeaccessallowedmessage)

## Type Aliases

### AnimationMessage

Ƭ **AnimationMessage**: [`DocumentMessage`](Message.md#documentmessage) & [`MsgWith`](../modules.md#msgwith)\<``"animation"``\>

#### Defined in

[messageTypes.d.ts:69](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L69)

___

### AudioMessage

Ƭ **AudioMessage**: [`CaptionableMessage`](../interfaces/Message.CaptionableMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"audio"``\>

#### Defined in

[messageTypes.d.ts:67](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L67)

___

### BoostAddedMessage

Ƭ **BoostAddedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"boost_added"``\>

#### Defined in

[messageTypes.d.ts:115](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L115)

___

### ChannelChatCreatedMessage

Ƭ **ChannelChatCreatedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"channel_chat_created"``\>

#### Defined in

[messageTypes.d.ts:94](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L94)

___

### ChatSharedMessage

Ƭ **ChatSharedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"chat_shared"``\>

#### Defined in

[messageTypes.d.ts:107](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L107)

___

### ConnectedWebsiteMessage

Ƭ **ConnectedWebsiteMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"connected_website"``\>

#### Defined in

[messageTypes.d.ts:108](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L108)

___

### ContactMessage

Ƭ **ContactMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"contact"``\>

#### Defined in

[messageTypes.d.ts:76](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L76)

___

### DeleteChatPhotoMessage

Ƭ **DeleteChatPhotoMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"delete_chat_photo"``\>

#### Defined in

[messageTypes.d.ts:88](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L88)

___

### DiceMessage

Ƭ **DiceMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"dice"``\>

#### Defined in

[messageTypes.d.ts:77](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L77)

___

### DocumentMessage

Ƭ **DocumentMessage**: [`CaptionableMessage`](../interfaces/Message.CaptionableMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"document"``\>

#### Defined in

[messageTypes.d.ts:68](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L68)

___

### ForumTopicClosedMessage

Ƭ **ForumTopicClosedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"forum_topic_closed"``\>

#### Defined in

[messageTypes.d.ts:120](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L120)

___

### ForumTopicCreatedMessage

Ƭ **ForumTopicCreatedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"forum_topic_created"``\>

#### Defined in

[messageTypes.d.ts:116](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L116)

___

### ForumTopicEditedMessage

Ƭ **ForumTopicEditedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"forum_topic_edited"``\>

#### Defined in

[messageTypes.d.ts:118](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L118)

___

### ForumTopicReopenedMessage

Ƭ **ForumTopicReopenedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"forum_topic_reopened"``\>

#### Defined in

[messageTypes.d.ts:122](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L122)

___

### GameMessage

Ƭ **GameMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"game"``\>

#### Defined in

[messageTypes.d.ts:78](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L78)

___

### GeneralForumTopicHiddenMessage

Ƭ **GeneralForumTopicHiddenMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"general_forum_topic_hidden"``\>

#### Defined in

[messageTypes.d.ts:124](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L124)

___

### GeneralForumTopicUnhiddenMessage

Ƭ **GeneralForumTopicUnhiddenMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"general_forum_topic_unhidden"``\>

#### Defined in

[messageTypes.d.ts:126](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L126)

___

### GiveawayCompletedMessage

Ƭ **GiveawayCompletedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"giveaway_completed"``\>

#### Defined in

[messageTypes.d.ts:133](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L133)

___

### GiveawayCreatedMessage

Ƭ **GiveawayCreatedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"giveaway_created"``\>

#### Defined in

[messageTypes.d.ts:128](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L128)

___

### GiveawayMessage

Ƭ **GiveawayMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"giveaway"``\>

#### Defined in

[messageTypes.d.ts:130](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L130)

___

### GiveawayWinnersMessage

Ƭ **GiveawayWinnersMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"giveaway_winners"``\>

#### Defined in

[messageTypes.d.ts:131](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L131)

___

### GroupChatCreatedMessage

Ƭ **GroupChatCreatedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"group_chat_created"``\>

#### Defined in

[messageTypes.d.ts:90](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L90)

___

### InvoiceMessage

Ƭ **InvoiceMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"invoice"``\>

#### Defined in

[messageTypes.d.ts:103](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L103)

___

### LeftChatMemberMessage

Ƭ **LeftChatMemberMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"left_chat_member"``\>

#### Defined in

[messageTypes.d.ts:84](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L84)

___

### LocationMessage

Ƭ **LocationMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"location"``\>

#### Defined in

[messageTypes.d.ts:80](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L80)

___

### MessageAutoDeleteTimerChangedMessage

Ƭ **MessageAutoDeleteTimerChangedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"message_auto_delete_timer_changed"``\>

#### Defined in

[messageTypes.d.ts:96](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L96)

___

### MigrateFromChatIdMessage

Ƭ **MigrateFromChatIdMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"migrate_from_chat_id"``\>

#### Defined in

[messageTypes.d.ts:100](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L100)

___

### MigrateToChatIdMessage

Ƭ **MigrateToChatIdMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"migrate_to_chat_id"``\>

#### Defined in

[messageTypes.d.ts:98](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L98)

___

### NewChatMembersMessage

Ƭ **NewChatMembersMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"new_chat_members"``\>

#### Defined in

[messageTypes.d.ts:82](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L82)

___

### NewChatPhotoMessage

Ƭ **NewChatPhotoMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"new_chat_photo"``\>

#### Defined in

[messageTypes.d.ts:87](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L87)

___

### NewChatTitleMessage

Ƭ **NewChatTitleMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"new_chat_title"``\>

#### Defined in

[messageTypes.d.ts:86](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L86)

___

### PassportDataMessage

Ƭ **PassportDataMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"passport_data"``\>

#### Defined in

[messageTypes.d.ts:112](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L112)

___

### PhotoMessage

Ƭ **PhotoMessage**: [`MediaMessage`](../interfaces/Message.MediaMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"photo"``\>

#### Defined in

[messageTypes.d.ts:70](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L70)

___

### PinnedMessageMessage

Ƭ **PinnedMessageMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"pinned_message"``\>

#### Defined in

[messageTypes.d.ts:102](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L102)

___

### PollMessage

Ƭ **PollMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"poll"``\>

#### Defined in

[messageTypes.d.ts:79](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L79)

___

### ProximityAlertTriggeredMessage

Ƭ **ProximityAlertTriggeredMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"proximity_alert_triggered"``\>

#### Defined in

[messageTypes.d.ts:113](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L113)

___

### StickerMessage

Ƭ **StickerMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"sticker"``\>

#### Defined in

[messageTypes.d.ts:71](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L71)

___

### StoryMessage

Ƭ **StoryMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"story"``\>

#### Defined in

[messageTypes.d.ts:72](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L72)

___

### SuccessfulPaymentMessage

Ƭ **SuccessfulPaymentMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"successful_payment"``\>

#### Defined in

[messageTypes.d.ts:104](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L104)

___

### SupergroupChatCreated

Ƭ **SupergroupChatCreated**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"supergroup_chat_created"``\>

#### Defined in

[messageTypes.d.ts:92](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L92)

___

### TextMessage

Ƭ **TextMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"text"``\>

#### Defined in

[messageTypes.d.ts:66](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L66)

___

### UsersSharedMessage

Ƭ **UsersSharedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"users_shared"``\>

#### Defined in

[messageTypes.d.ts:106](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L106)

___

### VenueMessage

Ƭ **VenueMessage**: [`LocationMessage`](Message.md#locationmessage) & [`MsgWith`](../modules.md#msgwith)\<``"venue"``\>

#### Defined in

[messageTypes.d.ts:81](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L81)

___

### VideoChatEndedMessage

Ƭ **VideoChatEndedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video_chat_ended"``\>

#### Defined in

[messageTypes.d.ts:139](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L139)

___

### VideoChatParticipantsInvitedMessage

Ƭ **VideoChatParticipantsInvitedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video_chat_participants_invited"``\>

#### Defined in

[messageTypes.d.ts:141](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L141)

___

### VideoChatScheduledMessage

Ƭ **VideoChatScheduledMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video_chat_scheduled"``\>

#### Defined in

[messageTypes.d.ts:135](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L135)

___

### VideoChatStartedMessage

Ƭ **VideoChatStartedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video_chat_started"``\>

#### Defined in

[messageTypes.d.ts:137](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L137)

___

### VideoMessage

Ƭ **VideoMessage**: [`MediaMessage`](../interfaces/Message.MediaMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video"``\>

#### Defined in

[messageTypes.d.ts:73](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L73)

___

### VideoNoteMessage

Ƭ **VideoNoteMessage**: [`CommonMessage`](../interfaces/Message.CommonMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"video_note"``\>

#### Defined in

[messageTypes.d.ts:74](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L74)

___

### VoiceMessage

Ƭ **VoiceMessage**: [`CaptionableMessage`](../interfaces/Message.CaptionableMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"voice"``\>

#### Defined in

[messageTypes.d.ts:75](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L75)

___

### WebAppDataMessage

Ƭ **WebAppDataMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"web_app_data"``\>

#### Defined in

[messageTypes.d.ts:143](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L143)

___

### WriteAccessAllowedMessage

Ƭ **WriteAccessAllowedMessage**: [`ServiceMessage`](../interfaces/Message.ServiceMessage.md) & [`MsgWith`](../modules.md#msgwith)\<``"write_access_allowed"``\>

#### Defined in

[messageTypes.d.ts:110](https://github.com/telegramsjs/types/blob/d08200f/src/messageTypes.d.ts#L110)
