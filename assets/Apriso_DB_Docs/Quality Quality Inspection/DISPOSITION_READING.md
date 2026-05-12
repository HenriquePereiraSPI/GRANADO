# DISPOSITION_READING

**Database:** Operational

**Description:** This table contains all the test readings for specific Disposition Line Sequences (DISPOSITION_LINE), samples, containers (if the samples are containerized) and test results.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | The link to the Characteristic to which the reading is compared. |
| CollectedAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute of the Characteristic. |
| CollectedValue | DECIMAL(28,10) | True | (0.0) | False |  | Collected value of the Characteristic. |
| Comment_ | NVARCHAR | True |  | False |  | The text description of the test to be performed. |
| Conforming | BIT | True |  | False |  | Indicates that the test value or attribute conform to the specification. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The Container Number on which the reading was executed. |
| DispositionTestID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST | The link to the Disposition test. |
| DispositionTestSampleID | BIGINT(19,0) | True |  | False | DISPOSITION_TEST_SAMPLE | The unique identifier of the Disposition test sample used when the Dispostion test sample is used for partial samples. |
| ID | BIGINT(19,0) | False |  | True |  | The unique identifier of the record (key) in the table. |
| InputSequenceNo | INT(10,0) | True |  | False |  | Input sequence number. |
| InspectorID | INT(10,0) | True |  | False | EMPLOYEE | The unique identifier of an Employee executing the test. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number on which the reading was executed. |
| NoUnit | INT(10,0) | True |  | False |  | The number of units tested within the single reading. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The unique product identifier for the specified Serial Number. |
| ReadingSequenceNo | INT(10,0) | True |  | False |  | Reading sequence number. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The unique identifier of the Resource (Equipment) used to collect the reading value. |
| SampleNo | NVARCHAR(40) | True |  | False |  | For future use. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial Number on which the reading was executed. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The unit of measure of the numeric value of the test reading. |

## Primary Key

- **PK_DISPOSITION_READING** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_READING_CHARACTERISTIC** — DISPOSITION_READING -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_DISPOSITION_READING_CONTAINER** — DISPOSITION_READING -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_READING_DISPOSITION_TEST** — DISPOSITION_READING -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_READING_DISPOSITION_TEST_SAMPLE** — DISPOSITION_READING -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)
- **FK_DISPOSITION_READING_EMPLOYEE** — DISPOSITION_READING -> EMPLOYEE (`InspectorID -> ID`)
- **FK_DISPOSITION_READING_LOT_NO** — DISPOSITION_READING -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_READING_PRODUCT** — DISPOSITION_READING -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_READING_RESOURCE_** — DISPOSITION_READING -> RESOURCE_ (`ResourceID -> ID`)
- **FK_DISPOSITION_READING_SERIAL_NO** — DISPOSITION_READING -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_DISPOSITION_READING_UNIT** — DISPOSITION_READING -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_READING_UOM** — DISPOSITION_READING -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_READING_LOCATION_DISPOSITION_READING** — DISPOSITION_READING_LOCATION -> DISPOSITION_READING (`DispositionReadingID -> ID`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_READING** — DISPOSITION_RESOURCE -> DISPOSITION_READING (`DispositionReadingID -> ID`)
- **FK_QUALITY_DEFECT_DISPOSITION_READING** — QUALITY_DEFECT -> DISPOSITION_READING (`DispositionReadingID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_READING_CHARACTERISTIC** on `Characteristic`
- **IF_DISPOSITION_READING_CONTAINER** on `Container`
- **IF_DISPOSITION_READING_LOT_NO** on `LotNo, ProductID`
- **IF_DISPOSITION_READING_PRODUCT** on `ProductID`
- **IF_DISPOSITION_READING_RESOURCE_** on `ResourceID`
- **IF_DISPOSITION_READING_SERIAL_NO** on `SerialNo, ProductID`
- **IF_DISPOSITION_READING_UNIT** on `UnitID`
- **IXD_DispositionTestID_ReadingSequenceNo** on `DispositionTestID, ReadingSequenceNo`
- **IXD_DispositionTestSampleID_ReadingSequenceNo** on `DispositionTestSampleID, ReadingSequenceNo`
