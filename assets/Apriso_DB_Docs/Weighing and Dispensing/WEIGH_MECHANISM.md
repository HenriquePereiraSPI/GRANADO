# WEIGH_MECHANISM

**Database:** Operational

**Description:** This table stores information about the weighing mechanism.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WeighMechanism | INT(10,0) | False |  | True |  | Defines how the Weighing Group will be executed. |

## Primary Key

- **PK_WEIGH_MECHANISM** on `WeighMechanism`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WEIGH_HEADER_WEIGH_MECHANISM** — WEIGH_HEADER -> WEIGH_MECHANISM (`WeighMechanism -> WeighMechanism`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
