# OPERATION_HEADER

**Database:** Operational

**Description:** Contains information about Operations Headers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of an Operation Header. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| OperationCode | NVARCHAR(80) | False |  | False |  | Internal name of the Operation. |

## Primary Key

- **PK_OPERATION_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPATCH_CHANGE_DETAIL_OPERATION_HEADER** — DISPATCH_CHANGE_DETAIL -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_EMR_RECORD_OPERATION_HEADER** — EMR_RECORD -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_OPERATION_OPERATION_HEADER** — OPERATION -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_WIP_OPERATION_OPERATION_HEADER** — WIP_OPERATION -> OPERATION_HEADER (`OperationHeaderID -> ID`)

## Unique Indexes

- **UX_OPERATION_HEADER** on `OperationCode`
- **UX_OPERATION_HEADER_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
