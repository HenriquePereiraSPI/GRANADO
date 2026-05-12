# AddContainmentItems

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required for adding Serial Numbers and Lot Numbers to Containment. This BC method is an extension of the AddContainmentSerial_v2 and AddContainmentLot_v2 BCs of the ContainmentContentController class.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | The ID of the Containment. |
| Input | ProductIDList | ListofInteger | Yes | The ProductID of the item to be added. |
| Input | SerialNoList | ListofChar | Yes | The Serial Number of the item to be added. |
| Input | LotNoList | ListofChar | Yes | The Lot Number of the item to be added. |
| Input | FilterUsedList | ListofChar | Yes | The filter condition used to view the list of entities. |
| Input | ProfileUsedList | ListofChar | Yes | The grid profile used to view the list of entities. |
| Input | FutureHoldNameList | ListofChar | Yes | The name of the future hold that is adding the item to Containment. |
| Input | SourceFileNameList | ListofChar | Yes | The name of the Excel file used to import items to Containment. |
| Output | ErrorProductIDList | ListofInteger | No | The product ID of the item that has not been added. |
| Output | ErrorSerialNoList | ListofChar | No | The Serial Number of the item that has not been added. |
| Output | ErrorLotNoList | ListofChar | No | The Lot Number of the item that has not been added. |
| Output | ErrorCodeList | ListofChar | No | The error code that describes why the item has not been added. |

## Validations

- The system verifies if the Containment exists. 
- The BC method validates all the inputted lists and checks if the lengths are the same.

## System Processing

- The BC method iterates through all items of the inputted lists and invokes the AddContainmentLot_v2 or AddContainmentSerial_v2 BC to add the serial or lot (respectively) to the Containment. 
- Each iteration is made in a separate database transaction.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ProductID | ProductID |
|  | SerialNo | SerialNo |
|  | ContainmentID | ContainmentID |
|  | FilterUsed | FilterUsed |
|  | ProfileUsed | ProfileUsed |
|  | FutureHoldName | FutureHoldName |
|  | SourceFileName | SourceFileName |
|  | ProductID | ProductID |
|  | LotNo | LotNo |
|  | ContainmentID | ContainmentID |
|  | FilterUsed | FilterUsed |
|  | ProfileUsed | ProfileUsed |
|  | FutureHoldName | FutureHoldName |
|  | SourceFileName | SourceFileName |
