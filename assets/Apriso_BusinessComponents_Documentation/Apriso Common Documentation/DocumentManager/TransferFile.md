# TransferFile

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** Transfer, Document

## Description

Copies the file associated with a document to the Download Target or Upload Target Path defined for an Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | documentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |
| Input | equipmentID | Integer | Yes | The ID of the Equipment (from the EQUIPMENT table). |
| Input | languageId | Integer | Yes | Language identification. |
| Input | targetfilename | Char | No | The filename for the copied file. If blank, uses the filename associated with the document. |
| Input | checkDestFileExist | Boolean | No | If true, checks if the file exists in the target location and doesn't transfer. |
| Input | forDownload | Boolean | No | Determines if the document is being downloaded or uploaded. |
| Output | destFileExist | Boolean | No | Returns true if the file exists in the target location. |
| Output | message | Char | No | Tells the user whether the transfer is successful or whether it is being done in the background. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DocumentURL | Char | The document's URL. This will be used instead of looking up the document. |
| QueueLargeTransfers | Boolean | Determines if large file transfers should be done in the background. |
| LargeTransferFileSize | Integer | Files above this size (in MB) are considered large files. |

## Validations

- The target location must be valid and accessible. 
- DocumentID, EquipmentID, and LanguageID must be greater than 0 and valid. 
- The Equipment must be a machine type. 
- If forDownload is false, and not DFC protocol, check that the upload path is valid. 
- The document must be active. 
- If forDownload is true, check that the source translation file exists. 
- Check that the send path is valid.

## System Processing

- If forDownload is true, downloads the file to the designated location. 
- If forDownload is false, uploads the file to the designated translation location. 
- If forDownload is true, updates or creates a new Download record.
