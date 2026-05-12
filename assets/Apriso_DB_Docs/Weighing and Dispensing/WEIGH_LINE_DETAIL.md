# WEIGH_LINE_DETAIL

**Database:** Operational

**Description:** This table records the execution of a weighing process for the given Weighing Line.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApprovedByEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Approved by Employee. |
| Container | NVARCHAR(40) | True |  | False |  | Source Container used for weighing the material. |
| DestinationContainer | NVARCHAR(40) | True |  | False |  | Destination Container used. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who performed the weighing. |
| GrossWeight | DECIMAL(28,10) | True |  | False |  | Gross Weight. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record. |
| LotNo | NVARCHAR(40) | True |  | False |  | Source Lot number. |
| Manual | BIT | False |  | False |  | Indicates if the weight was input manually, regardless of the weighing mode used. |
| Mode_ | NVARCHAR(20) | True |  | False |  | Weighing mode used to weigh the line: POUR, SUBTRACTIVE, SOURCE, DECLARATION or INTRODUCTION. |
| NetWeight | DECIMAL(28,10) | True |  | False |  | Net Weight. |
| ScaleID | INT(10,0) | True |  | False | RESOURCE_ | Name of the scale used. |
| ScaleStationID | INT(10,0) | True |  | False | RESOURCE_ | Name of the Scale Station used. |
| SignedByEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Signed by Employee. |
| TareWeight | DECIMAL(28,10) | True |  | False |  | Tare Weight. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM code used by the scale. |
| UserReference | NVARCHAR(80) | True |  | False |  | Optional user reference. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Warehouse Location. |
| WeighLineID | INT(10,0) | False |  | False | WEIGH_LINE | ID of the Weigh Line. |

## Primary Key

- **PK_WEIGH_LINE_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_WEIGH_LINE_DETAIL_EMPLOYEE** — WEIGH_LINE_DETAIL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_EMPLOYEE2** — WEIGH_LINE_DETAIL -> EMPLOYEE (`SignedByEmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_EMPLOYEE3** — WEIGH_LINE_DETAIL -> EMPLOYEE (`ApprovedByEmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_RESOURCE_** — WEIGH_LINE_DETAIL -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_LINE_DETAIL_RESOURCE_2** — WEIGH_LINE_DETAIL -> RESOURCE_ (`ScaleID -> ID`)
- **FK_WEIGH_LINE_DETAIL_UOM** — WEIGH_LINE_DETAIL -> UOM (`UomCode -> UomCode`)
- **FK_WEIGH_LINE_DETAIL_WAREHOUSE_LOCATION** — WEIGH_LINE_DETAIL -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WEIGH_LINE_DETAIL_WEIGH_LINE** — WEIGH_LINE_DETAIL -> WEIGH_LINE (`WeighLineID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WEIGH_LINE_DETAIL_RESOURCE_** on `ScaleStationID`
- **IF_WEIGH_LINE_DETAIL_RESOURCE_2** on `ScaleID`
- **IF_WEIGH_LINE_DETAIL_WEIGH_LINE** on `WeighLineID`
