# UnlinkContainer

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted container. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container Number |
| Output | Count | Integer | No | Number of records unlinked |

## System Processing

- System validates ContainerNo 
- For each EpcTag in EPC_TAG(ContainerNo) 
 
- System updates EpcTag.ContainerNo = null 
- Count = Count + 1 
 
- System returns Count

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
