# InsertOrderStatusHistoryByNames

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** insert order line detail wip status history

## Description

The purpose of this Business Component method is to store a history of changes of Status or Progress Status of the following entities:
 
 
- Orders 
- Order Lines 
- WIP Orders 
- WIP Operations 
 

The BC creates records in the ORDER_STATUS_HISTORY table which describes what entity was affected and what change of Status or Progress Status occurred. Separate records of changes of Status or Progress Status are created if both are provided.
 

 

Note: A different version of this Business Component (InsertOrderStatusHistory BC) inserts history records using the provided EmployeeID and Progress Status instead of using EmployeeNo and Progress Status and Class names.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Conditional | The Order Number. |
| Input | OrderType | Integer | Conditional | The Order Type. |
| Input | OrderLineNo | Integer | Conditional | The Order Line Number. |
| Input | WipOrderNo | Char | Conditional | The WIP Order Number. |
| Input | WipOrderType | Integer | Conditional | The WIP Order Type. |
| Input | OprSequenceNo | Char | Conditional | The Operation Sequence Number. |
| Input | Status | Integer | Conditional | The current Status of the entity. |
| Input | ProgressStatusName | Char | Conditional | The current Progress Status Name of the entity. |
| Input | ProgressStatusClassName | Char | Conditional | The current Progress Status Class Name of the entity. |
| Input | ChangeStatusDate | DateTime | Yes | The date of entity change. |
| Input | EmployeeNo | Char | Yes | The name of Employee who changes the entity. |
| Input | Comment | Char | No | The user comment for the change. |
| Input | StatusEffectiveDurationSeconds | Integer | No | Time duration, expressed in seconds, between previous and current Status of an entity. This value should be provided if effective duration of Status change is related to custom logic, for example when Employee Calendar is applicable. |
| Input | ProgressStatusEffectiveDurationSeconds | Integer | No | Time duration, expressed in seconds, between previous and current Progress Status of an entity. This value should be provided if effective duration of Progress Status change is related to custom logic, for example when Employee Calendar is applicable. |

## Validations

- System validates if Status or Progress Status Name and Progress Status Class Name are provided. 
- System validates if one of the following entities is provided (recognized by the BC Inputs, in the order listed): 
 
- WIP Operation (WipOrderNo, WipOrderType, OprSequenceNo) 
- WIP Order (WipOrderNo, WipOrderType) 
- Order Line (OrderNo, OrderType, OrderLineNo) 
- Order (OrderNo, OrderType) 
 
- System validates if the entity Status is valid (if provided). 
- System validates if Order Number and Type are provided together. 
- System validates if Order Number and Type are provided if Order Line is specified. 
- System validates if WIP Order Number and Type are provided together. 
- System validates if WIP Order Number and Type are provided if Operation Sequence Number is specified. 
- System validates if Order Type exists (if provided). 
- System validates if WIP Order Type exists (if provided). 
- System validates if entity Status or Progress Status Name and Progress Status Class Name has changed basing on the latest record in the ORDER_STATUS_HISTORY table (if the history record exists). 
- System validates if the provided ChangeStatusDate is after the date of the latest history record of the specified entity (if the history record exists).

## System Processing

- System determines the entity type. See validations above. 
- System tries to read previous records from the ORDER_STATUS_HISTORY table for the entity, separately for the specified Status or Progress Status Name and Progress Status Class Name. 
- System calculates the duration between the last Status or Progress Status change and the provided ChangeStatusDate.  
- System inserts one or two new records into the ORDER_STATUS_HISTORY table, independently for the provided Status and for inputted Progress Status and Class Name.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_STATUS_HISTORY | ID | ID of newly created record. |
|  | EntityType | Determined by other Inputs: 1=Order, 2=Order Line, 3=WIP Order, 4=WIP Operation. |
|  | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | OrderLineNo | OrderLineNo |
|  | FromOrderStatus | Status read from last history record, may be empty. |
|  | ToOrderStatus | Inputted Status. Used when EntityType is 1 or 2. |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | FromWipOrderStatus | Status read from last history record, may be empty. |
|  | ToWipOrderStatus | Inputted Status. Used when EntityType is 3. |
|  | OprSequenceNo | OprSequenceNo |
|  | FromOperationStatus | Status read from last history record, may be empty. |
|  | ToOperationStatus | Inputted Status. Used when EntityType is 4. |
|  | FromProgressStatusName | Progress Status Name read from last history record, may be empty. |
|  | FromProgressStatusClassName | Progress Status Class Name read from last history record, may be empty. |
|  | ToProgressStatusName | Determined by inputted Progress Status. |
|  | ToProgressStatusClassName | Determined by inputted Progress Status. |
|  | ChangeStatusDate | ChangeStatusDate |
|  | EmployeeNo | EmployeeNo |
|  | DurationSeconds | Duration since last entity change, may be empty. |
|  | Comment_ | Comment. |
|  | EffectiveDurationSeconds | Time duration since last entity change (provided by user) |
