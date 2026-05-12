# CascadeCopyFlatFileEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to duplicate a new copy of the flat file entity by performing a deep copy of the FLAT_FILE_ENTITY record specified by SourceFlatFileEntityID and all the related child records in all the related FLAT_FILE_FIELD and FLAT_FILE_FIELD_TRANSLATION tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceFlatFileEntityID | Integer | Yes | The unique identifier for the flat file entity to be copied from. |
| Input | NewName | Char | Yes | The name for the new copy of the flat file definition. |
| Input | NewRevision | Char | Yes | The revision for the new copy of the flat file definition. |
| Input | EffectiveDateSpecified | Boolean | No | Determines whether the effective date is used. |
| Input | EffectiveDate | DateTime | No | The new effective date for the new copy of the flat file definition. |
| Input | DiscontinueDateSpecified | Boolean | No | Determines whether the discontinue date is used. |
| Input | DiscontinueDate | DateTime | No | The new discontinue date for the new copy of the flat file definition. |
| Output | NewFlatFileEntityID | Integer | No | The flat file entity ID for the new flat file entity record created. |

## Validations

- SourceFlatFileEntityID, NewName, and NewRevision are required fields.  
- The system verifies NewName and NewRevision together must be unique.

## System Processing

- The system inserts the FLAT_FILE_ENTITY record with NewName, NewRevision, EffectiveDate, and DiscontinueDate as well as copies of all the other field values from the entity record specified by FlatFileEntityID except for RevisionStatusID (RevisionStatusID is set to 0 [Design in Process]).  
- For each child FLAT_FILE_FIELD record for the specified FlatFileEntityID, the system does the following:  
 
- The system inserts the new FLAT_FILE_FIELD record with the new FlatFileEntityID and copies of all the other field values.  
- If IsTranslated is true, for each child FLAT_FILE_FIELD_TRANSLATION record for the specified FlatFileFieldID, the system inserts the new FLAT_FILE_FIELD_TRANSLATION record with the new FlatFileFieldID and copies of all the other field values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_ENTITY | Name | The inputted new name. |
|  | Revision | The inputted new revision. |
|  | FlatFileDefinitionID | Copied from the source record. |
|  | RevisionStatusID | 0 |
|  | Medium | Copied from the source record. |
|  | Group | Copied from the source record. |
|  | GroupType | Copied from the source record. |
|  | GroupClassID | Copied from the source record. |
|  | PartnerID | Copied from the source record. |
|  | Facility | Copied from the source record. |
|  | Warehouse | Copied from the source record. |
|  | ResourceID | Copied from the source record. |
|  | EffectiveDate | The inputted EffectiveDate if the inputted EffectiveDateSpecified = True. |
|  | DiscontinueDate | The inputted DiscontinueDate if the inputted DiscontinueDateSpecified = True. |
| FLAT_FILE_FIELD | Name | Copied from the source record. |
|  | FlatFileEntityID | The new FlatFileEntityID. |
|  | Medium | Copied from the source record. |
|  | Mask | Copied from the source record. |
|  | FieldNumber | Copied from the source record. |
|  | IsTranslated | Copied from the source record. |
| FLAT_FILE_FIELD_TRANSLATION | FlatFileFieldID | The new FlatFileFieldID. |
|  | FromValue | Copied from the source record. |
|  | ToValue | Copied from the source record. |
|  | Warehouse | Copied from the source record. |
|  | ResourceID | Copied from the source record. |
|  | EffectiveDate | The inputted EffectiveDate if the inputted EffectiveDateSpecified = True. |
|  | DiscontinueDate | The inputted DiscontinueDate if the inputted DiscontinueDateSpecified = True. |
| FLAT_FILE_FIELD | Name | Copied from the source record. |
|  | FlatFileEntityID | The new FlatFileEntityID. |
|  | Medium | Copied from the source record. |
|  | Mask | Copied from the source record. |
|  | FieldNumber | Copied from the source record. |
|  | IsTranslated | Copied from the source record. |
| FLAT_FILE_FIELD_TRANSLATION | FlatFileFieldID | The new FlatFileEntityID. |
|  | FromValue | Copied from the source record. |
|  | ToValue | Copied from the source record. |
