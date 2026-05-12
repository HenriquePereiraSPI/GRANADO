# DISPOSITION_TEST_STATUS

**Database:** Operational

**Description:** Contains all system statuses of the Disposition Test (DISPOSITION_TEST) and Disposition Test Sample (DISPOSITION_TEST_SAMPLE)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispositionTestStatus | SMALLINT(5,0) | False |  | True |  | Status of the Disposition Test |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | Default User Status to which the Disposition (DISPOSITION) is moved when status is being changed |
| Name | NVARCHAR(50) | False |  | False |  | Unique name of the status |
| Open_ | BIT | False | (0) | False |  | Flag indicating that the status belongs to opened statuses (e.g. Released, Started) opposite to closed (e.g. Cancelled). This determines the rules that are used to manage statuses in business componen |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_TEST_STATUS** on `DispositionTestStatus`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_TEST_STATUS_DISPOSITION_USER_STATUS** — DISPOSITION_TEST_STATUS -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_STATUS_CONFIG_DISPOSITION_TEST_STATUS** — DISPOSITION_STATUS_CONFIG -> DISPOSITION_TEST_STATUS (`DispositionTestStatus -> DispositionTestStatus`)
- **FK_DISPOSITION_TEST_DISPOSITION_TEST_STATUS** — DISPOSITION_TEST -> DISPOSITION_TEST_STATUS (`Status -> DispositionTestStatus`)
- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST_STATUS** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_TEST_STATUS (`DispositionTestStatus -> DispositionTestStatus`)

## Unique Indexes

- **UK_DISPOSITION_TEST_STATUS** on `Name`

## Non-Unique Indexes

- **IF_DISPOSITION_TEST_STATUS_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
