# InsertOrderStatusHistory_v2

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Insert, order status, history

## Description

Stores history of changes of Status or Progress Status of the following entities:
 
 
- Orders 
- Order Lines 
- WIP Orders 
- WIP Operations 
- WIP Operation Steps 
 

The BC creates records in the ORDER_STATUS_HISTORY table which describes what entity was affected and what change of Status or Progress Status occurred. Separate records of changes of Status or Progress Status are created if both are provided.
 

Note: A different version of this Business Component (InsertOrderStatusHistoryByNames BC) inserts history records using the provided Employee name and Progress Status and Class names instead of using Employee ID and Progress Status values.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Conditional | Order number. |
| Input | OrderType | Integer | Conditional | Order type. |
| Input | OrderLineNo | Integer | Conditional | Order line number. |
| Input | WipOrderNo | Char | Conditional | WIP Order number. |
| Input | WipOrderType | Integer | Conditional | WIP Order type. |
| Input | OprSequenceNo | Char | Conditional | Operation sequence number. |
| Input | StepSequenceNo | Integer | Conditional | Operation step sequence number. |
| Input | Status | Integer | Conditional | Current status of the entity. |
| Input | ProgressStatus | Integer | Conditional | Current progress status of the entity. |
| Input | ChangeStatusDate | DateTime | Yes | Date of entity change. |
| Input | ReasonCode | Char | No | Reason code for changing order status. |
| Input | EmployeeID | Integer | Yes | ID of Employee who changes the entity. |
| Input | Comment | Char | No | User comment for the change. |
| Input | StatusEffectiveDurationSeconds | Integer | No | Time duration, expressed in seconds, between previous and current Status of an entity. This value should be provided if effective duration of Status change is related to custom logic, for example when Employee Calendar is applicable. |
| Input | ProgressStatusEffectiveDurationSeconds | Integer | No | Time duration, expressed in seconds, between previous and current Progress Status of an entity. This value should be provided if effective duration of Progress Status change is related to custom logic, for example when Employee Calendar is applicable. |
| Input | UnitID | Integer | No | Unit ID. |

## Validations

- Validation passes if Status or Progress Status is provided. 
- Validation passes if Progress Status exists (if provided). 
- Validation passes if Status exists (if provided). 
- Validation passes if EmployeeID is provided and Employee record exists. 
- Validation passes if one of the following entities is provided (recognized by the BC Inputs, in the order listed): 
 
- WIP Operation Step (WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo) 
- WIP Operation (WipOrderNo, WipOrderType, OprSequenceNo) 
- WIP Order (WipOrderNo, WipOrderType) 
- Order Line (OrderNo, OrderType, OrderLineNo) 
- Order (OrderNo, OrderType) 
 
- Validation passes if Order Number and Type are provided together. 
- Validation passes if Order Number and Type are provided if Order Line is specified. 
- Validation passes if WIP Order Number and Type are provided together. 
- Validation passes if WIP Order Number and Type are provided if Operation Sequence Number is specified. 
- Validation passes if WIP Order Number, WIP Order Type and Operation Sequence Number are provided if Operation Sequence Step Number is specified. 
- Validation passes if Order Type exists (if provided). 
- Validation passes if WIP Order Type exists (if provided). 
- Validation passes if entity Status or Progress Status has changed based on the latest record in the ORDER_STATUS_HISTORY table (if the history record exists). 
- Validation passes if provided ChangeStatusDate is after the date of the latest history record of the specified entity (if the history record exists).

## System Processing

- System determines the entity type. See validations above. 
- System tries to read previous records from the ORDER_STATUS_HISTORY table for the entity, separately for the specified Status and Progress Status. 
- System reads the Employee Number, Progress Status Name and Progress Status Class Name basing on the provided EmployeeID and ProgressStatus Inputs. The history table contains only the names of these items. 
- System calculates the duration between the last Status or Progress Status change and provided ChangeStatusDate. 
- System inserts one or two new records into the ORDER_STATUS_HISTORY table, independently for the provided Status and Progress Status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_STATUS_HISTORY | ID | ID of newly created record. |
|  | EntityType | Determined other Inputs: 1=Order, 2=Order Line, 3=WIP Order, 4=WIP Operation, 5-WIP Operation Step. |
|  | OrderNo | Order number. |
|  | OrderType | Order type. |
|  | OrderLineNo | Order line number. |
|  | FromOrderStatus | Status read from last history record, may be empty. |
|  | ToOrderStatus | Inputted Status. Used when EntityType is 1 or 2. |
|  | WipOrderNo | Wip Order number. |
|  | WipOrderType | Wip Order type. |
|  | FromWipOrderStatus | Status read from the last history record, may be empty. |
|  | ToWipOrderStatus | Inputted Status. Used when EntityType is 3. |
|  | OprSequenceNo | Operation sequence number. |
|  | StepSequenceNo | Operation step sequence number. |
|  | FromOperationStatus | Status read from the last history record, may be empty. |
|  | ToOperationStatus | Inputted Status. Used when EntityType is 4. |
|  | FromProgressStatusName | Progress Status Name read from the last history record, may be empty. |
|  | FromProgressStatusClassName | Progress Status Class Name read from the last history record, may be empty. |
|  | ToProgressStatusName | Determined by inputted Progress Status. Used when EntityType is 5. |
|  | ToProgressStatusClassName | Determined by inputted Progress Status. Used when EntityType is 5. |
|  | ChangeStatusDate | Date of the Status change. |
|  | ReasonCode | Reason code of status change. |
|  | EmployeeNo | Determined the Employee ID provided. |
|  | DurationSeconds | Time duration since last entity change (calculated by BC), may be empty. |
|  | Comment_ | Comment. |
|  | EffectiveDurationSeconds | Time duration since last entity change (provided by user). |
|  | UnitID | UnitID. |
