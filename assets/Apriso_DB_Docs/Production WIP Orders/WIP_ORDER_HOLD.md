# WIP_ORDER_HOLD

**Database:** Operational

**Description:** This table contains the list of the reason code holding an order

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The containment the hold was created for. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | Link to the WIP Order |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | Link to the WIP Order type |

## Primary Key

- **PK_WORK_ORDER_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_HOLD_CONTAINMENT** — WIP_ORDER_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_ORDER_HOLD_UNIT** — WIP_ORDER_HOLD -> UNIT (`UnitID -> ID`)
- **FK_WIP_ORDER_HOLDS_WIP_ORDER** — WIP_ORDER_HOLD -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WORK_ORDER_HOLDS_REASON_CODES** — WIP_ORDER_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_HOLD_CONTAINMENT** on `ContainmentID`
- **IF_WIP_ORDER_HOLD_UNIT** on `UnitID`
- **IXD_WipOrderNo_WipOrderType_ReasonCode** on `WipOrderNo, WipOrderType, ReasonCode`
