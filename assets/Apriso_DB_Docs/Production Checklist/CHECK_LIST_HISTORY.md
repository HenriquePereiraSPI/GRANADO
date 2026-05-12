# CHECK_LIST_HISTORY

**Database:** Operational

**Description:** Contains the Start Time and End Time of the Checklist entry for a given WIP Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListHistoryStatus | SMALLINT(5,0) | True |  | False | CHECK_LIST_HISTORY_STATUS | Status of the Check List History record. |
| CheckListID | INT(10,0) | True |  | False | CHECK_LIST | ID of the Checklist record the table is associated with. |
| CompletedOn | DATETIME | True |  | False |  | Date on which execution of the Checklist finished. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The Container linked to the CHECK LIST HISTORY record. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee who executed the Checklist. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| IsCorrect | BIT | True |  | False |  | A flag indicating if the result of the Checklist execution is correct or not. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a product (product number and product version). |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Resource on which the Checklist was executed. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource Type + Resource uniquely define a Resource. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial Number. |
| StartedOn | DATETIME | True |  | False |  | Date on which execution of the Checklist was started. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Reference to the WIP Operation Step. |
| WipCheckListID | INT(10,0) | True |  | False | WIP_CHECK_LIST | Reference to the WIP_CHECK_LIST table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order on which the Checklist was executed. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Link to the WIP Order type. |

## Primary Key

- **PK_CHECK_LIST_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_LIST_HISTORY_CHECK_LIST** — CHECK_LIST_HISTORY -> CHECK_LIST (`CheckListID -> ID`)
- **FK_CHECK_LIST_HISTORY_CHECK_LIST_HISTORY_STATUS** — CHECK_LIST_HISTORY -> CHECK_LIST_HISTORY_STATUS (`CheckListHistoryStatus -> CheckListHistoryStatus`)
- **FK_CHECK_LIST_HISTORY_CONTAINER** — CHECK_LIST_HISTORY -> CONTAINER (`Container -> Container`)
- **FK_CHECK_LIST_HISTORY_EMPLOYEE** — CHECK_LIST_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_CHECK_LIST_HISTORY_LOT_NO** — CHECK_LIST_HISTORY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_CHECK_LIST_HISTORY_PRODUCT** — CHECK_LIST_HISTORY -> PRODUCT (`ProductID -> ID`)
- **FK_CHECK_LIST_HISTORY_RESOURCE_** — CHECK_LIST_HISTORY -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_CHECK_LIST_HISTORY_SERIAL_NO** — CHECK_LIST_HISTORY -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_CHECK_LIST_HISTORY_WIP_CHECK_LIST** — CHECK_LIST_HISTORY -> WIP_CHECK_LIST (`WipCheckListID -> ID`)
- **FK_CHECK_LIST_HISTORY_WIP_OPERATION** — CHECK_LIST_HISTORY -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_CHECK_LIST_HISTORY_WIP_OPERATION_STEP** — CHECK_LIST_HISTORY -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_CHECK_LIST_HISTORY_WIP_ORDER** — CHECK_LIST_HISTORY -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_CHECK_POINT_HISTORY_CHECK_LIST_HISTORY** — CHECK_POINT_HISTORY -> CHECK_LIST_HISTORY (`CheckListHistoryID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CHECK_LIST_HISTORY_CHECK_LIST** on `CheckListID`
- **IF_CHECK_LIST_HISTORY_CHECK_LIST_HISTORY_STATUS** on `CheckListHistoryStatus`
- **IF_CHECK_LIST_HISTORY_CONTAINER** on `Container`
- **IF_CHECK_LIST_HISTORY_LOT_NO** on `LotNo, ProductID`
- **IF_CHECK_LIST_HISTORY_PRODUCT** on `ProductID`
- **IF_CHECK_LIST_HISTORY_RESOURCE_** on `ResourceName, ResourceType`
- **IF_CHECK_LIST_HISTORY_SERIAL_NO** on `SerialNo, ProductID`
- **IF_CHECK_LIST_HISTORY_WIP_CHECK_LIST** on `WipCheckListID`
- **IF_CHECK_LIST_HISTORY_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_CHECK_LIST_HISTORY_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
