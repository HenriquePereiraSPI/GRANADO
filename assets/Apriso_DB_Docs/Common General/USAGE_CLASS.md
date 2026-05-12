# USAGE_CLASS

**Database:** Operational

**Description:** The table contains Usage Classes of various entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| Name | NVARCHAR(80) | False |  | False |  | Name of the class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UsageClassType | INT(10,0) | False |  | False | USAGE_CLASS_TYPE | FK to the USAGE_CLASS_TYPE table. |

## Primary Key

- **PK_USAGE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_USAGE_CLASS_USAGE_CLASS_TYPE** — USAGE_CLASS -> USAGE_CLASS_TYPE (`UsageClassType -> UsageClassType`)

## Referenced By (other tables -> this)

- **FK_WIP_REQ_RESOURCE_USAGE_CLASS** — WIP_REQ_RESOURCE -> USAGE_CLASS (`UsageClassID -> ID`)

## Unique Indexes

- **UX_USAGE_CLASS** on `UsageClassType, Name`

## Non-Unique Indexes

- **** on ``
