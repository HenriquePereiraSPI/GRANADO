# CHECK_POINT_CLASS

**Database:** Operational

**Description:** Contains the various Checkpoint Classes users have defined.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(40) | True |  | False |  | Name of the entity, |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHECK_POINT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHECK_POINT_CHECK_POINT_CLASS** — CHECK_POINT -> CHECK_POINT_CLASS (`CheckPointClassID -> ID`)

## Unique Indexes

- **UK_CHECK_POINT_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
