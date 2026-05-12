# WriteContainmentTransactionHistory

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentTransactionHistoryController`
**Assembly:** `FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to write Containment Transaction History.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SessionFUID | Char | Yes | Unique Session identifier. |
| Output | SessionProcessed | Boolean | No | Indicates if the whole Session has been processed. |

## Validations

- System validates if SessionFUID is provided.

## System Processing

System processes Transaction History for the provided Containment Session Data. The following Transaction History entries can be generated (if Transaction History is enabled in Configuration Manager):
 
 
- FlexNet.BusinessFacade.Common.LotCreator.CreateLot 
- FlexNet.BusinessFacade.Common.SerialCreator.CreateSerial 
- FlexNet.BusinessFacade.Common.ContainmentHolder.Hold 
- FlexNet.BusinessFacade.Common.ContainmentHolder.Release 
 

 

The Business Component reads data from the **CONTAINMENT_ITEM_TEMP **table which contains information about processed Containment items during the execution of the following BC methods:
 
 
- CreateLotAndSerialForContainmentList 
- HoldContainmentItems_v96 
- ReleaseContainmentItems_v96 
 

 

Each item from Session (identified by SessionFUID) is processed in a separate transaction (e.g., if Transaction History is to be generated for Create and Hold operation then both Transaction History records are created in one transaction). Due to possible large number of Session items (e.g., 1000) resulting in long execution time (FI Timeout parameter), the BC asynchronously calls **APR_CNT_WRITE_TH** Standard Operation after 80% of allowed execution time. Timeout is given by Function Interpreter settings that can be changed in Central Configuration file under Function Interpreter section. The **APR_CNT_WRITE_TH **Standard Operation invokes **WriteContainmentTransactionHistory** BC which allows processing of the same Session. This scenario is repeated until the whole Session is processed. When entire Session is processed the SessionProcessed output parameter is set to True. To create Transaction History a standard BC logic is used which validates if Transaction History should be created or not. Regardless of Transaction History creation, the BC updates the Session record to indicate that Transaction History is processed. It allows determining a set of Session records to be processed in the subsequent call to the BC. When all of them are processed the Session can be deleted. This can be done by calling **DeleteContainmentSessionData** BC.

## History Recording in Production

- FlexNet.BusinessFacade.Common.LotCreator.CreateLot.xsd, 
- FlexNet.BusinessFacade.Common.SerialCreator.CreateSerial.xsd, 
- FlexNet.BusinessFacade.Common.ContainmentHolder.Hold.xsd, 
- FlexNet.BusinessFacade.Common.ContainmentHolder.Release.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_ITEM_TEMP | CreateItemState | Set to 4 after item history is processed. |
|  | HoldItemState | Set to 3 after item history is processed. |
|  | ReleaseItemState | Set to 3 after item history is processed. |
