# AddDispositionResourceContent

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionContentManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to store the whole population for the test. It creates a current snapshot of the subject of the test for future analysis. This BC allows for specifying a resource as the subject of a test in case the inspection is carried out against the Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | The Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | The Facility of the content record. |
| Input | ResourceID | Integer | Yes | The Resource identifier (used in case of inspection of the Resource, e.g., calibration inspection). |
| Input | ResourceLifeCycleID | Integer | No | The life cycle of the Resource (ResourceID). |
| Output | DispositionContentID | Integer | No | The unique identifier of the newly created Disposition content. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in the DISPOSITION table and the status of the Disposition must be New, Released, or Started (DISPOSITION_STATUS). 
- ResourceID must exist in the RESOURCE table. 
- ResourceLifeCycleID must exist in the RESOURCE_LIFE_CYCLE table.

## System Processing

The system creates the Disposition content records for all the items of the list passed as Inputs and the default type = Resource (value of 3).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | Disposition | The inputted Disposition. |
|  | DispositionFacility | The inputted Facility. |
|  | ResourceID | The inputted ResourceID. |
|  | ResourceLifeCycleID | The inputted ResourceLifeCycleID. |
|  | DispositionContentType | 'Resource' (value of 3) |
