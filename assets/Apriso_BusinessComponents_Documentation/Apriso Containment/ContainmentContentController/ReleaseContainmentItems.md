# ReleaseContainmentItems

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required to Release serials or lots from Hold. The method is extension of the existing method Release from ContainmentHolder business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment |
| Input | ProductIDList | ListofInteger | Yes | ProductID of the item to be released |
| Input | SerialNoList | ListofChar | Yes | Serial Number of the item to be released |
| Input | LotNoList | ListofChar | Yes | Lot Number of the item to be released |
| Input | HoldReasonCodeList | ListofChar | Yes | Reason code of the item (serial or lot) hold. Required if the item is put on hold multiple - in such case it must exit in the system. |
| Input | ReleaseReasonCodeList | ListofChar | Yes | Release Reason Code of the item (serial or lot). If ReleaseReasonRequired is true then it must exist in the system. |
| Input | ReleaseReasonCodeRequiredList | ListofBool | Yes | Indicates if ReleaseReasonCode is required. |
| Input | CommentList | ListofChar | Yes | To specify user comments. |
| Input | GenealogySerialNoHoldIDList | ListofInteger | Yes | ID of the Serial No Hold record which caused the hold. |
| Input | GenealogyLotNoHoldIDList | ListofInteger | Yes | ID of the Lot No Hold record which caused the hold. |
| Output | ErrorProductIDList | ListofInteger | No | ProductID of the item that has been not released. |
| Output | ErrorSerialNoList | ListofChar | No | Serial Number of the item that has been not released. |
| Output | ErrorLotNoList | ListofChar | No | Lot Number of the item that has been not released. |
| Output | ErrorCodeList | ListofChar | No | Error code which describes why item has not been released. |

## Validations

- System verifies if Containment exists. 
- Business component validates all inputted list and checks if the length is the same.

## System Processing

- Business component iterates through all items of inputted lists and invokes Release method from ContainmentHolder business component to release serial or lot. 
- Each iteration is made in a separate database transaction.  
-  If inputted lists are single-element arrays and ProductID is 0 then all items that belongs to the Containment will be released from Hold.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ProductID | Each item from inputted ProductIDList |
|  | SerialNo | Each item from inputted SerialNoList |
|  | ProductID | Each item from inputted ProductIDList |
|  | LotNo | Each item from inputted LotNoList |
