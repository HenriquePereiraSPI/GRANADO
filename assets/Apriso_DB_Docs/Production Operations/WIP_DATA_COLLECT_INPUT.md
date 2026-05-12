# WIP_DATA_COLLECT_INPUT

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
| WipDataCollectID | BIGINT(19,0) | False |  | False | WIP_DATA_COLLECT | Unique identifier of the WIP Data Collect. |

## Primary Key

- **PK_WIP_DATA_COLLECT_INPUT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DATA_COLLECT_INPUT_WIP_DATA_COLLECT** — WIP_DATA_COLLECT_INPUT -> WIP_DATA_COLLECT (`WipDataCollectID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WIP_DATA_COLLECT_INPUT** on `WipDataCollectID, InputName`

## Non-Unique Indexes

- **** on ``
