# SYSTEM_PARAMETER_VALUE

**Database:** Operational

**Description:** Stores the values of system parameters.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ArrayIndex | INT(10,0) | True |  | False |  | Array index of the system parameter value list. |
| Facility | NVARCHAR(40) | True |  | False |  | The facility for the system parameter value. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| SystemParameterName | NVARCHAR(255) | False |  | False |  | Reference to the Name column in the SYSTEM_PARAMETER table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the text. Can be used for translation purposes. |
| Value_ | NVARCHAR | True |  | False |  | The value of the system parameter. |
| ValueKey | NVARCHAR(1000) | True |  | False |  | The key of the system parameter value. |

## Primary Key

- **PK_SYSTEM_PARAMETER_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- SYSTEM_PARAMETER_VALUE -> SYSTEM_PARAMETER (`SystemParameterName -> Name`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SYSTEM_PARAMETER_VALUE_SYSTEM_PARAMETER** on `SystemParameterName`
