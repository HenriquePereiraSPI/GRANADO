# WIP_SERIAL_NO_STATUS_HISTORY

**Database:** Operational

**Description:** This table stores history of WIP Order Status with serial no changes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(256) | True |  | False |  | Comment for status change. |
| DurationInSeconds | INT(10,0) | False | ((0)) | False |  | Duration between from and to calculated in seconds. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number of Author of Progress Status change. |
| FromProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Progress Class Status Name of WIP Order, WIP Operation or WIP Operations Step before change. |
| FromProgressStatusName | NVARCHAR(50) | True |  | False |  | Progress Status Name of WIP Order, WIP Operation or WIP Operations step before change. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation sequence number. |
| ProductNo | NVARCHAR(80) | False |  | False |  | The product number. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code for status change. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Resource of Author of Progress Status change. |
| SerialNo | NVARCHAR(40) | False |  | False |  | The Serial Number consumed or reported, or the Serial Number to be processed. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Operation step sequence number. |
| ToProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Progress Status Class Name of WIP Order, WIP Operation or WIP Operations Step after change. |
| ToProgressStatusName | NVARCHAR(50) | True |  | False |  | Progress Status Name of WIP Order, WIP Operation or WIP Operations Step after change. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | False |  | False |  | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False |  | WIP Order type. |

## Primary Key

- **PK_WIP_SERIAL_NO_STATUS_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SERIAL_NO_STATUS_HISTORY_UNIT** — WIP_SERIAL_NO_STATUS_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SERIAL_NO_STATUS_HISTORY_UNIT** on `UnitID`
