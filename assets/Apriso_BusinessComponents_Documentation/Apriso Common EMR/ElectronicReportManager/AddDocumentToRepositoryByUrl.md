# AddDocumentToRepositoryByUrl

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** AddDocumentToRepositoryByUrl, Add, Document, Repository, Url

## Description

This Business Component method downloads the EMR document to the local directory through a URL.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | The ID of the EMR Header with the attachment. |
| Input | DocumentUrl | Char | No | The URL of the attached document. |
| Output | FileLocation | Char | No | The local path to the document. |
| Output | FileUrl | Char | No | The document URL. |
| Output | FileName | Char | No | The file name. |

## Validations

The system validates if the EMR Header exists in the system.

## System Processing

- The system retrieves the document repository folder of the EMR Header via the configured DELMIA Apriso documents folder path with the EMR Header number. 
- The system downloads the document from DocumentUrl and saves the file with a newly generated GUID as the file name to the local repository folder. 
- The system returns the folder location, folder URL, and file name.
