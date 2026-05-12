# UpdateDispositionDimension

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The purpose of this Business Component is to update existing defect dimensions information. This component is used to maintain the value of a defect dimension, or to deactivate it.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionDimensionID | Integer | Yes | ID of an existing Disposition dimension record. |
| Input | DimensionCode | Char | Yes | Dimension Code. |
| Input | MinValue | Decimal | No | Minimum value for Dimension Code. |
| Input | MaxValue | Decimal | No | Maximum value for Dimension Code. |
| Input | AverageValue | Decimal | No | Average value for Dimension Code. |
| Input | UomCode | Char | No | Unit of Measure of the values. |
| Input | Status | Integer | No | Current status of the disposition dimension. |

## Validations

The system verifies that a record is found in the DISPOSITION_DIMENSION table.

## System Processing

System updates the retrieved record in the DISPOSITION_DIMENSION table with the inputs.

## History Recording in Production

For each record produced in the DISPOSITION_DIMENSION table, an entry is generated in both the TRANSACTION_HISTORY table and the TRANSACTION_HISTORY_QUAL_DIMEN table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_DIMENSION | ID | Inputted DispositionDimensionID |
|  | DimensionCode | Inputted DimensionCode |
|  | MinValue | Inputted MinValue |
|  | MaxValue | Inputted MaxValue |
|  | AverageValue | Inputted AverageValue |
|  | UomCode | Inputted UomCode |
|  | Status | Inputted Status |
