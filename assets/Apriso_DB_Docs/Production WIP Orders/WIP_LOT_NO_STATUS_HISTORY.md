# WIP_LOT_NO_STATUS_HISTORY

**Database:** Operational

**Description:** Stores the history of the WIP Order Status with lot number changes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(256) | True |  | False |  | Comment for status change. |
| DurationInSeconds | INT(10,0) | True |  | False |  | Duration between From and To calculated in seconds. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number of the Author of Progress Status change. |
| FromProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Name of the progress status class of the order header, order details, WIP Order, WIP Operation or WIP Operation step before the change. |
| FromProgressStatusName | NVARCHAR(50) | True |  | False |  | Name of the progress status of the order header, order details, WIP Order, WIP Operation or WIP Operation step before the change. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| LotNo | NVARCHAR(40) | False |  | False |  | Lot number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation sequence number. |
| ProductNo | NVARCHAR(80) | False |  | False |  | ID of the product. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason code for the status change. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Resource of the Author of Progress Status change. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Step sequence number. |
| ToProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Name of the progress status class of the order header, order details, WIP Order, WIP Operation or WIP Operation step after the change. |
| ToProgressStatusName | NVARCHAR(50) | True |  | False |  | Name of the progress status of the order header, order details, WIP Order, WIP Operation or WIP Operation step after the change. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | False |  | False |  | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False |  | Type of the WIP Order. |

## Primary Key

- **PK_WIP_LOT_NO_STATUS_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_LOT_NO_STATUS_HISTORY_UNIT** — WIP_LOT_NO_STATUS_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_LOT_NO_STATUS_HISTORY_UNIT** on `UnitID`
