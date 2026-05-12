# InsertInventory2HistoryDetail

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.Inventory2HistoryController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** History Inventory Inventory2 Detail Transaction

## Description

This Business Component method populates the INVENTORY2_HISTORY_DETAIL table using input values. The BC method writes the properties and allocation of inventory before and after the change.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryHistoryHeaderID | Integer | Yes | ID of a history header record. The output value of InsertInventory2HistoryHeader BC may be used to populate this input. |
| Input | ProductNo | Char | No | ProductNo before change. |
| Input | ProductRevision | Char | No | ProductRevision before change. |
| Input | Location | Char | No | Location before change. |
| Input | Facility | Char | No | Facility before change. |
| Input | Warehouse | Char | No | Warehouse before change. |
| Input | Zone | Char | No | Zone before change. |
| Input | Container | Char | No | Container before change. |
| Input | InContainer | Char | No | InContainer before change. |
| Input | SerialNo | Char | No | SerialNo before change. |
| Input | LotNo | Char | No | LotNo before change. |
| Input | UomCode | Char | No | UomCode before change. |
| Input | InventoryClass | Char | No | InventoryClass before change. |
| Input | InventoryStatus | Short | No | InventoryStatus before change. |
| Input | PartnerNo | Char | No | PartnerNo before change. |
| Input | GradeCode | Char | No | GradeCode before change. |
| Input | ERPMaterialStock | Char | No | ERPMaterialStock before change. |
| Input | ERPStockType | Char | No | ERPStockType before change. |
| Input | ERPPlant | Char | No | ERPPlant before change. |
| Input | ERPSystem | Char | No | ERPSystem before change. |
| Input | WipOrderNo | Char | No | Allocation of inventory before change. |
| Input | WipOrderType | Short | No | Allocation of inventory before change. |
| Input | OprSequenceNo | Char | No | Allocation of inventory before change. |
| Input | StepSequenceNo | Integer | No | Allocation of inventory before change. |
| Input | OrderNo | Char | No | Allocation of inventory before change. |
| Input | OrderType | Short | No | Allocation of inventory before change. |
| Input | OrderLineNo | Integer | No | Allocation of inventory before change. |
| Input | ResourceName | Char | No | Allocation of inventory before change. |
| Input | ResourceType | Short | No | Allocation of inventory before change. |
| Input | AllocationTag | Char | No | Allocation of inventory before change. |
| Input | Quantity | Decimal | No | Quantity affected by the change. |
| Input | ToProductNo | Char | No | ProductNo after change. |
| Input | ToProductRevision | Char | No | ProductRevision after change. |
| Input | ToLocation | Char | No | Location after change. |
| Input | ToFacility | Char | No | Facility after change. |
| Input | ToWarehouse | Char | No | Warehouse after change. |
| Input | ToZone | Char | No | Zone after change. |
| Input | ToContainer | Char | No | Container after change. |
| Input | ToInContainer | Char | No | InContainer after change. |
| Input | ToSerialNo | Char | No | SerialNo after change. |
| Input | ToLotNo | Char | No | LotNo after change. |
| Input | ToUomCode | Char | No | UomCode after change. |
| Input | ToInventoryClass | Char | No | InventoryClass after change. |
| Input | ToInventoryStatus | Short | No | InventoryStatus after change. |
| Input | ToPartnerNo | Char | No | PartnerNo after change. |
| Input | ToGradeCode | Char | No | GradeCode after change. |
| Input | ToERPMaterialStock | Char | No | ERPMaterialStock after change. |
| Input | ToERPStockType | Char | No | ERPStockType after change. |
| Input | ToERPPlant | Char | No | ERPPlant after change. |
| Input | ToERPSystem | Char | No | ERPSystem after change. |
| Input | ToWipOrderNo | Char | No | Allocation of inventory after change. |
| Input | ToWipOrderType | Short | No | Allocation of inventory after change. |
| Input | ToOprSequenceNo | Char | No | Allocation of inventory after change. |
| Input | ToStepSequenceNo | Integer | No | Allocation of inventory after change. |
| Input | ToOrderNo | Char | No | Allocation of inventory after change. |
| Input | ToOrderType | Short | No | Allocation of inventory after change. |
| Input | ToOrderLineNo | Integer | No | Allocation of inventory after change. |
| Input | ToResourceName | Char | No | Allocation of inventory after change. |
| Input | ToResourceType | Short | No | Allocation of inventory after change. |
| Input | ToAllocationTag | Char | No | Allocation of inventory after change. |
| Output | ID | Integer | Yes | ID of created record. |

## Validations

- System validates if InventoryHistoryHeaderID is provided and exists appropriate record in INVENTORY2_HISTORY_HEADER table.

## System Processing

System creates a record in the INVENTORY2_HISTORY_DETAIL table. It returns an ID of the created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | ID of created record. |
|  | InventoryHistoryHeaderID | Link to the parent table INVENTORY2_HISTORY_HEADER. |
|  | Quantity | Quantity affected by the change. |
|  | ("To*" colums) | Property or allocation of inventory after change. |
|  | (other colums) | Property or allocation of inventory before change. |
