# ProgressStatus_v2

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderProgressStatus`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to allow the user, through a DFC, to change the progress status of an order, order detail, WIP order or WIP Operation based on the current progress of his work.
 

This component also allows the user to specify what action is to be taken when the progress is changed (thanks to the event type).
 

The progress status is persisted in the ORDER, ORDER_DETAIL, WIP_ORDER and WIP_OPERATION tables.
 

The progress status can be changed within any of these entities regardless of the status of the entity.
 

The transition between progress statuses is defined in the PROGRESS_TRANSITION_RULES table. Each transition from one progress status to another progress status is defined in this table for each order type. This information must be defined and configured prior to using the BC.
 

For each status changed using Progress Status Maintenance screens, it is possible to define an Event Type that will execute a Business Component. The standard product includes by default a number of Business Components that can be used for that purpose such as:
 
 
- IssueGoods 
- PickConfirm 
- PackConfrim 
- ReceiveGoods 
- OrderInformation 
 

Those components generate a history XML of a specific type, to be sent to the host. This XML will contain information that will be also mapped to be sent to the host. Any transition rule validation or XML generation for the transition will be done only when UseTransitionRules is true. When UseTransitionRules is false, no validation or XML generation for the transition will be performed.
 

The BC will perform the whole logic recursively based on the number of levels specified by CascadeLevel. For example, if WipOrder has been specified and CascadeLevel = 1, It will also perform the whole logic on every WipOperation for the inputted WipOrder. If OrderHeader has been entered and CascadeLevel = 2, it will perform the whole logic to all OrderDetail records for the inputted OrderHeader and also for all WipOrders linked to the OrderDetail records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Conditional | Pass null or empty string for empty. If not supplied OrderNo must be present. |
| Input | WipOrderType | Integer | Conditional | Pass -1 for empty. If not supplied OrderType must be present. |
| Input | WipOperation | Char | No | Pass empty string when no operation required. If supplied the order status will be completed against the WIP operation. |
| Input | OrderNo | Char | Conditional | Pass null or empty string for empty. If not supplied WipOrderNo must be present. |
| Input | OrderType | Integer | Conditional | Pass -1 for empty. If not supplied WipOrderType must be present. |
| Input | OrderLineNo | Integer | No | Pass -1 for empty. |
| Input | ProgressStatus | Integer | Yes | Destination ProgressStatus. |
| Input | Facility | Char | No | Facility |
| Input | CascadeLevel | Integer | No | Specifies how many levels of order/order_detail/wip_order/wip_operation will be updated. Any positive value is accepted. |
| Input | UseTransitionRules | Boolean | No | When false, transition rules are discarded. |

## Validations

-  

System retrieves a record in the WIP_ORDER or ORDER_HEADER or ORDER_DETAIL or WIP_OPERATION tables based on the inputs and validates it exists:
  
 
-  

If WipOrderNo only is populated then system retrieves a record in WIP_ORDER,
  
-  

If OrderNo only is populated, then system retrieves a record in ORDER_HEADER,
  
-  

If OrderNo and OrderLineNo are populated, then system retrieves a record in ORDER_DETAIL,
  
-  

If all of them are populated, then system retrieves a record in WIP_ORDER and verifies that the entered WIP_ORDER is linked with the inputted OrderLineNo.
  
-  

If the WipOperation is defined, then the wip order number and type are also required. System will then retrieve the WIP_OPERATION
  
-  

Else system returns an error message.
  
 
-  

System validates that that the retrieved record (= Order, line or wip order) is in status Started. If not, system returns an error message.
  
-  

When UseTransitionRules = True, system validates that the inputted ProgressStatus is a valid status:
  
 
-  

System retrieves the current ProgressStatus of the inputted Order, and checks if a Progress Transition Rule exists (in the PROGRESS_TRANSITION_RULES table) with:
  
 
-  

SourceProgressStatus = current ProgressStatus of the inputted Order,
  
-  

DestinationProgressStatus = inputted ProgressStatus,
  
-  

And with the inputted OrderType and Facility.
  
 
 
-  

If the current progress_status of the order is null, then system expect a PROGRESS_TRANSITION_RULES with SourceProgressStatus equal to Null.
  
-  

If the facility parameter is Null, than the PROGRESS_TRANSITION_RULES with Facility = Null are used. When passed, the validation procedure does not consider a facility when resolving. However, there is no defaulting, i.e. the Facility input has a value, but no rule exists for that particular facility, Null Facility rows are then not used.
  
 
-  

If not, system returns an error message.

## System Processing

-  

System updates the ProgressStatus of the retrieved record (either in WIP_ORDER or WIP_OPERATION or ORDER_HEADER or ORDER_DETAIL table, depending on the inputs).
  
-  

When UseTransitionRules is true, system retrieves the EventType of the Progress Transition Rule found and then invokes directly the business component retrieved in the EVENT_TYPE table and passes as input of the business component the inputs and the EventType.

## Pre-Conditions

- Order must exist. 
- If UseTransitionRules is true, Progress Transition Rule must exist. 
- User-defined BC Method must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| ORDER_DETAIL | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_ORDER | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | ProgressStatus | Inputted ProgressStatus (Required) |
| The following tables are used by the component to retrieve data, but are not updated by the BC: |  |  |
|  | Facility | Inputted Facility (Required) |
| PROGRESS_TRANSITION_RULES | OrderType | Inputted OrderType |
|  | SourceProgressStatus | Retrieved ProgressStatus (e.g. current value in WIP_ORDER.ProgressStatus if Wip Order inputted) |
|  | DestinationProgressStatus | Inputted ProgressStatus (Required) |
|  | EventType | Data Retrieved for syst. processing |
|  | AsynchronousCall | Data Retrieved for syst. processing |
|  | HostTransactionCode | Data Retrieved for syst. processing |
|  | HostMessageType | Data Retrieved for syst. processing |
|  | HostIndicator1 | Data Retrieved for syst. processing |
|  | HostIndicator2 | Data Retrieved for syst. Processing |
| EVENT_TYPE | EventType | PROGRESS_TRANSITION_RULES.EventType |
|  | BCMethodFUID | Data Retrieved for syst. Processing |
