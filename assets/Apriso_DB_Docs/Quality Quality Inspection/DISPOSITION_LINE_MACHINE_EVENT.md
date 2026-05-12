# DISPOSITION_LINE_MACHINE_EVENT

**Database:** Operational

**Description:** (Obsolete) Links DISPOSITION_LINE rows to RESOURCE_LABOR (Machine Events) such that a defect may be assocated to a Resource Labor Event or Span.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION_LINE | Links the Disposition to a Machine Event. |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION_LINE | Facility of the Disposition. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | Disposition Line. |
| ResourceLaborID | BIGINT(19,0) | True |  | False | RESOURCE_LABOR | Reference to the Machine Event. |

## Primary Key

- **PK_DISPOSITION_LINE_MACHINE_EVENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_LINE_MACHINE_EVENT_DISPOSITION_LINE** — DISPOSITION_LINE_MACHINE_EVENT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_LINE_MACHINE_EVENT_FACILITY** — DISPOSITION_LINE_MACHINE_EVENT -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_LINE_MACHINE_EVENT_RESOURCE_LABOR** — DISPOSITION_LINE_MACHINE_EVENT -> RESOURCE_LABOR (`ResourceLaborID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_LINE_MACHINE_EVENT_DISPOSITION_LINE** on `Disposition, Facility, LineSequenceNo`
- **IF_DISPOSITION_LINE_MACHINE_EVENT_RESOURCE_LABOR** on `ResourceLaborID`
