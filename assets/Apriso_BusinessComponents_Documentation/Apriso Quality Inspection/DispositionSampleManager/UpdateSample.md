# UpdateSample

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

The method is used to update Sample created by invoking CreateSample component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SampleID | Integer | Yes | Unique identifier of the sample to be updated. |
| Input | ClassID | Integer | No | Sample class ID |
| Input | Description | Char | No | Description of the sample being updated. |
| Input | SampleQuantity | Decimal | Yes | Quantity of Product that represents a single sample unit. |
| Input | UomCode | Char | Yes | Unit of measure of the sample quantity. |
| Input | ProductID | Integer | Yes | Product ID. |
| Input | GradeID | Integer | No | Grade ID |
| Input | LotNo | Char | No | Lot number of the sample |
| Input | SerialNo | Char | No | Serial number of the sample. |
| Input | Container | Char | No | Container. |
| Input | PartnerID | Integer | No | Partner ID |
| Input | Facility | Char | No | Facility of the sample |
| Input | WarehouseLocationID | Integer | No | Warehouse Location ID of the sample. |

## Validations

- SampleID exists in SAMPLE table. 
- ClassID exists in SAMPLE_CLASS table 
- UomCode exists in UOM table. 
- ProductID exists in PRODUCT table. 
- GradeID exist in GRADE table. 
- ProductID and LotNumber exist in LOT_NO table. 
- ProductID and SerialNumber exist in SERIAL_NO table. 
- Container exists in CONTAINER table. 
- PartnerID exists in PARTNER table. 
- Facility exists in FACILITY table. 
- WarehouseLocationID exists in WAREHOUSE_LOCATION table.

## System Processing

Updates Sample record (SAMPLE table) passing all parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SAMPLE | Number_ | Inputted SampleNumber |
|  | SampleType | Inputted SampleType |
|  | SampleClassID | Inputted ClassID |
|  | Description | Inputted Description |
|  | SampleQuantity | Inputted SampleQuantity |
|  | UomCode | Inputted UomCode |
|  | ProductID | Inputted ProductID |
|  | GradeID | Inputted GradeID |
|  | LotNo | Inputted LotNo |
|  | SerialNo | Inputted SerialNo |
|  | Container | Inputted Container |
|  | ParentContainer | Parent container of the inputted Container. |
|  | PartnerID | Inputted PartnerID |
|  | Facility | Inputted Facility |
|  | WarehouseLocationID | Inputted WarehouseLocationID |
