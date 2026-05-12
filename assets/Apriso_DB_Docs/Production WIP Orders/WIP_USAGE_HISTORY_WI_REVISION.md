# WIP_USAGE_HISTORY_WI_REVISION

**Database:** Operational

**Description:** This child table stores the usage history of Work Instructions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(512) | True |  | False |  | The comment about the usage. |
| EmployeeNo | NVARCHAR(50) | False |  | False |  | The Employee who used the Work Instruction revision. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP usage history Work Instruction revision. |
| UsageDate | DATETIME | False |  | False |  | The time when the Work Instruction revision was used. |
| WipUsageHistoryID | INT(10,0) | False |  | False | WIP_USAGE_HISTORY | The ID of the parent record in WIP_USAGE_HISTORY. |
| WorkInstrRevisionID | INT(10,0) | False |  | False | WORK_INSTR_REVISION | The ID of the used Work Instruction revision. |

## Primary Key

- **PK_WIP_USAGE_HISTORY_WI_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_USAGE_HISTORY_WI_REVISION_WIP_USAGE_HISTORY** — WIP_USAGE_HISTORY_WI_REVISION -> WIP_USAGE_HISTORY (`WipUsageHistoryID -> ID`)
- **FK_WIP_USAGE_HISTORY_WI_REVISION_WORK_INSTR_REVISION** — WIP_USAGE_HISTORY_WI_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_USAGE_HISTORY_WI_REVISION_WIP_USAGE_HISTORY** on `WipUsageHistoryID`
- **IF_WIP_USAGE_HISTORY_WI_REVISION_WORK_INSTR_REVISION** on `WorkInstrRevisionID`
