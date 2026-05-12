# ExtractInventory_v9

**Category:** Apriso/Inventory/Extraction
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryExtractor`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The purpose of this Business Component is to extract Inventory information in order to pass it to an external system.
 

The inputs of the component are filters that allow the user to extract what he needs to extract and only what he wants to extract.
 

System performs a query on the inventory table and passes the result of the query in an XML that is then routed to XML manager for upload.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility to uniquely identify inventory. |
| Input | Warehouse | Char | No | Warehouse to uniquely identify inventory. |
| Input | ProductID | Integer | No | ProductID to uniquely identify inventory |
| Input | InventoryClassID | Integer | No | InventoryClass to uniquely identify inventory |
| Input | WarehouseLocationID | Integer | No | WarehouseLocationID to uniquely identify inventory. |
| Input | LotNo | Char | No | LotNo to uniquely identify inventory. |
| Input | GradeID | Integer | No | GradeID to uniquely identify inventory. |
| Input | PartnerID | Integer | No | PartnerID to uniquely identify inventory. |
| Input | ProductInventoryType | Integer | No | ProductInventoryType to uniquely identify inventory. |
| Input | InventoryStatus | Integer | No | InventoryStatus to uniquely identify inventory. |

## Validations

- The Input entities are validated . 
- The Document needs to be valid status to change the Inventory Count Status. 
 If the document is Cancelled or Completed then the item status cannot be changed.
 Valid Document statuses are: 
 
- Started 
- InProgress 
- Recount 
 
- The Inventory Count record needs to be valid status to change the Inventory Count Status. If it is Cancelled or Completed then the item status cannot be changed. 
- Valid Inventory Count statuses are: 
 
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

- If the status is changed to recount, all the recount quantities set to counted quantities and counted quantities are set to zero. The recount number is incremented and last employee id is updated with inventory count employee id . 
- If the status is changed to adjusted then the inventory count component is invoked with accept all strategy and entered EmployeeID which would adjust or move inventory to reconcile the inventory. 
- The inventory count status is changed to input status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY_COUNT | ID | Inputted InventoryCountID (Required) |
|  | CountStatus | Inputted CountStatus (Required) |
|  | RecountNumber | Computed (see system processing) |
|  | LastQuantityCounted | Computed (see system processing) |
|  | LastCountDate | Computed (see system processing) |
|  | LastEmployeeID | User.ID |
| INVENTORY_COUNT_CONTAINER | CountStatus | Inputted CountStatus (Required) |
|  | RecountNumber | Computed (see system processing) |
|  | LastQuantityCounted | Computed (see system processing) |
|  | LastCountDate | Computed (see system processing) |
|  | LastEmployeeID | User.ID |
| INVENTORY_COUNT_SERIAL | CountStatus | Inputted CountStatus (Required) |
|  | RecountNumber | Computed (see system processing) |
|  | LastCounted | Computed (see system processing) |
|  | LastCountDate | Computed (see system processing) |
|  | LastEmployeeID | User.ID |
