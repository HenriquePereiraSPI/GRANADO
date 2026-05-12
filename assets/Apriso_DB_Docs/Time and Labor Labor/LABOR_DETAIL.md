# LABOR_DETAIL

**Database:** Operational

**Description:** Stores run-time data for Production linked to LABOR.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | For future use. |
| AdjustedStopTime | DATETIME | True |  | False |  | For future use. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| EndTime | DATETIME | True |  | False |  | End time for the Labor Detail in UTC time. |
| EndTimeLocal | DATETIME | True |  | False |  | Actual end time for the Labor Details in the Employee's local time zone. |
| FromContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | Class that describes the status of the goods in production before being reported against (e.g., good, failed, scrapped). |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LaborID | INT(10,0) | True |  | False | LABOR | ID of the Labor record the table is associated with. |
| LaborStatus | SMALLINT(5,0) | True |  | False | LABOR_STATUS | Status of the Labor Detail. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot number the Employee reported in Production. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| Quantity | DECIMAL(28,10) | True | (0.0) | False |  | Quantity the Employee reported in Production. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| Revision | INT(10,0) | True |  | False |  | For future use. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial number that was reported for the given labor. |
| StartTime | DATETIME | True | (getutcdate()) | False |  | Start time for the Labor Break in UTC time. |
| StartTimeLocal | DATETIME | True |  | False |  | Start time for the Labor Break in the Employee's local time zone. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Labor Detail was performed in. |
| ToContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | Class that describes the status of the goods in production after being reported against (e.g., good, failed, scrapped). |
| ToSequenceNo | NVARCHAR(20) | True |  | False |  | For future use. |
| TransactionTime | DATETIME | True | (getutcdate()) | False |  | Time the Labor transaction was performed at in UTC time. |
| TransactionTimeLocal | DATETIME | True |  | False |  | Local time of the Labor record. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM code of the Employee reported in production. |

## Primary Key

- **PK_LABOR_DETAILS** on `ID`

## Foreign Keys (this table -> other)

- **FK_LABOR_DETAIL_GRADE** — LABOR_DETAIL -> GRADE (`GradeID -> ID`)
- **FK_LABOR_DETAIL_TIMEZONE** — LABOR_DETAIL -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_LABOR_DETAIL_UOM** — LABOR_DETAIL -> UOM (`UomCode -> UomCode`)
- **FK_LABOR_DETAIL_WIP_CONTENT_CLASS** — LABOR_DETAIL -> WIP_CONTENT_CLASS (`FromContentClass -> WipContentClass`)
- **FK_LABOR_DETAIL_WIP_CONTENT_CLASS1** — LABOR_DETAIL -> WIP_CONTENT_CLASS (`ToContentClass -> WipContentClass`)
- **FK_LABOR_DETAILS_CONTAINER** — LABOR_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_LABOR_DETAILS_LABOR** — LABOR_DETAIL -> LABOR (`LaborID -> ID`)
- **FK_LABOR_DETAILS_LABOR_STATUS** — LABOR_DETAIL -> LABOR_STATUS (`LaborStatus -> LaborStatus`)
- **FK_LABOR_DETAILS_LOT_NO** — LABOR_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LABOR_DETAILS_PRODUCT_GRADE** — LABOR_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_LABOR_DETAILS_REASON_CODES2** — LABOR_DETAIL -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_LABOR_DETAILS_SERIAL_NO1** — LABOR_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)

## Referenced By (other tables -> this)

- **FK_LABOR_DETAIL_APPROVAL_LABOR_DETAILS** — LABOR_DETAIL_APPROVAL -> LABOR_DETAIL (`LaborDetailID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LABOR_DETAIL_GRADE** on `GradeID`
- **IF_LABOR_DETAIL_WIP_CONTENT_CLASS** on `FromContentClass`
- **IF_LABOR_DETAIL_WIP_CONTENT_CLASS1** on `ToContentClass`
- **IF_LABOR_DETAILS_CONTAINER** on `Container`
- **IF_LABOR_DETAILS_LABOR_STATUS** on `LaborStatus`
- **IF_LABOR_DETAILS_LOT_NO** on `LotNo, ProductID`
- **IF_LABOR_DETAILS_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_LABOR_DETAILS_SERIAL_NO1** on `SerialNo, ProductID`
- **IXD_LaborID_TransactionTime** on `LaborID, TransactionTime`
