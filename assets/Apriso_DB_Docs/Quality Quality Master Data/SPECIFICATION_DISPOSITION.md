# SPECIFICATION_DISPOSITION

**Database:** Operational

**Description:** The SPECIFICATION_DISPOSITION table is used to store all the override levels of a SPECIFICATION by a dispostion sequence number.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | False |  | True | SPECIFICATION_CHARACTERISTIC | Link to the charateristic |
| DispositionSequenceNo | INT(10,0) | False |  | True |  | Link to the disposition line |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LowerControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | The lowest acceptable control value for the characteristic (variable characteristics only). |
| LowerSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | The lowest acceptable specification value for the characteristic (variable characteristics only). |
| SpecificationID | INT(10,0) | False |  | True | SPECIFICATION_CHARACTERISTIC | Link to the specification |
| SpecificationRevision | NVARCHAR(20) | True |  | False |  | For future use. |
| TargetValue | DECIMAL(28,10) | True | (0.0) | False |  | Target value of the specification |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code of the specification disposition. |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper control limit of the characteristic |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Specification limit |

## Primary Key

- **PK_SPECIFICATION_DISPOSITION** on `SpecificationID, Characteristic, DispositionSequenceNo`

## Foreign Keys (this table -> other)

- **FK_SPECIFICATION_DISPOSITION_EC_ORDER** — SPECIFICATION_DISPOSITION -> EC_ORDER (`EcoID -> ID`)
- **FK_SPECIFICATION_DISPOSITION_GRADE** — SPECIFICATION_DISPOSITION -> GRADE (`GradeID -> ID`)
- **FK_SPECIFICATION_DISPOSITION_SPECIFICATION_CHARACTERISTIC** — SPECIFICATION_DISPOSITION -> SPECIFICATION_CHARACTERISTIC (`SpecificationID, Characteristic -> SpecificationID, Characteristic`)
- **FK_SPECIFICATION_DISPOSITION_UOM** — SPECIFICATION_DISPOSITION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_SPECIFICATION_ATTRIBUTE_SPECIFICATION_DISPOSITION** — SPECIFICATION_ATTRIBUTE -> SPECIFICATION_DISPOSITION (`SpecificationID, Characteristic, DispositionSequenceNo -> SpecificationID, Characteristic, DispositionSequenceNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPECIFICATION_DISPOSITION_EC_ORDER** on `EcoID`
- **IF_SPECIFICATION_DISPOSITION_GRADE** on `GradeID`
