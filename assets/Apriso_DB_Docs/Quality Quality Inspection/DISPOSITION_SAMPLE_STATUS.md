# DISPOSITION_SAMPLE_STATUS

**Database:** Operational

**Description:** (Future use) Contains Statuses for Samples.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Status | SMALLINT(5,0) | False |  | True |  | Status of the Sample. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_SAMPLE_STATUS** on `Status`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_SAMPLE_DISPOSITION_SAMPLE_STATUS** — DISPOSITION_SAMPLE -> DISPOSITION_SAMPLE_STATUS (`Status -> Status`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
