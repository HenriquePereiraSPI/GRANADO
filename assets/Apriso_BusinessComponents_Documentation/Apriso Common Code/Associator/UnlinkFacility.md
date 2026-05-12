# UnlinkFacility

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted facility. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility |
| Output | Count | Integer | No | Number of records unlinked |

## System Processing

- Validates Facility 
- For each EpcTag in EPC_TAG(Facility) 
 
- Update EpcTag.Facility = null 
- Count = Count + 1 
 
- Return Count

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
