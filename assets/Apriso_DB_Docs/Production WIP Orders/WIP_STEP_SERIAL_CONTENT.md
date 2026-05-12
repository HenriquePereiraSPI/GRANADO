# WIP_STEP_SERIAL_CONTENT

**Database:** Operational

**Description:** This table provides detailed information about WIP content at step level such as products, serial, and quantities. It is an extension of the WIP_SERIAL_NO_CONTENT table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocatedBucket | BIT | True |  | False |  | Flagged if the Serial Number is allocated to the WIP Order. |
| CommittedBucket | BIT | True |  | False |  | For future use. |
| CompletedBucket | BIT | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| InputBucket | BIT | True |  | False |  | The WIP Serial Number received but not yet allocated. |
| OprSequenceNo | NVARCHAR(20) | False |  | False | WIP_OPERATION_STEP | Operation sequence number. |
| OutputBucket | BIT | True |  | False |  | The Serial Number that was processed and is to be pushed to another Operation. |
| ProductID | INT(10,0) | False |  | False | SERIAL_NO | The reference to the Product. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code. |
| SerialNo | NVARCHAR(40) | False |  | False | SERIAL_NO | The Serial Number consumed or reported, or the Serial Number to be processed. |
| StepSequenceNo | INT(10,0) | False |  | False | WIP_OPERATION_STEP | Operation step sequence number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION_STEP | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION_STEP | WIP Order type. |
| WipSerialNoContentID | INT(10,0) | False |  | False | WIP_SERIAL_NO_CONTENT | ID of WIP Serial Number content. |

## Primary Key

- **PK_WIP_STEP_SERIAL_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_STEP_SERIAL_CONTENT_REASON_CODE** — WIP_STEP_SERIAL_CONTENT -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_STEP_SERIAL_CONTENT_SERIAL_NO** — WIP_STEP_SERIAL_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_STEP_SERIAL_CONTENT_UNIT** — WIP_STEP_SERIAL_CONTENT -> UNIT (`UnitID -> ID`)
- **FK_WIP_STEP_SERIAL_CONTENT_WIP_OPERATION_STEP** — WIP_STEP_SERIAL_CONTENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_STEP_SERIAL_CONTENT_WIP_SERIAL_NO_CONTENT** — WIP_STEP_SERIAL_CONTENT -> WIP_SERIAL_NO_CONTENT (`WipSerialNoContentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WIP_STEP_SERIAL_CONTENT** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, ProductID, SerialNo`

## Non-Unique Indexes

- **IF_WIP_STEP_SERIAL_CONTENT_SERIAL_NO** on `SerialNo, ProductID`
- **IF_WIP_STEP_SERIAL_CONTENT_UNIT** on `UnitID`
- **IF_WIP_STEP_SERIAL_CONTENT_WIP_SERIAL_NO_CONTENT** on `WipSerialNoContentID`
