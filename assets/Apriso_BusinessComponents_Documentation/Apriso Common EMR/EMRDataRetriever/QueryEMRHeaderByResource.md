# QueryEMRHeaderByResource

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** QueryEMRHeaderByResource, Query, EMRHeader, Resource

## Description

This Business Component method retrieves an EMR Header record with a specified Resource ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | No | Resource ID that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking QueryEMRHeader method with the following inputs: 
 
- Key1 as ResourceID, 
- Key1Description as "Resource ID", 
- The remaining inputs which are passed.  
 
- System returns EMR Header ID.
