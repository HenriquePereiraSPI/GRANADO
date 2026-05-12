# CascadeCopyFlatFileDefinition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to duplicate a new copy of a flat file definition by performing a deep copy of the FLAT_FILE_DEFINTION record specified by FlatFileDefinitionID and all the related child records in the FLAT_FILE_ENTITY, FLAT_FILE_FIELD, and FLAT_FILE_FIELD_TRANSLATION tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileDefinitionID | Integer | Yes | The unique identifier of the existing flat file definition to be copied from. |
| Input | NewName | Char | Yes | The name for the new copy of the flat file definition. |
| Input | NewRevision | Char | Yes | The revision for the new copy of the flat file definition. |
| Input | EffectiveDateSpecified | Boolean | No | Determines whether the effective date is used. |
| Input | EffectiveDate | DateTime | No | The new effective date for the new copy of the flat file definition. |
| Input | DiscontinueDateSpecified | Boolean | No | Determines whether the discontinue date is used. |
| Input | DiscontinueDate | DateTime | No | The new discontinue date for the new copy of the flat file definition. |
| Output | CreatedFlatFileDefinitionID | Integer | No | The flat file definition ID for new flat file definition record created. |

## Validations

- The new name and new revision cannot be the same as the name and revision of the source definition, and they must be unique in the database.

## System Processing

- The system creates a new record in the FLAT_FILE_DEFINITION table for the specified FlatFileDefinitionID with NewName, NewRevision, EffectiveDate, and DiscontinueDate (if specified). 
 
- The system copies all the other data to the new FLAT_FILE_DEFINITION record with the following exceptions: 
 
- RevisionStatusID is set to 0 (Design in Process). 
- If IsFixedLength is True, the system only copies LineLength and LineCount. Otherwise, the system copies FieldDelimiter. 
- If EffectiveDateSpecified = True, the system sets EffectiveDate with the inputted EffectiveDate. Otherwise, it is set to null 
- If DiscontinueDateSpecified = True, the system sets DiscontinueDate with the inputted DiscontinueDate. Otherwise, it is set to null. 
 
 
- The system invokes the CascadeCopyFlatFileEntity BC for each FlatFileEntityID in the FLAT_FILE_ENTITY table for the specified FlatFileDefinitionID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_DEFINITION | Name | The inputted NewName. |
|  | Revision | The inputted NewRevision. |
|  | RevisionStatusID | 0 |
|  | IsFixedLength | Copied from the source record. |
|  | LineLength | Copied from the source record. |
|  | LineCount | Copied from the source record. |
|  | FieldDelimiter | Copied from the source record. |
|  | TestMessage | Copied from the source record. |
|  | PartnerID | Copied from the source record. |
|  | ResourceID | Copied from the source record. |
|  | EffectiveDate | The inputted EffectiveDate if EffectiveDateSpecified = True. |
|  | DiscontinueDate | The inputted DiscontinueDate if DiscontinueDateSpecified = True. |
|  | Medium | Copied from the source record. |
| FLAT_FILE_ENTITY | Name | Copied from the source record. |
|  | Revision | Append "-" + the inputted NewRevision. |
|  | FlatFileDefinitionID | The new FlatFileDefinitionID. |
|  | RevisionStatusID | 0 |
|  | Medium | Copied from the source record. |
|  | Group | Copied from the source record. |
|  | GroupType | Copied from the source record. |
|  | GroupClassID | Copied from the source record. |
|  | PartnerID | Copied from the source record. |
|  | Faciity | Copied from the source record. |
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
