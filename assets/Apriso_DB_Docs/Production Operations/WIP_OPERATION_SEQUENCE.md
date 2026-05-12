# WIP_OPERATION_SEQUENCE

**Database:** Operational

**Description:** This table contains the description of the flow of Operations within a WIP Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DestinationOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The next Operation after the current one. |
| DestinationWipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The next WIP Order in the Sequence after the current one. |
| DestinationWipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The engine table. |
| DispatchSequenceType | SMALLINT(5,0) | True |  | False |  | This type of Sequence indicates whether the link is from the start or end of the From entity to the start or end of the To entity. If not populated, Start To Start is assumed. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Operation Sequence. |
| LagDurationSeconds | INT(10,0) | True |  | False |  | Specifies the minimum time from the From entity to the To entity. May be negative. For example: type EndToStart, LagSeconds = -3600 specifies that the earliest start time for the To entity is 60 minutes before the end of the From entity. In this example, if LagSeconds was set to 3600, then the To entity must start no earlier than 60 minutes after the end of the From entity. If not populated, zero is assumed. |
| Level_ | INT(10,0) | True |  | False |  | For internal use. |
| LevelingGroup | NVARCHAR(10) | True |  | False |  | For internal use. |
| MergeGroup | NVARCHAR(10) | True |  | False |  | Identifies the merge group to which the sequence belongs. |
| NavigationType | SMALLINT(5,0) | True |  | False | NAVIGATION_TYPE | Specifies how the quantity from the child order Operation contents will be merged into the good Operation content. |
| OperationID | INT(10,0) | True |  | False | OPERATION | For future use. |
| OprSequenceNo | NVARCHAR(20) | False |  | False | WIP_OPERATION | The reference to the WIP Operation. |
| PreferredNext | BIT | True |  | False |  | For future use. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The link to the Process. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The Process Operation for the WIP Operation that was created during Explosion. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code for why the entity is on hold. |
| SequenceType | NVARCHAR(40) | False |  | False |  | The type of relation between the Sequence record (FIRST, NEXT, PREVIOUS, END, etc.). |
| SequencingGroup | NVARCHAR(10) | True |  | False |  | Describes the group to which the Sequence belongs. |
| WipContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | The classification of the quantity: 1 - Good, 2 - Failed, 3 - Scrapped. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | The link to the WIP Order type. |

## Primary Key

- **PK_WIP_OPERATION_SEQUENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_SEQUENCE_NAVIGATION_TYPE** — WIP_OPERATION_SEQUENCE -> NAVIGATION_TYPE (`NavigationType -> NavigationType`)
- **FK_WIP_OPERATION_SEQUENCE_OPERATION** — WIP_OPERATION_SEQUENCE -> OPERATION (`OperationID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_PROCESS** — WIP_OPERATION_SEQUENCE -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_PROCESS_OPERATION** — WIP_OPERATION_SEQUENCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_REASON_CODE** — WIP_OPERATION_SEQUENCE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_CONTENT_CLASS** — WIP_OPERATION_SEQUENCE -> WIP_CONTENT_CLASS (`WipContentClass -> WipContentClass`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_OPERATION** — WIP_OPERATION_SEQUENCE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_OPERATION1** — WIP_OPERATION_SEQUENCE -> WIP_OPERATION (`DestinationWipOrderNo, DestinationWipOrderType, DestinationOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION_SEQUENCE_OPERATION** on `OperationID`
- **IF_WIP_OPERATION_SEQUENCE_PROCESS** on `ProcessID`
- **IF_WIP_OPERATION_SEQUENCE_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_WIP_OPERATION_SEQUENCE_WIP_CONTENT_CLASS** on `WipContentClass`
- **IF_WIP_OPERATION_SEQUENCE_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_WIP_OPERATION_SEQUENCE_WIP_OPERATION1** on `DestinationWipOrderNo, DestinationWipOrderType, DestinationOprSequenceNo`
- **IXD_WipOrderNo_WipOrderType_LevelingGroup** on `WipOrderNo, WipOrderType, LevelingGroup`
