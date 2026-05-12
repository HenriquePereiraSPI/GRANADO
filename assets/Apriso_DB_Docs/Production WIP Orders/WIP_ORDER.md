# WIP_ORDER

**Database:** Operational

**Description:** This table contains the list of execution orders and data on the assignment of an order to a Process, Recipe, or SOP as well as on the assignment to a Resource or an order header or detail.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True | (getutcdate()) | False |  | The actual completion date of the WIP Operation. |
| ActualDurationSeconds | INT(10,0) | True |  | False |  | The actual duration of the WIP Order in seconds. |
| ActualStartDate | DATETIME | True | (getutcdate()) | False |  | The actual start date of the WIP Order. |
| BomNumber | NVARCHAR(10) | True |  | False |  | Indicates the BOM number to be used when Explosion 3 is invoked (Recipe). |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CompletedQuantity | DECIMAL(28,10) | True | (0.0) | False |  | The quantity completed for the order. This is updated by the ReportOrder_v92 Business Component and not by navigation. |
| DaysEarlyAllowed | INT(10,0) | True |  | False |  | For future use. |
| DaysException | NVARCHAR(20) | True |  | False |  | For future use. |
| DaysLateAllowed | INT(10,0) | True |  | False |  | For future use. |
| DeterminationStrategyUsed | TINYINT(3,0) | True |  | False |  | The Explosion strategy used for the order. |
| DSFilter | NVARCHAR | True |  | False |  | A JSON formatted object that contains optional additional filters that the 3DEXPERIENCE platform may use to tailor a process when creating an order. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DSPlatformAlias | NVARCHAR(100) | True |  | False |  | The name of a 3DEXPERIENCE platform configuration. |
| DSProcessID | NVARCHAR(100) | True |  | False |  | The unique identifier of a process in the 3DEXPERIENCE platform. |
| DSProductionPlanID | NVARCHAR(100) | True |  | False |  | The unique identifier of a production plan in the 3DEXPERIENCE platform. |
| DueDate | DATETIME | True | (getutcdate()) | False |  | The due date of the order. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| ExpectedCompletionDate | DATETIME | True |  | False |  | Expected completion date of the WIP Order. |
| ExpectedDurationSeconds | INT(10,0) | True |  | False |  | The expected duration of the WIP Order in seconds. |
| ExpectedStartDate | DATETIME | True | (getutcdate()) | False |  | The expected start date. |
| ExternalSequenceID | INT(10,0) | True |  | False | EXTERNAL_SEQUENCE | For future use. |
| InternalState | SMALLINT(5,0) | True |  | False |  | For future use. |
| LaborProrateType | SMALLINT(5,0) | True |  | False | LABOR_PRORATE_TYPE | The labor prorate type to be used if the Employee works on WIP_OPERATION. This attribute is copied into the LABOR record, but it will not override if populated from WIP_OPERATION. |
| OAWipEntityID | INT(10,0) | True |  | False |  | For future use. |
| OrderCategory | INT(10,0) | True |  | False | ORDER_CATEGORY | The categoy of the order (user-defined). |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | The link to the order item. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | The reference to the order header (in addition to the order type). |
| OrderQuantity | DECIMAL(28,10) | True | (0.0) | False |  | The order target quantity. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | The reference to the order type. |
| OriginalProcessID | INT(10,0) | True |  | False | PROCESS | The initial Process ID used for Explosion. Used by re-Explosion. |
| OverTollerancePercent | DECIMAL(28,10) | True |  | False |  | The tolerance in % for over-production. |
| ParentOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The reference to the parent Operation. |
| ParentWIPOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The reference to the parent WIP Order. |
| ParentWIPOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The reference to the parent WIP Order. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | The percentage of work already completed for either an order or Operation. Valid values are in the range of 0 (nothing) to 1 (100%). |
| Priority | SMALLINT(5,0) | True | (100) | False |  | The priority of the order. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The link to a Process (and version). |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The reference to a product (product number and product version). |
| ProductionLineNo | NVARCHAR(40) | True |  | False | WIP_LINE | For future use. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The progress status of the order. |
| ProjectCode | NVARCHAR(40) | True |  | False |  | The link to a project. |
| ProjectID | INT(10,0) | True |  | False | PROJECT | The link to a project. |
| PutAwayLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The default location where inventory should be put away for this WIP Order. For WIP Orders of the Picking type (or related types), this is the location where all the picked inventory should be dropped for packing or production. |
| ReceiptLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The link to the receipt Warehouse Location. |
| RecipeID | INT(10,0) | True |  | False | RECIPE | The link to the Recipe (Explosion strategy 3). |
| ReleaseDate | DATETIME | True | (getutcdate()) | False |  | The release date of the order. |
| ReleasedFacility | NVARCHAR(40) | True |  | False | FACILITY | The Facility of the order. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The Resource linked to the order. Usually used for Maintenance Orders. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The Resource type defined uniquely for a Resource. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | For future use. |
| ScheduledCompletionDate | DATETIME | True |  | False |  | Scheduled completion date of the WIP Order. |
| ScheduledDurationSeconds | INT(10,0) | True | (0) | False |  | For future use. |
| ScheduledStartDate | DATETIME | True | (getutcdate()) | False |  | The scheduled start date. |
| ScheduleName | NVARCHAR(40) | True |  | False | WIP_LINE_SCHEDULE | For future use. |
| SchedulePayday | DATETIME | True | (getutcdate()) | False |  | For future use. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TargetOrderQuantity | DECIMAL(28,10) | True |  | False |  | The targeted quantity of the order. |
| TargetQuantity | DECIMAL(28,10) | True |  | False |  | The targeted quantity of the order. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnderTollerancePercent | DECIMAL(28,10) | True |  | False |  | The tolerance of the order in percent (under production). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code of the ordered quantity. |
| WipOperationFlowLayout | NVARCHAR | True |  | False |  | For internal use. |
| WipOrderNo | NVARCHAR(40) | False |  | True |  | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER_TYPE | The WIP Order type. |
| WorkflowStatusID | INT(10,0) | True |  | False | WORK_FLOW_STATUS | For internal use. |
| WorkingTime | DECIMAL(28,10) | True |  | False |  | For future use. |
| WorkOrderStatus | SMALLINT(5,0) | True |  | False | WIP_ORDER_STATUS | The status of the WIP Order. |

## Primary Key

- **PK_WIP_ORDER** on `WipOrderNo, WipOrderType`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_ENGINEERING_CHANGE_ORDER** — WIP_ORDER -> EC_ORDER (`EcoID -> ID`)
- **FK_WIP_ORDER_EXTERNAL_SEQUENCE** — WIP_ORDER -> EXTERNAL_SEQUENCE (`ExternalSequenceID -> ID`)
- **FK_WIP_ORDER_FACILITY** — WIP_ORDER -> FACILITY (`ReleasedFacility -> Facility`)
- **FK_WIP_ORDER_LABOR_PRORATE_TYPE** — WIP_ORDER -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_WIP_ORDER_ORDER_CATEGORY** — WIP_ORDER -> ORDER_CATEGORY (`OrderCategory -> ID`)
- **FK_WIP_ORDER_ORDER_DETAIL1** — WIP_ORDER -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_WIP_ORDER_PROCESS** — WIP_ORDER -> PROCESS (`OriginalProcessID -> ID`)
- **FK_WIP_ORDER_PROCESS1** — WIP_ORDER -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_ORDER_PROCUREMENT** — WIP_ORDER -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_WIP_ORDER_PROGRESS_STATUS** — WIP_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_ORDER_PROJECT** — WIP_ORDER -> PROJECT (`ProjectID -> ID`)
- **FK_WIP_ORDER_RECIPE** — WIP_ORDER -> RECIPE (`RecipeID -> ID`)
- **FK_WIP_ORDER_RESOURCE** — WIP_ORDER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_WIP_ORDER_SAMPLE_PLAN** — WIP_ORDER -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_WIP_ORDER_SPECIFICATION** — WIP_ORDER -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WIP_ORDER_UNIT** — WIP_ORDER -> UNIT (`UnitID -> ID`)
- **FK_WIP_ORDER_UOM** — WIP_ORDER -> UOM (`UomCode -> UomCode`)
- **FK_WIP_ORDER_WAREHOUSE_LOCATION** — WIP_ORDER -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_WIP_ORDER_WAREHOUSE_LOCATION_1** — WIP_ORDER -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_WIP_ORDER_WIP_LINE_SCHEDULES** — WIP_ORDER -> WIP_LINE_SCHEDULE (`ScheduleName -> ScheduleName`)
- **FK_WIP_ORDER_WIP_LINES** — WIP_ORDER -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_WIP_ORDER_WIP_OPERATION** — WIP_ORDER -> WIP_OPERATION (`ParentWIPOrderNo, ParentWIPOrderType, ParentOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_WORK_FLOW_STATUS** — WIP_ORDER -> WORK_FLOW_STATUS (`WorkflowStatusID -> ID`)
- **FK_WORK_ORDER_PRODUCT** — WIP_ORDER -> PRODUCT (`ProductID -> ID`)
- **FK_WORK_ORDER_WORK_ORDER_STATUS** — WIP_ORDER -> WIP_ORDER_STATUS (`WorkOrderStatus -> WipOrderStatus`)
- **FK_WORK_ORDER_WORK_ORDER_TYPE** — WIP_ORDER -> WIP_ORDER_TYPE (`WipOrderType -> WipOrderType`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_WIP_ORDER** — CAPA_LINK -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_CHECK_LIST_HISTORY_WIP_ORDER** — CHECK_LIST_HISTORY -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COST_DETAIL_WIP_ORDER** — COST_DETAIL -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COST_WIP_ORDER** — COST -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COUNT_DISPOSITION_LINE_WIP_ORDER** — COUNT_DISPOSITION_LINE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COUNT_DISPOSITION_WIP_ORDER** — COUNT_DISPOSITION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_COUNT_DOCUMENT_WIP_ORDER** — COUNT_DOCUMENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPATCH_SEQUENCE_WIP_ORDER** — DISPATCH_SEQUENCE -> WIP_ORDER (`FromWipOrderNo, FromWipOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPATCH_SEQUENCE_WIP_ORDER_2** — DISPATCH_SEQUENCE -> WIP_ORDER (`ToWipOrderNo, ToWipOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_CONTENT_WIP_ORDER** — DISPOSITION_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_LINE_WIP_ORDER** — DISPOSITION_LINE -> WIP_ORDER (`WipOrderNo, WiporderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_LINE_WIP_ORDER1** — DISPOSITION_LINE -> WIP_ORDER (`ExecutionOrderNo, ExecutionOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_WIP_ORDER** — DISPOSITION -> WIP_ORDER (`WipOrderNo, WiporderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_WIP_ORDER1** — DISPOSITION -> WIP_ORDER (`ExecutionOrderNo, ExecutionOrderType -> WipOrderNo, WipOrderType`)
- **FK_ECA_OBJECT_HISTORY_WIP_ORDER** — ECA_OBJECT_HISTORY -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_ECA_OBJECT_WIP_ORDER** — ECA_OBJECT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_ECM_ORDER_WIP_ORDER_WIP_ORDER** — ECM_ORDER_WIP_ORDER -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_INVENTORY2_ALLOCATION_WIP_ORDER** — INVENTORY2_ALLOCATION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_KANBAN_CARD_WipOrderNo** — KANBAN_CARD -> WIP_ORDER (`WipOrderType, WipOrderNo -> WipOrderType, WipOrderNo`)
- **FK_LITE_LABOR_WIP_ORDER** — LITE_LABOR -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_MAINT_ORDER_TASK_WIP_ORDER** — MAINT_ORDER_TASK -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_ORDER_DATE_WIP_ORDER** — ORDER_DATE -> WIP_ORDER (`OrderType, WipOrderNo -> WipOrderType, WipOrderNo`)
- **FK_ORDER_DETAIL_CONTENT_WIP_ORDER** — ORDER_DETAIL_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_ORDER_DETAIL_WIP_ORDER** — ORDER_DETAIL -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_PACKAGING_INSTR_USAGE_WIP_ORDER** — PACKAGING_INSTR_USAGE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_QUALITY_DEFECT_WIP_ORDER** — QUALITY_DEFECT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_SEQUENCE_QUEUE_ITEM_WIP_ORDER** — SEQUENCE_QUEUE_ITEM -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WEIGH_HEADER_WIP_ORDER** — WEIGH_HEADER -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WEIGH_LINE_WIP_ORDER** — WEIGH_LINE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_BOM_WIP_ORDER** — WIP_COMPONENT -> WIP_ORDER (`SupplyWipOrderNo, SupplyWipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_CHECK_LIST_WIP_ORDER** — WIP_CHECK_LIST -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_ORDER** — WIP_DATA_COLLECT_PLAN -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_DATA_COLLECT_READING_WIP_ORDER** — WIP_DATA_COLLECT_READING -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_DOCUMENT_WIP_ORDER** — WIP_DOCUMENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_NOTICE_WIP_ORDER** — WIP_NOTICE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_ADDRESS_WIP_ORDER** — WIP_ORDER_ADDRESS -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_ATO_XREF_WIP_ORDER** — WIP_ORDER_ATO -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_CONTACTS_WIP_ORDER** — WIP_ORDER_CONTACT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_CONTENT_WIP_ORDER** — WIP_ORDER_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_HOLDS_WIP_ORDER** — WIP_ORDER_HOLD -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_LOTS_WIP_ORDER** — WIP_ORDER_LOT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_OPERATION_WIP_ORDER1** — WIP_OPERATION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_RELATION_WIP_ORDER** — WIP_ORDER_RELATION -> WIP_ORDER (`ParentWIPOrderNo, ParentWIPOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_RELATION_WIP_ORDER1** — WIP_ORDER_RELATION -> WIP_ORDER (`ChildWIPOrderNo, ChildWIPOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_SERIAL_NO_WIP_ORDER** — WIP_ORDER_SERIAL_NO -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_ORDER_SIGNATURE_WIP_ORDER** — WIP_ORDER_SIGNATURE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_REV_WIP_ORDER** — WIP_REV -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WIP_SIGNATURE_WIP_ORDER** — WIP_SIGNATURE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Check Constraints

- **CK_WIP_ORDER_PercentageCompleted**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WIP_ORDER_CLASSIFICATIONID** on `ClassificationID`
- **IF_WIP_ORDER_DSID** on `DSID`
- **IF_WIP_ORDER_ENGINEERING_CHANGE_ORDER** on `EcoID`
- **IF_WIP_ORDER_EXTERNAL_SEQUENCE** on `ExternalSequenceID`
- **IF_WIP_ORDER_ORDER_CATEGORY** on `OrderCategory`
- **IF_WIP_ORDER_ORDER_DETAIL1** on `OrderNo, OrderType, OrderLineNo`
- **IF_WIP_ORDER_PROCESS** on `OriginalProcessID`
- **IF_WIP_ORDER_PROCESS1** on `ProcessID`
- **IF_WIP_ORDER_PROCUREMENT** on `ProcurementID`
- **IF_WIP_ORDER_PROGRESS_STATUS** on `ProgressStatus`
- **IF_WIP_ORDER_PROJECT** on `ProjectID`
- **IF_WIP_ORDER_RECIPE** on `RecipeID`
- **IF_WIP_ORDER_RESOURCE** on `ResourceName, ResourceType`
- **IF_WIP_ORDER_SAMPLE_PLAN** on `SamplePlanID`
- **IF_WIP_ORDER_SPECIFICATION** on `SpecificationID`
- **IF_WIP_ORDER_UNIT** on `UnitID`
- **IF_WIP_ORDER_WIP_LINE_SCHEDULES** on `ScheduleName`
- **IF_WIP_ORDER_WIP_LINES** on `ProductionLineNo`
- **IF_WIP_ORDER_WIP_OPERATION** on `ParentWIPOrderNo, ParentWIPOrderType, ParentOprSequenceNo`
- **IF_WIP_ORDER_WORK_FLOW_STATUS** on `WorkflowStatusID`
- **IF_WORK_ORDER_PRODUCT** on `ProductID`
- **IF_WORK_ORDER_WORK_ORDER_STATUS** on `WorkOrderStatus`
- **IXD_ActualStartDate_ActualCompletionDate** on `ActualStartDate, ActualCompletionDate`
- **IXD_DueDate_ActualCompletionDate** on `DueDate, ActualCompletionDate`
- **IXD_ExpectedCompletionDate_ExpectedStartDate** on `ExpectedCompletionDate, ExpectedStartDate`
- **IXD_ExpectedStartDate_ExpectedCompletionDate** on `ExpectedStartDate, ExpectedCompletionDate`
- **IXD_ScheduledStartDate_ScheduledCompletionDate** on `ScheduledStartDate, ScheduledCompletionDate`
