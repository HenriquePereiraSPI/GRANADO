# CONTAINMENT_LOT_NO

**Database:** Operational

**Description:** The lot numbers associated to a given containment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | False |  | True | CONTAINMENT | Containment ID |
| ContainmentItemStatusID | INT(10,0) | True |  | False | CONTAINMENT_ITEM_STATUS | The current status of the containment item. |
| FilterUsed | NVARCHAR | True |  | False |  | Filter used to create the containment |
| FutureHoldName | NVARCHAR(80) | True |  | False |  | The name of the future hold that put this item into the containment. |
| HoldComment | NVARCHAR(2000) | True |  | False |  | User comment for Holding the item. |
| HoldReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Hold Reason Code |
| LotNo | NVARCHAR(40) | False |  | True | LOT_NO | Lot Number. |
| ProductID | INT(10,0) | False |  | True | LOT_NO | Lot No for the containment |
| ProfileUsed | NVARCHAR(255) | True |  | False |  | Grid profile used when selecting the containment items |
| ReleaseComment | NVARCHAR(2000) | True |  | False |  | User comment for Releasing the item. |
| ReleaseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Release Reason Code |
| SourceFileName | NVARCHAR(500) | True |  | False |  | Name of source file based on which the item was added to the Containment. |

## Primary Key

- **PK_CONTAINMENT_LOT_NO** on `ProductID, LotNo, ContainmentID`

## Foreign Keys (this table -> other)

- **FK_CONTAINMENT_LOT_NO_CONTAINMENT** — CONTAINMENT_LOT_NO -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINMENT_LOT_NO_CONTAINMENT_ITEM_STATUS** — CONTAINMENT_LOT_NO -> CONTAINMENT_ITEM_STATUS (`ContainmentItemStatusID -> ID`)
- **FK_CONTAINMENT_LOT_NO_LOT_NO** — CONTAINMENT_LOT_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CONTAINMENT_LOT_NO_REASON_CODE** — CONTAINMENT_LOT_NO -> REASON_CODE (`HoldReasonCode -> ReasonCode`)
- **FK_CONTAINMENT_LOT_NO_REASON_CODE2** — CONTAINMENT_LOT_NO -> REASON_CODE (`ReleaseReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINMENT_LOT_NO_CONTAINMENT** on `ContainmentID`
- **IF_CONTAINMENT_LOT_NO_CONTAINMENT_ITEM_STATUS** on `ContainmentItemStatusID`
- **IF_CONTAINMENT_LOT_NO_LOT_NO** on `LotNo, ProductID`
