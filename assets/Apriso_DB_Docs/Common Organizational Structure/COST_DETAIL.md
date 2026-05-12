# COST_DETAIL

**Database:** Operational

**Description:** Cost breakdown for products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False | COMPANY | Company Number |
| CostClassID | INT(10,0) | False |  | False | COST_CLASS | Enumeration of values representing the breakdown of total cost into detail material, labour and overhead elements |
| CostID | INT(10,0) | True |  | False | COST | Unique identifier |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code |
| CostLevel | SMALLINT(5,0) | True |  | False |  | Cost level (0 = this-level cost; 1 = sum of all lower-level costs) |
| CostObjectType | SMALLINT(5,0) | False |  | False | COST_OBJECT_TYPE | Enumeration of the values representing various cost object types |
| CostValuationType | SMALLINT(5,0) | False |  | False | COST_VALUATION_TYPE | Enumeration of the values representing various cost valuation types |
| CurrencyCode | NVARCHAR(3) | False |  | False | CURRENCY | Code representing the name of the currency |
| ExternalSequenceID | INT(10,0) | True |  | False | EXTERNAL_SEQUENCE | To associate a WIP Order to a call |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Identifier for the Facility |
| ID | INT(10,0) | False |  | True |  | Cost detail unique identifier |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot identifier or number |
| OperationID | INT(10,0) | True |  | False | OPERATION | Operation and its Attributes unique identifier |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Sequence Number of the Operation |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number |
| OrderLineSchedule | INT(10,0) | True |  | False | ORDER_SCHEDULE | Line Schedule Number |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Enumeration of the values that describe various order types |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Process and its Attributes unique identifier |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Product and its Attributes unique identifier |
| ProjectID | INT(10,0) | True |  | False | PROJECT | Project and its Attributes unique identifier |
| QuantityCosted | DECIMAL(28,10) | True |  | False |  | The quantity of the order, order line, schedule, sequence, shipment stage, operation or step that has been costed |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Enumeration of the values representing various resource classes within a resource type |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The identifier or name of the resource |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Enumeration of the values representing various resource types |
| RoleID | INT(10,0) | True |  | False | ROLE | Role and its Attributes unique identifier |
| RollToCostClassID | INT(10,0) | True |  | False | COST_CLASS | The cost class at the next level where costs are transferred during cost roll-up |
| ScheduleName | NVARCHAR(40) | True |  | False | WIP_LINE_SCHEDULE | The name for a given Production line schedule |
| SequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Sequence number of the step |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial number for a product |
| ShipmentStageID | INT(10,0) | True |  | False | SHIPMENT_STAGE | The shipment stage the order is associated with |
| SkillExperienceLevel | INT(10,0) | True |  | False | SKILL_EXPERIENCE_LEVEL | The Experience level within a skill |
| SkillID | INT(10,0) | True |  | False | SKILL | Skill and its Attributes unique identifier |
| TotalCost | DECIMAL(28,10) | True |  | False |  | The total cost of the order, order line, schedule, sequence, shipment stage, operation or step |
| UnitCost | DECIMAL(28,10) | True |  | False |  | The unit cost of the product, resource or order |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse name and its Attributes |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location and its Attributes unique identifier |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The work order identifier or number |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Enumeration of the values that describe various WIP Order types |
| WipRevID | INT(10,0) | True |  | False | WIP_REV | Work order revision unique identifier |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center and its Attributes |

## Primary Key

- **PK_COST_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_COST_DETAIL_COMPANY** — COST_DETAIL -> COMPANY (`Company -> Company`)
- **FK_COST_DETAIL_COST** — COST_DETAIL -> COST (`CostID -> ID`)
- **FK_COST_DETAIL_COST_CLASS** — COST_DETAIL -> COST_CLASS (`CostClassID -> ID`)
- **FK_COST_DETAIL_COST_CLASS1** — COST_DETAIL -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_COST_DETAIL_COST_OBJECT_TYPE** — COST_DETAIL -> COST_OBJECT_TYPE (`CostObjectType -> CostObjectType`)
- **FK_COST_DETAIL_COST_VALUATION_TYPE** — COST_DETAIL -> COST_VALUATION_TYPE (`CostValuationType -> CostValuationType`)
- **FK_COST_DETAIL_CURRENCY** — COST_DETAIL -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_COST_DETAIL_EXTERNAL_SEQUENCE** — COST_DETAIL -> EXTERNAL_SEQUENCE (`ExternalSequenceID -> ID`)
- **FK_COST_DETAIL_FACILITY** — COST_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_COST_DETAIL_LOT_NO** — COST_DETAIL -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COST_DETAIL_OPERATION** — COST_DETAIL -> OPERATION (`OperationID -> ID`)
- **FK_COST_DETAIL_ORDER_DETAIL** — COST_DETAIL -> ORDER_DETAIL (`OrderType, OrderNo, OrderLineNo -> OrderType, OrderNo, OrderLineNo`)
- **FK_COST_DETAIL_ORDER_HEADER** — COST_DETAIL -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_COST_DETAIL_ORDER_SCHEDULE** — COST_DETAIL -> ORDER_SCHEDULE (`OrderType, OrderNo, OrderLineNo, OrderLineSchedule -> OrderType, OrderNo, OrderLineNo, OrderLineSchedule`)
- **FK_COST_DETAIL_PROCESS** — COST_DETAIL -> PROCESS (`ProcessID -> ID`)
- **FK_COST_DETAIL_PRODUCT** — COST_DETAIL -> PRODUCT (`ProductID -> ID`)
- **FK_COST_DETAIL_PROJECT** — COST_DETAIL -> PROJECT (`ProjectID -> ID`)
- **FK_COST_DETAIL_RESOURCE_** — COST_DETAIL -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_COST_DETAIL_RESOURCE_CLASS** — COST_DETAIL -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_COST_DETAIL_RESOURCE_TYPE** — COST_DETAIL -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_COST_DETAIL_ROLE** — COST_DETAIL -> ROLE (`RoleID -> ID`)
- **FK_COST_DETAIL_SERIAL_NO** — COST_DETAIL -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_COST_DETAIL_SHIPMENT_STAGE** — COST_DETAIL -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_COST_DETAIL_SKILL** — COST_DETAIL -> SKILL (`SkillID -> ID`)
- **FK_COST_DETAIL_SKILL_EXPERIENCE_LEVEL** — COST_DETAIL -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_COST_DETAIL_UOM** — COST_DETAIL -> UOM (`CostingUomCode -> UomCode`)
- **FK_COST_DETAIL_WAREHOUSE** — COST_DETAIL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COST_DETAIL_WAREHOUSE_LOCATION** — COST_DETAIL -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COST_DETAIL_WIP_LINE_SCHEDULE** — COST_DETAIL -> WIP_LINE_SCHEDULE (`ScheduleName -> ScheduleName`)
- **FK_COST_DETAIL_WIP_OPERATION** — COST_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COST_DETAIL_WIP_OPERATION_STEP** — COST_DETAIL -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_COST_DETAIL_WIP_ORDER** — COST_DETAIL -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COST_DETAIL_WIP_ORDER_TYPE** — COST_DETAIL -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_COST_DETAIL_WIP_REV** — COST_DETAIL -> WIP_REV (`WipRevID -> ID`)
- **FK_COST_DETAIL_WORK_CENTER** — COST_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_DETAIL_COST** on `CostID`
- **IF_COST_DETAIL_COST_CLASS** on `CostClassID`
- **IF_COST_DETAIL_COST_CLASS1** on `RollToCostClassID`
- **IF_COST_DETAIL_EXTERNAL_SEQUENCE** on `ExternalSequenceID`
- **IF_COST_DETAIL_LOT_NO** on `LotNo, ProductID`
- **IF_COST_DETAIL_OPERATION** on `OperationID`
- **IF_COST_DETAIL_ORDER_SCHEDULE** on `OrderNo, OrderType, OrderLineNo, OrderLineSchedule`
- **IF_COST_DETAIL_PROCESS** on `ProcessID`
- **IF_COST_DETAIL_PRODUCT** on `ProductID`
- **IF_COST_DETAIL_PROJECT** on `ProjectID`
- **IF_COST_DETAIL_RESOURCE_** on `ResourceName, ResourceType`
- **IF_COST_DETAIL_RESOURCE_CLASS** on `ResourceClassID`
- **IF_COST_DETAIL_ROLE** on `RoleID`
- **IF_COST_DETAIL_SERIAL_NO** on `SerialNo, ProductID`
- **IF_COST_DETAIL_SHIPMENT_STAGE** on `ShipmentStageID`
- **IF_COST_DETAIL_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
- **IF_COST_DETAIL_WIP_LINE_SCHEDULE** on `ScheduleName`
- **IF_COST_DETAIL_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`
- **IF_COST_DETAIL_WIP_REV** on `WipRevID`
