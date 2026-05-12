# TIME_AUDIT_ACTION

**Database:** Operational

**Description:** The TIME_AUDIT_ACTION table is used to store a list of AUDIT actions against the ATTENDANCE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AuditAction | SMALLINT(5,0) | False |  | True |  | The action of the audit record, i.e. Delete, Add or update |
| Color | NVARCHAR(20) | True |  | False |  | For future use. |

## Primary Key

- **PK_AUDIT_ACTIONS** on `AuditAction`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_AUDIT_AUDIT_ACTIONS** — ATTENDANCE_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_LABOR_AUDIT_AUDIT_ACTIONS** — LABOR_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_LABOR_DETAIL_AUDIT_AUDIT_ACTIONS** — LABOR_DETAIL_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_RESOURCE_LABOR_AUDIT_AUDIT_ACTIONS** — RESOURCE_LABOR_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_RESOURCE_LABOR_DETAIL_AUDIT_AUDIT_ACTIONS** — RESOURCE_LABOR_DETAIL_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
