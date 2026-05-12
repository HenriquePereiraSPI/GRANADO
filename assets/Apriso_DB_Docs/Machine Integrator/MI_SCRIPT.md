# MI_SCRIPT

**Database:** Operational

**Description:** Required for "public" mi scripts.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(255) | True |  | False |  | Comment. |
| Enabled | BIT | False |  | False |  | (1 - enabled, 0 - disabled). |
| FUID | NVARCHAR(36) | False | (newid()) | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID. |
| MIConnectorId | INT(10,0) | False |  | False | MI_CONNECTOR | Link to MI_CONNECTOR. |
| Name | NVARCHAR(255) | False |  | False |  | Name. |
| Reference | NVARCHAR(50) | True |  | False |  | Reference. |
| ScriptId | INT(10,0) | False |  | False | SCRIPT | Link to SCRIPT. |

## Primary Key

- **PK_MI_SCRIPT** on `ID`

## Foreign Keys (this table -> other)

- **FK_MI_SCRIPT_MI_CONNECTOR** — MI_SCRIPT -> MI_CONNECTOR (`MIConnectorId -> ID`)
- **FK_MI_SCRIPT_SCRIPT** — MI_SCRIPT -> SCRIPT (`ScriptId -> ID`)

## Referenced By (other tables -> this)

- **FK_EQUIPMENT_MI_FEATURE_MI_SCRIPT** — EQUIPMENT_MI_FEATURE -> MI_SCRIPT (`MIScriptID -> ID`)

## Unique Indexes

- **UK_MI_SCRIPT** on `ScriptId, MIConnectorId`
- **UK_MI_SCRIPT_FUID** on `FUID`

## Non-Unique Indexes

- **IF_MI_SCRIPT_MI_CONNECTOR** on `MIConnectorId`
