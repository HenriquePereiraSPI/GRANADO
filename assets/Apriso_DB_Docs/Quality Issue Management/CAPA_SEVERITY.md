# CAPA_SEVERITY

**Database:** Operational

**Description:** This table contains the list of valid severities of CAPA issues.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Severity | INT(10,0) | False |  | True |  | The CAPA severity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_SEVERITY** on `Severity`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_CAPA_SEVERITY** — CAPA -> CAPA_SEVERITY (`Severity -> Severity`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
