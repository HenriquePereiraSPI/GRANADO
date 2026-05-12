# RemoveDispositionTestAttribute

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestAttributeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Removes disposition test attribute record based on the DispositionTestAttributeID
 specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestAttributeID | Integer | Yes | Unique identifier of the Disposition Test Attribute to be removed. |

## Validations

DispositionTestAttributeID must exist in DISPOSITION_TEST_ATTRIBUTE table.

## System Processing

- Validates that the Disposition Test status (the one the Disposition Test Attribute points to) is 'New' (DISPOSITION_TEST_STATUS). 
- Validates that the Disposition Test Characteristic is of 'Attribute' type (CHARACTERISTIC_TYPE - value of 1). 
- Removes Disposition Test Attribute record from DISPOSITON_TEST_ATTRIBUTE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_ATTRIBUTERemoved based on the inputted DispositionTestAttributeID | [All] |  |
