# ChangeSealStatus

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.SealManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This Business Component method is used to update the status of a seal linked to an order.

*The system updates the seal using a strategy from table 4.2.8.2, which was determined with the transition from table 4.2.8.1.*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderSealID | Integer | No | The ID of seal. |
| Input | SealStatus | Integer | No | The new seal status. |
| Input | EmployeeID | Integer | No | The employee making the change. |

## Validations

- The system checks that the seal exists.  
- The system checks that the status exists. 
- The system checks that the seal was assigned to an order (ORDER_SEAL). 
- The system checks that the employee exists. 
- The system checks that the new status is consistent with the current status (see the table below)

## System Processing

- The system updates the seal using a strategy from table 4.2.8.2, which was determined with the transition from table 4.2.8.1.

## History Recording in Production

FlexNet.BusinessFacade.Logistic.SealManager.ChangeSealStatus.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SEAL | Status | The status or different value (see the 4.2.8.* tables). |
| ORDER_SEAL | SeaIssuerEmployeeID | The employee (under certain circumstances; see the 4.2.8.* tables). |
| ORDER_SEAL | BrokenByEmployeeID | The employee (under certain circumstances; see the 4.2.8.* tables). |
| ORDER_SEAL | BrokenDate | The current date (under certain circumstances; see the 4.2.8.* tables). |
| ORDER_SEAL | SealDate | The current date (under certain circumstances; see the 4.2.8.* tables). |
