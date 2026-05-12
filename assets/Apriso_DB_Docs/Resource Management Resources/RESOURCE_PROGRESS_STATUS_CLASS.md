# RESOURCE_PROGRESS_STATUS_CLASS

**Database:** Operational

**Description:** Used to categorize the resource progress status. User defined

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_PROGRESS_STATUS_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_RESOURCE_PROGRESS_STATUS_RESOURCE_PROGRESS_STATUS_CLASS** — RESOURCE_PROGRESS_STATUS -> RESOURCE_PROGRESS_STATUS_CLASS (`ProgressStatusClassID -> ID`)

## Unique Indexes

- **UX_RESOURCE_PROGRESS_STATUS_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
