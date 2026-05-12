# GetSequences

**Category:** Apriso/Common/Sequence
**Class:** `FlexNet.BusinessFacade.Common.SequenceProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to obtain a sequence number (or character string) for wherever a system-generated numeric or alphanumeric range is required. Every Sequence defined is given a unique Sequence Name which is then passed through to this function and the next sequence in the range is returned - based on the options such as a the addition of prefix, suffix or the application of a function.
 

System locks the sequence generation table so that a single sequence can only be assigned at a time. This prevents several users from creating the same sequence simultaneously. Additionally system enables sequence caching so there is no need to query db every time a new sequence number is required. The size of the cache is maintained in SEQUENCE_.CachedSize field.
 

System also has the ability to support sub-sequences for every sequence defined. This subsequence will be automatically generated if it does not already exists.
 

The application of this functionality includes areas such as system generated Serial numbers, Lot numbers, Container numbers etc.
 

An application of the sub-sequence functionality includes the ability to now generate an individual serial sequences per product.
 

 **Supported Features:** 
 
 
- Pre character string to precede the generated sequence number, 
- Post character string to follow the generated sequence number, 
- Unique sequence generation by Sequence Name, 
- Unique Sequence Name by Facility, 
- Unique Sequence generation by automatically generated sub-sequence 
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
| Input | SubSequenceName | Char | No | The sub-sequence name of sequence to be provided. |
| Input | NumberOfSequences | Integer | Yes | The number of sequences to be provided. |
| Output | NextSequence | Char | No | An array of generated sequence values, equal in length to the NumberOfSequences input. |

## Validations

The System validates that a record is found for the inputted Sequence Name in the SEQUENCE_ table. If system fails to retrieve a record, it returns an error message.

## System Processing

- If Facility is not inputted, system retrieves the record in SEQUENCE_ with the specified SequenceName, and Facility set to null. (else it considers the records in SEQUENCE_ that contain the input facility and the input SequenceName. 
- If SubSequenceKey is provided, then the component will behave as follows 
 
- Check whether there is a SEQUENCE_DETAIL record matching SubsequenceKey for the appropriate SequenceID 
- If the record is not found, create a record by copying all attributes from SEQUENCE then setting Next value to the Min value. Update cache, and then Proceed as if this record was found 
- Proceed by returning a list of sequence numbers calculated from the properties of the SEQUENCE_DETAIL record found above. The SEQUENCE_DETAIL record will have the same fields as SEQUENCE_ table, and behave the same way in regard to the cache size, prefix and suffix. 
 
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

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_ | Facility | Inputted Facility |
|  | Name | Inputted SequenceName |
|  | Next_ | Outputted NextSequence |
| SEQUENCE_DETAIL | DetailName | Inputted SubSequence |
|  | Next_ | Outputted NextSequence |
