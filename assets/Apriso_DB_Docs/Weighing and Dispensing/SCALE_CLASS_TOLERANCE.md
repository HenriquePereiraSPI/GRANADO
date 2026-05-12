# SCALE_CLASS_TOLERANCE

**Database:** Operational

**Description:** This table contains tolerances of scale classes for different weighing ranges.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FromWeight | DECIMAL(28,10) | True |  | False |  | Lower limit of the weighing range. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| NegativeTolerance | DECIMAL(28,10) | True |  | False |  | Negative tolerance for the weighing range. |
| PositiveTolerance | DECIMAL(28,10) | True |  | False |  | Positive tolerance for the weighing range. |
| ScaleClassID | INT(10,0) | False |  | False | SCALE_CLASS | ID of the Scale Class. |
| ToWeight | DECIMAL(28,10) | True |  | False |  | Upper limit of the weighing range. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | UOM code of the limits and of the tolerances. |

## Primary Key

- **PK_SCALE_CLASS_TOLERANCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SCALE_CLASS_TOLERANCE_SCALE_CLASS** — SCALE_CLASS_TOLERANCE -> SCALE_CLASS (`ScaleClassID -> ID`)
- **FK_SCALE_CLASS_TOLERANCE_UNIT** — SCALE_CLASS_TOLERANCE -> UNIT (`UnitID -> ID`)
- **FK_SCALE_CLASS_TOLERANCE_UOM** — SCALE_CLASS_TOLERANCE -> UOM (`UOMCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SCALE_CLASS_TOLERANCE_SCALE_CLASS** on `ScaleClassID`
- **IF_SCALE_CLASS_TOLERANCE_UNIT** on `UnitID`
