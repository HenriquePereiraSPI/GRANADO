# HoldContainmentItems

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required to put on Hold serials or lot that belong to the Containment. The method uses FlexNet.BusinessFacade.Common.SerialHolder and FlexNet.BusinessFacade.Common.LotHolder business components to put items on hold.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment |
| Input | ProductIDList | ListofInteger | Yes | Product ID of the serial or lot to be placed on hold. |
| Input | SerialNoList | ListofChar | Yes | Serial number of the serial to be placed on hold. |
| Input | LotNoList | ListofChar | Yes | Lot number of the lot to be placed on hold. |
| Input | HoldReasonCodeList | ListofChar | Yes | Reason code for the hold |
| Input | AllowMultipleHoldsList | ListofBool | Yes | Indicates that if there can be multiple hold on Serial/Lot when the unique key is satisfied. If false only one Hold can exist for the Serial/Lot. |
| Input | CommentList | ListofChar | Yes | A comment describing why the lot was put on hold. |
| Input | LanguageIDList | ListofInteger | Yes | The language the comment is in. |
| Input | HoldParentList | ListofBool | Yes | Indicates if the parent items is to be put on Hold |
| Input | HoldChildList | ListofBool | Yes | Indicates if the child items is to be put on Hold |
| Input | ReleaseAfterDateList | ListofDateTime | Yes | Indicates when the lot is to be released |
| Input | ReleaseAfterDateDefinedList | ListofBool | Yes | Indicates if ReleaseAfterDate was specified |
| Output | ErrorProductIDList | ListofInteger | No | ProductID of the item that has been not released. |
| Output | ErrorSerialNoList | ListofChar | No | Serial Number of the item that has been not released. |
| Output | ErrorLotNoList | ListofChar | No | Lot Number of the item that has been not released. |
| Output | ErrorCodeList | ListofChar | No | Error code which describes why item has not been released. |

## Validations

- System verifies if the Containment exists. 
- Business component validates all inputted list and checks if the length is the same.

## System Processing

- Business Component method iterates through all items of inputted lists and invokes HoldSerial_v3 Business Component method to put serial on Hold or HoldLot_v3 business method to put lot on Hold 
- Each iteration is made in a separate database transaction.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SERIAL_NO_HOLD | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | ReasonCode | Inputted HoldReasonCode |
| LOT_NO_HOLD | ProductID | Inputted ProductID |
|  | LotNo | Inputted LotNo |
|  | ReasonCode | Inputted HoldReasonCode |
