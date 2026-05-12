# CreateDispositionReadingLocationDimension

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to create the new dimension for the specified location to identify the disposition reading position. All lists passed as method's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingLocationID | Integer | Yes | Disposition Reading Location to hold the new dimension. |
| Input | DimensionCode | ListofChar | Yes | The code of the new dimension (list). |
| Input | Value | ListofDecimal | Yes | Value of the specified dimension (list). |
| Input | MinValue | ListofDecimal | Yes | Minimum value of the specified dimension (list) |
| Input | MinValueSpecified | ListofBool | Yes |  |
| Input | MaxValue | ListofDecimal | Yes |  |
| Input | MaxValueSpecified | ListofBool | Yes |  |
| Input | UomCode | ListofChar | Yes |  |
| Output | DispositionReadingLocationDimensionID | ListofInteger | No |  |
