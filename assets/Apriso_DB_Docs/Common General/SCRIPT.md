# SCRIPT

**Database:** Operational

**Description:** Information about Apriso Scripts.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Author | NVARCHAR(50) | True |  | False |  | Script author. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Script. |
| IsDefaultRevision | BIT | False | ((0)) | False |  | Indicates whether the script revision is the default revision for scripts with the same name. |
| Language | NVARCHAR(50) | False |  | False |  | Name of the programming language. |
| LifecycleID | INT(10,0) | False |  | False |  | Link to Business Component Lifecycle. |
| LinkedScriptID | INT(10,0) | True |  | False | SCRIPT | ID of the Linked Script in the case when entry is Link to a Script and the linked script resolution is based on specific revision. |
| LinkedScriptName | NVARCHAR(50) | True |  | False |  | Name of the Linked Script in the case when entry is Link to a Script and the linked script resolution is based on its default revision. |
| LinkedScriptProperties | NVARCHAR | True |  | False |  | Used as a container for data while linking scripts to other Apriso components. |
| Name | NVARCHAR(50) | False |  | False |  | Unlocalized name of the script. |
| Revision | NVARCHAR(80) | False |  | False |  | Current revision of script. |
| Script | NVARCHAR | False |  | False |  | Information necessary to configure and execute the script (xml). |
| ScriptCategoryID | INT(10,0) | True |  | False | SCRIPT_CATEGORY | Link to script category. |
| ScriptMode | TINYINT(3,0) | False | ((0)) | False |  | Indicates whether the entry is the real script or a link to a script. |
| ScriptType | TINYINT(3,0) | False |  | False |  | Type of the script (1-MI Connector Script, 2-MI Script Action, 3- MI Action Group Condition, 4- MI RS Formula, 5- PB User Formula, 6 -Job Executor Action). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SCRIPT** on `ID`

## Foreign Keys (this table -> other)

- **FK_SCRIPT_SCRIPT** — SCRIPT -> SCRIPT (`LinkedScriptID -> ID`)
- **FK_SCRIPT_SCRIPT_CATEGORY** — SCRIPT -> SCRIPT_CATEGORY (`ScriptCategoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_MI_ACTION_GROUP_SCRIPT** — MI_ACTION_GROUP -> SCRIPT (`PointChangeScriptId -> ID`)
- **FK_MI_ACTION_GROUP_SCRIPT1** — MI_ACTION_GROUP -> SCRIPT (`PeriodicalConditionScriptId -> ID`)
- **FK_MI_ACTION_SCRIPT** — MI_ACTION -> SCRIPT (`ScriptId -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT** — MI_DATA_SOURCE -> SCRIPT (`OnReconnectionScriptId -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT_3** — MI_DATA_SOURCE -> SCRIPT (`OnConnectionLostScriptId -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT1** — MI_DATA_SOURCE -> SCRIPT (`ScriptId1 -> ID`)
- **FK_MI_DATA_SOURCE_SCRIPT2** — MI_DATA_SOURCE -> SCRIPT (`ScriptId2 -> ID`)
- **FK_MI_SCRIPT_SCRIPT** — MI_SCRIPT -> SCRIPT (`ScriptId -> ID`)
- **FK_SCRIPT_SCRIPT** — SCRIPT -> SCRIPT (`LinkedScriptID -> ID`)

## Unique Indexes

- **UK_SCRIPT_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SCRIPT_BUSINESS_COMPONENT_LIFECYCLE** on `LifecycleID`
- **IF_SCRIPT_SCRIPT** on `LinkedScriptID`
- **IF_SCRIPT_SCRIPT_CATEGORY** on `ScriptCategoryID`
