# WEIGH_STATUS

**Database:** Operational

**Description:** This table stores possible statuses of Weighing Groups or Weighing Lines.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WeighStatus | INT(10,0) | False |  | True |  | Weigh status of a Weighing Group or a Weighing Line. |

## Primary Key

- **PK_WEIGH_STATUS** on `WeighStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WEIGH_HEADER_WEIGH_STATUS** — WEIGH_HEADER -> WEIGH_STATUS (`WeighStatus -> WeighStatus`)
- **FK_WEIGH_LINE_WEIGH_STATUS** — WEIGH_LINE -> WEIGH_STATUS (`WeighStatus -> WeighStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
