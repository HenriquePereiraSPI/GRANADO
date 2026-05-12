# WEIGH_HEADER_CONTAINER

**Database:** Operational

**Description:** This table stores Containers used exlusively by the given Weighing Group.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | True | CONTAINER | Container number. |
| WeighHeaderID | INT(10,0) | False |  | True | WEIGH_HEADER | ID of the Weigh Header. |

## Primary Key

- **PK_WEIGH_HEADER_CONTAINER** on `WeighHeaderID, Container`

## Foreign Keys (this table -> other)

- **FK_WEIGH_HEADER_CONTAINER_CONTAINER** — WEIGH_HEADER_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_WEIGH_HEADER_CONTAINER_WEIGH_HEADER** — WEIGH_HEADER_CONTAINER -> WEIGH_HEADER (`WeighHeaderID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WEIGH_HEADER_CONTAINER_CONTAINER** on `Container`
