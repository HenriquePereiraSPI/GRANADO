# Det2Match

**Category:** Apriso/Determination
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.Determination`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Active

## Description

This Business Component is used to match a record in Determination 2.0.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Det2Code | Char | Yes | The name of the Determination taken from the DET2 database table. |
| Input | Top | Integer | Yes | The number of records that will be retrieved (0 - means no results). |
| Input | SupressNoMatchError | Boolean | Yes | Used when no records are found. When False: display an error message. When True: continues the execution. |
| Input | ParentDet2EntryID | Integer | Conditional | The ID of the related record from the parent Determination. |
| Output | Count | Integer | Yes | The number of records retrieved. |
| Output | MatchedByInputCount | Integer | Yes | The number of Determination Inputs that were used to get the records. |
| Output | EntryIDList | ListofInteger | Yes | The list of IDs for the records. |
| Output | SequenceList | ListofInteger | Yes | The list of Sequence numbers for the records (0, 10, 20). The number of records is ordered by ID. |

## Validations

- There is at least one Dynamic Output

## System Processing

- Based on the custom Business Component Inputs, returns matching values in the custom Business Component Outputs

## Pre-Conditions

none
