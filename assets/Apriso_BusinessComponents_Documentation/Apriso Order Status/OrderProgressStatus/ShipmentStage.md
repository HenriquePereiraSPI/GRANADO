# ShipmentStage

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderProgressStatus`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the progress status of a shipment stage to the inputted status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProgressStatus | Integer | Yes | ProgressStatus, required destination status. |
| Input | ShipmentStageID | Integer | Yes | The shipment stage to update the progress status for |
| Input | UseTransitionRules | Boolean | Yes | Determines if the BC should validate the new status using available transition rules |

## Validations

- Validate the inputted ProgressStatus. 
- Validate the inputted ShipmentStage

## System Processing

-  If the "UseTransitionRules" input is true, then validate that the destination status is validate based on the original status and the valid transition rules predefined in the system.  
-  Update the Shipment stage record with the destination progress status.

## Pre-Conditions

- Shipment Stage must exist. 
- The shipment stage must be associated with an order. 
- Progress Transition Rule must exist if it is to be used

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_STAGE | StageStatus | ProgressStatus (required) |
| The following tables are used by the component to retrieve data, but are not updated by the BC: |  |  |
| PROGRESS_TRANSITION_RULES | DestinationProgressStatus | ProgressStatus |
