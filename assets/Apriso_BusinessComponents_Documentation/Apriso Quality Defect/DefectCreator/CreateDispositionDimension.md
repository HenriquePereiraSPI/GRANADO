# CreateDispositionDimension

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The purpose of this Business Component is to create new defect dimensions information for a Disposition Test.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | ID of an existing Disposition test record. |
| Input | DimensionCode | Char | Yes | Dimension Code. |
| Input | MinValue | Decimal | No | Minimum value for Dimension Code. |
| Input | MaxValue | Decimal | No | Maximum value for Dimension Code. |
| Input | AverageValue | Decimal | No | Average value for Dimension Code. |
| Input | UomCode | Char | No | Unit of Measure of the values. |
| Output | DispositionDimensionID | Integer | No | Disposition Dimension ID that had been created/updated. |

## Validations

System verifies that the inputted Disposition Test exists in the DISPOSITION_TEST table.

## System Processing

System creates a record in the DISPOSITION_DIMENSION table with the inputs.

## History Recording in Production

For each record produced in the DISPOSITION_DIMENSION table, an entry is generated in both the TRANSACTION_HISTORY table and the TRANSACTION_HISTORY_QUAL_DIMEN table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_DIMENSION | ID | Outputted DispositionDimensionID |
|  | DispositionTestID | Inputted DispositionTestID |
|  | DimensionCode | Inputted DimensionCode |
|  | MinValue | Inputted MinValue |
|  | MaxValue | Inputted MaxValue |
|  | AverageValue | Inputted AverageValue |
|  | UomCode | Inputted UomCode |
