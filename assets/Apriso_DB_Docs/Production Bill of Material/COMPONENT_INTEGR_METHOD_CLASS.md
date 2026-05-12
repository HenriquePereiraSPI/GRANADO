# COMPONENT_INTEGR_METHOD_CLASS

**Database:** Operational

**Description:** Contains the Classes used to categorize the component integration methods.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COMPONENT_INTEGR_METHOD_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COMPONENT_INTEGR_METHOD_COMPONENT_INTEGR_METHOD_CLASS** — COMPONENT_INTEGR_METHOD -> COMPONENT_INTEGR_METHOD_CLASS (`ComponentIntegrMethodClassId -> ID`)

## Unique Indexes

- **UK_COMPONENT_INTEGR_METHOD_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
