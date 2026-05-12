# CHECK_LIST_CLASS

**Database:** Operational

**Description:** Enables a user to define Classes and assign Checklists to them.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(40) | True |  | False |  | Name of the Checklist Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CHECK_LIST_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_CHECK_LIST_CLASS** — CHECK_LIST -> CHECK_LIST_CLASS (`CheckListClassID -> ID`)

## Unique Indexes

- **UK_CHECK_LIST_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
