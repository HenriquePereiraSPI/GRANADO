# ECM_ORDER_WORK_INSTR_REVISION

**Database:** Operational

**Description:** Table contains all Work Instruction Revisions affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |
| WorkInstrRevisionDestID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | Destination Work Instruction Revision ID. |
| WorkInstrRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | Work Instruction Revision ID. |

## Primary Key

- **PK_ECM_ORDER_WORK_INSTR_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_WORK_INSTR_REVISION_ECM_ORDER** — ECM_ORDER_WORK_INSTR_REVISION -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_PROGRESS_STATUS** — ECM_ORDER_WORK_INSTR_REVISION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REV_DEST** — ECM_ORDER_WORK_INSTR_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionDestID -> ID`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REVISION** — ECM_ORDER_WORK_INSTR_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_WORK_INSTR_REVISION_EOID_OID** on `EcmOrderID, WorkInstrRevisionID, WorkInstrRevisionDestID`

## Non-Unique Indexes

- **IF_ECM_ORDER_WORK_INSTR_REVISION_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REV_DEST** on `WorkInstrRevisionDestID`
- **IF_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REVISION** on `WorkInstrRevisionID`
