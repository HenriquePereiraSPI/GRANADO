# WORK_CENTER_CLASS

**Database:** Operational

**Description:** Contains the user-defined classes of Work Centers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key) in a table. |
| Name | NVARCHAR(50) | False |  | False |  | Name of the Work Center Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_CENTER_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WORK_CENTER_WORK_CENTER_CLASS** — WORK_CENTER -> WORK_CENTER_CLASS (`WorkCenterClassID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
