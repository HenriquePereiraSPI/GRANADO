# SPECIFICATION

**Database:** Operational

**Description:** The SPECIFICATION table is used to store a specification for quality tracking.  A specification is a collection of rows in the CHARACTERISITIC table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The facility the specification is linked to. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| MaximumDefectRate | DECIMAL(28,10) | True |  | False |  | (Reference Only) The maximum acceptable defect rate (percentage of units defective) for this specification. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| RevisionControlFlag | BIT | True |  | False |  | A flag indicating if this entity is revision controlled.  Check indicates that this specification is revision controlled. |
| Specification | NVARCHAR(40) | False |  | False |  | Unique identifier for the specification. |
| SpecificationRevision | NVARCHAR(20) | True |  | False |  | The latest revision identifier of the specification. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPECIFICATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPECIFICATION_EC_ORDER** — SPECIFICATION -> EC_ORDER (`EcoID -> ID`)
- **FK_SPECIFICATION_FACILITY** — SPECIFICATION -> FACILITY (`Facility -> Facility`)
- **FK_SPECIFICATION_FACILITY1** — SPECIFICATION -> FACILITY (`OwnerFacility -> Facility`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_LINE_SPECIFICATION** — DISPOSITION_LINE -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_DISPOSITION_SPECIFICATION** — DISPOSITION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_INSPECTION_DET_SPECIFICATION_SPECIFICATION** — INSPECTION_DET_SPECIFICATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_INSPECTION_LINE_SPECIFICATION** — INSPECTION_LINE -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_LOT_NO_SPECIFICATION** — LOT_NO -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_OPERATION_SPECIFICATION** — OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_OPERATION_STEP_SPECIFICATION** — OPERATION_STEP -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_OPERATION_SPECIFICATION** — PROCESS_OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_OPERATION_STEP_SPECIFICATION** — PROCESS_OPERATION_STEP -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_SPECIFICATION** — PROCESS -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_FACILITY_SPECIFICATION** — PRODUCT_FACILITY -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_ROUTING_SPECIFICATION** — PRODUCT_ROUTING -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_ROUTING_STEP_SPECIFICATION** — PRODUCT_ROUTING_STEP -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PRODUCT_SPECIFICATION** — PRODUCT -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE__SPECIFICATION** — RESOURCE_ -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE_CLASS_SPECIFICATION** — RESOURCE_CLASS -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE_ROUTING_SPECIFICATION** — RESOURCE_ROUTING -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE_ROUTING_STEP_SPECIFICATION** — RESOURCE_ROUTING_STEP -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_SERIAL_NO_SPECIFICATION** — SERIAL_NO -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_SPECIFICATION_CHARACTERISTIC_SPECIFICATION** — SPECIFICATION_CHARACTERISTIC -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_SPECIFICATION_FACILITY_SPECIFICATION** — SPECIFICATION_FACILITY -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WAREHOUSE_LOCATION_SPECIFICATION** — WAREHOUSE_LOCATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WIP_OPERATION_SPECIFICATION** — WIP_OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WIP_ORDER_SPECIFICATION** — WIP_ORDER -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WORK_CENTER_SPECIFICATION** — WORK_CENTER -> SPECIFICATION (`SpecificationID -> ID`)

## Unique Indexes

- **UK_SPECIFICATION** on `FUID`

## Non-Unique Indexes

- **IF_SPECIFICATION_EC_ORDER** on `EcoID`
- **IXD_Specification** on `Specification`
