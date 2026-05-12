# ManageAttachment

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Common.AttachmentManager`
**Assembly:** `FlexNet.BusinessFacade.Common`
**Status:** Active
**Keywords:** attachment, manage, create

## Description

The purpose of this Business Component method is to create a new or update an existing record in the ATTACHMENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AttachmentID | Integer | Conditional | The ID of the Attachment to be updated. |
| Input | Name | Char | Conditional | The name of the Attachment. |
| Input | URLLocation | Char | Conditional | The absolute URL of the file. |
| Output | CreatedAttachmentID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ClassID | Integer | The ID of the Attachment Class. |
| Title | Char | The title of the Attachment. |
| SequenceNo | Integer | The sequence number of the Attachment. |

## Validations

- If AttachmentID is zero, the system validates that URLLocation is provided. 
- If URLLocation is provided, the system validates that it is absolute. 
- The system validates that the provided AttachmentID exists (in the update mode). 
- The system validates that the provided ClassID exists in the ATTACHMENT_CLASS table.

## System Processing

- If the provided AttachmentID is zero, the system creates a record in the ATTACHMENT table using the provided inputs. 
- If the provided AttachmentID is not zero, the system updates the record in the ATTACHMENT table using the provided inputs. An empty URLLocation input is ignored in the update mode. 
- If URLLocation is provided, the system automatically determines the file format from it and uploads the file to the related record in the FILE_ table. 
- The system returns the ID of the record that was created or updated in the ATTACHMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTACHMENT | ID | AttachmentID/CreatedAttachmentID |
|  | Name | Name (if not provided, get from file name) |
|  | ClassID | ClassID |
|  | Title | Title |
|  | SequenceNo | SequenceNo |
|  | FileID | The ID of the file linked to the Attachment. |
| FILE_ | FormatID | Automatically determined by URLLocation, when a new Attachment is created. |
|  | Content | Binary content of the file retrieved from URLLocation. |
