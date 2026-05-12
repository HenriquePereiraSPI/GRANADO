# PRODUCT_ECCN

**Database:** Operational

**Description:** The table stores connection between Product and ECCN.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EccnID | INT(10,0) | False |  | False | ECCN | Link to the ECCN table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProductID | INT(10,0) | False |  | False | PRODUCT | Reference to a product (product number and product version). |

## Primary Key

- **PK_PRODUCT_ECCN** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_ECCN_ECCN** — PRODUCT_ECCN -> ECCN (`EccnID -> ID`)
- **FK_PRODUCT_ECCN_PRODUCT** — PRODUCT_ECCN -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_ECCN_ECCN** on `EccnID`
- **IF_PRODUCT_ECCN_PRODUCT** on `ProductID`
