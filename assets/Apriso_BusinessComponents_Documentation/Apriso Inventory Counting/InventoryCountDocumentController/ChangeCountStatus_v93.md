# ChangeCountStatus_v93

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of the Inventory Count record. It can be used by Administrators to change the status of the count from Failed to In Process. 
 

The BC enables changing the status of the required entity at the following levels:
 
 
- Individual serial 
- Inventory in Container (serials or bulk) 
- Bulk inventory associated with the Inventory Count

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryCountID | Integer | Yes | The Inventory Count header ID. |
| Input | ReasonCode | Char | No | The Reason Code of the item. |
| Input | CountStatus | Integer | No | The count status. |
| Input | ProductID | Integer | No | The product's ID number. |
| Input | SerialNo | Char | No | The Serial Number for the inventory involved. |
| Input | ContainerNo | Char | No | The number of the Container involved. |
| Input | EmployeeID | Integer | No | The ID of the employee against which the Inventory Count component is invoked. |
| Input | IsSerial | Boolean | Yes | The flag indicating if the inventory record is tracked by SerialNo. |

## Validations

- The system validates that the Input entities are validated.  
- The system validates that the document has the status to change the Inventory Count status. If the document is Cancelled or Completed, then the item status cannot be changed. The valid document statuses are the following: 
 
- Started  
- InProgress  
- Recount 
 
- The system validates that the Inventory Count record has the status to change the Inventory Count Status. If it is Cancelled or Completed, then the item status cannot be changed. The valid Inventory Count statuses are the following: 
 
- New 
- Passed 
- Recount 
- OutOfTolerance 
- Counted 
- EmptyContainerFound 
- InProgress 
- Counted 
- Started

## System Processing

- If the status is changed to recount, all the recount quantities are set to the counted quantities and the counted quantities are set to zero. The recount number is incremented and the last employee ID is updated with the Inventory Count employee ID. 
- If the status is changed to adjusted, the Inventory Count component is invoked with "accept all strategy" and the entered EmployeeID, which adjusts or moves the inventory to reconcile the inventory. 
- The Inventory Count status is changed to the inputted status.  
- If the IsSerial flag is set to True, then the BC changes the status of all the serials of the given inventory.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY_COUNT | ID | The inputted InventoryCountID (required). |
|  | CountStatus | The inputted CountStatus (required). |
|  | RecountNumber | Computed (see System Processing). |
|  | LastQuantityCounted | Computed (see System Processing). |
|  | LastCountDate | Computed (see System Processing). |
|  | LastEmployeeID | User.ID |
| INVENTORY_COUNT_CONTAINER | CountStatus | Computed CountStatus (Required). |
|  | RecountNumber | Computed (see System Processing). |
|  | LastQuantityCounted | Computed (see System Processing). |
|  | LastCountDate | Computed (see System Processing). |
|  | LastEmployeeID | User.ID |
| INVENTORY_COUNT_SERIAL | CountStatus | The inputted CountStatus (required). |
|  | RecountNumber | Computed (see System Processing). |
|  | LastCounted | Computed (see System Processing). |
|  | LastCountDate | Computed (see System Processing). |
|  | LastEmployeeID | User.ID |
