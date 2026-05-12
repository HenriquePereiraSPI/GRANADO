# DISPOSITION_CONTENT

**Database:** Operational

**Description:** Contains all the details regarding the subject (population) of the quality inspection. If the inspection is stock relevant (appropriate inventory movements must be done before and after the inspection

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Container Number being the subject of the test |
| Disposition | NVARCHAR(40) | False |  | False | DISPOSITION | Disposition Number the content is linked to |
| DispositionContentType | SMALLINT(5,0) | False |  | False | DISPOSITION_CONTENT_TYPE | Type of the disposition content indicating what is the source of the content. The following types are considered: Inventory (content comes from inventory e.g. inspection at good receipt), WIP (content comes from production order), Resource (content comes from resource(s), e.g. calibration inspection), Custome (miscellanous content) |
| DispositionFacility | NVARCHAR(40) | False |  | False | DISPOSITION | Disposition Facility the content is linked to |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility of the content record |
| GradeID | INT(10,0) | True |  | False | GRADE | Grade of the product being the subject of the test |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Content |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number being the subject of the test |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Production Order Operation being the subject of the test |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number being the subject of the test |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number being the subject of the test (e.g. Purchase Order Number in case of inspection at good receipt) |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Order Type being the subject of the test |
| ParentContainer | NVARCHAR(40) | True |  | False | CONTAINER | Parent container of the container being the subject of the inspection |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Vendor of the material being received or Customer of the product to be shipped |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Product Identifier being the subject of the test. This product cannot be different then the product of the whole inspection (DISPOSITION.ProductId) however it is required to allow referencing Lot or Serial |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity being the subset of the total quantity to be tested (DISPOSITION.Quantity). Sum of Quantity in all records of Disposition Content should be equal to the population quantity (DISPOSITION.Quantity). This quantity can be e.g. Lot quantity (inspection of received lot), Ordered Quantity (inspection during production), received quantity (inspection of the received Purchase Order), 1 (inspection of serial number) |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | Resource Identifier (used in case of inspection of the resource, e.g. calibration inspection) |
| ResourceLifeCycleID | INT(10,0) | True |  | False | RESOURCE_LIFE_CYCLE | Life Cycle of the Resource (ResourceID) |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial Number being the subject of the test |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure of the quantity to be inspected for the given disposition content |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location of the inventory being the subject of the inspection |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Production Order Number being the subject of the test |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Production Order Type being the subject of the test |

## Primary Key

- **PK_DISPOSITION_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_CONTENT_CONTAINER** — DISPOSITION_CONTENT -> CONTAINER (`ParentContainer -> Container`)
- **FK_DISPOSITION_CONTENT_CONTAINER1** — DISPOSITION_CONTENT -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_CONTENT_DISPOSITION** — DISPOSITION_CONTENT -> DISPOSITION (`Disposition, DispositionFacility -> Disposition, Facility`)
- **FK_DISPOSITION_CONTENT_DISPOSITION_CONTENT_TYPE** — DISPOSITION_CONTENT -> DISPOSITION_CONTENT_TYPE (`DispositionContentType -> DispositionContentType`)
- **FK_DISPOSITION_CONTENT_FACILITY** — DISPOSITION_CONTENT -> FACILITY (`DispositionFacility -> Facility`)
- **FK_DISPOSITION_CONTENT_FACILITY1** — DISPOSITION_CONTENT -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_CONTENT_GRADE** — DISPOSITION_CONTENT -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_CONTENT_LOT_NO** — DISPOSITION_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_CONTENT_ORDER_DETAIL** — DISPOSITION_CONTENT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPOSITION_CONTENT_ORDER_HEADER** — DISPOSITION_CONTENT -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_DISPOSITION_CONTENT_PARTNER** — DISPOSITION_CONTENT -> PARTNER (`PartnerID -> ID`)
- **FK_DISPOSITION_CONTENT_PRODUCT** — DISPOSITION_CONTENT -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_CONTENT_PRODUCT_GRADE** — DISPOSITION_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_DISPOSITION_CONTENT_RESOURCE_** — DISPOSITION_CONTENT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_DISPOSITION_CONTENT_RESOURCE_LIFE_CYCLE** — DISPOSITION_CONTENT -> RESOURCE_LIFE_CYCLE (`ResourceLifeCycleID -> ID`)
- **FK_DISPOSITION_CONTENT_SERIAL_NO** — DISPOSITION_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_CONTENT_UNIT** — DISPOSITION_CONTENT -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_CONTENT_UOM** — DISPOSITION_CONTENT -> UOM (`UomCode -> UomCode`)
- **FK_DISPOSITION_CONTENT_WAREHOUSE_LOCATION** — DISPOSITION_CONTENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_DISPOSITION_CONTENT_WIP_OPERATION** — DISPOSITION_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_CONTENT_WIP_ORDER** — DISPOSITION_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DISPOSITION_CONTENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_DISPOSITION_CONTENT_CONTAINER** on `ParentContainer`
- **IF_DISPOSITION_CONTENT_CONTAINER1** on `Container`
- **IF_DISPOSITION_CONTENT_DISPOSITION** on `Disposition, DispositionFacility`
- **IF_DISPOSITION_CONTENT_GRADE** on `GradeID`
- **IF_DISPOSITION_CONTENT_LOT_NO** on `LotNo, ProductID`
- **IF_DISPOSITION_CONTENT_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_DISPOSITION_CONTENT_PARTNER** on `PartnerID`
- **IF_DISPOSITION_CONTENT_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_DISPOSITION_CONTENT_RESOURCE_** on `ResourceID`
- **IF_DISPOSITION_CONTENT_RESOURCE_LIFE_CYCLE** on `ResourceLifeCycleID`
- **IF_DISPOSITION_CONTENT_SERIAL_NO** on `SerialNo, ProductID`
- **IF_DISPOSITION_CONTENT_UNIT** on `UnitID`
- **IF_DISPOSITION_CONTENT_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
