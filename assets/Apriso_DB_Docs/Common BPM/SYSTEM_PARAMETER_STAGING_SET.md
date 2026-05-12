# SYSTEM_PARAMETER_STAGING_SET

**Database:** Operational

**Description:** Stores system parameter sets.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| IsActive | BIT | False | ((0)) | False |  | Defines if the current set of values is used in runtime. There can be only one active set for a specific system parameter name at a given time. |
| Name | NVARCHAR(40) | False |  | False |  | Unique identifier of the system parameter values set provided by the user as its name. |
| SystemParameterName | NVARCHAR(255) | False |  | False |  | Reference to the Name column in the SYSTEM_PARAMETER table. |

## Primary Key

- **PK_SYSTEM_PARAMETER_STAGING_SET** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SYSTEM_PARAMETER_STAGING_SET_VALUE_SYSTEM_PARAMETER_STAGING_SET** — SYSTEM_PARAMETER_STAGING_SET_VALUE -> SYSTEM_PARAMETER_STAGING_SET (`SystemParameterStagingSetID -> ID`)

## Business Keys (this table -> other)

- SYSTEM_PARAMETER_STAGING_SET -> SYSTEM_PARAMETER (`SystemParameterName -> Name`)

## Unique Indexes

- **UK_SYSTEM_PARAMETER_STAGING_SET** on `SystemParameterName, Name`

## Non-Unique Indexes

- **** on ``
