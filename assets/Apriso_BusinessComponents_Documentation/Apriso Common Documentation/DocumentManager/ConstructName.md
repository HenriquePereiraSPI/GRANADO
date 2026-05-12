# ConstructName

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** Construct

## Description

Names the file associated with a document based on the name construct defined for an Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | documentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |
| Input | equipmentID | Integer | Yes | The ID of the Equipment (from the EQUIPMENT table). |
| Input | languageId | Integer | Yes | Language identification. |
| Output | constructedName | Char | No | The constructed name for the file name based on the name construct defined for the Equipment. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DocumentURL | Char | The document's URL. This will be used instead of looking up the document. |

## Validations

- DocumentID, EquipmentID, and LanguageID must be greater than 0 and valid. 
- The source location must exist for the document.

## System Processing

- If SendNameConstruct is empty for the equipment, use the source filename for the name construct. 
- If SendNameConstruct is not empty for the equipment, then build the name construct based on the values and rules in the SendNameConstruct field.
