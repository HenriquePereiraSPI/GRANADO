# ManageCountRecord

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Manage Count Record

## Description

This Business Component method creates (or updates) Count Records with the inputted parameters. It can be used for:
 
 
- Inserting snapshot (inventory) data without count data, 
- Inserting snapshot data together with count data, 
- Updating Count Record with count data only, 
- Updating Count Record with inventory data only (snapshot), 
- Inserting recount record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountRecordIDList | ListofInteger | Conditional | Count Record ID to retrieve Count Record Sequence. Required if UpdateCount or UpdateSnapshot parameter is set to true. |
| Input | UpdateSnapshotList | ListofBool | Yes | Indicates if snapshot is to be updated (true) or not. |
| Input | UpdateCountList | ListofBool | Yes | Indicates if count data is to be updated (true) or not. |
| Input | CountDispositionLineIDList | ListofInteger | Conditional | ID of Count Disposition Line to create Count Record for. Required if UpdateCount and UpdateSnapshot are set to false. |
| Input | ProductIDList | ListofInteger | No | Product ID to populate a newly created Count Record with or to update existing record determined by CountRecordID. |
| Input | WarehouseLocationIDList | ListofInteger | No | Warehouse Location ID to populate a newly created Count Record with or to update existing record determined by CountRecordID. |
| Input | ParentCountRecordIDList | ListofInteger | No | Parent Count Record ID to populate a newly created Count Record with; determined by CountRecordID. |
| Input | InventoryAllocationIDList | ListofInteger | No | Inventory Allocation ID to populate a newly created Count Record with. |
| Input | ContainerNoList | ListofChar | No | Container Number to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | InContainerNoList | ListofChar | No | Parent Container Number to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | SerialNoList | ListofChar | No | Serial Number to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | LotNoList | ListofChar | No | Lot Number to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | InventoryClassIDList | ListofInteger | No | Inventory Class ID to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | InventoryStatusList | ListofInteger | No | Inventory Status to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | PartnerIDList | ListofInteger | No | Partner ID to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | GradeIDList | ListofInteger | No | Greade ID to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | ERPMaterialStockIDList | ListofInteger | No | ERP Material Stock ID to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | QuantityOnHandList | ListofDecimal | No | Quantity On Hand to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | QuantityAllocatedList | ListofDecimal | No | Quantity Allocated to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | PhantomFlagList | ListofBool | No | Phantom flag to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | CountedQuantityList | ListofDecimal | No | Counted Quantity to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | CountedInContainerNoList | ListofChar | No | Counted Container Number to populate a newly created Count Record with or to update an existing record determined by CountRecordID. |
| Input | CountedByList | ListofChar | No | User performing the counting. Information used to populate a newly created Count Record or to update an existing record determined by CountRecordID. |
| Input | CountedOnList | ListofDateTime | No | Time of counting. Used to populate a newly created Count Record or to update an existing record determined by CountRecordID. |
| Output | CreatedCountRecordIDList | ListofInteger | Yes | ID of Created Count Record. |

## Validations

- System validates that the length of all arrays is the same. 
- If UpdateCount and UpdateSnapshot are set to false then System validates that: 
 
- Count Disposition Line ID is provided.

## System Processing

- If UpdateSnapshot is false and UpdateCount is false then: 
 
- System inserts COUNT_RECORD according to inputs.  
- Count Record Sequence is set to 1 (if Count Record ID <= 0) or increased by 1 if Count Record ID is provided. 
 
- Else if UpdateSnapshot = false and UpdateCount = true then: 
 
- System only updates the count fields and ignores the inventory fields in the COUNT_RECORD table. 
- Count Record Sequence is increased by 1. 
 
- Else if UpdateSnapshot = true and UpdateCount = false then: 
 
- Sytem only updates the inventory fields and ignores the count fields in the COUNT_RECORD table. 
 
- Else 
 
- System updates both inventory and count fields in the COUNT_RECORD table. 
- Count Record Sequence is increased by 1.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_RECORD | CountDispositionLineID | Item from CountDispositionLineIDList (on insert only). |
|  | ProductID | Item from ProductIDList. Applies only if UpdateSnapshot = true. |
|  | WarehouseLocationID | Item from WarehouseLocationIDList. Applies only if UpdateSnapshot = true. |
|  | ParentCountRecordID | Item from ParentCountRecordIDList (on insert only). |
|  | InventoryAllocationID | Item from InventoryAllocationIDList. Applies only if UpdateSnapshot = true. |
|  | Container | Item from ContainerNoList. Applies only if UpdateSnapshot = true. |
|  | SerialNo | Item from SerialNoList. Applies only if UpdateSnapshot = true. |
|  | LotNo | Item from LotNoList. Applies only if UpdateSnapshot = true. |
|  | InventoryClassID | Item from InventoryClassID (Null if not greater than 0 or). Applies only if UpdateSnapshot = true. |
|  | InventoryStatus | Item from InventoryStatus (Null if not greater than 0). Applies only if UpdateSnapshot = true. |
|  | PartnerID | Item from InventoryStatus (Null if not greater than 0). Applies only if UpdateSnapshot = true. |
|  | GradeID | Item from GradeIDList (Null if not greater than 0). Applies only if UpdateSnapshot = true. |
|  | ERPMaterialStockID | Item from ERPMaterialStockIDList (Null if not greater than 0). Applies only if UpdateSnapshot = true. |
|  | QuantityOnHand | Item from QuantityOnHandList (Null if not greater than Decimal.MinValue). Applies only if UpdateCount = true. |
|  | QuantityAllocated | Item from QuantityAllocatedList (Null if not greater than Decimal.MinValue). Applies only if UpdateCount = true. |
|  | PhantomFlag | Item from PhantomFlagList. Applies only if UpdateCount = true. |
|  | CountRecordSequence | 1 if a record is created or increased by one taken from COUNT_RECORD based on the inputted CountRecordID (if provided). |
|  | CountedQuantity | Item from CountedQuantityList (Null if not greater than Decimal.MinValue). Applies only if UpdateCount = true. |
|  | CountedInContainer | Item from CountedInContainerNoList. Applies only if UpdateCount = true. |
|  | CountedBy | Item from CountedByList. Applies only if UpdateCount = true. |
|  | CountedOn | Item from CountedOnList (Null if not greater than DateTime.MinValue). Applies only if UpdateCount = true. |
