# LABOR_APPROVAL

**Database:** Operational

**Description:** Stores Supervisor approvals for each Labor record. This table will store who approved each individual Labor record for a pay period and when.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovalDate | DATETIME | True | (getutcdate()) | False |  | Date the Supervisor approved the Employee's Labor. |
| ApprovalDateLocal | DATETIME | True |  | False |  | Date the Supervisor approved the Employee's Labor in the user's local time zone. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | ID of the Employee record the table is associated with. |
| LaborID | INT(10,0) | False |  | True | LABOR | ID of the Labor record the table is associated with. |
| Revision | INT(10,0) | True | (1) | False |  | For future use. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Labor approval was performed in. |

## Primary Key

- **PK_LABOR_APPROVAL** on `LaborID, EmployeeID`

## Foreign Keys (this table -> other)

- **FK_LABOR_APPROVAL_EMPLOYEE** — LABOR_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LABOR_APPROVAL_LABOR** — LABOR_APPROVAL -> LABOR (`LaborID -> ID`)
- **FK_LABOR_APPROVAL_TIMEZONE** — LABOR_APPROVAL -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
