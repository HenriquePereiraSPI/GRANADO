# DISPOSITION_RESOURCE

**Database:** Operational

**Description:** Contains the list of all resources that are used to perform the test. Each resource can be linked to the Disposition (DISPOSITION), Disposition Line (DISPOSITION_LINE), Disposition Test (DISPOSITION_T

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION | Disposition Number (DISPOSITION) the given Resource is linked to |
| DispositionReadingID | BIGINT(19,0) | True |  | False | DISPOSITION_READING | Disposition Test Reading Identifier (DISPOSITION_TEST) the given Resource is linked to |
| DispositionTestID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST | Disposition Test Identifier (DISPOSITION_TEST) the given Resource is linked to |
| DispositionTestSampleID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST_SAMPLE | Disposition Test Sample Identifier (DISPOSITION_TEST) the given Resource is linked to |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION | Facility of Disposition the given Resource is linked to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Resource record |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | Disposition Line Number (DISPOSITION_LINE),the given Resource is linked to |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | Identifier of the resource linked to the given level of the disposition hierarchy |

## Primary Key

- **PK_DISPOSITION_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_RESOURCE_DISPOSITION** — DISPOSITION_RESOURCE -> DISPOSITION (`Disposition, Facility -> Disposition, Facility`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_LINE** — DISPOSITION_RESOURCE -> DISPOSITION_LINE (`Disposition, Facility, LineSequenceNo -> Disposition, Facility, LineSequenceNo`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_READING** — DISPOSITION_RESOURCE -> DISPOSITION_READING (`DispositionReadingID -> ID`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_TEST** — DISPOSITION_RESOURCE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_TEST_SAMPLE** — DISPOSITION_RESOURCE -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)
- **FK_DISPOSITION_RESOURCE_RESOURCE_** — DISPOSITION_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_RESOURCE_DISPOSITION_LINE** on `Disposition, Facility, LineSequenceNo`
- **IF_DISPOSITION_RESOURCE_DISPOSITION_READING** on `DispositionReadingID`
- **IF_DISPOSITION_RESOURCE_DISPOSITION_TEST** on `DispositionTestID`
- **IF_DISPOSITION_RESOURCE_DISPOSITION_TEST_SAMPLE** on `DispositionTestSampleID`
- **IF_DISPOSITION_RESOURCE_RESOURCE_** on `ResourceID`
