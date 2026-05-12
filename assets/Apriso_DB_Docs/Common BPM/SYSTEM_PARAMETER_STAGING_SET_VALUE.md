# SYSTEM_PARAMETER_STAGING_SET_VALUE

**Database:** Operational

**Description:** Stores the values of system parameter sets.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ArrayIndex | INT(10,0) | True |  | False |  | Array index of the system parameter value list. |
| Facility | NVARCHAR(40) | True |  | False |  | The facility for the system parameter set value. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| SystemParameterStagingSetID | INT(10,0) | False |  | False | SYSTEM_PARAMETER_STAGING_SET | Unique identifier of the system parameter staging set. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the text. Can be used for translation purposes. |
| Value_ | NVARCHAR | True |  | False |  | The value of the system parameter set. |
| ValueKey | NVARCHAR(1000) | True |  | False |  | The key of the system parameter set value. |

## Primary Key

- **PK_SYSTEM_PARAMETER_STAGING_SET_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SYSTEM_PARAMETER_STAGING_SET_VALUE_SYSTEM_PARAMETER_STAGING_SET** — SYSTEM_PARAMETER_STAGING_SET_VALUE -> SYSTEM_PARAMETER_STAGING_SET (`SystemParameterStagingSetID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SYSTEM_PARAMETER_STAGING_SET_VALUE_SYSTEM_PARAMETER_STAGING_SET** on `SystemParameterStagingSetID`
