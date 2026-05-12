# COST

**Database:** Operational

**Description:** Cost details for resources

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False | COMPANY | Company Number |
| CostAccrualMethod | NVARCHAR(50) | True |  | False |  | Actual Completion, Amortization, Theoretical Completion, Allocation, Percentage of Completion |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code |
| CostLevel | SMALLINT(5,0) | True |  | False |  | Cost level: 0 - current level cost, 1 - sum of all lower-level costs. |
| CostObjectType | SMALLINT(5,0) | True |  | False | COST_OBJECT_TYPE | Enumeration of the values representing various cost object types |
| CostValuationType | SMALLINT(5,0) | True |  | False | COST_VALUATION_TYPE | Enumeration of the values representing various cost valuation types |
| CurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | Code representing the name of the currency |
| CurrentCostChangeID | INT(10,0) | True |  | False | COST_CHANGE | Cost changes for products, resources, processes and orders |
| ExternalSequenceID | INT(10,0) | True |  | False | EXTERNAL_SEQUENCE | To associate a WIP Order to a call |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Identifier for the Facility |
| FrozenCostCurrency | NVARCHAR(3) | True |  | False | CURRENCY | Code representing the name of the frozen cost currency |
| FrozenUnitCost | DECIMAL(28,10) | True |  | False |  | The frozen cost per unit |
| ID | INT(10,0) | False |  | True |  | Unique identifier |
| LastFrozenCostUpdate | DATETIME | True |  | False |  | The date and time when the frozen cost was last updated |
| LastStdCostUpdate | DATETIME | True |  | False |  | The date and time when the standard cost was last updated |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot identifier or number |
| OperationID | INT(10,0) | True |  | False | OPERATION | Operation and its Attributes unique identifier |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Sequence Number of the Operation |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number |
| OrderLineSchedule | INT(10,0) | True |  | False | ORDER_SCHEDULE | Order Line Schedule Number |
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
| ScheduleName | NVARCHAR(40) | True |  | False | WIP_LINE_SCHEDULE | The name for a given Production line schedule |
| SequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Sequence number of the step |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial number for a product |
| ShipmentStageID | INT(10,0) | True |  | False | SHIPMENT_STAGE | The shipment stage the order is associated with |
| SkillExperienceLevel | INT(10,0) | True |  | False | SKILL_EXPERIENCE_LEVEL | The Experience level within a skill |
| SkillID | INT(10,0) | True |  | False | SKILL | Skill and its Attributes unique identifier |
| StdCostCurrency | NVARCHAR(3) | True |  | False | CURRENCY | The currency in which the standard cost is denominated |
| StdUnitCost | DECIMAL(28,10) | True |  | False |  | The standard cost per unit |
| TotalCost | DECIMAL(28,10) | True |  | False |  | The total cost of the order, order line, schedule, sequence, shipment stage, operation or step |
| UnitCost | DECIMAL(28,10) | True |  | False |  | The unit cost of the product, resource or order |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse name and its Attributes |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location and its Attributes unique identifier |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The work order identifier or number |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Enumeration of the values that describe various WIP Order types |
| WipRevID | INT(10,0) | True |  | False | WIP_REV | Work order revision unique identifier |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center and its Attributes |

## Primary Key

- **PK_COST** on `ID`

## Foreign Keys (this table -> other)

- **FK_COST_COMPANY** — COST -> COMPANY (`Company -> Company`)
- **FK_COST_COST_CHANGE** — COST -> COST_CHANGE (`CurrentCostChangeID -> ID`)
- **FK_COST_COST_OBJECT_TYPE** — COST -> COST_OBJECT_TYPE (`CostObjectType -> CostObjectType`)
- **FK_COST_COST_VALUATION_TYPE** — COST -> COST_VALUATION_TYPE (`CostValuationType -> CostValuationType`)
- **FK_COST_CURRENCY** — COST -> CURRENCY (`StdCostCurrency -> CurrencyCode`)
- **FK_COST_CURRENCY1** — COST -> CURRENCY (`FrozenCostCurrency -> CurrencyCode`)
- **FK_COST_CURRENCY2** — COST -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_COST_EXTERNAL_SEQUENCE** — COST -> EXTERNAL_SEQUENCE (`ExternalSequenceID -> ID`)
- **FK_COST_FACILITY** — COST -> FACILITY (`Facility -> Facility`)
- **FK_COST_LOT_NO** — COST -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COST_OPERATION** — COST -> OPERATION (`OperationID -> ID`)
- **FK_COST_ORDER_DETAIL** — COST -> ORDER_DETAIL (`OrderType, OrderNo, OrderLineNo -> OrderType, OrderNo, OrderLineNo`)
- **FK_COST_ORDER_HEADER** — COST -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_COST_ORDER_SCHEDULE** — COST -> ORDER_SCHEDULE (`OrderType, OrderNo, OrderLineNo, OrderLineSchedule -> OrderType, OrderNo, OrderLineNo, OrderLineSchedule`)
- **FK_COST_PROCESS** — COST -> PROCESS (`ProcessID -> ID`)
- **FK_COST_PRODUCT** — COST -> PRODUCT (`ProductID -> ID`)
- **FK_COST_PROJECT** — COST -> PROJECT (`ProjectID -> ID`)
- **FK_COST_RESOURCE_** — COST -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_COST_RESOURCE_CLASS** — COST -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_COST_RESOURCE_TYPE** — COST -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_COST_ROLE** — COST -> ROLE (`RoleID -> ID`)
- **FK_COST_SERIAL_NO** — COST -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_COST_SHIPMENT_STAGE** — COST -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_COST_SKILL** — COST -> SKILL (`SkillID -> ID`)
- **FK_COST_SKILL_EXPERIENCE_LEVEL** — COST -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_COST_UOM** — COST -> UOM (`CostingUomCode -> UomCode`)
- **FK_COST_WAREHOUSE** — COST -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COST_WAREHOUSE_LOCATION** — COST -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COST_WIP_LINE_SCHEDULE** — COST -> WIP_LINE_SCHEDULE (`ScheduleName -> ScheduleName`)
- **FK_COST_WIP_OPERATION** — COST -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COST_WIP_OPERATION_STEP** — COST -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_COST_WIP_ORDER** — COST -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COST_WIP_REV** — COST -> WIP_REV (`WipRevID -> ID`)
- **FK_COST_WORK_CENTER** — COST -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_COST** — COST_CHANGE -> COST (`CostID -> ID`)
- **FK_COST_DETAIL_COST** — COST_DETAIL -> COST (`CostID -> ID`)
- **FK_RESOURCE_COST** — RESOURCE_ -> COST (`CostID -> ID`)
- **FK_WORK_CENTER_COST** — WORK_CENTER -> COST (`CostID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_COST_CHANGE** on `CurrentCostChangeID`
- **IF_COST_EXTERNAL_SEQUENCE** on `ExternalSequenceID`
- **IF_COST_LOT_NO** on `LotNo, ProductID`
- **IF_COST_OPERATION** on `OperationID`
- **IF_COST_ORDER_SCHEDULE** on `OrderNo, OrderType, OrderLineNo, OrderLineSchedule`
- **IF_COST_PROCESS** on `ProcessID`
- **IF_COST_PRODUCT** on `ProductID`
- **IF_COST_PROJECT** on `ProjectID`
- **IF_COST_RESOURCE_** on `ResourceName, ResourceType`
- **IF_COST_RESOURCE_CLASS** on `ResourceClassID`
- **IF_COST_ROLE** on `RoleID`
- **IF_COST_SERIAL_NO** on `SerialNo, ProductID`
- **IF_COST_SHIPMENT_STAGE** on `ShipmentStageID`
- **IF_COST_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
- **IF_COST_WIP_LINE_SCHEDULE** on `ScheduleName`
- **IF_COST_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`
- **IF_COST_WIP_REV** on `WipRevID`
