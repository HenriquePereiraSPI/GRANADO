# UpdateDispositionReadingLocationDimension

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to create the new dimension for the specified location to identify the disposition reading position. All lists passed as method's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingLocationDimensionID | Integer | Yes | Disposition Reading Location to hold the new dimension. |
| Input | DimensionCode | ListofChar | Yes | The code of the new dimension. |
| Input | Value | ListofDecimal | Yes | Value of the specified dimension. |
| Input | MinValue | ListofDecimal | Yes | Minimum value of the specified dimension |
| Input | MinValueSpecified | ListofBool | Yes | Flag indicating if Minimum value is specified |
| Input | MaxValue | ListofDecimal | Yes | Maximum value of the specified dimension |
| Input | MaxValueSpecified | ListofBool | Yes | Flag indicating if Maximum value is specified |
| Input | UomCode | ListofChar | Yes | Unit of measure of the specified dimension |

## Validations

- DispositonReadingLocationDimensionID exists in DISPOSITION_READING_LOC_DIM table. 
- DimensionCode exists in DIMENSION table. 
- UomCode exists in UOM table

## System Processing

Updates disposition reading location dimension record (DISPOSITION_READING_LOC_DIM) with the inputted parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING_LOC_DIM | DimensionCode | Inputted DimensionCode |
|  | Value_ | Inputted Value |
|  | MinValue_ | Inputted MinValue or set to null if inputted MinValueSpecified is false |
|  | MaxValue_ | Inputted MaxValue or set to null if inputted MaxValueSpecified is false |
|  | UomCode | Inputted UomCode |
