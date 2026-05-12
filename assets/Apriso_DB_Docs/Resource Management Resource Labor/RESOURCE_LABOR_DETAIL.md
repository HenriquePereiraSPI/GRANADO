# RESOURCE_LABOR_DETAIL

**Database:** Operational

**Description:** The “RESOURCE_LABOR_DETAIL” is used to store information when reporting against wip operation, product or lot such as parent id (RESOURCE_LABOR), employee, time of reporting, quantity etc.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who reported the quantities |
| EndTime | DATETIME2 | True |  | False |  | End Time of the resource labor detail record |
| FromContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | The enumeration of the from value representing the Class of Content (e.g. good, failed, scrap) |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number used by resource labor records of labor types: Order or Product to indicate the part being produced on the gived resource |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a product (product number and product version) |
| Quantity | DECIMAL(28,10) | True |  | False |  | The quantity that was reported on the resource |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| ResourceLaborDetailClassID | INT(10,0) | True |  | False | RESOURCE_LABOR_DETAIL_CLASS | ID of the labor detail class. |
| ResourceLaborID | BIGINT(19,0) | True |  | False | RESOURCE_LABOR | The ID of parent resource labor record |
| Revision | INT(10,0) | True |  | False |  | For future use. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial Number used by resource labor records of labor types: Order or Product to indicate the part being produced on the gived resource |
| StartTime | DATETIME2 | True | (getutcdate()) | False |  | The date and time when the labor record started |
| Status | SMALLINT(5,0) | True |  | False | LABOR_STATUS | Enumeration of the values that describe the labor status |
| ToContentClass | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | Enumeration of the values that describe the various classes of work order content (e.g., good, failed, scrapped) |
| ToSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation where production was moved |
| TransactionTime | DATETIME2 | True | (getutcdate()) | False |  | Date and time when the transaction occurred |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code for the reported quantity |

## Primary Key

- **PK_RESOURCE_LABOR_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LABOR_DETAIL_CONTAINER** — RESOURCE_LABOR_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_RESOURCE_LABOR_DETAIL_EMPLOYEE** — RESOURCE_LABOR_DETAIL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_LABOR_STATUS** — RESOURCE_LABOR_DETAIL -> LABOR_STATUS (`Status -> LaborStatus`)
- **FK_RESOURCE_LABOR_DETAIL_LOT_NO** — RESOURCE_LABOR_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RESOURCE_LABOR_DETAIL_PRODUCT_GRADE** — RESOURCE_LABOR_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_RESOURCE_LABOR_DETAIL_REASON_CODE** — RESOURCE_LABOR_DETAIL -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_RESOURCE_LABOR_DETAIL_RESOURCE_LABOR** — RESOURCE_LABOR_DETAIL -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_RESOURCE_LABOR_DETAIL_CLASS** — RESOURCE_LABOR_DETAIL -> RESOURCE_LABOR_DETAIL_CLASS (`ResourceLaborDetailClassID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_SERIAL_NO** — RESOURCE_LABOR_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_RESOURCE_LABOR_DETAIL_UOM** — RESOURCE_LABOR_DETAIL -> UOM (`UomCode -> UomCode`)
- **FK_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS** — RESOURCE_LABOR_DETAIL -> WIP_CONTENT_CLASS (`FromContentClass -> WipContentClass`)
- **FK_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS1** — RESOURCE_LABOR_DETAIL -> WIP_CONTENT_CLASS (`ToContentClass -> WipContentClass`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_LABOR_DETAIL_APPROVAL_RESOURCE_LABOR_DETAIL** — RESOURCE_LABOR_DETAIL_APPROVAL -> RESOURCE_LABOR_DETAIL (`ResourceLaborDetailID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_LABOR_DETAIL_CONTAINER** on `Container`
- **IF_RESOURCE_LABOR_DETAIL_LABOR_STATUS** on `Status`
- **IF_RESOURCE_LABOR_DETAIL_LOT_NO** on `LotNo, ProductID`
- **IF_RESOURCE_LABOR_DETAIL_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_RESOURCE_LABOR_DETAIL_RESOURCE_LABOR** on `ResourceLaborID`
- **IF_RESOURCE_LABOR_DETAIL_RESOURCE_LABOR_DETAIL_CLASS** on `ResourceLaborDetailClassID`
- **IF_RESOURCE_LABOR_DETAIL_SERIAL_NO** on `SerialNo, ProductID`
- **IF_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS** on `FromContentClass`
- **IF_RESOURCE_LABOR_DETAIL_WIP_CONTENT_CLASS1** on `ToContentClass`
- **IXD_TransactionTime_ResourceLaborID** on `TransactionTime, ResourceLaborID`
