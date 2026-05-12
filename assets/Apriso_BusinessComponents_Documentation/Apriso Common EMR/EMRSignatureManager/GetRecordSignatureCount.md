# GetRecordSignatureCount

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetRecordSignatureCount, Get, Record, Signature, Count

## Description

This Business Component method gets the number of the signed signatures of a given EMR Record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record for which the signed signatures should be counted. |
| Output | SignedSignatureCount | Integer | No | Signed signatures count. |

## Validations

- System validates if the EMR Record exists in the system.

## System Processing

- System counts the total number of the signed signatures for the given EMR Record.
