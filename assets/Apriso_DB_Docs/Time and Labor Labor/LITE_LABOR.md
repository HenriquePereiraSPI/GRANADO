# LITE_LABOR

**Database:** Operational

**Description:** Stores information about lite labor.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DurationInSeconds | INT(10,0) | True |  | False |  | Difference between EndTime and StartTime in seconds. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee who performed the labor. |
| EndTime | DATETIME | True |  | False |  | Time when the labor ended in UTC. |
| EndTimeLocal | DATETIME | True |  | False |  | Time when the labor ended converted to the Time Zone identified by TimeZoneID. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Name of the Facility where the labor was performed. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the record. |
| LaborStatus | SMALLINT(5,0) | True |  | False |  | Status of the labor. |
| LaborType | SMALLINT(5,0) | True |  | False | LABOR_TYPE | Type of labor. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Number of the Lot that the labor and product produces. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | Name of the Occupation of the labor. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Number of the WIP Operation associated with the labor. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | ID of the product the labor produces. |
| ProductionLineNo | NVARCHAR(40) | True |  | False | WIP_LINE | Name of the Production Line where the labor was performed. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Code of the reason for the labor. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Name of the resource that performed the labor. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Type of the resource that performed the labor. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Number of the Serial that the labor and product produces. |
| ShiftName | NVARCHAR(20) | True |  | False |  | Name of the Shift when the labor was performed. |
| StartTime | DATETIME | True |  | False |  | Time when the labor started in UTC. |
| StartTimeLocal | DATETIME | True |  | False |  | Time when the labor started converted to the Time Zone identified by TimeZoneID. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Sequence index of the WIP Operation Step associated with the labor. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | ID of the Time Zone where the labor was performed. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Number of the WIP Order associated with the labor. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Type of the WIP Order associated with the labor. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Name of the Work Center where the labor was performed. |

## Primary Key

- **PK_LITE_LABOR** on `ID`

## Foreign Keys (this table -> other)

- **FK_LITE_LABOR_EMPLOYEE** — LITE_LABOR -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LITE_LABOR_FACILITY** — LITE_LABOR -> FACILITY (`Facility -> Facility`)
- **FK_LITE_LABOR_LABOR_TYPE** — LITE_LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_LITE_LABOR_LOT_NO** — LITE_LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_LITE_LABOR_OCCUPATION** — LITE_LABOR -> OCCUPATION (`Facility, Occupation -> Facility, Occupation`)
- **FK_LITE_LABOR_PRODUCT** — LITE_LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_LITE_LABOR_REASON_CODE** — LITE_LABOR -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_LITE_LABOR_RESOURCE** — LITE_LABOR -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_LITE_LABOR_SERIAL_NO** — LITE_LABOR -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_LITE_LABOR_TIMEZONE** — LITE_LABOR -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_LITE_LABOR_UNIT** — LITE_LABOR -> UNIT (`UnitID -> ID`)
- **FK_LITE_LABOR_WIP_LINE** — LITE_LABOR -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_LITE_LABOR_WIP_OPERATION** — LITE_LABOR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_LITE_LABOR_WIP_OPERATION_STEP** — LITE_LABOR -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_LITE_LABOR_WIP_ORDER** — LITE_LABOR -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_LITE_LABOR_WORK_CENTER** — LITE_LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LITE_LABOR_LOT_NO** on `LotNo, ProductID`
- **IF_LITE_LABOR_OCCUPATION** on `Occupation, Facility`
- **IF_LITE_LABOR_PRODUCT** on `ProductID`
- **IF_LITE_LABOR_RESOURCE** on `ResourceName, ResourceType`
- **IF_LITE_LABOR_SERIAL_NO** on `SerialNo, ProductID`
- **IF_LITE_LABOR_UNIT** on `UnitID`
- **IF_LITE_LABOR_WIP_LINE** on `ProductionLineNo`
- **IF_LITE_LABOR_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
