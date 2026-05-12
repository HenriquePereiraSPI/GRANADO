# MI_CONNECTOR

**Database:** Operational

**Description:** List of all Machine Integrator Connectors

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Alias | NVARCHAR(50) | False |  | False |  | Unique alias of Connector |
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Connector |
| HostName | NVARCHAR(50) | True |  | False |  | Name of the machine that runs Connector |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Connector |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification |
| Platform | INT(10,0) | False |  | False |  | Target platform: 1 - Desktop, 2 - PocketPC. |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description  (for grouping and sorting) |

## Primary Key

- **PK_MIConnector** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_MI_DATA_SOURCE_MI_CONNECTOR** — MI_DATA_SOURCE -> MI_CONNECTOR (`ConnectorID -> ID`)
- **FK_MI_SCRIPT_MI_CONNECTOR** — MI_SCRIPT -> MI_CONNECTOR (`MIConnectorId -> ID`)
- **FK_MILoggingGroup_MIConnector** — MI_ACTION_GROUP -> MI_CONNECTOR (`ConnectorID -> ID`)

## Unique Indexes

- **IX_MI_CONNECTOR** on `Alias`
- **IX_MI_CONNECTOR_1** on `FUID`

## Non-Unique Indexes

- **** on ``
