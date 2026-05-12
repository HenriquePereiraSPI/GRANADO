# ECCN

**Database:** Operational

**Description:** Export Control Classification Number table

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ECCN | NVARCHAR(40) | False |  | False |  | Export Control Classification Number. |
| EccnCclCategory | TINYINT(3,0) | True |  | False | ECCN_CCL_CATEGORY | Link to ECCN CLL Category table. |
| EccnProductGroup | NVARCHAR(1) | True |  | False | ECCN_PRODUCT_GROUP | Link to ECCN Product Group table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_ECCN** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECCN_ECCN_CCL_CATEGORY** — ECCN -> ECCN_CCL_CATEGORY (`EccnCclCategory -> CCLCategory`)
- **FK_ECCN_ECCN_PRODUCT_GROUP** — ECCN -> ECCN_PRODUCT_GROUP (`EccnProductGroup -> ECCNProductGroup`)
- **FK_ECCN_UNIT** — ECCN -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ECCN_ECA_ECCN** — ECCN_ECA -> ECCN (`EccnID -> ID`)
- **FK_ECCN_ECA_HISTORY_ECCN** — ECCN_ECA_HISTORY -> ECCN (`EccnID -> ID`)
- **FK_PRODUCT_ECCN_ECCN** — PRODUCT_ECCN -> ECCN (`EccnID -> ID`)
- **FK_PRODUCT_ECCN_HISTORY_ECCN** — PRODUCT_ECCN_HISTORY -> ECCN (`EccnID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECCN_ECCN_CCL_CATEGORY** on `EccnCclCategory`
- **IF_ECCN_ECCN_PRODUCT_GROUP** on `EccnProductGroup`
- **IF_ECCN_UNIT** on `UnitID`
