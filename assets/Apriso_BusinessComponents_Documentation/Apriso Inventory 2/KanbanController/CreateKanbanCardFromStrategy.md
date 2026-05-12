# CreateKanbanCardFromStrategy

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Creates a Kanban Card based on a Replenishment Strategy. Business logic can also be created as an input for this BC in order to define a way of customizing the Kanban Card number parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The Kanban Card number. |
| Input | StrategyID | Integer | Yes | The Replenishment Strategy ID. |
| Input | SequenceNo | Integer | Yes | The Replenishment Strategy Content sequence number. |

## Validations

- Validates StrategyID against the REPLENISH_STRATEGY table, and if not found, this error occurs: " Replenishment Strategy Id: {0} does not exist."  
-  

Validates the Strategy Sequence number against the REPLENISH_STRATEGY_CONTENT table, and if not found, this error occurs: " Replenishment Strategy Content Id:{0}, Sequence No:{1} does not exist." 
  
-  

Validates if UomCode is supplied in the REPLENISH_STRATEGY_CONTENT table.

## System Processing

- The system creates a record in the KANBAN_CARD table  
- The system returns the ID of the created record

## Pre-Conditions

Initializes KanbanCardStatus to 1 (Empty).
 

Copies Unit Characteristic and attribute records of the Replenishment Strategy as the Kanban Card Unit Characteristic records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ReplenishStrategyID | Copied from the input parameter. |
|  | SourceType | Copied from REPLENISH_STRATEGY.SourceType |
|  | FromFacility | Copied from REPLENISH_STRATEGY.FromFacility |
|  | FromDepartment | Copied from REPLENISH_STRATEGY.FromDepartment |
|  | FromWarehouse | Copied from REPLENISH_STRATEGY.FromWarehouse |
|  | FromLocationID | Copied from REPLENISH_STRATEGY.FromLocationID |
|  | FromWorkCenter | Copied from REPLENISH_STRATEGY.FromWorkCenter |
|  | FromZone | Copied from REPLENISH_STRATEGY.FromZone |
|  | FromPartnerID | Copied from REPLENISH_STRATEGY.FromPartnerID |
|  | ToFacility | Copied from REPLENISH_STRATEGY.ToFacility |
|  | ToDepartment | Copied from REPLENISH_STRATEGY.ToDepartment |
|  | ToWorkCenter | Copied from REPLENISH_STRATEGY.ToWorkCenter |
|  | ToWarehouse | Copied from REPLENISH_STRATEGY.ToWarehouse |
|  | ToZone | Copied from REPLENISH_STRATEGY.ToZone |
|  | ToLocationID | Copied from REPLENISH_STRATEGY.ToLocationID |
|  | ToPartnerID | Copied from REPLENISH_STRATEGY.ToPartnerID |
|  | LeadTimeInSeconds | Copied from REPLENISH_STRATEGY.LeadTimeInSeconds |
|  | ValidFrom | Copied from REPLENISH_STRATEGY.ValidFrom |
|  | ValidTo | Copied from REPLENISH_STRATEGY.ValidTo |
|  | EmployeeID | Copied from REPLENISH_STRATEGY.EmployeeID |
|  | PriorityID | Copied from REPLENISH_STRATEGY.PriorityID |
|  | ReplenishStraContSequenceNo | Copied from input SequenceNo |
|  | ReplenishQuantity | Copied from REPLENISH_STRATEGY.ReplenishQuantity |
|  | ProductID | Copied from REPLENISH_STRATEGY_CONTENT.ProductID |
|  | UomCode | Copied from REPLENISH_STRATEGY_CONTENT.UomCode |
|  | UnitID | Creates a new unit ID, and then copies all of the characteristics from the REPLENISH_STRATEGY's unit ID and updates this column with the new unit ID. |
|  | KanbanCardStatus | 1 (Empty) |
