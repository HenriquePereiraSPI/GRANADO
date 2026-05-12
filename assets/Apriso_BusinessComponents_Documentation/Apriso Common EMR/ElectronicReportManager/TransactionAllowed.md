# TransactionAllowed

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** TransactionAllowed, Transaction, Allowed

## Description

This Business Component method validates if EMR Header allows to proceed with the transaction.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header to be validated. |

## Validations

- System validates if the EMR Header exists in the system. 
- System validates the EMR Header status.

## System Processing

- System validates if the EMR header is in open status, if the status is not open, the system returns an error. 
- System validates if there are any unsigned blocking signatures.
