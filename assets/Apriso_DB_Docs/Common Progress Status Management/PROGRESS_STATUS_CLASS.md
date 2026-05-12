# PROGRESS_STATUS_CLASS

**Database:** Operational

**Description:** This table stores classes for progress statuses. The class is used to recognize which status belongs to which area: WIP Order, Work Instructions and Change Management.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(50) | False |  | False |  | Global unique name of the progress status class |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PROGRESS_STATUS_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PROGRESS_STATUS_PROGRESS_STATUS_CLASS** — PROGRESS_STATUS -> PROGRESS_STATUS_CLASS (`ClassId -> ID`)

## Unique Indexes

- **UK_PROGRESS_STATUS_CLASS_FUID** on `FUID`
- **UK_PROGRESS_STATUS_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
