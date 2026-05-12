# GetEMRHeaderByResource

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetEMRHeaderByResource, Get, EMRHeader, Resource

## Description

This Business Component method retrieves an EMR Header record with a specified Resource ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking GetEMRHeader method with the following inputs: 
 
- Key1 as ResourceID,  
- Key1Description as "Resource ID",  
- The remaining inputs which are passed. 
 
- System returns an EMR header ID.
