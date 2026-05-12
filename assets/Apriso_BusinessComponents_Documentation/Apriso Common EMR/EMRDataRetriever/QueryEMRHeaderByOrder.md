# QueryEMRHeaderByOrder

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** QueryEMRHeaderByOrder, Query, EMRHeader, Order

## Description

This Business Component method retrieves an EMR Header record with a specified Order No and Order Type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | Order No that identifies the EMR Header. |
| Input | OrderType | Integer | No | Order Type that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking QueryEMRHeader method with the following inputs: 
 
- Key1 as OrderNo, 
- Key1Description as "Order No", 
- Key2 as OrderType, 
- Key2Description as "Order Type".  
 
- System returns an EMR Header ID.
