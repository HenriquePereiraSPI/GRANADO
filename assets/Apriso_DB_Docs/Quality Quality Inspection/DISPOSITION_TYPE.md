# DISPOSITION_TYPE

**Database:** Operational

**Description:** Contains the available system defined types of quality inspection (DISPOSITION)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | Not used. |
| DispositionType | SMALLINT(5,0) | False |  | True |  | System defeined type of Disposition |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_TYPE** on `DispositionType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_DISPOSITION_TYPE** — DISPOSITION -> DISPOSITION_TYPE (`DispositionType -> DispositionType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
