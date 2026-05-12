# UNIT_ANNOTATION

**Database:** Operational

**Description:** This table stores annotations linked to Apriso entities, like Visual Quality Defects, where it is necessary to indicate the exact place of occurrence using the coordinates (X, Y). It is also used for Electronic Manufacturing Report.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Annotation | NVARCHAR(2000) | True |  | False |  | The body text of the annotation. |
| ComponentX | DECIMAL(28,10) | True |  | False |  | The X coordinate of the reported annotation in context of component used (in internal unit of measure for 3D). |
| ComponentY | DECIMAL(28,10) | True |  | False |  | The Y coordinate of the reported annotation in context of component used (in internal unit of measure for 3D). |
| ComponentZ | DECIMAL(28,10) | True |  | False |  | The Z coordinate of the reported annotation in context of component used (in internal unit of measure for 3D). |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| InstancePath | NVARCHAR(100) | True |  | False |  | The occurrence of the Part in 3DXML. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Indicates component the annotation is reported against. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Indicates Serial Number of the component the annotation is reported against. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | The ID of the Signature Header, used for linking to the Signature entity. |
| UnitID | INT(10,0) | False |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(256) | True |  | False |  | Custom use. Can store any additional data. |
| X | DECIMAL(28,10) | True |  | False |  | The X coordinate of the reported annotation (in pixels for 2D and in internal unit of measure for 3D). |
| Y | DECIMAL(28,10) | True |  | False |  | The Y coordinate of the reported annotation (in pixels for 2D and in internal unit of measure for 3D). |
| Z | DECIMAL(28,10) | True |  | False |  | The Z coordinate of the reported annotation (in internal unit of measure for 3D). |

## Primary Key

- **PK_UNIT_ANNOTATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_UNIT_ANNOTATION_PRODUCT** — UNIT_ANNOTATION -> PRODUCT (`ProductID -> ID`)
- **FK_UNIT_ANNOTATION_SERIAL_NO** — UNIT_ANNOTATION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_UNIT_ANNOTATION_SIGNATURE_HEADER** — UNIT_ANNOTATION -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_UNIT_ANNOTATION_UNIT** — UNIT_ANNOTATION -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_UNIT_ANNOTATION** on `FUID`

## Non-Unique Indexes

- **IDX_UnitID** on `UnitID`
- **IF_UNIT_ANNOTATION_PRODUCT** on `ProductID`
- **IF_UNIT_ANNOTATION_SERIAL_NO** on `SerialNo, ProductID`
- **IF_UNIT_ANNOTATION_SIGNATURE_HEADER** on `SignatureHeaderID`
