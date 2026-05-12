# InsertWipLotNoStatusHistory

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Lot, Status

## Description

Inserts status history of combination of WIP Order/Operation/Step and Lot.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Number of the WIP Order. |
| Input | WipOrderType | Integer | Yes | Type of the WIP Order. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation Step sequence number. |
| Input | LotNo | Char | Yes | Lot number of WIP Order/operation/step. |
| Input | ProductNo | Char | Yes | Product number. |
| Input | FromProgressStatusName | Char | Yes | Name of the previous progress status. |
| Input | FromProgressStatusClassName | Char | Yes | Class name of the previous progress status. |
| Input | ToProgressStatusName | Char | Yes | Name of the current progress status. |
| Input | ToProgressStatusClassName | Char | Yes | Class name of the current progress status. |
| Input | DurationInSeconds | Integer | Yes | Duration between progress status change in seconds. |
| Input | ReasonCode | Char | No | Reason code for the change of the progress status. |
| Input | Comment | Char | No | Comment. |
| Input | EmployeeNo | Char | Yes | Employee who performs the progress status change. |
| Input | ResourceName | Char | No | Resource that performs the progress status change. |
| Input | UnitID | Integer | No | Unit ID. |

## Validations

- WipOrderNo, WipOrderType are valid and active in the WIP_ORDER table. Validation fails if they are null. 
- OprSequenceNo and StepSequenceNo are valid and active in the WIP_OPERATION and/or WIP_OPERATION_STEP tables when provided. 
- ProductNo is valid and active in the PRODUCT table. Validation fails if it is null. 
- LotNo is valid and active in the LOT_NO table. Validation fails if it is null. 
- ReasonCode is valid when provided. 
- EmployeeNo is valid. Validation fails if it is null. 
- From/To ProgressStatusName/ProgressStatusClassName are valid. Validation fails if they are null. 
- Validation passes if DurationInSeconds is larger than 0.

## System Processing

- Performs validations as stated above. 
- System creates record in WIP_LOT_NO_STATUS_HISTORY with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_LOT_NO_STATUS_HISTORY | WipOrderNo | Related WIP Order Number. |
|  | OprSequenceNo | Related Operation Sequence Number. |
|  | StepSequenceNo | Related Operation Step Sequence Number. |
|  | LotNo | Related Lot number. |
|  | ProductNo | Product No. |
|  | FromProgressStatusName | Name of the previous Progress status of the WIP Order/operation/step and lot number. |
|  | FromProgressStatusClassName | Class name of the previous Progress status of the WIP Order/operation/step and lot number. |
|  | ToProgressStatusName | Name of the current progress status. |
|  | ToProgressStatusClassName | Class name of the current progress status. |
|  | DurationInSeconds | Duration between the progress status change in seconds. |
|  | ReasonCode | Reason code for the change of the progress status. |
|  | Comment_ | Comment. |
|  | EmployeeNo | Employee who performs the progress status change. |
|  | ResourceName | Resource that performs the progress status change. |
|  | UnitID | Unit ID. |
