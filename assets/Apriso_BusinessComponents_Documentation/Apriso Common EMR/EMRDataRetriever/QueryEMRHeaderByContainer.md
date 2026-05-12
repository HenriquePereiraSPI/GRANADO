# QueryEMRHeaderByContainer

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** QueryEMRHeaderByContainer, Query, EMRHeader, Container

## Description

This Business Component method retrieves an EMR Header record with a specified Container and Product ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Container | Char | No | Container that identifies the EMR Header. |
| Input | ProductID | Integer | No | Product ID that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | Yes | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking QueryEMRHeader method with the following inputs: 
 
- Key1 as Container, 
- Key1Description as "Container", 
- Key2 as ProductID, 
- Key2Description as "Product ID".  
 
- System returns an EMR Header ID.
