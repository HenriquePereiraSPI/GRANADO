# WIP_CONTENT_DETAIL

**Database:** Operational

**Description:** This table provides detailed information about WIP content such as products, lots, and quantities. It is an extension of the WIP_CONTENT table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP content detail. |
| InputBalance | DECIMAL(28,10) | True |  | False |  | The quantity received not yet allocated. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number consumed or reported, or the Lot Number to be processed (depending on the WIP class and the reference to the Component's Lot Number). In Complex Assembly, this is used only to store consumed Components. |
| OutputBalance | DECIMAL(28,10) | True |  | False |  | The quantity processed and to be pushed to another Operation or to the completed bucket. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The reference to the product (product number and product version). This could be a Component-as-product ID or the final product ID. |
| QuantityAllocated | DECIMAL(28,10) | True |  | False |  | The quantity of progress allocated to the Operation, product, or lot. |
| QuantityCommitted | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityCompleted | DECIMAL(28,10) | True |  | False |  | The total quantity that has been completed of the specified WIP_CONTENT. The completed quantity is WIP that has been reported in the last Operation of the routing (that is, it could not be routed to any other Operations). |
| TotalProcessed | DECIMAL(28,10) | True |  | False |  | The total quantity processed for a given Reason Code, WIP class, product, and lot. |
| TotalReceived | DECIMAL(28,10) | True |  | False |  | The total quantity received by the Operation (for the product and lot). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | The UOM of the progress. |
| WipContentID | INT(10,0) | True |  | False | WIP_CONTENT | The link to the WIP content. |

## Primary Key

- **PK_WIP_CONTENT_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_CONTENT_DETAIL_LOT_NO** — WIP_CONTENT_DETAIL -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WIP_CONTENT_DETAIL_PRODUCT** — WIP_CONTENT_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_CONTENT_DETAIL_UNIT** — WIP_CONTENT_DETAIL -> UNIT (`UnitID -> ID`)
- **FK_WIP_CONTENT_DETAIL_UOM** — WIP_CONTENT_DETAIL -> UOM (`UOMCode -> UomCode`)
- **FK_WIP_CONTENT_DETAIL_WIP_CONTENT** — WIP_CONTENT_DETAIL -> WIP_CONTENT (`WipContentID -> ID`)

## Referenced By (other tables -> this)

- **FK_WIP_STEP_CONTENT_WIP_CONTENT_DETAIL** — WIP_STEP_CONTENT -> WIP_CONTENT_DETAIL (`WipContentDetailID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_CONTENT_DETAIL_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_CONTENT_DETAIL_UNIT** on `UnitID`
- **IF_WIP_CONTENT_DETAIL_WIP_CONTENT** on `WipContentID`
- **IXD_ProductID_LotNo** on `ProductID, LotNo`
