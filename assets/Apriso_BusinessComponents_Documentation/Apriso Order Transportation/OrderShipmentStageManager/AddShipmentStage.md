# AddShipmentStage

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This Business Component method is used to define the fact that the shipment will have some products that will be loaded and unloaded in the specified loading and unloading points.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order header number. |
| Input | OrderType | Integer | Yes | The order header type |
| Input | LoadPointID | Integer | Yes | The stage point that specifies the load phase. |
| Input | UnloadPointID | Integer | Yes | The stage point that specifies the unload phase. |
| Input | StageStatus | Integer | Yes | The status of the stage. |
| Input | StageDescription | Char | No | The description of the stage. |
| Input | LanguageID | Integer | No | The language in which to create the stage description. Optional if description is not specified. |
| Output | ShipmentStageID | Integer | No | The ID of the created stage. |

## Validations

- The system validates that OrderNo and OrderType have been provided. 
- The system validates that LoadPointID has been provided. 
- The system validates that UnloadPointID has been provided. 
- The system validates that StageStatus has been prodivded. 
- The system validates that ORDER_HEADER exists for OrderNo and OrderType. 
- The system validates that SHIPMENT_STAGE_POINT exists for LoadPointID. 
- The system validates that SHIPMENT_STAGE_POINT exists for UnloadPointID. 
- The system validates that PROGRESS_STATUS exists for StatusStatus. 
- If StageDescription has been provided, the system validates that LangaugeID exists in LANGUAGE.

## System Processing

The system adds a new record to SHIPMENT_STAGE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_STAGE | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | LoadPointID | LoadPointID |
|  | UnloadPointID | UnloadPointID |
|  | StageStatus | StageStatus |
| TEXT_TRANSLATION | Extended | StageDescription |
