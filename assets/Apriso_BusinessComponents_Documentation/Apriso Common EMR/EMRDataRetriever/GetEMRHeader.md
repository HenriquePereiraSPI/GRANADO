# GetEMRHeader

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRDataRetriever`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetEMRHeader, Get, EMRHeader

## Description

This Business Component method retrieves an EMR Header record with the inputted keys.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Key1 | Char | Conditional | First key that identifies the EMR Header. |
| Input | Key2 | Char | Conditional | Second key that identifies the EMR Header. |
| Input | Key3 | Char | Conditional | Third key that identifies the EMR Header. |
| Input | Key4 | Char | Conditional | Fourth key that identifies the EMR Header. |
| Input | Key5 | Char | Conditional | Fifth key that identifies the EMR Header. |
| Input | Key6 | Char | Conditional | Sixth key that identifies the EMR Header. |
| Input | Key7 | Char | Conditional | Seventh key that identifies the EMR Header. |
| Input | Key8 | Char | Conditional | Eighth key that identifies the EMR Header. |
| Output | EmrHeaderID | Integer | No | Retrieved EMR Header ID. |

## System Processing

- System validates if an EMR Header record with inputted keys exists in the system or if it has a duplicate. 
- If it does not exist or it has a duplicate, then the system returns an error. 
- Else the system returns an EMR Header ID.
