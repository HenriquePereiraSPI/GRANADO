# ResetSequence_v9

**Category:** Apriso/Common/Sequence
**Class:** `FlexNet.BusinessFacade.Common.SequenceProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to reset the sequence of the given sequence name and facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceName | Char | Yes | Name of the sequence to be reset. |
| Input | Facility | Char | Yes | Facility to reset the sequence for. |

## Validations

The System validates that a record is found for the inputted Sequence Name & Facility in the SEQUENCE_ table. If system fails to retrieve a record, it returns an error message.

## System Processing

- System retrieves the SEQUENCE_Start_ value for the inputs, and uses it to determine the first sequence number. 
- Start_ value is copied to Next_ value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_ | Facility | Inputted Facility |
|  | Name | Inputted SequenceName |
|  | Start_ | Retrieved |
|  | Next_ | Updated to Start |
