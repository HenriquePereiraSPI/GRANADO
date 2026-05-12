# MI_DATA_SOURCE

**Database:** Operational

**Description:** List of all Machine Integrator Data Sources for Connectors

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Alias | NVARCHAR(50) | False |  | False |  | Unique alias of Data Source |
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| ConnectorID | INT(10,0) | False |  | False | MI_CONNECTOR | Link to parent Connector |
| DataSourceTypeName | NVARCHAR(80) | False |  | False |  | Reference to the Name column in the MI_DATA_SOURCE_TYPE table. |
| Enabled | BIT | True |  | False |  | (1-Enabled 0-Disabled) |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Data Source |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Data Source |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification |
| OnConnectionLostExecution | BIT | False | ((0)) | False |  | Determines if there is a script to be executed when data source loses connection |
| OnConnectionLostScriptId | INT(10,0) | True |  | False | SCRIPT | Id of script to execute on connection lost event |
| OnReconnectionExecution | BIT | False | ((0)) | False |  | Determines if there is a script to be executed when data source reconnects |
| OnReconnectionScriptId | INT(10,0) | True |  | False | SCRIPT | Id of script to execute on reconnection event |
| Parameters | NVARCHAR | True |  | False |  | Data Source Type specific parameters |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description  (for grouping and sorting) |
| ScriptId1 | INT(10,0) | True |  | False | SCRIPT | Link to the script. |
| ScriptId2 | INT(10,0) | True |  | False | SCRIPT | Link to the script. |
| Simulated | BIT | True |  | False |  | When =1 then MI simulates this provider instead of using actual one |

## Primary Key

- **PK_MI_DATA_SOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_DATA_SOURCE_MI_CONNECTOR** — MI_DATA_SOURCE -> MI_CONNECTOR (`ConnectorID -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT** — MI_DATA_SOURCE -> SCRIPT (`OnReconnectionScriptId -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT_3** — MI_DATA_SOURCE -> SCRIPT (`OnConnectionLostScriptId -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT1** — MI_DATA_SOURCE -> SCRIPT (`ScriptId1 -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT2** — MI_DATA_SOURCE -> SCRIPT (`ScriptId2 -> ID`)

## Referenced By (other tables -> this)

- **FK_MI_POINT_GROUP_MI_DATA_SOURCE** — MI_POINT_GROUP -> MI_DATA_SOURCE (`DataSourceID -> ID`)

## Business Keys (this table -> other)

- MI_DATA_SOURCE -> MI_DATA_SOURCE_TYPE (`DataSourceTypeName -> Name`)

## Unique Indexes

- **IX_MI_DATA_SOURCE** on `Alias, ConnectorID`
- **IX_MI_DATA_SOURCE_1** on `FUID`

## Non-Unique Indexes

- **IF_MI_DATA_SOURCE_MI_CONNECTOR** on `ConnectorID`
- **IF_MI_DATA_SOURCE_SCRIPT** on `OnReconnectionScriptId`
- **IF_MI_DATA_SOURCE_SCRIPT_3** on `OnConnectionLostScriptId`
- **IF_MI_DATA_SOURCE_SCRIPT1** on `ScriptId1`
- **IF_MI_DATA_SOURCE_SCRIPT2** on `ScriptId2`
