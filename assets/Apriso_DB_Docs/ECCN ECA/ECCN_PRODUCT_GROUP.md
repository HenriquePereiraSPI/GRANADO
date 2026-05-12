# ECCN_PRODUCT_GROUP

**Database:** Operational

**Description:** The list of ECCN product groups

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ECCNProductGroup | NVARCHAR(1) | False |  | True |  | ECCN Product Group. |
| Name | NVARCHAR(100) | False |  | False |  | ECCN Product Group name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ECCN_PRODUCT_GROUP** on `ECCNProductGroup`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ECCN_ECCN_PRODUCT_GROUP** — ECCN -> ECCN_PRODUCT_GROUP (`EccnProductGroup -> ECCNProductGroup`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
