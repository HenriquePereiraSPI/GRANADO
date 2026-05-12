# CreateDispositionReadingLocation

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to create a location of the disposition reading along with values for all dimensions used to identify the reading position.. All lists passed as method's parameters are of the same size.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingID | Integer | Yes | Disposition Reading to hold the new location. |
| Input | LocationCode | Char | Yes | The code of the new location |
| Input | Comment | Char | Yes | Comment of the new location |
| Input | DimensionCode | ListofChar | Yes | The code of the new dimension. |
| Input | Value | ListofDecimal | Yes | Value of the specified dimension. |
| Input | MinValue | ListofDecimal | Yes | Minimum value of the specified dimension |
| Input | MinValueSpecified | Boolean | Yes | Flag indicating if Minimum value is specified |
| Input | MaxValue | ListofDecimal | Yes | Maximum value of the specified dimension |
| Input | MaxValueSpecified | ListofBool | Yes | Flag indicating if Maximum value is specified |
| Input | UomCode | ListofChar | Yes | Unit of measure of the specified dimension |
| Output | DispositionReadingLocationID | Integer | Yes | ID of thereated Disposition Reading Location |

## Validations

DispositonReadingID exists in DISPOSITION_READING table.

## System Processing

- Creates a new record in DISPOSITION_READING_LOCATION table populating the following fields: 
 
- DispositionReadingID, 
- LocationCode 
- Comment 
 
- Invokes CreateDispositionReadingLocationDimension component passing the following parameters: 
 
- DispositionReadingLocationID - ID of the created disposition reading location 
- Inputted DimensionCode, Value, MinValue, MinValueSpecified, MaxValue, MaxValueSpecified and UomCode

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING_LOCATION | DispositionReadingID | Inputted DispositionReadingID |
|  | LocationCode | Inputted LocationCode |
|  | Comment | Inputted Comment |
| All tables populatd by CreateDispositionReadingLocationDimension method |  |  |
