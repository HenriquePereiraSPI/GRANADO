# ReportSerialRangeProduction_v92

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to Reports production against a serial tracked product's wip order using a range of serial numbers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number. |
| Input | WipOrderNo | Char | Yes | Wip Order Number. |
| Input | WipOrderType | Integer | Yes | Wip Order type. |
| Input | WipOperationNo | Char | Yes | Wip Operation Number. |
| Input | LotNo | Char | Yes | Lot number. |
| Input | WipContentClass | Integer | Yes | Wip content class. |
| Input | BeginingSerialNo | Char | Yes | Begining serial number of the range. |
| Input | EndingSerialNo | Char | Yes | Ending serial number of the range. |
| Input | ReasonCode | Char | Yes | Reason Code. |
| Input | UpdateWipContent | Boolean | Yes | Determines if navigation if performed or not. |
| Input | NavigateImmediately | Boolean | Yes | Determines if navigation is done synchronously or asynchronously. |

## Validations

See Business Component Method OrderReporter for details.

## System Processing

- See Business Component Method OrderReporter for details 
- In addition to the functionality described in OrderReporter, system validates the existence of all serial numbers provided between the BeginningSerialNo and the EndingSerialNo. Serial numbers in this range must be sequential without missing serial numbers. If these conditions are not satisfied, the business component will error. 
- If the UpdateWipContent input is set to true, then the BC will update the wip content table and perform navigation either synchronously or asynchronously depending on the last input. Otherwise navigation will not be performed. 
 
- Example: See Business Component Method OrderReporter for details.
