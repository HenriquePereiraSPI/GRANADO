# SIGNOFF_EXCEPTION_TYPE

**Database:** Operational

**Description:** The different exceptions that can occur during attendance

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SIGNOFF_EXCEPTION_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SIGNOFF_PROFILE_DETAIL_SIGNOFF_EXCEPTION_TYPE** — SIGNOFF_PROFILE_DETAIL -> SIGNOFF_EXCEPTION_TYPE (`SignOffExceptionTypeID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
