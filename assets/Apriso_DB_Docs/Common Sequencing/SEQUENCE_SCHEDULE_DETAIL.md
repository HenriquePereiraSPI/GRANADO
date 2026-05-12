# SEQUENCE_SCHEDULE_DETAIL

**Database:** Operational

**Description:** Table keeps the details of revolving sequence scheduling.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Auto incremented field. Primary Key. |
| PatternCategory | NVARCHAR(40) | True |  | False | SEQUENCE_PATTERN_CATEGORY | Used to match WIP Orders (planned order) to prioritize and sequence together. Either PatternCattegory or a Product must be specified, but not both. If Product is used, WIP Orders are matched based on the Product ID. If PatternCattegory is used, then the WIP OrderÆs external sequence PatternCategory is used. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | FK to PRODUCT - Product ID. |
| Quantity | DECIMAL(28,10) | False |  | False |  | Product Quantity. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence of the product in the revolving schedule. |
| SequenceScheduleID | INT(10,0) | False |  | False | SEQUENCE_SCHEDULE | FK to SEQUENCE_SCHEDULE - Sequence Schedule ID. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | FK to Uom table - Uom Code. |
| UseAndOperator | BIT | True |  | False |  | When true, the operator used to process the patterns is the logical AND. Otherwise, logical OR. |

## Primary Key

- **PK_SEQUENCE_SCHEDULE_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_SCHEDULE_DETAIL_PRODUCT** — SEQUENCE_SCHEDULE_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_PATTERN_CATEGORY** — SEQUENCE_SCHEDULE_DETAIL -> SEQUENCE_PATTERN_CATEGORY (`PatternCategory -> PatternCategory`)
- **FK_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_SCHEDULE** — SEQUENCE_SCHEDULE_DETAIL -> SEQUENCE_SCHEDULE (`SequenceScheduleID -> ID`)
- **FK_SEQUENCE_SCHEDULE_DETAIL_UOM** — SEQUENCE_SCHEDULE_DETAIL -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SEQUENCE_SCHEDULE_DETAIL_PRODUCT** on `ProductID`
- **IF_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_PATTERN_CATEGORY** on `PatternCategory`
- **IF_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_SCHEDULE** on `SequenceScheduleID`
