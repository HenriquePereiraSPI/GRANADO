# DeactivateKanbanCard

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Deactivates a Kanban Card.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | string | Yes | The Kanban Card number. |

## Validations

- Validates the Kanban Card number record against the KANBAN_CARD table, and if not found, this error occurs: " Kanban card not found:{0}."

## System Processing

- The system deactivates the record in the KANBAN_CARD table

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | Active | Updates this field to 0, as inactive. |
