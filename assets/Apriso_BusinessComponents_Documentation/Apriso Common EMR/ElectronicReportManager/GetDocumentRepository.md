# GetDocumentRepository

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetDocumentRepository, Get, Document, Repository

## Description

This Business Component method retrieves the documents folder path for the EMR Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | ID of the EMR Header for which document repository should be retrieved. |
| Output | RepositoryLocation | Char | No | Retrieved repository folder local path. |
| Output | RepositoryUrl | Char | No | Retrieved repository folder URL. |

## Validations

- System validates if EMR Header exists in the system.

## System Processing

- System retrieves the document repository folder for EMR Header in the configured DELMIA Apriso documents folder path where the name of the folder is the EMR Header No. 
- System returns the folder location and folder URL.
