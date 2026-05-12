# QueryEMRHeaderByLotNo

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** QueryEMRHeaderByLotNo, Query, EMRHeader, LotNo

## Description

This Business Component method retrieves an EMR Header record with a specified Lot No and Product ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LotNo | Char | No | Lot No that identifies the EMR Header. |
| Input | ProductID | Integer | No | Product ID that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking QueryEMRHeader method with the following inputs: 
 
- Key1 as LotNo, 
- Key1Description as "Lot No", 
- Key2 as ProductID, 
- Key2Description as "Product ID". 
 
- System returns an EMR Header ID.
