# RemoveDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

Method is used to remove specific Quality Inspection from the collection of Dispositions.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | Facility | Char | Yes | Facility where the Inspection takes place. |

## Validations

- Disposition and Facility must exit in DISPOSITION table. 
- Disposition status must be 'New', 'Released' or 'Started' (DISPOSITION_STATUS table)

## System Processing

- Removes all disposition lines linked to the specified disposition by calling Remove Disposition Line component. 
- Removes Disposition with the following child records: Disposition Content; Disposition Resource.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | [All] |  |
| DISPOSITION_CONTENT | [All] |  |
| DISPOSITION_RESOURCE | [All] |  |
| All tables affected by calling Remove Disposition Line Business Component |  |  |
