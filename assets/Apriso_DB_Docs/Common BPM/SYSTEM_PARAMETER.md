# SYSTEM_PARAMETER

**Database:** Solution Authoring

**Description:** Stores system parameters.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CategoryID | INT(10,0) | True |  | False | SYSTEM_PARAMETER_CATEGORY | Unique identifier of the category. |
| DataType | SMALLINT(5,0) | False |  | False |  | The data type of the system parameter. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the system parameter. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| IncludeKey | BIT | True |  | False |  | Defines if the system parameter value key should be included in the description. |
| IsLocalValue | BIT | False | ((0)) | False |  | Defines if the system parameter value is local (and should not be moved via GPM). |
| IsValueLocalizable | BIT | False | ((0)) | False |  | Defines if the system parameter is localizable. |
| Name | NVARCHAR(255) | False |  | False |  | Unique identifier of the system parameter provided by the user as its name. |
| ParameterType | SMALLINT(5,0) | True |  | False |  | The system parameter type (0 - Static, 1 - Dynamic SQL, 2 - Static List). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the text. Can be used for translation purposes. |

## Primary Key

- **PK_SYSTEM_PARAMETER** on `ID`

## Foreign Keys (this table -> other)

- **FK_SYSTEM_PARAMETER_SYSTEM_PARAMETER_CATEGORY** — SYSTEM_PARAMETER -> SYSTEM_PARAMETER_CATEGORY (`CategoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_DFC_SYSTEM_PARAMETER_SYSTEM_PARAMETER** — DFC_SYSTEM_PARAMETER -> SYSTEM_PARAMETER (`SystemParameterID -> ID`)
- **FK_SF_PARAMETER_SYSTEM_PARAMETER** — SF_PARAMETER -> SYSTEM_PARAMETER (`SystemParameterID -> ID`)
- **FK_SF_VIEW_FORM_CONTROL_SYSTEM_PARAMETER** — SF_VIEW_FORM_CONTROL -> SYSTEM_PARAMETER (`SystemParameterID -> ID`)

## Business Keys (other -> this table)

- SYSTEM_PARAMETER_VALUE -> SYSTEM_PARAMETER (`SystemParameterName -> Name`)
- SYSTEM_PARAMETER_STAGING_SET -> SYSTEM_PARAMETER (`SystemParameterName -> Name`)

## Unique Indexes

- **UK_SYSTEM_PARAMETER_FUID** on `FUID`
- **UK_SYSTEM_PARAMETER_Name** on `Name`

## Non-Unique Indexes

- **IF_SYSTEM_PARAMETER_SYSTEM_PARAMETER_CATEGORY** on `CategoryID`
