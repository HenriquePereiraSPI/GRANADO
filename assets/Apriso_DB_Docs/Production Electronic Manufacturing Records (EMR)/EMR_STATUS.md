# EMR_STATUS

**Database:** Operational

**Description:** This table stores the status of EMR.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmrStatus | SMALLINT(5,0) | False |  | True |  | Primary Key. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMR_STATUS** on `EmrStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMR_HEADER_EMR_STATUS** — EMR_HEADER -> EMR_STATUS (`EmrStatus -> EmrStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
