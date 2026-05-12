# InsertKanbanCardHistoryFromParameters

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanHistoryController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Creates Kanban Card history based on input parameters with data taken from the KANBAN_CARD table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The Kanban Card number. |
| Input | TransactionToken | Char | No | The user transaction token number. |
| Input | TransactionCode | Char | Yes | The transaction code. |
| Input | Transactiontime | DateTime | No | The transaction time. |
| Input | StrategyName | Char | No | The Replenishment Strategy name. |
| Input | StrategyTypeName | Char | No | The Replenishment Strategy type's name. |
| Input | ProductNo | Char | No | The product number. |
| Input | UomCode | Char | No | The UOM code. |
| Input | SourceType | Char | Yes | The source type. |
| Input | FromFacility | Char | No | The "from" Facility. |
| Input | FromDepartment | Char | No | The "from" Department. |
| Input | FromWorkCenter | Char | No | The "from" Work Center. |
| Input | FromWarehouse | Char | No | The "from" Warehouse. |
| Input | FromZone | Char | No | The "from" Zone. |
| Input | FromLocation | Char | No | The "from" location. |
| Input | FromPartnerNo | Char | No | The "from" partner number. |
| Input | ToFacility | Char | No | The "to" Facility. |
| Input | ToDepartment | Char | No | The "to" department. |
| Input | ToWorkCenter | Char | No | The "to" Work Center. |
| Input | ToWarehouse | Char | No | The "to" Warehouse. |
| Input | ToZone | Char | No | The "to" Zone. |
| Input | ToLocation | Char | No | The "to" location. |
| Input | ToPartnerNo | Char | No | The "to" partner number. |
| Input | ReplenishQuantity | Decimal | No | The Replenishment quantity. |
| Input | LeadTimeInSeconds | Integer | No | The lead time in seconds. |
| Input | CurrentLocation | Char | No | The current location. |
| Input | Container | Char | No | The Container number. |
| Input | SerialNo | Char | No | The serial number. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Short | No | The WIP Order type. |
| Input | OprSequenceNo | Char | No | The Operation sequence number. |
| Input | EmployeeNo | Char | No | The employee number. |
| Input | CardPrintedOn | DateTime | No | The "card printed on" date/time stamp. |
| Input | StartDate | DateTime | No | The start date. |
| Input | CompletionDate | DateTime | No | The completion date. |
| Input | ValidFrom | DateTime | No | The date from which the card is valid. |
| Input | ValidTo | DateTime | No | The date to which the card is valid |
| Input | Priority | Integer | No | The priority. |
| Input | ProgessStatusName | Char | No | The progress status name. |
| Input | KanbanCardStatus | Char | No | The Kanban Card status name. |

## Validations

- Validates the Kanban Card number against the KANBAN_CARD table, and if not found, this error occurs: " Err! Kanban Card {0} does not exists."  
- Validates TransactionCode against the TRANSACTION_ table, and if the record is not found, this error occurs: " Err! Invalid Transaction Code: {0}."

## System Processing

- The system creates an active history record with all of the values copied from the input parameters

## Pre-Conditions

Creates a Kanban Card history record with values as specified in the Impacted Tables section.
 

Returns the ID of the KanbanCardHistory record being created as an output parameter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| KANBAN_CARD_HISTORY | KanbanCardNumber | Copied from the KanbanCardNumber input parameter. |
|  | UserTransactionToken | Copied from the TransactionToken input parameter. |
|  | TransactionCode | Copied from the TransactionCode input parameter. |
|  | TransactionTime | Copied from the TransactionTime input parameter. |
|  | StrategyName | Copied from the StrategyName input parameter. |
|  | StrategyTypeName | Copied from the StrategyTypeName input parameter. |
|  | ProductNo | Copied from the ProductNo input parameter. |
|  | UomCode | Copied from the UomCode input parameter. |
|  | SourceType | Copied from the SourceType input parameter. |
|  | FromFacility | Copied from the FromFacility input parameter. |
|  | FromDepartment | Copied from the FromDepartment input parameter. |
|  | FromWorkcenter | Copied from the FromWorkCenter input parameter. |
|  | FromWarehouse | Copied from the FromWarehouse input parameter. |
|  | FromZone | Copied from the FromZone input parameter. |
|  | FromLocation | Copied from the FromLocation input parameter. |
|  | FromPartnerNo | Copied from the FromPartnerNo input parameter. |
|  | ToFacility | Copied from the ToFacility input parameter. |
|  | ToDepartment | Copied from the ToDepartment input parameter. |
|  | ToWorkcenter | Copied from the ToWorkCenter input parameter. |
|  | ToWarehouse | Copied from the ToWarehouse input parameter. |
|  | ToZone | Copied from the ToZone input parameter. |
|  | ToLocation | Copied from the ToLocation input parameter. |
|  | ToPartnerNo | Copied from the ToPartnerNo input parameter. |
|  | ReplenishQuantity | Copied from the ReplenishQuantity input parameter. |
|  | LeadTimeInSeconds | Copied from the LeadTimeInSeconds input parameter. |
|  | CurrentLocation | Copied from the CurrentLocation input parameter. |
|  | Container | Copied from the Container input parameter. |
|  | SerialNo | Copied from the SerialNo input parameter. |
|  | WipOrderNo | Copied from the WipOrderNo input parameter. |
|  | WipOrderType | Copied from the WipOrderType input parameter. |
|  | OprSequenceNo | Copied from the OprSequenceNo input parameter. |
|  | EmployeeNo | Copied from the EmployeeNo input parameter. |
|  | CardPrintedOn | Copied from the CardPrintedOn input parameter. |
|  | StartDate | Copied from the StartDate input parameter. |
|  | CompletionDate | Copied from the CompletionDate input parameter. |
|  | ValidFrom | Copied from the ValidFrom input parameter. |
|  | ValidTo | Copied from the ValidTo input parameter. |
|  | Priority | Copied from the Priority input parameter. |
|  | ProgressStatusName | Copied from the ProgressStatusName input parameter. |
|  | KanbanCardStatusName | Copied from the KanbanCardStatusName input parameter. |
