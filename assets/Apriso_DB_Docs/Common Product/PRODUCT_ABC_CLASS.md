# PRODUCT_ABC_CLASS

**Database:** Operational

**Description:** The table contains the codes of ABC Classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(10) | False |  | False |  | Unique ABC Class name. |
| Percentage | DECIMAL(28,10) | True |  | False |  | Percentage of number of products. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PRODUCT_ABC_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_ABC_CLASS_UNIT** — PRODUCT_ABC_CLASS -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_FREQUENCY_LINK_ABC** — COUNT_FREQUENCY_LINK -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)
- **FK_PRODUCT_FACILITY_PRODUCT_ABC_CLASS** — PRODUCT_FACILITY -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)
- **FK_PRODUCT_PRODUCT_ABC_CLASS** — PRODUCT -> PRODUCT_ABC_CLASS (`ProductABCClassID -> ID`)

## Unique Indexes

- **UK_PRODUCT_ABC_CLASS** on `Name`
- **UK_PRODUCT_ABC_CLASS_1** on `FUID`

## Non-Unique Indexes

- **IF_PRODUCT_ABC_CLASS_UNIT** on `UnitID`
