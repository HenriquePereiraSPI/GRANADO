# ManageAttachment_v2

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Common.AttachmentManager`
**Assembly:** `FlexNet.BusinessFacade.Common`
**Status:** Active
**Keywords:** attachment, manage, create

## Description

Creates a new or updates an existing record in the ATTACHMENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AttachmentID | Integer | Conditional | The ID of the Attachment to be updated. |
| Input | Name | Char | Conditional | The name of the Attachment. |
| Input | URLLocation | Char | Conditional | The absolute URL of the file. |
| Input | IsSerialize | Boolean | Yes | Determines whether the file is serialized in the database. |
| Output | CreatedAttachmentID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ClassID | Integer | The ID of the Attachment Class. |
| Title | Char | The title of the Attachment. |
| SequenceNo | Integer | The sequence number of the Attachment. |
| DisableURLVerification | Boolean | Determines whether verification of URLLocation is disabled. |

## Validations

- If AttachmentID is zero, validation passes when URLLocation is provided. 
- If URLLocation is provided, validation passes when it is absolute. 
- Validation fails if URLLocation is provided, IsSerialize is True, and DisableURLVerification is True. Serialization of files to the database requires URLLocation verification. 
- If URLLocation is provided and DisableURLVerification is either False or not configured, validation passes when a file under URLLocation is accessible. 
- Validation passes if the provided AttachmentID exists in the update mode. 
- Validation passes if the provided ClassID exists in the ATTACHMENT_CLASS table.

## System Processing

- If the provided AttachmentID is zero, the system creates a record in the ATTACHMENT table using the provided inputs. 
- If the provided AttachmentID is not zero, the system updates the record in the ATTACHMENT table using the provided inputs. An empty URLLocation input is ignored in the update mode. 
- If URLLocation is provided, the system automatically determines the file format from it. 
- If IsSerialize is true, the system uploads the file to the related record in the FILE_ table. If it is false, the system creates the FILE_ record with an URL. 
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
|  | URL | If IsSerailze is false, the uploaded file location is stored. |
|  | Content | Binary content of the file retrieved from URLLocation. |
