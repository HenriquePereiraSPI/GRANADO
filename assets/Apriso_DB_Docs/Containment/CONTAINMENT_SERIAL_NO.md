# CONTAINMENT_SERIAL_NO

**Database:** Operational

**Description:** The serial numbers for a given containment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | False |  | True | CONTAINMENT | Containment ID |
| ContainmentItemStatusID | INT(10,0) | True |  | False | CONTAINMENT_ITEM_STATUS | The current status of the containment item. |
| FilterUsed | NVARCHAR | True |  | False |  | Filter used to create the containment |
| FutureHoldName | NVARCHAR(80) | True |  | False |  | The name of the future hold that put this item into the containment. |
| HoldComment | NVARCHAR(2000) | True |  | False |  | User comment for Holding the item. |
| HoldReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Hold Reason Code |
| ProductID | INT(10,0) | False |  | True | SERIAL_NO | Lot No for the containment |
| ProfileUsed | NVARCHAR(255) | True |  | False |  | Grid profile used when selecting the containment items |
| ReleaseComment | NVARCHAR(2000) | True |  | False |  | User comment for Releasing the item. |
| ReleaseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Release Reason Code |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | Serial Number. |
| SourceFileName | NVARCHAR(500) | True |  | False |  | Name of source file based on which the item was added to the Containment. |

## Primary Key

- **PK_CONTAINMENT_SERIAL_NO** on `ProductID, SerialNo, ContainmentID`

## Foreign Keys (this table -> other)

- **FK_CONTAINMENT_SERIAL_NO_CONTAINMENT** — CONTAINMENT_SERIAL_NO -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_SERIAL_NO_CONTAINMENT_ITEM_STATUS** — CONTAINMENT_SERIAL_NO -> CONTAINMENT_ITEM_STATUS (`ContainmentItemStatusID -> ID`)
- **FK_CONTAINMENT_SERIAL_NO_REASON_CODE** — CONTAINMENT_SERIAL_NO -> REASON_CODE (`HoldReasonCode -> ReasonCode`)
- **FK_CONTAINMENT_SERIAL_NO_REASON_CODE2** — CONTAINMENT_SERIAL_NO -> REASON_CODE (`ReleaseReasonCode -> ReasonCode`)
- **FK_CONTAINMENT_SERIAL_NO_SERIAL_NO** — CONTAINMENT_SERIAL_NO -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINMENT_SERIAL_NO_CONTAINMENT** on `ContainmentID`
- **IF_CONTAINMENT_SERIAL_NO_CONTAINMENT_ITEM_STATUS** on `ContainmentItemStatusID`
