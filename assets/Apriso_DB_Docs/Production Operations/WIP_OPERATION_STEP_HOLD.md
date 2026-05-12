# WIP_OPERATION_STEP_HOLD

**Database:** Operational

**Description:** This table contains the list of the reason codes used to hold a WIP Operation Step

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The link to the CONTAINMENT table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION_STEP | WIP Operation sequence number. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | WIP Operation Step sequence number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION_STEP | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STEP | WIP Order Type. |

## Primary Key

- **PK_WIP_OPERATION_STEP_HOLD** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_STEP_HOLD_CONTAINMENT** — WIP_OPERATION_STEP_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WIP_OPERATION_STEP_HOLD_REASON_CODE** — WIP_OPERATION_STEP_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_OPERATION_STEP_HOLD_UNIT** — WIP_OPERATION_STEP_HOLD -> UNIT (`UnitID -> ID`)
- **FK_WIP_OPERATION_STEP_HOLD_WIP_OPERATION_STEP** — WIP_OPERATION_STEP_HOLD -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION_STEP_HOLD_CONTAINMENT** on `ContainmentID`
- **IF_WIP_OPERATION_STEP_HOLD_UNIT** on `UnitID`
- **IF_WIP_OPERATION_STEP_HOLD_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
