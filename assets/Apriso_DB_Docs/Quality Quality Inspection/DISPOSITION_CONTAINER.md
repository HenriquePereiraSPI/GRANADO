# DISPOSITION_CONTAINER

**Database:** Operational

**Description:** (Obsolete) Stores one to many CONTAINER rows to a DISPOSITION based on if the SAMPLE_PLAN uses Containers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| ContainerSequenceNo | INT(10,0) | False |  | True |  | For future use. |
| Disposition | NVARCHAR(40) | False |  | True |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True |  | For future use. |
| LineSequenceNo | INT(10,0) | False |  | True |  | For future use. |
| ReturnedOrDestroyedDate | DATETIME | True |  | False |  | For future use. |
| ReturnedOrDestroyedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SampleFinishDate | DATETIME | True |  | False |  | For future use. |
| SampleFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | For future use. |
| SampleSequenceNo | INT(10,0) | False |  | True |  | For future use. |
| SampleStartDate | DATETIME | True |  | False |  | For future use. |
| SampleStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| ScheduledFinishDate | DATETIME | True |  | False |  | For future use. |
| ScheduledStartDate | DATETIME | True |  | False |  | For future use. |
| Status | SMALLINT(5,0) | True |  | False | DISPOSITION_CONTAINER_STATUS | For future use. |
| TestingFinishDate | DATETIME | True |  | False |  | For future use. |
| TestingFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| TestingStartDate | DATETIME | True |  | False |  | For future use. |
| TestingStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |

## Primary Key

- **PK_DISPOSITION_CONTAINER** on `Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_CONTAINER_DISPOSITION_CONTAINER_STATUS** — DISPOSITION_CONTAINER -> DISPOSITION_CONTAINER_STATUS (`Status -> Status`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE** — DISPOSITION_CONTAINER -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE1** — DISPOSITION_CONTAINER -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE2** — DISPOSITION_CONTAINER -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE3** — DISPOSITION_CONTAINER -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE4** — DISPOSITION_CONTAINER -> EMPLOYEE (`ReturnedOrDestroyedEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_UOM** — DISPOSITION_CONTAINER -> UOM (`UomCode -> UomCode`)
- **FK_DISPOSITION_LINE_SAMPLE_CONTAINER_CONTAINER** — DISPOSITION_CONTAINER -> CONTAINER (`Container -> Container`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_CONTAINER_ADDRESS_DISPOSITION_CONTAINER** — DISPOSITION_CONTAINER_ADDRESS -> DISPOSITION_CONTAINER (`Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo -> Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo`)
- **FK_DISPOSITION_TEST_DISPOSITION_CONTAINER** — DISPOSITION_TEST -> DISPOSITION_CONTAINER (`Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo -> Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_CONTAINER_DISPOSITION_CONTAINER_STATUS** on `Status`
- **IF_DISPOSITION_CONTAINER_DISPOSITION_SAMPLE** on `Disposition, SampleSequenceNo, Facility, LineSequenceNo`
- **IF_DISPOSITION_LINE_SAMPLE_CONTAINER_CONTAINER** on `Container`
