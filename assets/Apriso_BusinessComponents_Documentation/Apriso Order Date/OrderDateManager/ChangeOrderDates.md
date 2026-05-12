# ChangeOrderDates

**Category:** Apriso/Order/Date
**Class:** `FlexNet.BusinessFacade.Logistic.OrderDateManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Deprecated

## Description

This Business Component method is used to create or update the dates linked with an order, order line, Execution Order, or Execution Order Operation in the ORDER_DATE table. The user inputs the DateType to be created or updated and the DateFlag indicating which date is to be created or updated. These are the possible values of the Date flag:
 
 
-  

ActualTime
  
-  

NotBefore
  
-  

NotAfter
  
-  

TargetDate

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Conditional | The order number for which to create or update the order date. |
| Input | OrderType | Integer | Yes | The order type for which to create or update the order date. This Input requires the OrderNo or the WipOrderNo input to be supplied as well. |
| Input | OrderLineNo | Integer | No | The order line number for which to create or update the order date. This Input requires the OrderNo and the OrderType Inputs to be supplied as well. |
| Input | WipOrderNo | Char | Conditional | The Execution Order number for which to create or update the order date. |
| Input | OprSequenceNo | Char | No | The Operation Sequence Number for which to create or update the order date. This Input requires the WipOrderNo and the OrderType Inputs to be supplied as well. |
| Input | DateType | Integer | Yes | The date type to create or update. |
| Input | DateFlag | Integer | Yes | Used to determine which date field to create or update. |
| Input | Date | DateTime | Yes | The new date in the local time zone. |

## Validations

- Checks if the order, order line, Execution Order, or Operation exists where applicable.  
- Either OrderNo or WipOrderNo are required, but not both at the same time.

## System Processing

- The system converts the inputted Date to the UTC date. The time zone used to convert to UTC is the user's time zone. 
- The system checks if the order date for the inputted entity already exists. If it does, the system updates the date for that order date record. Otherwise, the system creates a new record.

## Pre-Conditions

An order or WIP Order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DATE | OrderNo | OrderNo (if the inputted order is an order header). |
| ORDER_DATE | OrderLineNo | OrderLineNo (if the inputted order is an order detail). |
| ORDER_DATE | OrderType | OrderType |
| ORDER_DATE | WipOrderNo | WipOrderNo (if the inputted order is an Execution Order). |
| ORDER_DATE | OprSequenceNo | OprSequenceNo (the Operation for a given Execution Order). |
| ORDER_DATE | ShipmentStageID |  |
| ORDER_DATE | ShipmentStagePointID |  |
| ORDER_DATE | DateType | DateType |
| ORDER_DATE | Actual | Date (if DateFlag=1) |
| ORDER_DATE | NotBefore | Date (if DateFlag=2) |
| ORDER_DATE | NotAfter | Date (if DateFlag=3) |
| ORDER_DATE | Target | Date (if DateFlag=4) |
