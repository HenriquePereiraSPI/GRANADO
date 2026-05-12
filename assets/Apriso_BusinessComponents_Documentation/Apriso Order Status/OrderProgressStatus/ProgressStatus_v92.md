# ProgressStatus_v92

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderProgressStatus`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to allow the user, through a DFC, to change the progress status of an order, order detail, WIP order or WIP Operation based on the current progress of his work.
 

This component also allows the user to specify what action is to be taken when the progress is changed (thanks to the event type).
 

The progress status is persisted in the ORDER, ORDER_DETAIL, WIP_ORDER and WIP_OPERATION tables.
 

The progress status can be changed within any of these entities regardless of the status of the entity.
 

The transition between progress statuses is defined in the PROGRESS_TRANSITION_RULES table. Each transition from one progress status to another progress status is defined in this table for each order type. This information must be defined and configured prior to using the BC.
 

For each change status, it is possible to define an event type that will execute an business component. The standard product includes by default some business rules that will generate a history XML of a specific type, to be sent to the host. This XML will contain information that will be also mapped to be sent to the host.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | optional pass null or empty string for empty. If not supplied must supply OrderNo |
| Input | WipOrderType | Integer | No | optional pass -1 for empty. If not supplied must supply OrderType |
| Input | WipOperation | Char | No | Optional (pass empty string when no operation required). If supplied the order status will be completed against the Wip operation. |
| Input | OrderNo | Char | No | optional pass null or empty string for empty. If not supplied must supply WipOrderNo. |
| Input | OrderType | Integer | No | optional pass -1 for empty. If not supplied must supply WipOrderType. |
| Input | OrderLineNo | Integer | No | OrderLineNo, optional pass -1 for empty. |
| Input | ProgressStatus | Integer | No | ProgressStatus, required destination status. |
| Input | Facility | Char | No | Faciltiy |

## Validations

- System retrieves a record in the WIP_ORDER or ORDER_HEADER or ORDER_DETAIL or WIP_OPERATION tables based on the inputs and validates it exists: 
 
- If WipOrderNo only is populated then system retrieves a record in WIP_ORDER, 
- If OrderNo only is populated, then system retrieves a record in ORDER_HEADER, 
- If OrderNo and OrderLineNo are populated, then system retrieves a record in ORDER_DETAIL, 
- If all of them are populated, then system retrieves a record in WIP_ORDER and verifies that the entered WIP_ORDER is linked with the inputted OrderLineNo. 
- If the WipOperation is defined, then the wip order number and type are also required. The system will then retrieve the WIP_OPERATION 
- Else system returns an error message. 
 
- System validates that that the retrieved record (= Order, line or wip order) is in status Started. If not, system returns an error message. 
- System validates that the inputted ProgressStatus is a valid status. The system retrieves the current ProgressStatus of the inputted Order, and checks if a Progress Transition Rule exists (in the PROGRESS_TRANSITION_RULES table) with: 
 
- SourceProgressStatus = current ProgressStatus of the inputted Order, 
- DestinationProgressStatus = inputted ProgressStatus, 
- And with the inputted OrderType and Facility. 
 
- If the current progress_status of the order is null, then system expect a PROGRESS_TRANSITION_RULES with SourceProgressStatus equal to Null. 
- If the facility parameter is Null, than the PROGRESS_TRANSITION_RULES with Facility = Null are used. When passed, the validation procedure does not consider a facility when resolving. However, there is no defaulting, i.e. the Facility input has a value, but no rule exists for that particular facility, Null Facility rows are then not used. If not, system returns an error message.

## System Processing

- System updates the ProgressStatus of the retrieved record (either in WIP_ORDER or WIP_OPERATION or ORDER_HEADER or ORDER_DETAIL table, depending on the inputs). 
- System retrieves the EventType of the Progress Transition Rule found and then invokes directly the business component retrieved in the EVENT_TYPE table and passes as input of the business component the inputs and the EventType.

## Pre-Conditions

- Order must exist. 
- Progress Transition Rule must exist. 
- User-defined BC Method must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo |
| ORDER_HEADER | OrderType | Inputted OrderType |
| ORDER_HEADER | ProgressStatus | Inputted ProgressStatus (Required) |
| ORDER_DETAIL | OrderNo | Inputted OrderNo |
| ORDER_DETAIL | OrderType | Inputted OrderType |
| ORDER_DETAIL | OrderLineNo | Inputted OrderLineNo |
| ORDER_DETAIL | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_ORDER | WipOrderNo | Inputted WipOrderNo |
| WIP_ORDER | WipOrderType | Inputted WipOrderType |
| WIP_ORDER | ProgressStatus | Inputted ProgressStatus (Required) |
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
| WIP_OPERATION | WipOrderType | Inputted WipOrderType |
| WIP_OPERATION | ProgressStatus | Inputted ProgressStatus (Required) |
| The following tables are used by the component to retrieve data, but are not updated by the BC: |  |  |
| PROGRESS_TRANSITION_RULES | Facility | Inputted Facility (Required) |
| PROGRESS_TRANSITION_RULES | OrderType | Inputted OrderType |
| PROGRESS_TRANSITION_RULES | SourceProgressStatus | Retrieved ProgressStatus (e.g. current value in WIP_ORDER.ProgressStatus if Wip Order inputted) |
| PROGRESS_TRANSITION_RULES | DestinationProgressStatus | Inputted ProgressStatus (Required) |
| PROGRESS_TRANSITION_RULES | EventType | Data Retrieved for syst. processing |
| PROGRESS_TRANSITION_RULES | AsynchronousCall | Data Retrieved for syst. processing |
| PROGRESS_TRANSITION_RULES | HostTransactionCode | Data Retrieved for syst. processing |
| PROGRESS_TRANSITION_RULES | HostMessageType | Data Retrieved for syst. processing |
| PROGRESS_TRANSITION_RULES | HostIndicator1 | Data Retrieved for syst. processing |
| PROGRESS_TRANSITION_RULES | HostIndicator2 | Data Retrieved for syst. Processing |
| EVENT_TYPE | EventType | PROGRESS_TRANSITION_RULES.EventType |
| EVENT_TYPE | BCMethodFUID | Data Retrieved for syst. Processing |
