# SAMPLE

**Database:** Operational

**Description:** This table contains the information about all physical samples defined in the system

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Container the sample is related to |
| Description | NVARCHAR(50) | True |  | False |  | Description of the sample |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility the sample is related to |
| GradeID | INT(10,0) | True |  | False | GRADE | Grade identifier the sample is related to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Sample record |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot number the sample is related to |
| Number_ | NVARCHAR(40) | False |  | False |  | Sample number |
| ParentContainer | NVARCHAR(40) | True |  | False | CONTAINER | Parent container the sample is related to |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Partner identifier the sample is related to |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Product identifier the sample is related to |
| SampleClassID | INT(10,0) | True |  | False | SAMPLE_CLASS | Link to the Sample Class |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleType | SMALLINT(5,0) | False |  | False |  | Sample Type: 1 - Primary, 2 - Reserve, 3 - Other |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial number the sample is related to |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure of the sample quantity |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Warehouse location identifier the sample is related to |

## Primary Key

- **PK_SAMPLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_CONTAINER** — SAMPLE -> CONTAINER (`Container -> Container`)
- **FK_SAMPLE_CONTAINER_1** — SAMPLE -> CONTAINER (`ParentContainer -> Container`)
- **FK_SAMPLE_FACILITY** — SAMPLE -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_GRADE** — SAMPLE -> GRADE (`GradeID -> ID`)
- **FK_SAMPLE_LOT_NO** — SAMPLE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SAMPLE_PARTNER** — SAMPLE -> PARTNER (`PartnerID -> ID`)
- **FK_SAMPLE_PRODUCT** — SAMPLE -> PRODUCT (`ProductID -> ID`)
- **FK_SAMPLE_SAMPLE_CLASS** — SAMPLE -> SAMPLE_CLASS (`SampleClassID -> ID`)
- **FK_SAMPLE_SERIAL_NO** — SAMPLE -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SAMPLE_UNIT** — SAMPLE -> UNIT (`UnitID -> ID`)
- **FK_SAMPLE_UOM** — SAMPLE -> UOM (`UomCode -> UomCode`)
- **FK_SAMPLE_WAREHOUSE_LOCATION** — SAMPLE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_SAMPLE_SAMPLE** — DISPOSITION_SAMPLE -> SAMPLE (`SampleID -> ID`)
- **FK_SAMPLE_GROUP_SAMPLE** — SAMPLE_GROUP -> SAMPLE (`SampleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SAMPLE_CONTAINER** on `Container`
- **IF_SAMPLE_CONTAINER_1** on `ParentContainer`
- **IF_SAMPLE_GRADE** on `GradeID`
- **IF_SAMPLE_LOT_NO** on `LotNo, ProductID`
- **IF_SAMPLE_PARTNER** on `PartnerID`
- **IF_SAMPLE_PRODUCT** on `ProductID`
- **IF_SAMPLE_SAMPLE_CLASS** on `SampleClassID`
- **IF_SAMPLE_SERIAL_NO** on `SerialNo, ProductID`
- **IF_SAMPLE_UNIT** on `UnitID`
