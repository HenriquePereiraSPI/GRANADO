# RemoveDispositionContent

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionContentManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

Method is used to store the whole population for the test. It creates the current snapshot of the subject of the test for the future analysis. The method allows for specifying resource as the subject of test in case the inspection is carried out against the equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionContentID | Integer | Yes | Unique identifier of Disposition Content. |

## Validations

DispositionContentID must exist in DISPOSITION_CONTENT table.

## System Processing

- lidates that disposition content is linked to is 'New', 'Released' or 'Started'. 
- Removes Disposition Content record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | All fields | Removed base on the inputted DispositionContentID |
