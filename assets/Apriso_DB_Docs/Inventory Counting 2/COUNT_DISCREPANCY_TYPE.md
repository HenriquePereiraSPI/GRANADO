# COUNT_DISCREPANCY_TYPE

**Database:** Operational

**Description:** Contains all types of Count Disposition Line discrepancies.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountDiscrepancyType | SMALLINT(5,0) | False |  | True |  | The type of the Count Discrepancy (1 - None, 2 - Qualitative, 3 - Quantitative, 4 - Mix). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_DISCREPANCY_TYPE** on `CountDiscrepancyType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_LINE_COUNT_DISCREPANCY_TYPE** — COUNT_DISPOSITION_LINE -> COUNT_DISCREPANCY_TYPE (`DiscrepancyType -> CountDiscrepancyType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
