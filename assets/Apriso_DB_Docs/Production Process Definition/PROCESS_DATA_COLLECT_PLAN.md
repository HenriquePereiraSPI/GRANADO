# PROCESS_DATA_COLLECT_PLAN

**Database:** Operational

**Description:** Information about data collect plans linked to production process.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| Name | NVARCHAR(100) | False |  | False |  | Name of the Data Collect Plan. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Unique identifier of the Process. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Unique identifier of the Process Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | Unique identifier of the Process Operation Step. |
| Revision | NVARCHAR(100) | False |  | False |  | Revision of the Data Collect Plan. |
| SequenceNo | INT(10,0) | True |  | False |  | Process Data Collect Plan Sequence Number derived from the Global Sequence Number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False |  | Possible values: 1 - DC Plan, 2 - DC Checklist |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_PROCESS_DATA_COLLECT_PLAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS** — PROCESS_DATA_COLLECT_PLAN -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION** — PROCESS_DATA_COLLECT_PLAN -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION_STEP** — PROCESS_DATA_COLLECT_PLAN -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_UNIT** — PROCESS_DATA_COLLECT_PLAN -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_DATA_COLLECT_PROCESS_DATA_COLLECT_PLAN** — PROCESS_DATA_COLLECT -> PROCESS_DATA_COLLECT_PLAN (`ProcessDataCollectPlanID -> ID`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_PROCESS_DATA_COLLECT_PLAN** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> PROCESS_DATA_COLLECT_PLAN (`ProcessDataCollectPlanID -> ID`)
- **FK_WIP_DATA_COLLECT_PLAN_PROCESS_DATA_COLLECT_PLAN** — WIP_DATA_COLLECT_PLAN -> PROCESS_DATA_COLLECT_PLAN (`ProcessDataCollectPlanID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_DATA_COLLECT_PLAN_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_DATA_COLLECT_PLAN_DSID** on `DSID`
- **IF_PROCESS_DATA_COLLECT_PLAN_PROCESS** on `ProcessID`
- **IF_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_PROCESS_DATA_COLLECT_PLAN_UNIT** on `UnitID`
