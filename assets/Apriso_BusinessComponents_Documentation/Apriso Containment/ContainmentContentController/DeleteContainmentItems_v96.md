# DeleteContainmentItems_v96

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required to delete Serials or Lots from Containment. It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment. |
| Input | ProductIDList | ListofInteger | Yes | ProductID of the item to be removed. |
| Input | SerialIDList | ListofChar | Yes | Serial Number of the item to be removed. |
| Input | LotNoList | ListofChar | Yes | Lot Number of the item to be removed. |
| Input | DeleteContainmentSessionData | Boolean | Yes | Indicates if Session Data should be removed. |
| Input | SessionFUID | Char | Conditional | Unique Session identifier. |
| Input | SessionFUID | Char | Yes | Created or reused Unique Session identifier. |
| Output | OutProductIDList | ListofInteger | Yes | Output list of Product IDs. |
| Output | OutSerialNoList | ListofChar | Yes | Output list of Serials. |
| Output | OutLotNoList | ListofChar | Yes | Output list of Lots. |
| Output | OutStatusCodeList | ListofChar | Yes | Output list of Status Codes. |
| Output | OutStatusList | ListofInteger | Yes | Output list of Statuses. |

## Validations

- System verifies if Containment exists. 
- System checks if SessionFUID is provided. If it is not inputted the System validates if all input list parameters are of the same size.

## System Processing

System inserts the provided lists of Items (Serials or Lots) into the **CONTAINMENT_ITEM_TEMP** table if SessionFUID is not provided. This insert generates a new SessionFUID which is used to identify transferred data. **CONTAINMENT_ITEM_TEMP **table is used as temporary data storage. In the case when SessionFUID is provided the System does not use the inputted lists (even when they are provided) and processes using data already present in the **CONTAINMENT_ITEM_TEMP** table. 
 

When data is transferred, the entire System processing is done on the server side (all validations and data manipulations). 
 

The System removes Serials or Lots (Serial in each item row has higher priority and Lot will be omitted if Serial is provided) from the specified Containment.
 

If DeleteContainmentSessionData parameter is set to True, the System deletes Session data from the database on exit from the BC. The temporary data can also be deleted using the **DeleteContainmentSessionData **Business Component.
 

 

The output lists contain the provided Serials and Lots (not necessarily in the same order) along with corresponding Status values and Status Codes. The Status Codes are localized. The following Statuses and Status Codes are returned:
 
 
- 0 - No Lot and no Serial has been provided.  
- 1 - Product does not exist.  
- 2 - Serial does not exist.  
- 3 - Lot does not exist, 
- 4 - Serial is on hold.  
- 5 - Lot is on hold.  
- 6 - Lot does not exist in Containment.  
- 7 - Serial does not exist in Containment.  
- 8 - Lot has been removed from Containment.  
- 9 - Serial has been removed from Containment.  
- 10 - Lot has not been removed from Containment. Duplicate exists.  
- 11 - Serial has not been removed from Containment. Duplicate exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
| CONTAINMENT_SERIAL_NO (record is deleted) | ContainmentID | ContainmentID |
|  | ProductID | ProductID |
|  | SerialNo | SerialNo |
| CONTAINMENT_LOT_NO (record is deleted) | ContainmentID | ContainmentID |
|  | ProductID | ProductID |
|  | LotNo | LotNo |
