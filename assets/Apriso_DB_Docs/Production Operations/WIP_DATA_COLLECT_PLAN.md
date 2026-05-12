# WIP_DATA_COLLECT_PLAN

**Database:** Operational

**Description:** Information about data collect plans linked to WIP Work Order on operation/step level.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | WIP Operation Sequence Number. |
| ProcessDataCollectPlanID | INT(10,0) | True |  | False | PROCESS_DATA_COLLECT_PLAN | Unique identifier of the Process Data Collect Plan. |
| SequenceNo | INT(10,0) | True |  | False |  | Process Data Collect Plan Sequence Number derived from the Global Sequence Number. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | WIP Operation Step Sequence Number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False |  | Possible values: 1 - DC Plan, 2 - DC Checklist |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_WIP_DATA_COLLECT_PLAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DATA_COLLECT_PLAN_PROCESS_DATA_COLLECT_PLAN** — WIP_DATA_COLLECT_PLAN -> PROCESS_DATA_COLLECT_PLAN (`ProcessDataCollectPlanID -> ID`)
- **FK_WIP_DATA_COLLECT_PLAN_UNIT** — WIP_DATA_COLLECT_PLAN -> UNIT (`UnitID -> ID`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_OPERATION** — WIP_DATA_COLLECT_PLAN -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_OPERATION_STEP** — WIP_DATA_COLLECT_PLAN -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_ORDER** — WIP_DATA_COLLECT_PLAN -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_WIP_DATA_COLLECT_PLAN** — WIP_DATA_COLLECT_REQ_RESOURCE -> WIP_DATA_COLLECT_PLAN (`WipDataCollectPlanID -> ID`)
- **FK_WIP_DATA_COLLECT_WIP_DATA_COLLECT_PLAN** — WIP_DATA_COLLECT -> WIP_DATA_COLLECT_PLAN (`WipDataCollectPlanID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_DATA_COLLECT_PLAN_DSID** on `DSID`
- **IF_WIP_DATA_COLLECT_PLAN_PROCESS_DATA_COLLECT_PLAN** on `ProcessDataCollectPlanID`
- **IF_WIP_DATA_COLLECT_PLAN_UNIT** on `UnitID`
- **IF_WIP_DATA_COLLECT_PLAN_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
