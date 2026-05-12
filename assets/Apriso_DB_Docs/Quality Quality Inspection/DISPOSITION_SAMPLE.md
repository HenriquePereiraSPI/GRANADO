# DISPOSITION_SAMPLE

**Database:** Operational

**Description:** This table contains the information about all physical samples linked to the quality dispositions (inspections)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment on Disposition Sample |
| DestructiveFlag | BIT | True |  | False |  | Not used. |
| Disposition | NVARCHAR(40) | False |  | False | DISPOSITION_LINE | Link to DISPOSITION table |
| Facility | NVARCHAR(40) | False |  | False | DISPOSITION_LINE | Facility that owns the sample - reference to FACILITY table |
| ID | INT(10,0) | False |  | True |  | Unique record identifier |
| LabelContainerFlag | BIT | True |  | False |  | Not used. |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | Not used. |
| NumberOfContainers | INT(10,0) | True |  | False |  | Not used. |
| ReturnedOrDestroyedDate | DATETIME | True |  | False |  | Date when the sample was returned or destroyed |
| ReturnedOrDestroyedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who returned or destroyed the sample |
| SampleFinishDate | DATETIME | True |  | False |  | Not used. |
| SampleFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Not used. |
| SampleID | INT(10,0) | True |  | False | SAMPLE | Link to SAMPLE table - the Sample being the subject of the disposition |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleSequenceNo | INT(10,0) | True |  | False |  | Not used. |
| SampleStartDate | DATETIME | True |  | False |  | Start date of the sampling |
| SampleStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who did the sampling |
| ScheduledFinishDate | DATETIME | True |  | False |  | Not used. |
| ScheduledStartDate | DATETIME | True |  | False |  | Not used. |
| SerialContainerFlag | BIT | True |  | False |  | Not used. |
| Status | SMALLINT(5,0) | True |  | False | DISPOSITION_SAMPLE_STATUS | Status of the Disposition Sample |
| TestingFinishDate | DATETIME | True |  | False |  | Not used. |
| TestingFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Not used. |
| TestingStartDate | DATETIME | True |  | False |  | Not used. |
| TestingStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Not used. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Sample quantity Uom |

## Primary Key

- **PK_DISPOSITION_SAMPLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_LINE_SAMPLE_UOM** — DISPOSITION_SAMPLE -> UOM (`UomCode -> UomCode`)
- **FK_DISPOSITION_SAMPLE_DISPOSITION_LINE** — DISPOSITION_SAMPLE -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_SAMPLE_DISPOSITION_SAMPLE_STATUS** — DISPOSITION_SAMPLE -> DISPOSITION_SAMPLE_STATUS (`Status -> Status`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE** — DISPOSITION_SAMPLE -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE1** — DISPOSITION_SAMPLE -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE2** — DISPOSITION_SAMPLE -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE3** — DISPOSITION_SAMPLE -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE4** — DISPOSITION_SAMPLE -> EMPLOYEE (`ReturnedOrDestroyedEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_SAMPLE** — DISPOSITION_SAMPLE -> SAMPLE (`SampleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_SAMPLE_DISPOSITION_LINE** on `Facility, Disposition, LineSequenceNo`
- **IF_DISPOSITION_SAMPLE_DISPOSITION_SAMPLE_STATUS** on `Status`
- **IF_DISPOSITION_SAMPLE_SAMPLE** on `SampleID`
