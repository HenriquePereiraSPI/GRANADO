# AddContainmentItems_v96

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required for adding Lot Numbers and Serial Numbers to the Containment. It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Conditional | The ID of the Containment. |
| Input | ProductIDList | ListofInteger | Conditional | The list of product IDs. |
| Input | SerialNoList | ListofChar | Conditional | The list of Serial Numbers |
| Input | LotNoList | ListofChar | Conditional | The list of Lot Numbers. |
| Input | FilterUsed | Char | No | The filter condition used to view the list of entities. |
| Input | ProfileUsed | Char | No | The grid profile used to view the list of entities. |
| Input | FutureHoldName | Char | No | The name of the future hold that is adding the item to Containment. |
| Input | SourceFileName | Char | No | The name of the Excel file that is used to import items to Containment. |
| Input | DeleteContainmentSessionData | Boolean | Yes | Indicates if session data should be removed. |
| Input | SessionFUID | Char | Conditional | The unique session identifier. |
| Input | SessionFUID | Char | Yes | The created or reused unique session identifier. |
| Output | OutProductIDList | ListofInteger | Yes | The Output list of product IDs. |
| Output | OutSerialNoList | ListofChar | Yes | The Output list of Serial Numbers. |
| Output | OutLotNoList | ListofChar | Yes | The Output list of Lot Numbers. |
| Output | OutStatusCodeList | ListofChar | Yes | The Output list of status codes. |
| Output | OutStatusList | ListofInteger | Yes | The Output list of statuses. |

## Validations

- The system validates if Containment exists.  
- The system verifies if the provided FutureHoldName exists and is linked to Containment. 
- The system checks if SessionFUID is provided. If it is not inputted, the system validates if all the Input list parameters are of the same size.

## System Processing

The system inserts the provided lists of items (Serial Numbers or Lot Numbers) into the CONTAINMENT_ITEM_TEMP table if SessionFUID is not provided. This insert generates a new SessionFUID, which is used to identify transferred data. The CONTAINMENT_ITEM_TEMP table is used as temporary data storage. When SessionFUID is provided, the system does not use the inputted lists (even when they are provided) or the processes using data already present in CONTAINMENT_ITEM_TEMP table.
 

When data is transferred, the entire system processing is done on the server side (with all the validations and data manipulations).
 

The system adds Serial Numbers or Lot Numbers (the serial in each item row has a higher priority, and the lot will be omitted if the serial is provided) into the specified Containment.
 

If the DeleteContainmentSessionData parameter is set to true, the system deletes the session data from the database on exit from the BC. The temporary data can also be deleted using the DeleteContainmentSessionData BC.
 

The Output lists contain the provided Serial Numbers and Lot Numbers (not necessarily in the same order) along with the corresponding status values and status codes. The ctatus codes are localized. The following statuses and status codes are returned:
 
 
- 0 – No Lot Numbers or Serial Numbers were provided. 
- 1 – The product does not exist. 
- 2 – The Serial Number does not exist. 
- 3 – The Lot Number does not exist. 
- 4 – The Lot Number already exists in Containment. 
- 5 – The Serial Number already exists in Containment. 
- 6 – The Serial Number was added to Containment. 
- 7 – The Lot Number was added to Containment. 
- 8 – The Serial Number was not added to Containment, and a duplicate exists. 
- 9 – The Lot Number was not added to Containment, and a duplicate exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
|  | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | ContainmentID | Inputted ContainmentID. |
|  | FilterUsed | Inputted FilterUsed. |
|  | ProfileUsed | Inputted ProfileUsed. |
|  | FutureHoldName | Inputted FutureHoldName. |
|  | SourceFileName | Inputted SourceFileName. |
|  | ProductID | Item from ProductIDList. |
|  | LotNo | Item from LotNoList. |
|  | ContainmentID | Inputted ContainmentID. |
|  | FilterUsed | Inputted FilterUsed. |
|  | ProfileUsed | Inputted ProfileUsed. |
|  | FutureHoldName | Inputted FutureHoldName. |
|  | SourceFileName | Inputted SourceFileName. |
