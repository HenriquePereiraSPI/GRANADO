# PRODUCT_ECCN_HISTORY

**Database:** Operational

**Description:** The table stores history for PRODUCT_ECCN table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EccnID | INT(10,0) | False |  | False | ECCN | Link to the ECCN table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProductID | INT(10,0) | False |  | False | PRODUCT | Reference to a product (product number and product version). |
| ValidFrom | DATETIME | True |  | False |  | Valid from date. |
| ValidTo | DATETIME | True |  | False |  | Valid to date. |

## Primary Key

- **PK_PRODUCT_ECCN_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_ECCN_HISTORY_ECCN** — PRODUCT_ECCN_HISTORY -> ECCN (`EccnID -> ID`)
- **FK_PRODUCT_ECCN_HISTORY_PRODUCT** — PRODUCT_ECCN_HISTORY -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_ECCN_HISTORY_ECCN** on `EccnID`
- **IF_PRODUCT_ECCN_HISTORY_PRODUCT** on `ProductID`
