# ExtractAttachmentContent

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** ExtractAttachmentContent, Extract, Attachment, Content

## Description

This Business Component method retrieves the attachment from EMR Header and saves it in DELMIA Apriso document repository.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header with attachment. |
| Input | AttachmentID | Integer | Yes | ID of the Attachment to be retrieved. |
| Output | FileLocation | Char | No | Local path of the attached document. |
| Output | FileUrl | Char | No | URL of the attached document. |
| Output | FileName | Char | No | Name of the file. |

## Validations

- System validates if EMR Header exists in the system. 
- System validates if Attachment exists in EMR. 
- System validates if File path is valid.

## System Processing

- System checks if DELMIA Apriso document repository folder exists. If not, then the folder is created in the configured DELMIA Apriso documents folder path. 
- System reads the Attached file and writes to the repository folder. 
- System returns file location and file URL.
