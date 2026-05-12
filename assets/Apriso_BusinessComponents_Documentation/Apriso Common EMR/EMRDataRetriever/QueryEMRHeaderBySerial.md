# QueryEMRHeaderBySerial

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** QueryEMRHeaderBySerial, Query, EMRHeader, Serial

## Description

This Business Component method retrieves an EMR Header record with a specified Serial No and Product ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SerialNo | Char | Yes | Serial No that identifies the EMR Header. |
| Input | ProductID | Integer | Conditional | Product ID that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System retrieves an EMR Header record by invoking QueryEMRHeader method with the following inputs: 
 
- Key1 as SerialNo, 
- Key1Description as "Serial No", 
- Key2 as ProductID, 
- Key2Description as "Product ID". 
 
- System returns an EMR Header ID.
