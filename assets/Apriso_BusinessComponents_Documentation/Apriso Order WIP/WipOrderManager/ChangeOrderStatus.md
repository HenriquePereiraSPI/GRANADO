# ChangeOrderStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Status, ReleaseDate, ActualStartDate, ActualCompletionDate, WIPOrderNo, WIPOperation

## Description

This Business Component method is used to update Status, ReleaseDate, ActualStartDate, and ActualCompletionDate. It calculates ActualDurationSeconds for the WIP Order (if OprSequenceNo is not provided) or the WIP Operation (if OprSequenceNo is provided).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WipOrderNo of the WIP Order/WIP Operation to be updated. |
| Input | WipOrderType | Integer | Yes | The WipOrderType of the WIP Order/WIP Operation to be updated. |
| Input | OprSequenceNo | Char | No | The OprSequenceNo of the WIP Operation to be updated. |
| Input | Status | Integer | No | The WorkOrderStatus/OperationStatus of the WIP Order/WIP Operation to be updated. |
| Input | ReleaseDate | DateTime | No | The ReleaseDate of the WIP Order to be updated. |
| Input | UpdateReleaseDate | Boolean | No | Determines whether or not ReleaseDate will be updated with the provided value. |
| Input | ActualStartDate | DateTime | No | The ActualStartDate of the WIP Order/WIP Operation to be updated. |
| Input | UpdateActualStartDate | Boolean | No | Determines whether or not ActualStartDate will be updated with the provided value. |
| Input | ActualCompletionDate | DateTime | No | The ActualCompletionDate of the WIP Order/WIP Operation to be updated. |
| Input | UpdateActualCompletionDate | Boolean | No | Determines whether ActualCompletionDate will be updated with the provided value. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Execute | Boolean | Determines execution of business component |

## Validations

- The system validates if a WIP Order exists for the given WipOrderNo and WipOrderType (if OprSequenceNo is not provided). 
- The system validates if a WIP Operation exists for the given WipOrderNo, WipOrderType, and OprSeqeunceNo (if OprSequenceNo is provided). 
- The system validates if ReleaseDate <= ActualStartDate <= ActualCompletionDate (if set). 
- The system validates if UpdateReleaseDate is set to False if the WIP Operation is being updated.  
-  If Execute dynamic input not provided than set to TRUE

## System Processing

- If Execute is set to True, the system updates WorkOderStatus using the provided value.  
- If UpdateReleaseDate is set to True, the system updates ReleaseDate using the provided value. 
- If UpdateActualStartDate is set to True, the system updates ActualStartDate using the provided value. 
- If UpdateActualCompletionDate is set to True, the system updates ActutalCompletionDate using the provided value. 
- If UpdateActualStartDate or UpdateActualCompletionDate is set to Null, the system updates ActualDurationSeconds to Null. Otherwise, the system calculates ActualDurationSeconds as the difference between ActualCompletionDate and ActualStartDate. 
- This BC does not convert any dates, and it populates the same dates as the Inputs.

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WorkOderStatus | The status of the WIP Order. |
|  | ReleaseDate | The release date. |
|  | ActualStartDate | The actual start date. |
|  | ActualCompletionDate | The actual completion date. |
| WIP_OPERATION | OperationStatus | The status of the WIP Operation. |
|  | ActualStartDate | The actual start date. |
|  | ActualCompletionDate | The actual completion date. |
