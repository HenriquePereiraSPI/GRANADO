# UpdateKanbanCardFromParameters

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Inventory.KanbanController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

Updates the Kanban Card attributes as described in the Impacted Tables section with input parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | KanbanCardNumber | Char | Yes | The inputted Kanban card number to be updated. |
| Input | SourceType | Integer | Yes | The Replenishment source type. |
| Input | FromFacility | Char | No | The Facility from which the Kanban Card is to be replenished. |
| Input | FromDepartment | Char | No | The Department from which the Kanban Card is to be replenished. |
| Input | FromWorkCenter | Char | No | The Work Center from which the Kanban Card is to be replenished. |
| Input | FromWarehouse | Char | No | The Warehouse from which the Kanban Card is to be replenished. |
| Input | FromZone | Char | No | The Zone from which the Kanban Card is to be replenished. |
| Input | FromLocationID | Integer | No | The location ID from which the Kanban Card is to be replenished. |
| Input | FromPartnerID | Integer | No | The partner ID from which the customer/vendor product is to be replenished. |
| Input | ToFacility | Char | No | The facility to which the Kanban Card is to be replenished. |
| Input | ToDepartment | Char | No | The Department to which the Kanban Card is to be replenished. |
| Input | ToWorkCenter | Char | No | The Work Center to which the Kanban Card is to be replenished. |
| Input | ToWarehouse | Char | No | The Warehouse to which the Kanban Card is to be replenished. |
| Input | ToZone | Char | No | The Zone to which the Kanban Card is to be replenished. |
| Input | ToLocationID | Integer | No | The location ID to which the Kanban Card is to be replenished. |
| Input | ToPartnerID | Integer | No | The partnerID to which the Kanban Card is to be replenished. |
| Input | LeadTimeInSeconds | Integer | No | The lead time for replenishing the Kanban Card. |
| Input | ValidFrom | DateTime | No | The validity's start time. |
| Input | ValidTo | DateTime | No | The validity's end time. |
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | PriorityID | Integer | No | The priority ID. |
| Input | ReplenishQuantity | Decimal | Yes | The Replenishment quantity. |
| Input | ProductID | Integer | No | The product ID. |
| Input | UomCode | Char | Yes | The unit of measure code. |

## Validations

- Validates KanbanCardNumber against the KANBAN_CARD table, and if not found, then this error occurs: " Kanban card not found:{0}."  
- Validates that EmployeeID Input is greater than zero, and if it is, then the system updates the EmployeeID column. If it equals zero, it leaves its original value. If it is less than zero, than the error occurs: " Invalid EmployeeID: {0}. Input cannot be negative."

## System Processing

- The system updates the existing record in the KANBAN_CARD table

## Pre-Conditions

There will be no changes to the existing Kanban Card History records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| KANBAN_CARD | SourceType | Overridden from the SourceType input parameter . |
|  | FromFacility | Overridden from the FromFacility input parameter. |
|  | FromDepartment | Overridden from the FromDepartment input parameter. |
|  | FromWarehouse | Overridden from the FromWarehouse input parameter. |
|  | FromLocationID | Overridden from the FromLocationID input parameter. |
|  | FromWorkCenter | Overridden from the FromWorkCenter input parameter. |
|  | FromZone | Overridden from the FromZone input parameter. |
|  | FromPartnerID | Overridden from the FromPartnerID input parameter. |
|  | ToFacility | Overridden from the ToFacility input parameter. |
|  | ToDepartment | Overridden from the ToDepartment input parameter. |
|  | ToWorkCenter | Overridden from the ToWorkCenter input parameter. |
|  | ToWarehouse | Overridden from the ToWarehouse input parameter. |
|  | ToZone | Overridden from the ToZone input parameter. |
|  | ToLocationID | Overridden from the ToLocationID input parameter. |
|  | ToPartnerID | Overridden from the ToPartnerID input parameter. |
|  | LeadTimeInSeconds | Overridden from the LeadTimeInSeconds input parameter. |
|  | ValidFrom | Overridden from the ValidFrom input parameter. |
|  | ValidTo | Overridden from the ValidTo input parameter. |
|  | EmployeeID | Overridden from the EmployeeID Input when the EmployeeID Input is greater than 0. If the EmployeeID Input is 0, then the system does not update this column and leaves the existing value as it is. |
|  | PriorityID | Overridden from the PriorityID input parameter. |
|  | ReplenishQuantity | Overridden from the ReplenishQuantity input parameter. |
|  | ProductID | Overridden from the ProductID input parameter. |
|  | UomCode | Overridden from the UomCode input parameter. |
