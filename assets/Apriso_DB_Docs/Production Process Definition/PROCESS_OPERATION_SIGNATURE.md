# PROCESS_OPERATION_SIGNATURE

**Database:** Operational

**Description:** This table contains the signatures for Processes, Process Operations, Process Operations Steps, Operations and Operations Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| OperationID | INT(10,0) | True |  | False | OPERATION | Link to Operation. |
| OperationStepID | INT(10,0) | True |  | False | OPERATION_STEP | Link to Operation Step. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Link to Process. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Link to Process Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | Link to Process Operation Step. |
| SignatureContext | NVARCHAR(40) | True |  | False |  | Free text context description where the signature should be used, for example: operation start, step reopen. |
| SignatureHeaderDefinitionID | INT(10,0) | False |  | False | SIGNATURE_HEADER_DEFINITION | Unique identifier of Signature Header Definition. |

## Primary Key

- **PK_PROCESS_OPERATION_SIGNATURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_SIGNATURE_OPERATION** — PROCESS_OPERATION_SIGNATURE -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_OPERATION_STEP** — PROCESS_OPERATION_SIGNATURE -> OPERATION_STEP (`OperationStepID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS** — PROCESS_OPERATION_SIGNATURE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION** — PROCESS_OPERATION_SIGNATURE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_SIGNATURE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_SIGNATURE_HEADER_DEFINITION** — PROCESS_OPERATION_SIGNATURE -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_OPERATION_SIGNATURE_OPERATION** on `OperationID`
- **IF_PROCESS_OPERATION_SIGNATURE_OPERATION_STEP** on `OperationStepID`
- **IF_PROCESS_OPERATION_SIGNATURE_PROCESS** on `ProcessID`
- **IF_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_PROCESS_OPERATION_SIGNATURE_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderDefinitionID`
