# WIP_CONTENT_STATUS

**Database:** Operational

**Description:** The "WIP_CONTENT_STATUS" table defines all possible wip content statuses.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipContentStatus | SMALLINT(5,0) | False |  | True |  | Link to WIP content |

## Primary Key

- **PK_WIP_CONTENT_STATUS** on `WipContentStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_CONTENT_WIP_CONTENT_STATUS** — WIP_CONTENT -> WIP_CONTENT_STATUS (`WipContentStatus -> WipContentStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
