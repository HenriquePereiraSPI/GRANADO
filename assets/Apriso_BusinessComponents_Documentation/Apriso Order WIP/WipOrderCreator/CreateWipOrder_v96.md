# CreateWipOrder_v96

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component method is to create a new Execution Order (also called WIP Order or Work Order). It creates a WIP order and if the Product is Lot tracked, it creates an entry in LOT and WIP_ORDER_LOT tables. It generates an event to trigger explosion of the WIP Order.
 

To specify additional properties of the WIP Order, the user must manually create dynamic Inputs to the BC. The values of the Inputs will be inserted into the WIP_ORDER table columns with matching names.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | No | The employee number which creates the WIP order. Must exist in the system. |
| Input | WipOrderNo | Char | Yes | The WIP Order number to be created. |
| Input | WipOrderType | Integer | Yes | The type of the WIP Order (e.g., Material Order, Maintenance Order, Production Order). Must exist in the system. |
| Input | PutAwayLocationID | Integer | No | The Putaway Location to be assigned to the WIP order. Does not have to be specified. |
| Input | ProductID | Integer | No | The product to be associated with the created WIP Order. Must exist in the system. |
| Input | OrderQuantity | Decimal | Yes | The order quantity of the material to be associated with the created WIP Order. |
| Input | Priority | Short | No | The priority of the created order. If it is -1 then the Priority is not populated in the database. |
| Input | ExpectedStartDate | DateTime | No | The expected start date of the WIP Order (local time). |
| Input | InsertExpectedStartDate | Boolean | Yes | Whether or not the expected start date is to be inserted. |
| Input | ReleaseDate | DateTime | No | The date when the order was released. |
| Input | InsertReleaseDate | Boolean | Yes | Whether or not the release date is to be inserted. |
| Input | ScheduledStartDate | DateTime | No | The scheduled start date (local time). |
| Input | InsertScheduledStartDate | Boolean | Yes | Whether or not the scheduled start date is to be inserted |
| Input | DueDate | DateTime | No | The date at which the order is due to be completed (local time). |
| Input | InsertDueDate | Boolean | Yes | Whether or not the due date is to be inserted. |
| Input | ExpectedCompletionDate | DateTime | No | The expected completion date of the WIP Order (local time). |
| Input | InsertExpectedCompletionDate | Boolean | Yes | The expected completion date of the WIP Order. |
| Input | ScheduledCompletionDate | DateTime | No | The scheduled completion date of the WIP Order (local time). |
| Input | InsertScheduledCompletionDate | Boolean | Yes | Whether or not the scheduled completion date is to be inserted. |
| Input | ExpectedDurationSeconds | DateTime | No | The expected duration of the WIP Order in seconds (local time). |
| Input | ScheduledDurationSeconds | Boolean | Yes | The scheduled duration of the WIP Order in seconds. |
| Input | UomCode | Char | Yes | The unit of measure code (required). Must exist in the system. |
| Input | WorkOrderStatus | Integer | No | The status of the WIP Order (e.g., New, Completed). Must exist in the system. |
| Input | ParentWipOrderNo | Char | No | The parent order number which represents the WipOrder (optional). If specified, it must exist in the system. |
| Input | ParentWipOrderType | Integer | No | The type of WIP Order (e.g., Material Order, Maintenance Order, Production Order). The parameter is optional. If ParentWipOrderNo is specified, this parameter must be specified, too. |
| Input | ProjectCode | Char | No | The project code. |
| Input | Description | Char | No | The WIP Order description. |
| Input | ProductionLineNo | Char | No | The Production Line Number and its attributes (optional). If specified, it must exist in the system. |
| Input | ResourceName | Char | No | The Resource name (optional). If specified, it must exist in the system. |
| Input | ResourceType | Integer | No | The Resource Type (optional). If ResourceName is specified, this parameter must be specified, too. |
| Input | ReleasedFacility | Char | Yes | The unique name of the Facility and its attributes. Must exist in the system. |
| Input | ProcessId | Integer | No | The Process ID (optional). If specified, it must exist in the system. |
| Input | RecipeId | Integer | No | The recipe ID (optional). If specified, it must exist in the system. |
| Input | LotNo | Char | No | The lot number (optional). If the product is lot-tracked, this parameter is required. |
| Input | OrderNo | Char | No | The order number. |
| Input | OrderType | Integer | No | The Order Type. |
| Input | OrderLineNo | Integer | No | The Order Line number. |
| Input | ExplodeOrder | Boolean | Yes | Determines if the order should be exploded or not. |
| Input | BomNumber | Char | No | The BOM number (optional). If specified, it must exist in the system. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ParentOprSequenceNo | Char | The parent Operation Sequence Number. |
| ScheduleName | Char | The name for the given Production Line schedule. |
| SchedulePayday | DateTime | The payday for which the order was created. |
| EcoID | Integer | The unique identifier of the engineering change order and its attributes. |
| OAWipEntityID | Integer | The ID of the OA WIP entity. |
| SamplePlanID | Integer | The unique identifier of the sample plan and its attributes. |
| SpecificationID | Integer | The unique identifier of the specification and its attributes. |
| ProcurementID | Integer | The unique identifier of the procurement. |
| OriginalProcessID | Integer | Persists the initial process ID used for the explosion. It is used by the re-explosion. |
| UnderTollerancePercent | Decimal | The tolerance of the order in percentage (under production). |
| OverTollerancePercent | Decimal | The tolerance in percentage for over-production. |
| DaysEarlyAllowed | Integer | The number of days that the shipment is allowed to arrive early and still be received. |
| DaysLateAllowed | Integer | The number of days that the shipment is allowed to arrive late and still be received. |
| DaysException | Char | The action required if the date is out of the tolerance (Error, Warning, Allow). |
| ExternalSequenceID | Integer | For associating a WIP order to a call. |
| ProjectID | Integer | The unique identifier of the project and Its attributes. |
| TargetQuantity | Decimal | The targeted quantity of the order. |
| TargetOrderQuantity | Decimal | The targeted quantity of the order (this input is not used when a WIP Order is exploded). |
| LaborProrateType | Integer | The linking to the Labor Proration Type. |
| OrderCategory | Integer | The category of the order (user-defined). |
| ReceiptLocationID | Integer | The receiving location identifier. |

## Validations

- System validates that Employee exists if it is provided. 
- System validates that WIP Order Type exists. 
- System validates that the provided WIP Order number does not exist. 
- System validates that Putaway Location exists if it is provided. 
- System validates that Product exists if it is provided. 
- System validates that Order quantity is provided. 
- System validates that priority is not less than -1.  
- System validates that UOM exists. 
- System validates that Work Order status exists if it is provided. 
- System validates that parent WIP Order exists if it is provided. 
- System validates that Production Line exists if it is provided. 
- System validates that Resource exists if it is provided. 
- System validates the Released Facility exists. 
- System validates Process ID exists if it is provided. 
- System validates Recipe ID exists if it is provided. 
- System validates that Lot exists if the provided Product is Lot tracked.

## System Processing

- System inserts a new record into the WIP_ORDER table with the inputs. 
- System generates Lot if Lot does not exist for the Lot tracked products. 
- System inserts a WIP_ORDER_LOT record if the specified Product is Lot tracked. 
- System invokes Explosion if the input ExplodeOrder is set to true: 
 
- It is assumed that the explosion is synchronous.  
- If a ProcessID is specified, system will bypass determination and explode the order based on the selected ProcessID. 
- If ProcessID is NULL, Explosion will attempt to use determination to get the ProcessID and explode the Order. 
- If a RecipeID is specified, system will bypass determination and explode the Order based on the selected RecipeID. 
- If RecipeID is NULL, Explosion will attempt to use determination to get the RecipeID and explode the Order.

## History Recording in Production

Transaction history record created which conforms to the XSD FlexNet.BusinessFacade.Manufacturing.WipOrderCreator.CreateWipOrder.
 

This has the information about the WIP_ORDER created. The LOT and WIP_ORDER_LOT information if they were also created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All, but WipOrderNo. | From BC input. |
|  | WipOrderNo | Generated by system or inputted. |
|  | Priority | Priority or DBNull in case Priority is -1. |
| LOT (if Product is lot tracked) | LotNo | From BC input. |
|  | ProductID | From BC input. |
| WIP_ORDER_LOT (if Product is lot tracked) | LotNo | From BC input. |
|  | ProductID | From BC input. |
|  | WipOrderNo | Generated by system or inputted. |
|  | WipOrderType | From BC input. |
|  | PrimaryLotNo | False |
|  |  | Copy from PRODUCT_COMPONENT based on Product and BOM |
