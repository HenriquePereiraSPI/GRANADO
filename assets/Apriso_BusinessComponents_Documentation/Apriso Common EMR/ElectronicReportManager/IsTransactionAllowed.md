# IsTransactionAllowed

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** IsTransactionAllowed, Transaction, Allowed

## Description

This Business Component method validates if EMR Header allows to proceed with the transaction.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | EMR Header ID. |
| Output | Allowed | Boolean | No | Allow transaction flag. |

## Validations

- System validates if EMR Header exists in the system. 
- System validates EMR Header status.

## System Processing

- System validates if EMR header is in open status. 
- System validates if there are any unsigned blocking signatures.  
 
- If not, the system returns Allowed flag as true.
