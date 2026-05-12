# DISPOSITION_STATUS

**Database:** Operational

**Description:** Contains all system statuses of the Disposition (DISPOSITION)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | Not used. |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | Default User Status to which the Disposition (DISPOSITION) is moved when status is being changed |
| Name | NVARCHAR(50) | False |  | False |  | Unique name of the status |
| Open_ | BIT | False | (0) | False |  | Flag indicating that the status belongs to opened statuses (e.g. Released, Started) opposite to closed (e.g. Cancelled). This determines the rules that are used to manage statuses in business components |
| Status | SMALLINT(5,0) | False |  | True |  | Status of the Disposition |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_STATUS** on `Status`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_STATUS_DISPOSITION_USER_STATUS** — DISPOSITION_STATUS -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_DIMENSION_DISPOSITION_STATUS** — DISPOSITION_DIMENSION -> DISPOSITION_STATUS (`Status -> Status`)
- **FK_DISPOSITION_DISPOSITION_STATUS** — DISPOSITION -> DISPOSITION_STATUS (`Status -> Status`)
- **FK_DISPOSITION_STATUS_CONFIG_DISPOSITION_STATUS** — DISPOSITION_STATUS_CONFIG -> DISPOSITION_STATUS (`DispositionStatus -> Status`)

## Unique Indexes

- **UK_DISPOSITION_STATUS** on `Name`

## Non-Unique Indexes

- **IF_DISPOSITION_STATUS_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
