# ManageUnitAttachment

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Common.AttachmentManager`
**Assembly:** `FlexNet.BusinessFacade.Common`
**Status:** Active
**Keywords:** attachment, link, unit, update

## Description

The purpose of this Business Component method is to create a new or update an existing link between an Attachment and a Unit. The method creates or updates a record in the UNIT_ATTACHMENT table, depending on the provided inputs. When the ID of an existing record is provided, the BC method works in the update mode. Otherwise, it creates a new record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitAttachmentID | Integer | Conditional | The ID of the Unit Attachment to be updated (optional). |
| Input | AttachmenttID | Integer | Conditional | The ID of the Attachment to be linked. |
| Input | UnitID | Integer | Conditional | The ID of the Unit to link the Document to. |
| Output | CreatedUnitAttachmentID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that the provided UnitAttachmentID exists (for an update of the existing record). 
- When UnitAttachmentID is zero, the system validates that AttachmentID and UnitID are provided. 
- The system validates that the provided AttachmentID exists. 
- The system validates that the provided UnitID exists.

## System Processing

- If UnitAttachmentID is not provided, the system creates a new record in the UNIT_ATTACHMENT table using the provided inputs. 
- If UnitAttachmentID is populated with a non-zero value, the system updates the existing record in the UNIT_ATTACHMENT table with the provided values. Empty AttachmentID and UnitID inputs are ignored in the update mode. 
- The system returns the ID of the record that was created or updated in the UNIT_ATTACHMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_ATTACHMENT | ID | UnitAttachmentID |
|  | UnitID | UnitID |
|  | AttachmentID | AttachmentID |
