# ChangeTransportationOrderDates

**Category:** Apriso/Order/Date
**Class:** `FlexNet.BusinessFacade.Logistic.OrderDateManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This Business Component method is used to update the dates linked either with a Shipment Order, a stage point, or a stage of a Transportation Order in the ORDER_DATE table. It also creates ORDER_DATE records, even if they do not currently exist. The user inputs the DateType that needs to be updated and the DateFlag indicating which date is to be updated. These are the possible values of the date flag:
 
 
-  

ActualTime
  
-  

NotBefore
  
-  

NotAfter
  
-  

TargetDate
  
 

 **Note**: this BC does NOT perform any date validation against other ORDER_DATE records or fields.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | The Shipment Order number. |
| Input | OrderType | Integer | No | The Shipment Order type. |
| Input | ShipmentStageID | Integer | No | The shipment stage ID. |
| Input | ShipmentStagePointID | Integer | No | The shipment stage point ID. |
| Input | DateType | Integer | Yes | The date type. |
| Input | DateFlag | Integer | Yes | The date flag. |
| Input | Date | DateTime | Yes | The date to be persisted. Treated as local time. |
| Input | PartnerID | Integer | Yes | The partner ID. |

## System Processing

- The system converts the inputted date to a UTC date. If a PartnerID is entered, then the time zone used to convert to UTC is the partner time zone. Otherwise, the time zone used to convert to UTC is the user time zone. 
- The system checks if the order date for the inputted entity already exists. If it does, the system updates the date for that order date record. Otherwise, it will create a new record.

## Pre-Conditions

An Order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DATE | OrderNo | OrderNo |
| ORDER_DATE | OrderLineNo | OrderLineNo |
| ORDER_DATE | OrderType | OrderType |
| ORDER_DATE | WipOrderNo | WipOrderNo |
| ORDER_DATE | OprSequenceNo |  |
| ORDER_DATE | ShipmentStageID | ShipmentStageID |
| ORDER_DATE | ShipmentStagePointID | ShipmentStagePointID |
| ORDER_DATE | DateType | DateType |
| ORDER_DATE | Actual | Date (if DateFlag=1) |
| ORDER_DATE | NotBefore | Date (if DateFlag=2) |
| ORDER_DATE | NotAfter | Date (if DateFlag=3) |
| ORDER_DATE | Target | Date (if DateFlag=4) |
