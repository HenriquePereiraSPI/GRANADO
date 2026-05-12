# DISPOSITION_TEST_REASON

**Database:** Operational

**Description:** (Obsolete) Stores one to many Reason Codes for each row in the DISPOSITION_TEST table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION | Link to the Disposition. |
| DispositionTestID | BIGINT(19,0) | False |  | True | DISPOSITION_TEST | Link to the Disposition Test. |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION | Link to the Facility. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_LINE | Link to the Disposition Line. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Link to the tested Lot. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity impacted by the Reason Code. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold, |
| ReasonSequenceNo | INT(10,0) | False |  | True |  | Sequence of the Reason Code (Primary Reason). |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Link to the tested Serial Number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_TEST_REASON** on `DispositionTestID, ReasonSequenceNo`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_TEST_REASON_DISPOSITION** — DISPOSITION_TEST_REASON -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_TEST_REASON_DISPOSITION_LINE** — DISPOSITION_TEST_REASON -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_TEST_REASON_DISPOSITION_TEST** — DISPOSITION_TEST_REASON -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_REASON_GRADE** — DISPOSITION_TEST_REASON -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_TEST_REASON_LOT_NO** — DISPOSITION_TEST_REASON -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_TEST_REASON_REASON_CODE** — DISPOSITION_TEST_REASON -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_REASON_SERIAL_NO** — DISPOSITION_TEST_REASON -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_TEST_REASON_DISPOSITION** on `Disposition, Facility`
- **IF_DISPOSITION_TEST_REASON_DISPOSITION_LINE** on `Facility, Disposition, LineSequenceNo`
- **IF_DISPOSITION_TEST_REASON_GRADE** on `GradeID`
- **IF_DISPOSITION_TEST_REASON_LOT_NO** on `LotNo, ProductID`
- **IF_DISPOSITION_TEST_REASON_SERIAL_NO** on `SerialNo, ProductID`
- **IXD_DispositionTestID_SerialNo** on `DispositionTestID, SerialNo`
