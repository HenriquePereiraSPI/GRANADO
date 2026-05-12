# CreateDocumentRepository

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateDocumentRepository, Create, Document, Repository

## Description

This Business Component method retrieves the document folder of EMR Header in FlexNetDocumentsFolder path from CentralConfiguration or if it does not exists, it creates the EMR Header folder in this location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header for which document repository should be created. |
| Output | RepositoryLocation | Char | No | Created repository folder local path. |
| Output | RepositoryUrl | Char | No | Created repository folder URL. |

## Validations

- System validates if EMR Header exists.

## System Processing

- System checks if the document repository folder of EMR header exists. If not, then it creates the folder in the configured DELMIA Apriso documents folder path and names it with the EMR Header No. 
- System returns the folder location and folder URL.
