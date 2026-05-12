# SYSTEM_PARAMETER_CATEGORY

**Database:** Solution Authoring

**Description:** Stores system parameter categories.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the system parameter category. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| Name | NVARCHAR(255) | False |  | False |  | Unique identifier of the system parameter category provided by the user as its name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the text. Can be used for translation purposes. |

## Primary Key

- **PK_SYSTEM_PARAMETER_CATEGORY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SYSTEM_PARAMETER_SYSTEM_PARAMETER_CATEGORY** — SYSTEM_PARAMETER -> SYSTEM_PARAMETER_CATEGORY (`CategoryID -> ID`)

## Unique Indexes

- **UK_SYSTEM_PARAMETER_CATEGORY_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
