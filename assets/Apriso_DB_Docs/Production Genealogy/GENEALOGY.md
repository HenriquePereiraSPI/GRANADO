# GENEALOGY

**Database:** Operational

**Description:** Stores information about the genealogy of Lots or Serials.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Cost | DECIMAL(28,10) | True |  | False |  | Cost of the child item. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Reference to the Child Lot number. |
| ParentGradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| ParentLotNo | NVARCHAR(40) | True |  | False | LOT_NO | Reference to the Parent Lot. |
| ParentProductID | INT(10,0) | True |  | False | LOT_NO | ID of the Parent Product. |
| ParentSerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Relation with the Parent Serial. |
| ProductGradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version) of the Child. |
| Quantity | DECIMAL(28,10) | True | (0.0) | False |  | Quantity of the Child Product Lot integrated in the Parent Product Lot/Serial. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code for the child item. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Child Serial number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM of the quantity of Child used by the Parent. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | For future use. |

## Primary Key

- **PK_GENEALOGY** on `ID`

## Foreign Keys (this table -> other)

- **FK_GENEALOGY_EC_ORDER** — GENEALOGY -> EC_ORDER (`EcoID -> ID`)
- **FK_GENEALOGY_LOT_NO** — GENEALOGY -> LOT_NO (`ParentProductID, ParentLotNo -> ProductID, LotNo`)
- **FK_GENEALOGY_LOT_NO1** — GENEALOGY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_GENEALOGY_PRODUCT_GRADE** — GENEALOGY -> PRODUCT_GRADE (`ParentProductID, ParentGradeID -> ProductID, GradeID`)
- **FK_GENEALOGY_PRODUCT_GRADE1** — GENEALOGY -> PRODUCT_GRADE (`ProductID, ProductGradeID -> ProductID, GradeID`)
- **FK_GENEALOGY_REASON_CODE** — GENEALOGY -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_GENEALOGY_SERIAL_NO** — GENEALOGY -> SERIAL_NO (`ParentProductID, ParentSerialNo -> ProductID, SerialNo`)
- **FK_GENEALOGY_SERIAL_NO1** — GENEALOGY -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_GENEALOGY_UNIT** — GENEALOGY -> UNIT (`UnitID -> ID`)
- **FK_GENEALOGY_UOM** — GENEALOGY -> UOM (`UomCode -> UomCode`)
- **FK_GENEALOGY_WORK_CENTER** — GENEALOGY -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_GENEALOGY_DETAIL_GENEALOGY** — GENEALOGY_DETAIL -> GENEALOGY (`GenealogyID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_GENEALOGY_EC_ORDER** on `EcoID`
- **IF_GENEALOGY_LOT_NO** on `ParentLotNo, ParentProductID`
- **IF_GENEALOGY_LOT_NO1** on `LotNo, ProductID`
- **IF_GENEALOGY_PRODUCT_GRADE** on `ParentProductID, ParentGradeID`
- **IF_GENEALOGY_PRODUCT_GRADE1** on `ProductID, ProductGradeID`
- **IF_GENEALOGY_SERIAL_NO** on `ParentSerialNo, ParentProductID`
- **IF_GENEALOGY_SERIAL_NO1** on `SerialNo, ProductID`
- **IF_GENEALOGY_UNIT** on `UnitID`
- **IXD_ParentProductID_ParentLotNo** on `ParentProductID, ParentLotNo`
- **IXD_ParentProductID_ParentSerialNo_ParentLotNo_Active** on `ParentProductID, ParentSerialNo, ParentLotNo, Active`
- **IXD_ParentProductID_ParentSerialNo_ProductID_SerialNo_LotNo** on `ParentProductID, ParentSerialNo, ProductID, SerialNo, LotNo`
- **IXD_ParentSerialNo_ProductID** on `ParentSerialNo, ProductID`
- **IXD_ProductID_SerialNo_LotNo_Active** on `ProductID, SerialNo, LotNo, Active`
