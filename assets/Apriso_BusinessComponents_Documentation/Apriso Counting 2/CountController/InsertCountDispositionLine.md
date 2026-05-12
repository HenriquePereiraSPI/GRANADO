# InsertCountDispositionLine

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Insert Count Disposition Line

## Description

This Business Component method creates Count Disposition Line with the inputted parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionID | Integer | Yes | ID of the existing Disposition Count. |
| Input | DispositionLineNo | Integer | Yes | Unique Count Disposition Line Number. |
| Input | WarehouseLocationID | Integer | Yes | ID of the Warehouse Location that the Count Disposition Line is defined for. |
| Input | InventoryStatus | Integer | No | Inventory Status that the Count Disposition Line is defined for. |
| Input | ProductID | Integer | No | ID of the Product that the Count Disposition Line is defined for. |
| Input | GradeID | Integer | No | ID of the Grade that the Count Disposition Line is defined for. |
| Input | PartnerID | Integer | No | ID of the Partner that the Count Disposition Line is defined for. |
| Input | ContainerNo | Char | No | Container Number that the Count Disposition Line is defined for. |
| Input | LotNo | Char | No | Lot Number that the Count Disposition Line is defined for. |
| Input | SerialNo | Char | No | Serial Number that the Count Disposition Line is defined for. |
| Input | InventoryClassID | Integer | No | ID of the Inventory Class that the Count Disposition Line is defined for. |
| Input | ERPMaterialStockID | Integer | No | ID of the ERP Material Stock that the Count Disposition Line is defined for. |
| Input | SignatureHeaderID | Integer | No | ID of the Signature required for Count Disposition Line. |
| Input | Group | Char | No | Group Name that the Count Disposition Line is defined for. |
| Input | GroupType | Integer | No | Group Type that the Count Disposition Line is defined for. |
| Input | GroupClassID | Integer | No | Group Class ID that the Count Disposition Line is defined for. |
| Output | CountDispositionLineID | Integer | No | ID of the created Count Disposition Line. |

## Validations

- System validates if the Count Disposition ID is provided. 
- System validates if the Warehouse Location ID is provided. 
- System validates if the Disposition Line No is provided. 
- System validates that the Count Disposition Line does not exist for the specified Count Disposition ID and Disposition Line No.

## System Processing

- System creates a new entity in COUNT_DISPOSITION_LINE table populated with all inputted parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | CountDispositionID | CountDispositionID |
|  | DispositionLineNo | DispositionLineNo |
|  | WarehouseLocationID | WarehouseLocationID (if greater than 0) |
|  | InventoryStatus | InventoryStatus (if greater than 0) |
|  | ProductID | ProductID (if greater than 0) |
|  | GradeID | GradeID (if greater than 0) |
|  | PartnerID | PartnerID (if greater than 0) |
|  | Container | ContainerNo (if specified) |
|  | LotNo | LotNo (if specified) |
|  | SerialNo | SerialNo (if specified) |
|  | InventoryClassID | InventoryClassID (if greater than 0) |
|  | ERPMaterialStockID | ERPMaterialStockID (if greater than 0) |
|  | SignatureHeaderID | SignatureHeaderID (if greater than 0) |
|  | CountStatus | 1 - New (on insert only) |
|  | Group | Group (if specified) |
|  | GroupType | GroupType (if greater than 0) |
|  | GroupClassID | GroupClassID (if greater than 0) |
|  | NoOfCounts | Initial number of counts: 1 |
