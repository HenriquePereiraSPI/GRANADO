# DISPOSITION_USER_STATUS

**Database:** Operational

**Description:** Contains the user statuses of the Disposition hierarchy: Disposition (DISPOSITION), Disposition Line (DISPOSITION_LINE), Disposition Test (DISPOSITION_TEST), Disposition Test Sample (DISPOSITION_TEST_

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the Disposition User Status |
| Name | NVARCHAR(50) | False |  | False |  | Name of the status |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_USER_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_DISPOSITION_USER_STATUS** — DISPOSITION -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_LINE_DISPOSITION_USER_STATUS** — DISPOSITION_LINE -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_LINE_STATUS_DISPOSITION_USER_STATUS** — DISPOSITION_LINE_STATUS -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_STATUS_DISPOSITION_USER_STATUS** — DISPOSITION_STATUS -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_TEST_DISPOSITION_USER_STATUS** — DISPOSITION_TEST -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_USER_STATUS** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_TEST_STATUS_DISPOSITION_USER_STATUS** — DISPOSITION_TEST_STATUS -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS** — DISPOSITION_USER_STATUS_TRAN -> DISPOSITION_USER_STATUS (`SrcDispositionUserStatusID -> ID`)
- **FK_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS1** — DISPOSITION_USER_STATUS_TRAN -> DISPOSITION_USER_STATUS (`DstDispositionUserStatusID -> ID`)

## Unique Indexes

- **UK_DISPOSITION_USER_STATUS** on `Name`

## Non-Unique Indexes

- **** on ``
