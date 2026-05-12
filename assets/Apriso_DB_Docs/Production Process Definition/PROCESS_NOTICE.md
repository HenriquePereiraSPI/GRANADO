# PROCESS_NOTICE

**Database:** Operational

**Description:** Information about links between notice and process/operation/step.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| NoticeID | INT(10,0) | False |  | False | NOTICE | Unique identifier of the linked notice. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Unique identifier of the process linked to the notice. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Unique identifier of the process's operation linked to the notice. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | Unique identifier of the process's operation step linked to the notice. |
| SequenceNo | INT(10,0) | False |  | False |  | Alert's order. |

## Primary Key

- **PK_PROCESS_NOTICE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_NOTICE_NOTICE_ID** — PROCESS_NOTICE -> NOTICE (`NoticeID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_ID** — PROCESS_NOTICE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_OPERATION_ID** — PROCESS_NOTICE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_OPERATION_STEP_ID** — PROCESS_NOTICE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_NOTICE_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_NOTICE_NOTICE_ID** on `NoticeID`
- **IF_PROCESS_NOTICE_PROCESS_ID** on `ProcessID`
- **IF_PROCESS_NOTICE_PROCESS_OPERATION_ID** on `ProcessOperationID`
- **IF_PROCESS_NOTICE_PROCESS_OPERATION_STEP_ID** on `ProcessOperationStepID`
