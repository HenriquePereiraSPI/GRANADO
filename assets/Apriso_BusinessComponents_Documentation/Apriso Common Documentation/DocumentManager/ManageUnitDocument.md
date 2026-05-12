# ManageUnitDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, link, unit, update

## Description

The purpose of this Business Component method is to create or edit a link between an existing Document and a Unit. The method creates or updates a record in the UNIT_DOCUMENT table, depending on the inputs. When the ID of an existing record is provided, the BC method works in the update mode. Otherwise, it creates a new record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitDocumentID | Integer | Conditional | An optional ID of the Unit Document to be updated. |
| Input | DocumentID | Integer | Conditional | The ID of the Document to be linked. |
| Input | UnitID | Integer | Conditional | The ID of the Unit to link the Document to. |
| Input | Name | Char | Conditional | The unique name of the link across all Documents linked to the Unit. |
| Output | CreatedUnitDocumentID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Description | Char | The description of the link. |
| UserReference | Char | The user reference of the link. |
| DisableNameValidation | Boolean | Disables the validation when the Name is provided and unique. |

## Validations

- The system validates that provided UnitDocumentID exists (for an update of existing record). 
- When UnitDocumentID is zero, the system validates that DocumentID, UnitID, and Name are provided. The DisableNameValidation flag turns off the validation if the Name is provided. 
- The system validates that the provided DocumentID exists. 
- The system validates that the provided UnitID exists. 
- The system validates that UnitID is not changed in the update mode. 
- The system validates that the provided Name is unique across all Documents linked to the Unit. The DisableNameValidation flag disables this validation.

## System Processing

- If UnitDocumentID is not provided, the system creates a new record in the UNIT_DOCUMENT table using the provided inputs. 
- If UnitDocumentID is populated with a non-zero value, the system updates the existing record in the UNIT_DOCUMENT table with the provided values. Empty DocumentID, UnitID, and Name inputs are ignored in the update mode. 
- The description of the link between the Unit and the Document is created or updated in the TEXT_TRANSLATION table. 
- The system returns the ID of the record that was created or updated in the UNIT_DOCUMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_DOCUMENT | ID | UnitDocumentID |
|  | UnitID | UnitID |
|  | DocumentID | DocumentID |
|  | Name | Name |
|  | UserReference | UserReference |
| TEXT_TRANSLATION | Medium | Name |
|  | Extended | Description |
