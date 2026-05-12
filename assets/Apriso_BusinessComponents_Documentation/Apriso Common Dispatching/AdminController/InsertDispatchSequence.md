# InsertDispatchSequence

**Category:** Apriso/Common/Dispatching
**Class:** `FlexNet.BusinessFacade.Scheduling.Admin.AdminController`
**Assembly:** `FlexNet.Scheduling.Admin.dll`
**Status:** Retired

## Description

Inserts a record to the DISPATCH_SEQUENCE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispatchSequenceType | Short | Yes | The Dispatch Sequence Type |
| Input | FromOrderNo | Char | No | Order No. of the from entity |
| Input | FromOrderType | Short | No | Order Type of the From entity |
| Input | FromOrderLineNo | Integer | No | Order Line No. of the From entity |
| Input | FromWipOrderNo | Char | No | Wip Order No. of the From entity |
| Input | FromWipOrderType | Short | No | Wip Order Type of the From entity |
| Input | FromOprSequenceNo | Char | No | Opr Sequence No. of the From entity |
| Input | FromTaskID | Integer | No | Task ID of the From entity |
| Input | ToOrderNo | Char | No | Order No. of the To entity |
| Input | ToOrderType | Short | No | Order Type of the To entity |
| Input | ToOrderLineNo | Integer | No | Order Line No. of the To entity |
| Input | ToWipOrderNo | Char | No | Wip Order No. of the To entity |
| Input | ToWipOrderType | Short | No | Wip Order Type of the To entity |
| Input | ToOprSequenceNo | Char | No | Opr Sequence No. of the To entity |
| Input | ToTaskID | Integer | Yes | Task ID of the To entity |
| Input | LagSeconds | Integer | No | Specifies the minimum time from the From entity to the To entity. May be negative, for example, with type EndToStart, LagSeconds = -3600 specifies that the earliest start time for the To entity is 60 minutes before the end of the From entity. In this example, if LagSeconds was set to 3600, then the To entity must start no earlier than 60 minutes after the end of the From entity. |
| Output | DispatchSequenceID | Integer | No | The unique id of the dispatch sequence that is created. |

## Validations

- Input DispatchSequenceType must be one of the valid values 
 
- Validate against DISPATCH_SEQUENCE_TYPE /Enumeration 
 
- The user must provide a From object, which must exactly be one of the following 
 
- OrderNo, OrderType 
- OrderNo, OrderType, OrderLine 
- WipOrderNo, WipOrderType 
- WipOrderNo, WipOrderType, OprSequenceNo 
- TaskID 
 
- System validates that the From object is valid (the insert will error otherwise ecause of the FK constraint) 
- The user must provide a To object, which must be exactly one of the following: 
 
- OrderNo, OrderType 
- OrderNo, OrderType, OrderLine 
- WipOrderNo, WipOrderType 
- WipOrderNo, WipOrderType, OprSequenceNo 
- TaskID

## System Processing

- System inserts a record to the DISPATCH_SEQUENCE table with the inputted values. 
- System outputs the unique ID, DispatchSequenceID for the newly created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPATCH_SEQUENCE | ID | Autoincremented |
|  | DispatchSequenceType | Inputted DispatchSequenceType |
|  | FromOrderNo | Inputted FromOrderNo |
|  | FromOrderType | Inputted FromOrderType |
|  | FromOrderLineNo | Inputted FromOrderLineNo |
|  | FromWipOrderNo | Inputted FromWipOrderNo |
|  | FromWipOrderType | Inputted FromWipOrderType |
|  | FromOprSequenceNo | Inputted FromOprSequenceNo |
|  | FromTaskID | Inputted FromTaskID |
|  | ToOrderNo | Inputted ToOrderNo |
|  | ToOrderType | Inputted ToOrderType |
|  | ToOrderLineNo | Inputted ToOrderLineNo |
|  | ToWipOrderNo | Inputted ToWipOrderNo |
|  | ToWipOrderType | Inputted ToWipOrderType |
|  | ToOprSequenceNo | Inputted ToOprSequenceNo |
|  | ToTaskID | Inputted ToTaskID |
|  | LagSeconds | Inputted LagSeconds |
