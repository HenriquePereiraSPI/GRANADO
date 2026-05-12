# RESOURCE_LABOR

**Database:** Operational

**Description:** The “RESOURCE_LABOR” table stores information about resource labor such as start and end time, started and end employee, resource name and type, status etc. Resource labor can be started for such entities as WIP Operation, product/lot, span, state and defect. Each type of the entity has its own set of attributes that is stored in this table. The content of this table is shown through Cockpit.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AutoAdjustState | BIT | True |  | False |  | For future use. |
| CoupleState | BIT | True |  | False |  | Determines if the resource labor record has been modifed by the system to couple state (e.g. Modification of the start time is followed by the modification of the end time of the previous state). The value is taken from RESOURCE_.CoupleState |
| EndEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee that ended the event |
| EndTime | DATETIME2 | True |  | False |  | End date / time of the event |
| Facility | NVARCHAR(40) | True |  | False | OCCUPATION | Defines the facility for the machine/resource labor record |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LaborClassID | INT(10,0) | True |  | False | LABOR_CLASS | ID of the labor class. |
| LaborType | SMALLINT(5,0) | False |  | False | LABOR_TYPE | The type of labor |
| LoadTime | DATETIME2 | True | (getutcdate()) | False |  | For future use. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number used by resource labor records of labor types: Order or Product to indicate the part being produced on the gived resource |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a note |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | An attribute of RESOURCE_LABOR to specific a specific OCCUPATION is linked to the RESOURCE_LABOR. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order type information) |
| ParentID | BIGINT(19,0) | True |  | False | RESOURCE_LABOR | The ID of the parent resource labor record (according to the supported structure: Span->State->Order |
| PreviousSpeed | DECIMAL(28,10) | True |  | False |  | For future use. |
| PreviousSpeedPercentage | DECIMAL(28,10) | True |  | False |  | For future use. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a product (product number and product version) |
| ProductionLine | NVARCHAR(40) | True |  | False | WIP_LINE | For future use. |
| ProratedHours | DECIMAL(28,10) | True |  | False |  | Time during which the machine was active divided into all the activities the machine was working on over any given period of time. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| RegularHours | DECIMAL(28,10) | True | (0.0) | False |  | The regular hours associated with the resource labor |
| ResourceName | NVARCHAR(80) | False |  | False | RESOURCE_ | The name of the resource the resource labor record refers to |
| ResourceType | SMALLINT(5,0) | False |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |
| Revision | INT(10,0) | True | (1) | False |  | For future use. |
| Speed | DECIMAL(28,10) | True |  | False |  | Speed of the machine for the duration of the event. 0 = machine stopped |
| SpeedPercentage | DECIMAL(28,10) | True |  | False |  | Speed of the machine for the duration of the event. 0 = machine stopped |
| StartedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of employee record who started the resource labor record |
| StartTime | DATETIME2 | False | (getutcdate()) | False |  | Start time of the event |
| Status | SMALLINT(5,0) | False |  | False | LABOR_STATUS | Status of the resource labor record (e.g. Open, Closed) |
| TotalFailQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Total failed quantity that was reported on this resource |
| TotalGoodQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Total good quantity that was reported on this resource |
| TotalHeldQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Total held quantity that was reported on this resource |
| TotalReworkQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Total rework quantity that was reported on this resource |
| TotalScrapQuantity | DECIMAL(28,10) | True | (0.0) | False |  | Total scrap quantity that was reported on this resource |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UnloadTime | DATETIME2 | True |  | False |  | For future use. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code the speed of the resource is measured by |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number used to indicate the production order the resource is currently executing. Field is used only by resource labor type: Order |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Link to the WIP Order type |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The name of the work center the resource labor record refers to |

## Primary Key

- **PK_RESOURCE_LABOR** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LABOR_EMPLOYEE** — RESOURCE_LABOR -> EMPLOYEE (`StartedEmployeeID -> ID`)
- **FK_RESOURCE_LABOR_EMPLOYEE1** — RESOURCE_LABOR -> EMPLOYEE (`EndEmployeeID -> ID`)
- **FK_RESOURCE_LABOR_LABOR_CLASS** — RESOURCE_LABOR -> LABOR_CLASS (`LaborClassID -> ID`)
- **FK_RESOURCE_LABOR_LABOR_STATUS** — RESOURCE_LABOR -> LABOR_STATUS (`Status -> LaborStatus`)
- **FK_RESOURCE_LABOR_LABOR_TYPE** — RESOURCE_LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_RESOURCE_LABOR_LOT_NO** — RESOURCE_LABOR -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_RESOURCE_LABOR_NOTE** — RESOURCE_LABOR -> NOTE (`NoteID -> ID`)
- **FK_RESOURCE_LABOR_OCCUPATION** — RESOURCE_LABOR -> OCCUPATION (`Occupation, Facility -> Occupation, Facility`)
- **FK_RESOURCE_LABOR_PRODUCT** — RESOURCE_LABOR -> PRODUCT (`ProductID -> ID`)
- **FK_RESOURCE_LABOR_REASON_CODES** — RESOURCE_LABOR -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_RESOURCE_LABOR_RESOURCE** — RESOURCE_LABOR -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LABOR_RESOURCE_LABOR** — RESOURCE_LABOR -> RESOURCE_LABOR (`ParentID -> ID`)
- **FK_RESOURCE_LABOR_UNIT** — RESOURCE_LABOR -> UNIT (`UnitID -> ID`)
- **FK_RESOURCE_LABOR_UOM** — RESOURCE_LABOR -> UOM (`UomCode -> UomCode`)
- **FK_RESOURCE_LABOR_WIP_LINE** — RESOURCE_LABOR -> WIP_LINE (`ProductionLine -> ProductionLineNo`)
- **FK_RESOURCE_LABOR_WIP_OPERATION** — RESOURCE_LABOR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_RESOURCE_LABOR_WORK_CENTER** — RESOURCE_LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_RESOURCE_LABOR** — COST_CHANGE -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_DISPOSITION_LINE_MACHINE_EVENT_RESOURCE_LABOR** — DISPOSITION_LINE_MACHINE_EVENT -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_RESOURCE_CONTENTS_RESOURCE_LABOR** — RESOURCE_CONTENT -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_RESOURCE_LABOR_APPROVAL_RESOURCE_LABOR** — RESOURCE_LABOR_APPROVAL -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_RESOURCE_LABOR** — RESOURCE_LABOR_DETAIL -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_RESOURCE_LABOR_RESOURCE_LABOR** — RESOURCE_LABOR -> RESOURCE_LABOR (`ParentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_LABOR_LABOR_CLASS** on `LaborClassID`
- **IF_RESOURCE_LABOR_LABOR_STATUS** on `Status`
- **IF_RESOURCE_LABOR_LOT_NO** on `LotNo, ProductID`
- **IF_RESOURCE_LABOR_NOTE** on `NoteID`
- **IF_RESOURCE_LABOR_OCCUPATION** on `Occupation, Facility`
- **IF_RESOURCE_LABOR_PRODUCT** on `ProductID`
- **IF_RESOURCE_LABOR_UNIT** on `UnitID`
- **IF_RESOURCE_LABOR_WIP_LINE** on `ProductionLine`
- **IXC_EndTime_ID** on `EndTime, ID`
- **IXC_LaborType_ID** on `LaborType, ID`
- **IXC_LaborType_StartTime_ID** on `LaborType, StartTime, ID`
- **IXC_StartTime_ID** on `StartTime, ID`
- **IXD_EndEmployeeID** on `EndEmployeeID`
- **IXD_EndTime_ResourceName_ResourceType** on `EndTime, ResourceName, ResourceType`
- **IXD_LaborType_Status** on `LaborType, Status`
- **IXD_LastUpdateOn** on `LastUpdateOn`
- **IXD_ParentID_StartTime** on `ParentID, StartTime`
- **IXD_ResourceName_ResourceType_LaborType_Status** on `ResourceName, ResourceType, LaborType, Status`
- **IXD_ResourceName_ResourceType_StartTime_EndTime** on `ResourceName, ResourceType, StartTime, EndTime`
- **IXD_StartedEmployeeID** on `StartedEmployeeID`
- **IXD_StartTime_EndTime** on `StartTime, EndTime`
- **IXD_StartTime_ResourceName_ResourceType** on `StartTime, ResourceName, ResourceType`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_ResourceName_ResourceType** on `WipOrderNo, WipOrderType, OprSequenceNo, ResourceName, ResourceType`
- **IXD_WorkCenter** on `WorkCenter`
