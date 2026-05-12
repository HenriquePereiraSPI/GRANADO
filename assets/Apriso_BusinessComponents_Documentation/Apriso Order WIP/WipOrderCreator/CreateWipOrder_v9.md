# CreateWipOrder_v9

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to create a new Execution Order (also called WIP Order or Work Order). It creates a WIP order and if the product is lot tracked it creates an entry in LOT and WIP_ORDER_LOT tables. It then explosed the WIP Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | No | Employee number which creates the wip order. Must exist in the system. |
| Input | WipOrderNo | Char | No | Wip order number to be created. |
| Input | WipOrderType | Integer | No | The Type of Wip Order (e.g. Material Order, Maintenance Order, Production Order). Must exist in the system |
| Input | PutAwayLocationID | Integer | No | Put away location to be assigned to the wip order. Can be not specified |
| Input | ProductID | Integer | No | Product to be associated with the created wip order. Must exist in the system. |
| Input | OrderQuantity | Decimal | No | The order quantity of material to be associated with the created wip order. |
| Input | Priority | Short | No | The priority of the created order. If it is -1 then the Priority is not populated in the database. |
| Input | ExpectedStartDate | DateTime | No | The expected start date of the wip order |
| Input | ReleaseDate | DateTime | No | The date which the order was released. |
| Input | ScheduledStartDate | DateTime | No | The scheduled start date. |
| Input | DueDate | DateTime | No | The date in which the order is due to be completed. |
| Input | UomCode | Char | Yes | Unit of measure code (required). Must exist in the system. |
| Input | WorkOrderStatus | Integer | No | Status of Wip Order (e.g. New, Completed). Must exist in the system. |
| Input | ParentWipOrderNo | Char | No | The parent order number which represents the WipOrder (optional). If sepecified then must exist in the system. |
| Input | ParentWipOrderType | Integer | No | The Type of Wip Order (e.g. Material Order, Maintenance Order, Production Order). The parameter is optional. If ParentWipOrderNo is specified then the parameter must be specified too. |
| Input | ProjectCode | Char | No | The project code. |
| Input | Description | Char | No | The Wip Order description. |
| Input | ProductionLineNo | Char | No | Production Line Number and its Attributes (optional). If specified then must exist in the system. |
| Input | ResourceName | Char | No | Resource Name (optional). If specified then must exist in the system. |
| Input | ResourceType | Integer | No | Resource Type (optional). If ResourceName is specified then the parameter must be specified too. |
| Input | ReleasedFacility | Char | No | Facility and Attributes unique name. Must exist in the system. |
| Input | ProcessId | Integer | No | Process ID (optional). If specified then must exist in the system. |
| Input | LotNo | Char | No | Lot Number (optional). If the product is lot tracked then the parameter is required. |
| Input | OrderNo | Char | No | Order number. |
| Input | OrderType | Integer | No | Order type. |
| Input | OrderLineNo | Integer | No | Order line number. |

## Validations

- System validates that Employee exists. 
- System validates that WIP Order Type exists. 
- System validates that WIP Order number exists. 
- System validates that put away location exists. 
- System validates that Product exists. 
- System validates that order quantity exists. 
- System validates that priority is not less than -1. 
- System validates that UOM exists. 
- System validates that WIP Order status exists. 
- System validates that parent WIP Order exists. 
- System validates that production line exists. 
- System validates that Resource exists. 
- System validates released facility exists. 
- System validates Process ID exists. 
- System validates lot exists if product is Lot tracked.

## System Processing

- System inserts a new record into the WIP_ORDER table with the inputs. 
- System generates a LOT if lot does not exist for LOT tracked products. 
- System inserts a WIP_ORDER_LOT record if the specified product is LOT tracked. 
- System posts an event to trigger Explosion: 
 
- If a ProcessID is specified, system will bypass determination and explode the order based on the selected ProcessID. 
- If ProcessID is NULL, Explosion will attempt to use determination to get the ProcessID and explode the order.

## History Recording in Production

Transaction history record created which conforms to the XSD FlexNet.BusinessFacade.Manufacturing.WipOrderCreator.CreateWipOrder.
 

This has the information about the WIP_ORDER created. The LOT and WIP_ORDER_LOT information if they were also createdNone.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All but WipOrderNo | From input |
| WIP_ORDER | WipOrderNo | System generated |
| WIP_ORDER | Priority | Priority or DBNull in case Priority is -1. |
| LOT (if product is lot tracked) | LotNo | From input. |
| LOT (if product is lot tracked) | ProductID | From input |
| WIP_ORDER_LOT (if product is lot tracked) | LotNo | From input. |
| WIP_ORDER_LOT (if product is lot tracked) | ProductID | From input. |
| WIP_ORDER_LOT (if product is lot tracked) | WipOrderNo | As above |
| WIP_ORDER_LOT (if product is lot tracked) | WipOrderType | Input |
| WIP_ORDER_LOT (if product is lot tracked) | PrimaryLotNo | False |
