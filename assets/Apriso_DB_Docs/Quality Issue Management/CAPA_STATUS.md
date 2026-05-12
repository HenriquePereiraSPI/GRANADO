# CAPA_STATUS

**Database:** Operational

**Description:** This table contains the list of valid statuses of CAPA issues. The list should not be modified.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAStatus | SMALLINT(5,0) | False |  | True |  | The CAPA status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_STATUS** on `CAPAStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_CAPA_STATUS** — CAPA -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)
- **FK_CAPA_STEP_STATE_CAPA_STATUS** — CAPA_STEP_STATE -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)
- **FK_CAPA_TASK_STATE_CAPA_STATUS** — CAPA_TASK_STATE -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
