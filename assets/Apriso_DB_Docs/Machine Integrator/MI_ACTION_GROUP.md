# MI_ACTION_GROUP

**Database:** Operational

**Description:** List of all Machine Integrator Action Groups for Connectors

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| ConnectorID | INT(10,0) | False |  | False | MI_CONNECTOR | Link to parent Connector |
| Enabled | BIT | True |  | False |  | True when action group is enabled |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Action Group |
| GroupSubscriptionName | NVARCHAR(255) | True |  | False |  | Name of group subscription specified by the user |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Action Group |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification |
| Name | NVARCHAR(50) | True |  | False |  | Unique alias of Action Group |
| OneGroupSubscrption | BIT | False | ((0)) | False |  | Determines if multiple points will be monitored as one group |
| OnRefreshExecution | BIT | False | ((0)) | False |  | Determines if action group shloud be executed when configuration is refreshed |
| OnShutdownExecution | BIT | True |  | False |  | When true group executes on shutdown |
| OnStartupExecution | BIT | True |  | False |  | When true group executes on startup |
| PeriodicalConditionExecution | BIT | True |  | False |  | When true group executes periodically when condition is true |
| PeriodicalConditionExpression | NVARCHAR(1000) | True |  | False |  | Periodical execution condition |
| PeriodicalConditionInterval | INT(10,0) | True |  | False |  | Time interval for periodical conditional execution |
| PeriodicalConditionScriptId | INT(10,0) | True |  | False | SCRIPT | Link to the script. |
| PeriodicalConditionSyntax | INT(10,0) | True |  | False |  | Syntax of periodical execution condition |
| PeriodicalExecution | BIT | True |  | False |  | When true group executes periodically without condition |
| PeriodicalInterval | INT(10,0) | True |  | False |  | Time interval for periodical execution |
| PointChangeExecution | BIT | True |  | False |  | When true group executes on point value change |
| PointChangeExpression | NVARCHAR(1000) | True |  | False |  | Point change execution condition |
| PointChangeScriptId | INT(10,0) | True |  | False | SCRIPT | Link to the script. |
| PointChangeSyntax | INT(10,0) | True |  | False |  | Syntax of point change execution condition |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description  (for grouping and sorting) |

## Primary Key

- **PK_MILoggingGroup** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_ACTION_GROUP_SCRIPT** — MI_ACTION_GROUP -> SCRIPT (`PointChangeScriptId -> ID`)
- **FK_MI_ACTION_GROUP_SCRIPT1** — MI_ACTION_GROUP -> SCRIPT (`PeriodicalConditionScriptId -> ID`)
- **FK_MILoggingGroup_MIConnector** — MI_ACTION_GROUP -> MI_CONNECTOR (`ConnectorID -> ID`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_MI_FEATURE_MI_ACTION_GROUP** — EQUIPMENT_MI_FEATURE -> MI_ACTION_GROUP (`MIActionGroupID -> ID`)
- **FK_MILogGroupAction_MILoggingGroup** — MI_ACTION -> MI_ACTION_GROUP (`ActionGroupID -> ID`)
- **FK_MILogGroupPoint_MILoggingGroup** — MI_ACTION_GROUP_POINT -> MI_ACTION_GROUP (`ActionGroupID -> ID`)

## Unique Indexes

- **IX_MI_ACTION_GROUP** on `FUID`
- **IX_MI_ACTION_GROUP_1** on `ConnectorID, Name`

## Non-Unique Indexes

- **IF_MI_ACTION_GROUP_SCRIPT** on `PointChangeScriptId`
- **IF_MI_ACTION_GROUP_SCRIPT1** on `PeriodicalConditionScriptId`
