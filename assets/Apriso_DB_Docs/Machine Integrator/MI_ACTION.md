# MI_ACTION

**Database:** Operational

**Description:** List of all actions for given action group

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionGroupID | INT(10,0) | False |  | False | MI_ACTION_GROUP | Link to parent Action Group |
| ActionType | INT(10,0) | False |  | False |  | Type of ot action (0-None, 1-Operation, 2-Log to file, 3- StoredProcedure, 4-Machine Integrator) |
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment |
| DFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| Enabled | BIT | True |  | False |  | True when action group is enabled |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Action |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Action |
| IsPersistent | BIT | True |  | False |  | If enabled then action execution request is persisted localy. |
| LastModified | DATETIME | True |  | False |  | Time of the last logical modification. |
| Name | NVARCHAR(255) | False |  | False |  | Unique alias of Action |
| NumberOfExecutionAttempts | INT(10,0) | True |  | False |  | Number of automatic execution attempts in case of failed execution. |
| Parameters | NVARCHAR | True |  | False |  | Data Source Type specific parameters. |
| Reference | NVARCHAR(50) | True |  | False |  | Additional description (for grouping and sorting). |
| ScriptId | INT(10,0) | True |  | False | SCRIPT | Link to the script. |
| SequenceNo | INT(10,0) | True |  | False |  | Specifies the execution order of actions inside one action group |
| SynchronizationQueue | NVARCHAR(50) | True |  | False |  |  |
| ValidatedBy | NVARCHAR(50) | True |  | False |  | Name of the user who performed validation. |
| ValidatedOn | DATETIME | True |  | False |  | Date and time of the last validation. |
| ValidationResult | SMALLINT(5,0) | True |  | False |  | The outcome of the validation. Possible values: 0 - N/A, 1 - Success, 2 - Uncertain, 3 - Failure. |

## Primary Key

- **PK_MILogGroupAction** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_ACTION_SCRIPT** — MI_ACTION -> SCRIPT (`ScriptId -> ID`)
- **FK_MILogGroupAction_MILoggingGroup** — MI_ACTION -> MI_ACTION_GROUP (`ActionGroupID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- MI_ACTION -> DFC (`DFCFUID -> FUID`)
- MI_ACTION -> DFC_REVISION (`DFCRevisionFUID -> FUID`)

## Unique Indexes

- **IX_MI_ACTION** on `Name, ActionGroupID`
- **IX_MI_ACTION_1** on `FUID`

## Non-Unique Indexes

- **IF_MI_ACTION_DFC** on `DFCFUID`
- **IF_MI_ACTION_SCRIPT** on `ScriptId`
- **IF_MILogGroupAction_MILoggingGroup** on `ActionGroupID`
