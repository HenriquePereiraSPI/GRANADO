# SIGNOFF_PROFILE

**Database:** Operational

**Description:** The SIGNOFF_PROFILE table is used to maintain a profile used to control behavior of employee sign off and approval in Time Manager.  Profiles can be used to specify certain conditions as hard halts and soft halts on sign off.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovalRequired | BIT | True |  | False |  | Defines whether or not approval is required for the defined signoff profile |
| ApprovalRequiredToExtract | BIT | True |  | False |  | Defines whether or not approval is required before data can be extracted to an external system for the defined signoff profile |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ProfileName | NVARCHAR(50) | True |  | False |  | The unique identifier of the Profile. |
| SignOffRequired | BIT | True |  | False |  | Determines whether or not sign off is required for this profile |
| SignOffRequiredToApprove | BIT | True |  | False |  | Determines whether or not sign off is required to approve time for this profile |
| SignOffRequiredToExtract | BIT | True |  | False |  | Determines whether or not sign off is required before data can be extrated for this profile |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SIGNOFF_PROFILE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SIGNOFF_PROFILE_DETAIL_SIGNOFF_PROFILE** — SIGNOFF_PROFILE_DETAIL -> SIGNOFF_PROFILE (`ProfileID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_ProfileName** on `ProfileName`
