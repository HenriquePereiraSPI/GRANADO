# HoldContainmentItems_v96

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method puts Serials or Lots that belong to the Containment on hold. It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment. |
| Input | ProductIDList | ListofInteger | Yes | Product ID of the Serial or Lot to be placed on hold.. |
| Input | SerialNoList | ListofChar | Yes | Serial number of the Serial to be placed on hold. |
| Input | LotNoList | ListofChar | Yes | Lot number of the Lot to be placed on hold. |
| Input | HoldReasonCode | Char | Yes | Reason Code for the hold. |
| Input | AllowMultipleHoldsList | Boolean | Yes | Indicates if there can be multiple holds on Serial/Lot when the unique key is satisfied. If false, only one Hold can exist for the Serial/Lot. |
| Input | Comment | Char | No | A comment describing why Serial or Lot was put on hold. |
| Input | HoldParent | Boolean | Yes | Indicates if the parent items are to be put on Hold. |
| Input | HoldChild | Boolean | Yes | Indicates if the child items are to be put on Hold. |
| Input | FutureHoldName | Char | No | Name of the FutureHold that is holding the item in Containment. |
| Input | ReleaseAfterDate | DateTime | Yes | Indicates when Lot is to be released. |
| Input | ReleaseAfterDateDefined | Boolean | Yes | Indicates if ReleaseAfterDate was specified. |
| Input | DeleteContainmentSessionData | Boolean | Yes | Indicates if Session Data should be removed. |
| Input | SessionFUID | Char | Conditional | Unique Session identifier. |
| Output | SessionFUID | Char | No | Created or reused Unique Session identifier. |
| Output | OutProductIDList | ListofInteger | No | Output list of Product IDs. |
| Output | OutSerialNoList | ListofChar | No | Output list of Serials. |
| Output | OutLotNoList | ListofChar | No | Output list of Lots. |
| Output | OutStatusCodeList | ListofChar | No | Output list of Status Codes. |
| Output | OutStatusList | Integer | No | Output list of Statuses. |

## Validations

- System validates if the Containment exists.  
- System verifies if provided HoldReasonCode exists.  
- System checks if SessionFUID is provided. If it is not inputted the System validates if all input list parameters are of the same size.

## System Processing

System inserts the provided lists of Items (Serials or Lots) into the **CONTAINMENT_ITEM_TEMP** table if SessionFUID is not provided. This insert generates a new SessionFUID which is used to identify the transferred data. **CONTAINMENT_ITEM_TEMP** table is used as temporary data storage. In the case when SessionFUID is provided the System does not use inputted lists (even when they are provided) and process using data already present in the **CONTAINMENT_ITEM_TEMP **table. 
 

When data is transferred, the entire System processing is done on the server side (all validations and data manipulations). 
 

The System puts on Hold the provided Serials or Lots (Serial in each item row has higher priority and Lot will be omitted if Serial is provided) on inputted ReasonCode.
 

If HoldParent or/and HoldChild parameter is set to True, the System will search in Genealogy for item's parent or/and child records. If such records exist, appropriate Serials and Lots will also be put on hold.
 

If AllowMultipleHolds parameter is set to False then the System will not permit for putting on hold an item which is already on hold with a different Reason Code.
 

If DeleteContainmentSessionData parameter is set to True, the System deletes Session data fromthe database on exit from BC. Temporary data can also be deleted using the **DeleteContainmentSessionData **Business Component.
 

The output lists contain provided Serials and Lots (not necessarily in the same order) along with corresponding Status values and Status Codes. The Status Codes are localized. The following Statuses and Status Codes are returned:
 
 
- 0 - No Lot and no Serial were provided. 
- 1 - Product does not exist. 
- 2 - Product is on hold. 
- 3 - Serial does not exist. 
- 4 - Lot does not exist. 
- 5 - Serial was not put on hold. Serial is in Container. 
- 6 - Serial does not exist in Containment. 
- 7 - Lot does not exist in Containment. 
- 8 - Serial is already on hold with the specified Reason Code. 
- 9 - Lot is already on hold with the specified Reason Code. 
- 10 - Serial has already been put on hold with a different Reason Code.  
 

 
 
- 11 - Lot has already been put on hold with a different Reason Code. 
- 12 - Genealogy circular dependency was detected. 
- 13 - Lot was put on hold. 
- 14 - Serial was put on hold. 
- 15 - Serial was not put on hold. Duplicate exists. 
- 16 - Lot was not put on hold. Duplicate exists. 
- 17 - Parent Lot was put on hold. 
- 18 - Parent Serial was put on hold. 
- 19 - Child Lot was put on hold. 
- 20 - Child Serial was put on hold.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
| SERIAL_NO_HOLD | ProductID | Inputted ProductID. |
|  | SerialNo | Inputted SerialNo. |
|  | ReasonCode | Inputted HoldReasonCode. |
|  | FutureHoldName | Inputted FutureHoldName. |
| LOT_NO_HOLD | ProductID | Inputted ProductID. |
|  | LotNo | Inputted LotNo. |
|  | ReasonCode | Inputted HoldReasonCode. |
|  | FutureHoldName | Inputted FutureHoldName. |
| CONTAINMENT_SERIAL_NO | HoldComment | Inputted Comment. |
|  | HoldReasonCode | Inputted HoldReasonCode. |
| CONTAINMENT_LOT_NO | HoldComment | Inputted Comment. |
|  | HoldReasonCode | Inputted HoldReasonCode. |
| TEXT | Type | If item is SerialNo then 1, otherwise 0. |
|  | FUID | Generated for each item. |
| TEXT_TRANSLATION | TextID | TextID of created Text row for each item. |
|  | LanguageID | Session Context Language. |
|  | Extended | Inputted Comment. |
