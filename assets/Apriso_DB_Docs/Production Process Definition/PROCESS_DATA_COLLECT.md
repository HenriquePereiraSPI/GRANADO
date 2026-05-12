# PROCESS_DATA_COLLECT

**Database:** Operational

**Description:** Specification of data collects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DataCollectType | INT(10,0) | False |  | False | DATA_COLLECT_TYPE | Data Collect Type. |
| DataFormat | NVARCHAR(40) | True |  | False |  | Data format of the Data Collect. |
| DataType | INT(10,0) | False |  | False |  | Data type of the Data Collect: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| DisplayFormula | NVARCHAR | True |  | False |  | Data Collect formula stored in user friendly format. |
| DisplayUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| DSDataCollectID | NVARCHAR(255) | False |  | False |  | DELMIA 3DEXPERIENCE Unique Identifier of the Data Collect that comes from the external system. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| Formula | NVARCHAR | True |  | False |  | Structure of Data Collect formula for computing reasons. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Lower coherence of the Data Collect. |
| LowerCoherenceLimitInclude | BIT | True |  | False |  | Specifies if lower coherence limit value is included in the limit. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower control limit of the Data Collect. |
| LowerControlLimitInclude | BIT | True |  | False |  | Specifies if lower control limit value is included in the limit. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower specification limit of the Data Collect. |
| LowerSpecificationLimitInclude | BIT | True |  | False |  | Specifies if lower specification limit value is included in the limit. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Data Collect. |
| NumberOfReads | INT(10,0) | True |  | False |  | Number of times that Data Collect has to be repeated. |
| ProcessDataCollectPlanID | INT(10,0) | False |  | False | PROCESS_DATA_COLLECT_PLAN | Unique identifier of the Process Data Collect Plan. |
| SampleSize | INT(10,0) | True |  | False |  | Sample size for measurements. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence number of the Data Collect. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target value of the Data Collect. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Upper control coherence of the Data Collect. |
| UpperCoherenceLimitInclude | BIT | True |  | False |  | Specifies if upper coherence limit value is included in the limit. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Upper control limit of the Data Collect. |
| UpperControlLimitInclude | BIT | True |  | False |  | Specifies if upper control limit value is included in the limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper control specification of the Data Collect. |
| UpperSpecificationLimitInclude | BIT | True |  | False |  | Specifies if upper specification limit value is included in the limit. |

## Primary Key

- **PK_PROCESS_DATA_COLLECT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_DATA_COLLECT_DATA_COLLECT_TYPE** — PROCESS_DATA_COLLECT -> DATA_COLLECT_TYPE (`DataCollectType -> ID`)
- **FK_PROCESS_DATA_COLLECT_PROCESS_DATA_COLLECT_PLAN** — PROCESS_DATA_COLLECT -> PROCESS_DATA_COLLECT_PLAN (`ProcessDataCollectPlanID -> ID`)
- **FK_PROCESS_DATA_COLLECT_UNIT** — PROCESS_DATA_COLLECT -> UNIT (`UnitID -> ID`)
- **FK_PROCESS_DATA_COLLECT_UOM** — PROCESS_DATA_COLLECT -> UOM (`UomCode -> UomCode`)
- **FK_PROCESS_DATA_COLLECT_UOM_CODE** — PROCESS_DATA_COLLECT -> UOM (`DisplayUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_PROCESS_DATA_COLLECT** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> PROCESS_DATA_COLLECT (`ProcessDataCollectID -> ID`)
- **FK_PROCESS_DATA_COLLECT_VALUE_PROCESS_DATA_COLLECT** — PROCESS_DATA_COLLECT_VALUE -> PROCESS_DATA_COLLECT (`ProcessDataCollectID -> ID`)
- **FK_WIP_DATA_COLLECT_PROCESS_DATA_COLLECT** — WIP_DATA_COLLECT -> PROCESS_DATA_COLLECT (`ProcessDataCollectID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_DATA_COLLECT_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_DATA_COLLECT_DSID** on `DSID`
- **IF_PROCESS_DATA_COLLECT_PROCESS_DATA_COLLECT_PLAN** on `ProcessDataCollectPlanID`
- **IF_PROCESS_DATA_COLLECT_UNIT** on `UnitID`
