# DeleteContainmentItems

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment`
**Status:** Active

## Description

This Business Component method is required to delete Serials or Lots from the Containment. The method is extension of the existing methods DeleteContainmentSerial and DeleteContainmentLot from ContainmentContentController business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainmentID | Integer | Yes | ID of the Containment. |
| Input | ProductIDList | ListofInteger | Yes | ProductID of the item to be removed. |
| Input | SerialIDList | ListofChar | Yes | Serial Number of the item to be removed. |
| Input | LotNoList | ListofChar | Yes | Lot Number of the item to be removed. |
| Output | ErrorProductIDList | ListofInteger | No | ProductID of the item that has not been removed. |
| Output | ErrorSerialNoList | ListofChar | No | Serial Number of the item that has not been removed. |
| Output | ErrorLotNoList | ListofChar | No | Lot Number of the item that has not been removed. |
| Output | ErrorCodeList | ListofChar | No | Error code which describes why item has not been removed. |

## Validations

- System verifies if the Containment exists. 
- Business Component method validates all inputted list and checks if the length is the same.

## System Processing

- Business Component method iterates through all items of inputted lists and invokes DeleteContainmentSerial or DeleteContainmentLot business methods to delete respectively serial or lot from the Containment.  
- Each iteration is made in a separate database transaction.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_SERIAL_NO (record is deleted) | ContainmentID | ContainmentID |
|  | ProductID | ProductID |
|  | SerialNo | SerialNo |
| CONTAINMENT_LOT_NO (record is deleted) | ContainmentID | ContainmentID |
|  | ProductID | ProductID |
|  | LotNo | LotNo |
