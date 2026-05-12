# GetContainerInventory2Quantity

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Container Quantity Inventory Warehouse

## Description

This Business Component returns the summed up content of specified Container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number. |
| Output | ProductIDList | ListofInteger | Yes | List of Products IDs from the Container. |
| Output | ProductNoList | ListofChar | Yes | List of Products numbers from the Container. |
| Output | QuantityOnHandList | ListofDecimal | Yes | List of quantity on-hand for certain Product from the list. |
| Output | QuantityAllocatedList | ListofDecimal | Yes | List of allocated quantity for certain Product from the list. |

## Validations

- System checks if ContainerNo is provided.

## System Processing

- System reads the content of specified Container from table INVENTORY2, and returns the lists of Products and their quantities (on-hand and allocated).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | Container | ContainerNo |
|  | ProductID | The list ProductIDList contains all Products from the Container. |
|  | QuantityOnHand | The list QuantityOnHandList contains a sum of on-hand quantities for certain Product from the Container. |
|  | QuantityAllocated | The list QuantityAllocated contains a sum of allocated quantities for certain Product from the Container. |
