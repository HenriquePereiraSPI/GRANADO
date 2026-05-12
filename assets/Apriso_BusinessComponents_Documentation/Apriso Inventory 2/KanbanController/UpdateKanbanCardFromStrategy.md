# UpdateKanbanCardFromStrategy

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Updates the Kanban Card parameters as described in the Impacted Tables section with the attributes defined in the Replenishment Strategy input parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The Kanban Card number. |
| Input | StrategyID | Integer | Yes | The Replenishment Strategy ID. |
| Input | SequenceNo | Integer | Yes | The Replenishment Strategy content sequence number. |

## Validations

-  

Validates StrategyID against the REPLENISH_STRATEGY table, and if not found, then this error occurs: " Replenishment Strategy Id: {0} does not exist." 
  
-  

Validates the strategy's SequenceNo against the REPLENISH_STRATEGY_CONTENT table, and if not found, then this error occurs: " Replenishment Strategy Content Id:{0}, Sequence No:{1} does not exist." 
  
-  

Validates KanbanCardNumber against the KANBAN_CARD table, and if not found, then this error occurs: " Kanban card not found:{0}."

## System Processing

- The system updates the existing record in the KANBAN_CARD table

## Pre-Conditions

Copies the Unit Characteristic and attribute records of the Replenishment Strategy as the Kanban Card Unit Characteristic records. However, does not clear the previously existing characteristic records - only updates if it already exists. 
 

There will be no changes to the existing Kanban Card History records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ReplenishStrategyID | Overridden from the input parameter. |
|  | SourceType | Overridden from REPLENISH_STRATEGY.SourceType. |
|  | FromFacility | Overridden from REPLENISH_STRATEGY.FromFacility. |
|  | FromDepartment | Overridden from REPLENISH_STRATEGY.FromDepartment. |
|  | FromWarehouse | Overridden from REPLENISH_STRATEGY.FromWarehouse. |
|  | FromLocationID | Overridden from REPLENISH_STRATEGY.FromLocationID. |
|  | FromWorkCenter | Overridden from REPLENISH_STRATEGY.FromWorkCenter. |
|  | FromZone | Overridden from REPLENISH_STRATEGY.FromZone. |
|  | FromPartnerID | Overridden from REPLENISH_STRATEGY.FromPartnerID. |
|  | ToFacility | Overridden from REPLENISH_STRATEGY.ToFacility. |
|  | ToDepartment | Overridden from REPLENISH_STRATEGY.ToDepartment. |
|  | ToWorkCenter | Overridden from 'REPLENISH_STRATEGY.ToWorkCenter. |
|  | ToWarehouse | Overridden from REPLENISH_STRATEGY.ToWarehouse. |
|  | ToZone | Overridden from REPLENISH_STRATEGY.ToZone. |
|  | ToLocationID | Overridden from REPLENISH_STRATEGY.ToLocationID. |
|  | ToPartnerID | Overridden from REPLENISH_STRATEGY.ToPartnerID. |
|  | LeadTimeInSeconds | Overridden from REPLENISH_STRATEGY.LeadTimeInSeconds. |
|  | ValidFrom | Overridden from REPLENISH_STRATEGY.ValidFrom. |
|  | ValidTo | Overridden from REPLENISH_STRATEGY.ValidTo. |
|  | EmployeeID | Overridden from REPLENISH_STRATEGY.EmployeeID. |
|  | PriorityID | Overridden from REPLENISH_STRATEGY.PriorityID. |
|  | ReplenishStraContSequenceNo | Overridden from the SequenceNo input. |
|  | ReplenishQuantity | Overridden from REPLENISH_STRATEGY.ReplenishQuantity. |
|  | ProductID | Overridden from REPLENISH_STRATEGY_CONTENT.ProductID. |
|  | UomCode | Overridden from REPLENISH_STRATEGY_CONTENT.UomCode. |
|  | UnitID | Creates/overrides the Unit Characteristic attributes from the REPLENISH_STRATEGY's Unit Characteristic attributes. |
