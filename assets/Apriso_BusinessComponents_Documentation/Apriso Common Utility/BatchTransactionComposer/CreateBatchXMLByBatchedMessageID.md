# CreateBatchXMLByBatchedMessageID

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.BatchTransactionComposer`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

The purpose of this BC is to trigger the second step of the batching process. Refer to Business Integrator - Configuration Guidelines Guide for more information.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BatchedMessageID | Char | No | The Batched Message ID is a value assigned to messages in the Transaction_Data_Batch_Process table which the caller wants to group at the same time. |

## System Processing

System reads all records from Transaction_Data_Batch_Process table that have the values of BatchedMessageID specified from the input parameter. Then group the records together by user configured criteria and creates a batched XML for each group. A new Job Executor Job is created for each batched XML which will be further process by Business Integrator to external system.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Transaction_Data_Batch_Process |  |  |
