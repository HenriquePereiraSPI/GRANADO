# SCALE_CLASS

**Database:** Operational

**Description:** This table contains classes of scales used in the Weighing and Dispensing module.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Automatic | BIT | False | ((0)) | False |  | When set to true, the scale operation if fully automated and the operator does not have to confirm weighing results. |
| Capacity | DECIMAL(28,10) | True |  | False |  | Capacity of the scales in the given Scale Class. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique ID of the entity across multiple Dassault Systemes instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| MinWeight | DECIMAL(28,10) | True |  | False |  | Minimal allowed weight. |
| Name | NVARCHAR(80) | False |  | False |  | Name of the Scale Class. |
| NegativeTolerance | DECIMAL(28,10) | True |  | False |  | Used to set tolerance per scale, instead of per product. |
| PositiveTolerance | DECIMAL(28,10) | True |  | False |  | Used to set tolerance per scale, instead of per product. |
| Precision | DECIMAL(28,10) | True |  | False |  | Precision of the scales in the given Scale Class. |
| TareRequired | BIT | False | ((0)) | False |  | When set to false, the scale does not need taring. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | UOM used for the scales in the given Scale Class. |
| Zero | BIT | False | ((0)) | False |  | When set to true, the scale is set to zero after taring. |

## Primary Key

- **PK_SCALE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_SCALE_CLASS_UOM** — SCALE_CLASS -> UOM (`UOMCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_SCALE_CLASS_TOLERANCE_SCALE_CLASS** — SCALE_CLASS_TOLERANCE -> SCALE_CLASS (`ScaleClassID -> ID`)
- **FK_SCALE_SCALE_CLASS** — SCALE -> SCALE_CLASS (`ScaleClassID -> ID`)

## Unique Indexes

- **UK_SCALE_CLASS_FUID** on `FUID`
- **UK_SCALE_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
