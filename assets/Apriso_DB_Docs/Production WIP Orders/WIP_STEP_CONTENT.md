# WIP_STEP_CONTENT

**Database:** Operational

**Description:** Provides detailed information about WIP content at a step level such as products, lots, and quantities. It is an extension of the WIP_CONTENT_DETAIL table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot number. |
| OprSequenceNo | NVARCHAR(20) | False |  | False | WIP_OPERATION_STEP | Operation sequence number. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | ID of the product. |
| QuantityAllocated | DECIMAL(28,10) | True |  | False |  | Quantity of the progress allocated to the operation, product or lot. |
| QuantityCompleted | DECIMAL(28,10) | True |  | False |  | Total completed quantity of the specified WIP_STEP_CONTENT. The completed quantity is WIP that has been reported in the last step of the routing (that is, it could not be routed to any other Operation steps). |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code. |
| StepSequenceNo | INT(10,0) | False |  | False | WIP_OPERATION_STEP | Step sequence number. |
| TotalProcessed | DECIMAL(28,10) | True |  | False |  | Total quantity processed for a given reason code, product and lot. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipContentDetailID | INT(10,0) | False |  | False | WIP_CONTENT_DETAIL | ID of the wip content detail. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION_STEP | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION_STEP | Type of the WIP Order. |

## Primary Key

- **PK_WIP_STEP_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_STEP_CONTENT_LOT_NO** — WIP_STEP_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_STEP_CONTENT_REASON_CODE** — WIP_STEP_CONTENT -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_STEP_CONTENT_UNIT** — WIP_STEP_CONTENT -> UNIT (`UnitID -> ID`)
- **FK_WIP_STEP_CONTENT_WIP_CONTENT_DETAIL** — WIP_STEP_CONTENT -> WIP_CONTENT_DETAIL (`WipContentDetailID -> ID`)
- **FK_WIP_STEP_CONTENT_WIP_OPERATION_STEP** — WIP_STEP_CONTENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WipOrderNo_WipOrderType_OprSequenceNo_StepSequenceNo_ProductID_LotNo** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, ProductID, LotNo`
- **IF_WIP_STEP_CONTENT_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_STEP_CONTENT_UNIT** on `UnitID`
- **IF_WIP_STEP_CONTENT_WIP_CONTENT_DETAIL** on `WipContentDetailID`
