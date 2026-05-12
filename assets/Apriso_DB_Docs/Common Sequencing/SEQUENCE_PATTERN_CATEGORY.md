# SEQUENCE_PATTERN_CATEGORY

**Database:** Operational

**Description:** Pattern category is a user-defined grouping of sequenced orders that is used to plan a production sequence. Typically the pattern category is assigned to a customer call-off when the call-off is received. Then in sequence planning, the apply pattern function will use the category to create a production sequence.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| PatternCategory | NVARCHAR(40) | False |  | True |  | Used to match WIP Orders (planned order) to prioritize and sequence together. Either PatternCattegory or a Product must be specified, but not both. If Product is used, WIP Orders are matched based on the Product ID. If PatternCattegory is used, then the WIP OrderÆs external sequence PatternCategory is used. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_PATTERN_CATEGORY** on `PatternCategory`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EXTERNAL_SEQUENCE_SEQUENCE_PATTERN_CATEGORY** — EXTERNAL_SEQUENCE -> SEQUENCE_PATTERN_CATEGORY (`PatternCategory -> PatternCategory`)
- **FK_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_PATTERN_CATEGORY** — SEQUENCE_SCHEDULE_DETAIL -> SEQUENCE_PATTERN_CATEGORY (`PatternCategory -> PatternCategory`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
