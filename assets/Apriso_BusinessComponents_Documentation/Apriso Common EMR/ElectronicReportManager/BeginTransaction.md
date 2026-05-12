# BeginTransaction

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** BeginTransaction, Begin, Transaction

## Description

This Business Component method generates a unique GUID as a transaction token for the EMR report transaction (within the EMR context).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | EMR Header ID. |
| Output | TransactionToken | Char | No | Transaction Token. |

## Validations

- The system validates if an EMR header exists in the system. 
- The system validates if an EMR header exists in the current EMR context.

## System Processing

- The system generates a transaction token and sets it to the EMR context. 
- The system sets the EMR header ID to the EMR context. 
- The system sets the signature header value to the signature header context if it exists in the EMR context.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE | ALL |  |
