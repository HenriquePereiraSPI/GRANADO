# GetNextSequenceForFacility

**Category:** Apriso/Common/Sequence
**Class:** `FlexNet.BusinessFacade.Common.SequenceProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to obtain a sequence number (or character string) for wherever a system-generated numeric or alphanumeric range is required. Every Sequence defined is given a unique Sequence Name which is then passed through to this function and the next sequence in the range is returned - based on the options such as a the addition of prefix, suffix or the application of a function.
 

System locks the sequence generation table so that a single sequence can only be assigned at a time. This prevents several users from creating the same sequence simultaneously. Additionally system enables sequence caching so there is no need to query db every time a new sequence number is required. The size of the cache is maintained in SEQUENCE_.CachedSize field.
 

The application of this functionality includes areas such as system generated Serial numbers, Lot numbers, Container numbers etc.
 

 **Supported Features:** 
 
 
- Pre character string to precede the generated sequence number, 
- Post character string to follow the generated sequence number, 
- Unique sequence generation by Sequence Name, 
- Unique Sequence Name by Facility, 
- Sequence Increment. 
- Sequence caching. 
 

 

 **Unsupported Features:** 
 
 
- Alphanumeric sequence generation - includes 0 through 9, A through Z, 
- Value Format determination. 
 

 

 **Extension Points:** 
 

There is an extension point available that allows the user to customize the results of the returned value.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility to get the next sequence for. |
| Input | SequenceName | Char | Yes | The sequence name of sequence to be provided. |
| Output | NextSequence | Char | No | Generated sequence value. |

## Validations

The System validates that a record is found for the inputted Sequence Name in the SEQUENCE_ table. If system fails to retrieve a record, it returns an error message.

## System Processing

- If Facility is not inputted, system retrieves the record in SEQUENCE_ with the specified SequenceName, and Facility set to null. (else it considers the records in SEQUENCE_ that contain the input facility and the input SequenceName. 
- System obtains the Cached Size value for the Sequence Name to determine the number of sequences to obtain. 
- System obtains the next sequence value for that Sequence Name based on the following: 
 
- System applies the following to the next sequence value obtained for computing the return sequence value: 
 
- When Prefix is not null - the prefix value is appended to the beginning of the next sequence in the range, 
- When Suffix is not null - the suffix value is appended to the end of the next sequence in the range. 
 
- System obtains the increment value to compute the next sequence value to be stored back in the SEQUENCE_ table. When the Increment_ value is null, then the default increment is 1. 
- System checks the Maximum value to see if the next sequence is equal to or exceeds this value: 
 
- If the next sequence equals or exceeds the maximum (SEQUENCE_.Max_): 
 
- If the SEQUENCE_.IsCycle is set to false (null means false), system stops processing and returns an error message stating that the sequence reached its maximum. 
- If the SEQUENCE_.IsCycle is set to true, system obtains the minimum value and uses this as the next sequence value to be stored back in the table. 
 
 
 
- System outputs the computed value to NextSequence.

## Pre-Conditions

Sequence exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_ | Facility | Inputted Facility. |
|  | Name | Inputted SequenceName. |
|  | Next_ | Outputted NextSequence |
