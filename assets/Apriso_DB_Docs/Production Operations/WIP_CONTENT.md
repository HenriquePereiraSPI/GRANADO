# WIP_CONTENT

**Database:** Operational

**Description:** This table is used to produce the quantities for the final product and to consume Components for the WIP Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CompletedQuantity | DECIMAL(28,10) | True |  | False |  | The quantity completed for a given Operation, Reason Code, and WIP class. The quantity completed is the quantity that cannot be pushed to any further Operation by the navigation Component. |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Component. |
| InputBalance | DECIMAL(28,10) | True |  | False |  | The quantity received not yet allocated. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | For future use. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation number. |
| OutputBalance | DECIMAL(28,10) | True |  | False |  | The quantity processed and to be pushed to another Operation or to the completed bucket. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The reference to a product (product number and product version). |
| QuantityAllocated | DECIMAL(28,10) | True | (0.0) | False |  | The quantity of progress allocated to the Operation. |
| QuantityCommitted | DECIMAL(28,10) | True |  | False |  | For future use. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The Reason Code for why the entity is on hold. |
| RotationKey | INT(10,0) | True |  | False |  | For future use. |
| SourceMergeGroup | NVARCHAR(10) | True |  | False |  | For future use. |
| SourceSequencingGroup | NVARCHAR(10) | True |  | False |  | For future use. |
| SourceWipContentID | INT(10,0) | True |  | False | WIP_CONTENT | The unique identifier of the source WIP content. |
| TargetQuantity | DECIMAL(28,10) | True |  | False |  | The target quantity of the Operation when using Explosion 2. |
| TotalProcessed | DECIMAL(28,10) | True |  | False |  | The total quantity processed for a given Reason Code and WIP class. |
| TotalReceived | DECIMAL(28,10) | True |  | False |  | The total quantity of progress received by the Operation. |
| UomCode | NVARCHAR(10) | True |  | False | PRODUCT_UOM | The UOM of the progress. |
| WipComponentID | INT(10,0) | True |  | False | WIP_COMPONENT | The unique identifier of the WIP Component. |
| WipContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | Quantity classification: 1 - Good, 2 - Failed, 3 - Scrapped. |
| WipContentStatus | SMALLINT(5,0) | True |  | False | WIP_CONTENT_STATUS | The link to WIP content: 1 - Components, 2 - Finished Goods. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type. |

## Primary Key

- **PK_WIP_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_CONTENT_LOT_NO** — WIP_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_CONTENT_PRODUCT_GRADE** — WIP_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_WIP_CONTENT_PRODUCT_UOM** — WIP_CONTENT -> PRODUCT_UOM (`ProductID, UomCode -> ProductID, UomCode`)
- **FK_WIP_CONTENT_REASON_CODE** — WIP_CONTENT -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_CONTENT_UOM** — WIP_CONTENT -> UOM (`UomCode -> UomCode`)
- **FK_WIP_CONTENT_WIP_COMPONENT** — WIP_CONTENT -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_WIP_CONTENT_WIP_CONTENT** — WIP_CONTENT -> WIP_CONTENT (`SourceWipContentID -> ID`)
- **FK_WIP_CONTENT_WIP_CONTENT_CLASS** — WIP_CONTENT -> WIP_CONTENT_CLASS (`WipContentClass -> WipContentClass`)
- **FK_WIP_CONTENT_WIP_CONTENT_STATUS** — WIP_CONTENT -> WIP_CONTENT_STATUS (`WipContentStatus -> WipContentStatus`)
- **FK_WIP_CONTENT_WIP_OPERATION** — WIP_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)

## Referenced By (other tables -> this)

- **FK_TASK_MATERIAL_USE_WIP_CONTENT** — TASK_MATERIAL_USE -> WIP_CONTENT (`SourceWipContentID -> ID`)
- **FK_TASK_MATERIAL_WIP_CONTENT1** — TASK_MATERIAL_USE -> WIP_CONTENT (`DestWipContentID -> ID`)
- **FK_WIP_CONTAINER_WIP_CONTENT** — WIP_CONTAINER -> WIP_CONTENT (`WipContentID -> ID`)
- **FK_WIP_CONTENT_DETAIL_WIP_CONTENT** — WIP_CONTENT_DETAIL -> WIP_CONTENT (`WipContentID -> ID`)
- **FK_WIP_CONTENT_HOLDS_WIP_CONTENT** — WIP_CONTENT_HOLD -> WIP_CONTENT (`WipContentID -> ID`)
- **FK_WIP_CONTENT_WIP_CONTENT** — WIP_CONTENT -> WIP_CONTENT (`SourceWipContentID -> ID`)
- **FK_WIP_SERIAL_NO_CONTENT_WIP_CONTENT** — WIP_SERIAL_NO_CONTENT -> WIP_CONTENT (`WipContentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_CONTENT_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_CONTENT_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_WIP_CONTENT_PRODUCT_UOM** on `ProductID, UomCode`
- **IF_WIP_CONTENT_WIP_COMPONENT** on `WipComponentID`
- **IF_WIP_CONTENT_WIP_CONTENT** on `SourceWipContentID`
- **IF_WIP_CONTENT_WIP_CONTENT_CLASS** on `WipContentClass`
- **IF_WIP_CONTENT_WIP_CONTENT_STATUS** on `WipContentStatus`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_WipContentClass_WipContentStatus** on `WipOrderNo, WipOrderType, OprSequenceNo, WipContentClass, WipContentStatus`
