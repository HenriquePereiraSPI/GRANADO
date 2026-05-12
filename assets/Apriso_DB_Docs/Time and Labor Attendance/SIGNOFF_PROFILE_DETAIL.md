# SIGNOFF_PROFILE_DETAIL

**Database:** Operational

**Description:** The SIGNOFF_PROFILE_DETAIL table is used to store all the detailed data relating to a SIGNOFF_PROFILE for each type of named exception.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeOrSupervisor | SMALLINT(5,0) | True |  | False |  | Specifies Employee Sign Off restriction or Supervisor Approval Restriction |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ProfileID | INT(10,0) | True |  | False | SIGNOFF_PROFILE | The unique identifier of the Profile. |
| Restrict_ | BIT | True |  | False |  | Boolean specifying of this exception blocks sign off or approval. |
| SignOffExceptionTypeID | INT(10,0) | True |  | False | SIGNOFF_EXCEPTION_TYPE | Definition of the Sign Off exception. |

## Primary Key

- **PK_SIGNOFF_PROFILE_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_SIGNOFF_PROFILE_DETAIL_SIGNOFF_EXCEPTION_TYPE** — SIGNOFF_PROFILE_DETAIL -> SIGNOFF_EXCEPTION_TYPE (`SignOffExceptionTypeID -> ID`)
- **FK_SIGNOFF_PROFILE_DETAIL_SIGNOFF_PROFILE** — SIGNOFF_PROFILE_DETAIL -> SIGNOFF_PROFILE (`ProfileID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SIGNOFF_PROFILE_DETAIL_SIGNOFF_PROFILE** on `ProfileID`
