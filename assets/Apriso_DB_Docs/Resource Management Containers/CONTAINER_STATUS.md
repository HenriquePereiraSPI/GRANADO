# CONTAINER_STATUS

**Database:** Operational

**Description:** Stores the current status of any given Container.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainerStatus | SMALLINT(5,0) | False |  | True |  | Used to track the status of a Container (e.g. picked, packed). See Prime Data. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINER_STATUS** on `ContainerStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINER_CONTAINER_STATUS** — CONTAINER -> CONTAINER_STATUS (`ContainerStatus -> ContainerStatus`)
- **FK_ORDER_DETAIL_CONTENT_CONTAINER_STATUS** — ORDER_DETAIL_CONTENT -> CONTAINER_STATUS (`ContainerStatus -> ContainerStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
