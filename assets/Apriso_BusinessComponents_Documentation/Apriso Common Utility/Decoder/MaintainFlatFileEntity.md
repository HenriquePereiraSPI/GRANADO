# MaintainFlatFileEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This business component updates FLAT_FILE_ENTITY table by updating record for the specified FlatFileEntityID or inserting new record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileEntityID | Integer | Yes | Unique Identifier for this flat file entity. |
| Input | Name | Char | Yes | Name of this flat file entity. |
| Input | Revision | Char | Yes | Revision for this flat file entity name. |
| Input | FlatFileDefinitionID | Integer | Yes | Identifier of a flat file definition this flat file entity is linked to. |
| Input | RevisionStatusID | Integer | Yes | Revision Status for this Entity. Valid status are 0 - Design in Process (by default), 1 - Active, 2 - Canceled |
| Input | Group | Char | No | Group associated with for this flat file Entity |
| Input | GroupType | Integer | No | Group type associated with this flat file entity |
| Input | GroupClassID | Integer | No | Group class associated with this flat file entity |
| Input | PartnerID | Integer | No | Partner associated with this flat file entity |
| Input | ResourceID | Integer | No | Resource associated with this flat file entity |
| Input | Facility | Char | No | Facility associated with this flat file entity. |
| Input | Warehouse | Char | No | The warehouse this flat file definition is for. |
| Input | EffectiveDate | DateTime | No | The effective date for this flat file entity |
| Input | UseEffectiveDate | Boolean | No | Specify whether EffectiveDate is used. |
| Input | DiscontinueDate | DateTime | No | The date and time this flat file definition is no longer effective |
| Input | UseDiscontinueDate | Boolean | No | Specify whether DiscontinueDate is used. |
| Input | Description | Char | No | Free Text Description for this flat file entity. |
| Output | CreatedFlatfileEntityID | Integer | No | New or existing ID for which the flat file entity record was added or updated respectively |

## Validations

- Name and Revision together must be unique. 
- System verifies Group, GroupType and GroupClass exist if specified. 
- System verifies PartnerID exist if specified. 
- System verifies ResourceID exist if specified. 
- DiscontinueDate must be greater than EffectiveDate except when DiscontinueDate is null which means there's no expiration date.  
- When RevisionStatusID is 1 - Active and DiscontinueDate is not null, verify there's no overlapping validity date range between different revisions of the same entity and within the validity dates of the parent definition.

## System Processing

Insert new record if FlatFileEntityID does not exist or update existing record specified by FlatFileEntityID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_ENTITY | Name | Inputted NewName |
|  | Revision | Inputted NewRevision |
|  | FlatFileDefinitionID | Inputted FlatFileDefinitionID |
|  | RevisionStatusID | Inputted RevisionStatusID |
|  | Medium Group | Inputted Description |
|  | Group | Inpoutted |
|  | GroupType | Inputted GroupType |
|  | GroupClassID | Inputted GroupClassID |
|  | PartnerID | Inputted PartnerID |
|  | Facility | Inputted Facility |
|  | Warehouse | Inputted Facility |
|  | ResourceID | Inputted ResourceID |
|  | Effective Date | Inputted EffectiveDate if Inputed UseEffectiveDate = true |
|  | DiscontinueDate | Inputted DiscontinueDate if Inputed UseDiscontinueDate = true |
