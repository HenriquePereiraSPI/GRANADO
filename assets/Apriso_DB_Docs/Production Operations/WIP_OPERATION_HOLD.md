# WIP_OPERATION_HOLD

**Database:** Operational

**Description:** This table contains the list of Reason Codes holding an order. The table is used for standard holds and also for when an order is exploded and the Operation is on hold before release (via the HoldBeforeRelease Reason Code).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The Containment for which the hold was created. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Operation hold. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation number. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code for why the entity is on hold. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type. |

## Primary Key

- **PK_WORK_ORDER_OPERATION_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_HOLD_CONTAINMENT** — WIP_OPERATION_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_OPERATION_HOLD_UNIT** — WIP_OPERATION_HOLD -> UNIT (`UnitID -> ID`)
- **FK_WIP_ORDER_OPERATION_HOLDS_WIP_ORDER_OPERATION** — WIP_OPERATION_HOLD -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WORK_ORDER_OPERATION_HOLDS_REASON_CODES** — WIP_OPERATION_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION_HOLD_CONTAINMENT** on `ContainmentID`
- **IF_WIP_OPERATION_HOLD_UNIT** on `UnitID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_ReasonCode** on `WipOrderNo, WipOrderType, OprSequenceNo, ReasonCode`
