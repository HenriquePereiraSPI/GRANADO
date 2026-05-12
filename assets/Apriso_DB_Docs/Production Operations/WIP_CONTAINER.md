# WIP_CONTAINER

**Database:** Operational

**Description:** The “WIP_CONTAINER” table provides information about quantities of a wip content stored in a container.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | True | CONTAINER | Reference to the WIP Container |
| Quantity | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| ReleaseDate | DATETIME | True |  | False |  | For future use. |
| VerifiedDate | DATETIME | True |  | False |  | For future use. |
| WipContentID | INT(10,0) | False |  | True | WIP_CONTENT | Link to WIP content |
| WipOperationStatus | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STATUS | For future use. |

## Primary Key

- **PK_WIP_CONTAINER** on `Container, WipContentID`

## Foreign Keys (this table -> other)

- **FK_WIP_CONTAINER_CONTAINER** — WIP_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_WIP_CONTAINER_WIP_CONTENT** — WIP_CONTAINER -> WIP_CONTENT (`WipContentID -> ID`)
- **FK_WIP_CONTAINER_WIP_OPERATION_STATUS** — WIP_CONTAINER -> WIP_OPERATION_STATUS (`WipOperationStatus -> OperationStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_CONTAINER_WIP_CONTENT** on `WipContentID`
- **IF_WIP_CONTAINER_WIP_OPERATION_STATUS** on `WipOperationStatus`
