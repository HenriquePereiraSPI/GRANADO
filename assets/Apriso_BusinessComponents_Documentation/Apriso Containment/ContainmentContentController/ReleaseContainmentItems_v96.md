# ReleaseContainmentItems_v96

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required to Release Serials or Lots from hold.
 

It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment. |
| Input | ProductIDList | ListofInteger | Yes | ProductID of the item to be released. |
| Input | SerialNoList | ListofChar | Yes | Serial Number of the item to be released. |
| Input | LotNoList | ListofChar | Yes | Lot Number of the item to be released. |
| Input | ReleaseReasonCode | Char | No | Release Reason Code of the item (Serial or Lot). |
| Input | Comment | ListofChar | No | Used to specify user comment. |
| Input | DeleteContainmentSessionData | Boolean | Yes | Indicates if Session Data should be removed. |
| Input | SessionFUID | Char | Conditional | Unique Session identifier. |
| Input | SessionFUID | Char | Yes | Created or reused Unique Session identifier. |
| Output | OutProductIDList | ListofInteger | Yes | Output list of Product IDs. |
| Output | OutSerialNoList | ListofChar | No | Output list of Serials. |
| Output | OutLotNoList | ListofChar | No | Output list of Lots. |
| Output | OutStatusCodeList | ListofChar | No | Output list of Status Codes. |
| Output | OutStatusList | ListofInteger | No | Output list of Statuses. |

## Validations

- System verifies if Containment exists. 
- System checks if SessionFUID is provided. If it is not inputted the System validates if all input list parameters are of the same size.

## System Processing

The BC operates in two different modes. If size of input lists is equal to 1 and ProductID is not provided (equal or less than 0) then the whole Containment will be queried and used instead of input lists. Otherwise the System will insert the provided lists of Items (Serials or Lots) into **CONTAINMENT_ITEM_TEMP** table if SessionFUID is not provided. In the case when SessionFUID is provided the System does not use inputted lists (even when they are provided) and processes using data already present in the **CONTAINMENT_ITEM_TEMP** table. This insert/query generates new SessionFUID which is used to identify the transferred/queried data. **CONTAINMENT_ITEM_TEMP **table is used as temporary data storage.
 

The entire System processing is done on the server side (all validations and data manipulations). The System releases provided/queried Serials or Lots (Serial in each item row has higher priority and Lot will be omitted if Serial is provided) for the inputted ReasonCode.
 

If **DeleteContainmentSessionData** parameter is set to True, the System deletes Session data from the database on exit from BC. The temporary data can also be deleted using the **DeleteContainmentSessionData **Business Component.
 

 

The output lists contain provided/queried Serials and Lots (not necessarily in the same order) along with corresponding Status values and Status Codes. The Status Codes are localized. The following Statuses and Status Codes are returned:
 
 
- 0 - No Lot and no Serial has been provided. 
- 1 - Product does not exist. 
- 2 - Serial does not exist. 
- 3 - Lot does not exist. 
- 4 - Serial is not on hold. 
- 5 - Lot is not on hold. 
- 6 - Serial has been released. 
- 7 - Lot has been released.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
| SERIAL_NO_HOLD (record is deleted) | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
| LOT_NO_HOLD (record is deleted) | ProductID | Item from ProductIDList. |
|  | LotNo | Item from LotNoList. |
| CONTAINMENT_SERIAL_NO | ReleaseComment | Inputted Comment. |
|  | ReleaseReasonCode | Inputted ReleaseReasonCode. |
| CONTAINMENT_LOT_NO | ReleaseComment | Inputted Comment. |
|  | ReleaseReasonCode | Inputted ReleaseReasonCode. |
| TEXT_TRANSLATION (record is deleted) |  |  |
| TEXT (record is deleted) |  |  |
