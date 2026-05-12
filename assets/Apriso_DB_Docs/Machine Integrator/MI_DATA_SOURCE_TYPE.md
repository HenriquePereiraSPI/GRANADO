# MI_DATA_SOURCE_TYPE

**Database:** Solution Authoring

**Description:** List of all registered Data Source types (dynamic configuration using component repository)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConfigurationBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that handles Data Source configuration transformations |
| DataSourceConfigurationBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that configures Data Source on the Data Source level |
| ExcelBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that handles export and import to Excel files |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Data Source Type |
| GPMBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that handles processing of GPM packages |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Data Source Type |
| Name | NVARCHAR(80) | False | ('Custom Data Source') | False |  | The name of the Data Source type |
| PointConfigurationBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that configures Data Source on the Point level |
| RuntimeBCID | INT(10,0) | True |  | False | BUSINESS_COMPONENT | ID of the Business Component that executes in runtime |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_MI_DATA_SOURCE_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ConfigurationBCID_BUSINESS_COMPONENT** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`ConfigurationBCID -> ID`)
- **FK_ExcelBCID_BUSINESS_COMPONENT** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`ExcelBCID -> ID`)
- **FK_GPMBCID_BUSINESS_COMPONENT** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`GPMBCID -> ID`)
- **FK_MIDeviceType_BUSINESS_COMPONENT** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`DataSourceConfigurationBCID -> ID`)
- **FK_MIDeviceType_BUSINESS_COMPONENT1** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`RuntimeBCID -> ID`)
- **FK_MIDeviceType_BUSINESS_COMPONENT2** — MI_DATA_SOURCE_TYPE -> BUSINESS_COMPONENT (`PointConfigurationBCID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (other -> this table)

- MI_DATA_SOURCE -> MI_DATA_SOURCE_TYPE (`DataSourceTypeName -> Name`)

## Unique Indexes

- **IX_MI_DATA_SOURCE_TYPE** on `FUID`
- **UK_MI_DATA_SOURCE_TYPE_NAME** on `Name`

## Non-Unique Indexes

- **IF_ConfigurationBCID_BUSINESS_COMPONENT** on `ConfigurationBCID`
- **IF_ExcelBCID_BUSINESS_COMPONENT** on `ExcelBCID`
- **IF_GPMBCID_BUSINESS_COMPONENT** on `GPMBCID`
- **IF_MIDeviceType_BUSINESS_COMPONENT** on `DataSourceConfigurationBCID`
- **IF_MIDeviceType_BUSINESS_COMPONENT1** on `RuntimeBCID`
- **IF_MIDeviceType_BUSINESS_COMPONENT2** on `PointConfigurationBCID`
