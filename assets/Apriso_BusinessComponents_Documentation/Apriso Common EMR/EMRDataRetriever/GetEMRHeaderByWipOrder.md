# GetEMRHeaderByWipOrder

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetEMRHeaderByWipOrder, Get, EMRHeader, WipOrder

## Description

System retrieves an EMR Header record with specified Wip Order No and Wip Order Type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip Order No that identifies the EMR Header. |
| Input | WipOrderType | Integer | No | Wip Order Type that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | EMR Header ID. |

## System Processing

- System retrieves an EMR header record by invoking GetEMRHeader method with the following inputs: 
 
- Key1 as WipOrderNo, 
- Key1Description as "Wip Order No", 
- Key2 as WipOrderType, 
- Key2Description as "Wip Order Type". 
 
- System returns an EMR Header ID.
