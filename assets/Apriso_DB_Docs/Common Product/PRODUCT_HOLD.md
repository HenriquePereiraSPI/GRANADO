# PRODUCT_HOLD

**Database:** Operational

**Description:** The “PRODUCT_HOLD” table stores information about reason codes that were used to put a product on hold.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The containment the hold was created for. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version) |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRODUCT_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_HOLD_CONTAINMENT** — PRODUCT_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_PRODUCT_HOLDS_PRODUCT** — PRODUCT_HOLD -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_HOLDS_REASON_CODES** — PRODUCT_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_HOLD_CONTAINMENT** on `ContainmentID`
- **IF_PRODUCT_HOLDS_PRODUCT** on `ProductID`
