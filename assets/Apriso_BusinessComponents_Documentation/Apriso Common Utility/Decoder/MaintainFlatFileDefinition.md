# MaintainFlatFileDefinition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This business component is required to maintain FLAT_FILE_DEFINITION table by updating record for the specified FlatFileDefinitionID or inserting new record

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileDefinitionID | Integer | Yes | Unique identifier for this flat file definition |
| Input | Name | Char | Yes | Name of this flat file definition |
| Input | Revision | Char | Yes | Revision for this flat file definition name |
| Input | Description | Char | No | Free Text Description of this flat file definition |
| Input | RevisionStatusID | Integer | No | Revision Status for this flat file definition. Valid status are 0 - Design in Process (by default), 1 - Active, 2 - Canceled |
| Input | IsFixedLength | Boolean | Yes | True if the flat file is fixed length fields, false if the file is delimited |
| Input | LineLength | Integer | No | The number of characters per line for a fixed length file |
| Input | LineCount | Integer | No | The total number of lines for a fixed length file |
| Input | FieldDelimiter | Char | No | The field delimiter for a delimited file |
| Input | TestMessage | Char | No | A sample message used for testing configuration options |
| Input | PartnerID | Integer | No | The partner that is sending or receiving these messages |
| Input | ResourceID | Integer | No | The internal resource linked to this message |
| Input | EffectiveDate | DateTime | No | The effective date of this flat file definition |
| Input | UseEffectiveDate | Boolean | No | This field determines whether Effective Date is used. |
| Input | DiscontinueDate | DateTime | No | The first date and time this flat file definition is no longer effective |
| Input | UseDiscontinueDate | Boolean | No | This field determines whether Discontinue Date is used. |
| Output | CreatedFlatFileDefinitionID | Integer | No | New or existing ID for which the flat file definition record was added or updated respectively |

## Validations

- Name and Revision together must be unique. 
- System verifies RevisionStatusID is valid. 
- System verifies PartnerID exist if specified. 
- System verifies ResourceID exist if specified. 
- System verifies Length of TextMessage must be <= 2000. 
- If IsFixedLength is true, then LineLength and LineCount must be > 0 and LineLength x LineCount must be >= 2000. 
- If IsFixedLength is false, then FieldDelimiter must not be empty. 
- DiscontinueDate must be greater EffectiveDate except when DiscontinueDate is null which means there's no expiration date. 
- When RevisionStatusID is Active and DiscontinueDate is not null, verifies there's no overlapping validity date range between different revisions of the same definition name and child entities

## System Processing

Insert new record if FlatFileDefinitionID does not exist or update existing record specified by FlatFileDefinitionID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_DEFINITION | Name | Inputted NewName |
|  | Revision | Inputted NewRevision |
|  | RevisionStatusID | 0 |
|  | IsFixedLength | Inputted IsFixedLength |
|  | LineLength | Inputted LineLength |
|  | LineCount | Inputted LineCount |
|  | FieldDelimiter | Inputted FieldDelimiter |
|  | TestMessage | Inputted TestMessage |
|  | PartnerID | Inputted PartnerID |
|  | ResourceID | Inputted ResourceID |
|  | EffectiveDate | Inputted EffectiveDate if Inputted UserEffectiveDate = true |
|  | DiscontinueDate | Inputted DiscontinueDate if Inputted UseDiscontinueDate = true |
|  | Medium | Inputted Description |
