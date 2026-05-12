# PROCESS_DATA_COLLECT_INPUT

**Database:** Operational

**Description:** Inputs used in the formula defined in the linked Data Collect.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DataCollectValueName | NVARCHAR(100) | True |  | False |  | Name of the value. |
| DSImplementLinkID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE implementation link ID. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| InputName | NVARCHAR(100) | False |  | False |  | Name of the input. |
| InputType | SMALLINT(5,0) | False |  | False |  | Type of the input: 1 - Collected, 2 - Calculated, 3 - Custom. |
| ProcessDataCollectID | INT(10,0) | False |  | False |  | Unique identifier of the Process Data Collect. |

## Primary Key

- **PK_PROCESS_DATA_COLLECT_INPUT** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_PROCESS_DATA_COLLECT_INPUT** on `ProcessDataCollectID, InputName`

## Non-Unique Indexes

- **** on ``
