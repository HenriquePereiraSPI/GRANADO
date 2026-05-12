# ImportContainmentItemsList

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to import Containment Items into specified Containment and optionally hold them immediately. It is dedicated for bulk operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDList | ListofInteger | Conditional | List of Product IDs. |
| Input | ProductNoList | ListofChar | Conditional | List of Products. |
| Input | SerialNoList | ListofChar | Conditional | List of Serials. |
| Input | LotNoList | ListofChar | Conditional | List of Lots. |
| Input | FacilityList | ListofChar | Conditional | List of Facilities. |
| Input | CreateMissingItems | Boolean | No | Indicates if the parent items are to be put on Hold. |
| Input | ContainmentID | Integer | No | ID of the Containment. |
| Input | FilterUsed | Char | No | Filter condition used to view the list of entities. |
| Input | ProfileUsed | Char | No | Grid Profile used to view the list of entities. |
| Input | SourceFileName | Char | No | Name of the Excel file that is used to import items to Containment. |
| Input | HoldReasonCode | Char | No | Reason Code for the hold. |
| Input | Comment | Char | No | A comment describing why Serial or Lot was put on hold. |
| Input | AllowMultipleHoldsList | Boolean | Yes | Indicates if there can be multiple holds on Serial/Lot when the unique key is satisfied. If false, only one Hold can exist for the Serial/Lot. |
| Input | HoldParent | Boolean | Yes | Indicates if the parent items are to be put on Hold. |
| Input | HoldChild | Boolean | Yes | Indicates if the child items are to be put on Hold. |
| Input | ReleaseAfterDate | DateTime | Yes | Indicates when Lot is to be released. |
| Input | ReleaseAfterDateDefined | Boolean | Yes | Indicates if ReleaseAfterDate was specified. |
| Input | HoldImmediately | Boolean | Yes | Indicates if items should be put on hold. |
| Output | SessionFUID | Char | No | Created or reused Unique Session identifier. |
| Output | ErrorProductIDList | ListofChar | No | Error list of Product IDs. |
| Output | ErrorProductNoList | ListofChar | No | Error list of Products. |
| Output | ErrorSerialNoList | ListofChar | No | Error list of Serials. |
| Output | ErrorLotNoList | ListofChar | No | Error list of Lots. |
| Output | ErrorFacilityList | ListofChar | No | Error list of Facilities. |
| Output | ErrorStatusCodeList | ListofChar | No | Error Status Codes list. |

## System Processing

This Business Component is used to import items from an **Excel **file.
 

The BC encapsulates execution of the following Business Components in the specified order:
 
 
- CreateLotAndSerialForContainmentList 
- AddContainmentItems_v96 
- HoldContainmentItems_v96 (if HoldImmediately is set to True) 
 

The provided inputs are passed directly to above listed BCs without any validation.
 

The **CreateLotAndSerialForContainmentList **BC is executed with parameter Mode set to 0 if CreateMissingItems is set to False. Otherwise it is executed with Mode set to 1.
 

Only **CreateLotAndSerialForContainmentList **BC is executed with empty SessionFUID parameter (this BC creates Session), subsequent BCs reuse created Session. The Session is not deleted on exit.
 

The output lists contain only those items the processing of which failed during the execution of any of the above BCs and only the first error for each item is returned.
 

For further information about Error Status Codes please see documentation of the Business Component methods mentioned above.

## Pre-Conditions

Containment is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | ProductID | Item from ProductIDList. |
|  | ProductNo | Item from ProductNoList. |
|  | SerialNo | Item from SerialNoList. |
|  | LotNo | Item from LotNoList. |
|  | Facility | Item from FacilityList. |
|  | ContainmentID | Inputted ContainmentID. |
|  | FilterUsed | Inputted FilterUsed. |
|  | ProfileUsed | Inputted ProfileUsed. |
|  | SourceFileName | Inputted SourceFileName. |
|  | HoldReasonCode | Inputted HoldReasonCode. |
|  | Comment_ | Inputted Comment. |
|  | ContainmentID | Inputted ContainmentID. |
| SERIAL_NO | SerialNo | Item from SerialNoList. |
|  | ProductID | Item from ProductIDList. |
|  | LotNo | Item from LotNoList. |
| LOT_NO | LotNo | Item from LotNoList. |
|  | ProductID | Item from PartnerIDList. |
|  | Facility | Item from FacilityList. |
| SERIAL_NO_HOLD | ProductID | Inputted ProductID. |
|  | SerialNo | Inputted SerialNo. |
|  | ReasonCode | Inputted HoldReasonCode. |
|  | ContainmentID | Inputted ContainmentID. |
|  | ReleaseAfterDate | Inputted ReleaseAfterDate. |
| LOT_NO_HOLD | ProductID | Inputted ProductID. |
|  | LotNo | Inputted LotNo. |
|  | ReasonCode | Inputted HoldReasonCode. |
|  | ContainmentID | Inputted ContainmentID. |
|  | ReleaseAfterDate | Inputted ReleaseAfterDate. |
|  | ProductID | Item from ProductIDList. |
|  | SerialNo | Item from SerialNoList. |
|  | ContainmentID | Inputted ContainmentID. |
|  | HoldComment | Inputted Comment. |
|  | HoldReasonCode | Inputted HoldReasonCode. |
|  | ProductID | Item from ProductIDList. |
|  | LotNo | Item from LotNoList. |
|  | ContainmentID | Inputted ContainmentID. |
|  | HoldComment | Inputted Comment. |
|  | HoldReasonCode | Inputted HoldReasonCode. |
|  | Type | If item is SerialNo then 1, otherwise 0. |
|  | FUID | Generated for each item. |
|  | TextID | TextID of created Text row for each item. |
|  | LanguageID | Session Context Language. |
|  | Extended | Inputted Comment. |
