# InsertKanbanCardHistoryFromKanbanCard

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanHistoryController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Creates the Kanban Card history based on the input parameters. This BC populates the KANBAN_CARD_HISTORY table with values taken from the KANBAN_CARD table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The Kanban Card number. |
| Input | TransactionToken | Char | No | The user transaction token number. |
| Input | TransactionCode | Char | Yes | The transaction code. |
| Input | Transactiontime | DateTime | No | The transaction time. |

## Validations

- Validates the Kanban Card number against the KANBAN_CARD table, and if not found, this error occurs: " Err! Kanban Card {0} does not exists."  
- Validates TransactionCode against the TRANSACTION_ table, and if the record is not found, this error occurs: " Err! Invalid Transaction Code: {0}."

## System Processing

- The system creates an active history record with all of the values from the KANBAN_CARD table

## Pre-Conditions

Creates a Kanban Card history record with values as specified in Impacted Tables section. 
 

Returns the ID of the KanbanCardHistory record being created as an output parameter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| KANBAN_CARD_HISTORY | KanbanCardNumber | Copied from the KanbanCardNumber input parameter. |
|  | UserTransactionToken | Copied from the TransactionToken input parameter. |
|  | TransactionCode | Copied from the TransactionCode input parameter. |
|  | TransactionTime | Copied from the TransactionTime input parameter. |
|  | StrategyName | Copied from REPLENISH_STRATEGY.Name for KANBAN_CARD.ReplenishStrategyID. |
|  | StrategyTypeName | Copied from REPLENISH_STRATEGY_TYPE.Name for strategy type corresponds to 'KANBAN_CARD.ReplenishStrategyID. |
|  | ProductNo | Copied from PRODUCT.ProductNo and corresponds to KANBAN_CARD.ProductID. |
|  | UomCode | Copied from KANBAN_CARD.UomCode. |
|  | SourceType | Copied from REPLENISH_STRATEGY_SRC_TYPE.Name' corresponds to 'KANBAN_CARD.SourceType. |
|  | FromFacility | Copied from KANBAN_CARD.FromFacility. |
|  | FromDepartment | Copied from KANBAN_CARD.FromDepartment. |
|  | FromWorkcenter | Copied from KANBAN_CARD.FromWorkCenter. |
|  | FromWarehouse | Copied from KANBAN_CARD.FromWarehouse. |
|  | FromZone | Copied from KANBAN_CARD.FromZone. |
|  | FromLocation | Copied from KANBAN_CARD.FromLocation. |
|  | FromPartnerNo | Copied from KANBAN_CARD.FromPartnerNo. |
|  | ToFacility | Copied from KANBAN_CARD.ToFacility. |
|  | ToDepartment | Copied from KANBAN_CARD.ToDepartment. |
|  | ToWorkcenter | Copied from KANBAN_CARD.ToWorkCenter. |
|  | ToWarehouse | Copied from KANBAN_CARD.ToWarehouse. |
|  | ToZone | Copied from KANBAN_CARD.ToZone. |
|  | ToLocation | Copied from KANBAN_CARD.ToLocation. |
|  | ToPartnerNo | Copied from KANBAN_CARD.ToPartnerNo. |
|  | ReplenishQuantity | Copied from KANBAN_CARD.ReplenishQuantity. |
|  | LeadTimeInSeconds | Copied from KANBAN_CARD.LeadTimeInSeconds. |
|  | CurrentLocation | Copied from KANBAN_CARD.CurrentLocation. |
|  | Container | Copied from KANBAN_CARD.Container. |
|  | SerialNo | Copied from KANBAN_CARD.SerialNo. |
|  | WipOrderNo | Copied from KANBAN_CARD.WipOrderNo. |
|  | WipOrderType | Copied from KANBAN_CARD.WipOrderType. |
|  | OprSequenceNo | Copied from KANBAN_CARD.OprSequenceNo. |
|  | EmployeeNo | Copied from KANBAN_CARD.EmployeeNo. |
|  | CardPrintedOn | Copied from KANBAN_CARD.CardPrintedOn. |
|  | StartDate | Copied from KANBAN_CARD.StartDate. |
|  | CompletionDate | Copied from KANBAN_CARD.CompletionDate. |
|  | ValidFrom | Copied from KANBAN_CARD.ValidFrom. |
|  | ValidTo | Copied from KANBAN_CARD.ValidTo. |
|  | Priority | Copied from KANBAN_CARD.Priority. |
|  | ProgressStatusName | Copied from PROGRESS_STATUS.Name and corresponds to KANBAN_CARD.ProgressStatus. |
|  | KanbanCardStatusName | Copied from KANBAN_CARD_STAUTS.Name and corresponds to KANBAN_CARD.KanbanCardStatus. |
|  | LotNo | Copied from KANBAN_CARD.LotNo. |
|  | ProductRevision | Copied from PRODUCT.ProductRevision that corresponds to KANBAN_CARD.ProductID. |
