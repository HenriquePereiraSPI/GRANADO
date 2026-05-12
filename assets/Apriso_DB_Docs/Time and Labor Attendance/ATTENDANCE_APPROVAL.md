# ATTENDANCE_APPROVAL

**Database:** Operational

**Description:** Stores Supervisor approvals for each Attendance record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovalDate | DATETIME | True | (getutcdate()) | False |  | Date the Supervisor approved the Employee's Attendance. |
| ApprovalDateLocal | DATETIME | True |  | False |  | Date the Supervisor approved the Employee's Attendance in the user's local time zone. |
| ApprovalEmployeeID | INT(10,0) | False |  | True | EMPLOYEE | ID of the Supervisor who approved the Employee's Attendance. |
| ApprovalType | INT(10,0) | True |  | False | APPROVAL_TYPE | The type of the approval |
| AttendanceID | INT(10,0) | False |  | True | ATTENDANCE | ID of the Attendance record involved. |
| Current_ | BIT | True |  | False |  | if this approval is current or has been removed |
| NoteID | INT(10,0) | True |  | False | NOTE | Link to the NOTES table to link an approval state change to a comment |
| Revision | INT(10,0) | False |  | True |  | For future use. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | ID of the time zone that the Attendance Approval was performed in. |

## Primary Key

- **PK_ATTENDANCE_APPROVAL** on `AttendanceID, ApprovalEmployeeID, Revision`

## Foreign Keys (this table -> other)

- **FK_ATTENDANCE_APPROVAL_APPROVAL_TYPE** — ATTENDANCE_APPROVAL -> APPROVAL_TYPE (`ApprovalType -> ApprovalType`)
- **FK_ATTENDANCE_APPROVAL_ATTENDANCE** — ATTENDANCE_APPROVAL -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_ATTENDANCE_APPROVAL_EMPLOYEE** — ATTENDANCE_APPROVAL -> EMPLOYEE (`ApprovalEmployeeID -> ID`)
- **FK_ATTENDANCE_APPROVAL_NOTE** — ATTENDANCE_APPROVAL -> NOTE (`NoteID -> ID`)
- **FK_ATTENDANCE_APPROVAL_TIMEZONE** — ATTENDANCE_APPROVAL -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTENDANCE_APPROVAL_NOTE** on `NoteID`
