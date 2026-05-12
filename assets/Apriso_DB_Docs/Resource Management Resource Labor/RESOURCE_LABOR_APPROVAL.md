# RESOURCE_LABOR_APPROVAL

**Database:** Operational

**Description:** This table is for future use - to store history of approvals of RESOURCE_LABOR records.  Every time the RESOURCE_LABOR.Status value is  changed to 4-Approved, there should be a record inserted into the RESOURCE_LABOR_APPROVAL table with a reference to ID of RESOURCE_LABOR table, EmployeeID of the approver and the date when the approval occured.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovalDate | DATETIME | True | (getutcdate()) | False |  | The date and time when the labor record was approved. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | Unique identifier of an Employee. |
| ResourceLaborID | BIGINT(19,0) | False |  | True | RESOURCE_LABOR | Unique identifier of Resource Labor and its Attributes. |
| Revision | INT(10,0) | True | (1) | False |  | The revision of the labor record approved. |

## Primary Key

- **PK_RESOURCE_LABOR_APPROVAL** on `ResourceLaborID, EmployeeID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LABOR_APPROVAL_EMPLOYEE** — RESOURCE_LABOR_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_APPROVAL_RESOURCE_LABOR** — RESOURCE_LABOR_APPROVAL -> RESOURCE_LABOR (`ResourceLaborID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
