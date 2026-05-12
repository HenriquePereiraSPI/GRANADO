# MergePDFDocuments

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.PDFManager`
**Assembly:** `FlexNet.BusinessFacade.Utility`
**Status:** Active
**Keywords:** pdf

## Description

Merges one or more PDF documents in to single combined document. Any source document that fails validation is not merged. The component does not fail unless all source documents fail to merge. The component is limited to the files in the documents directory (CentralConfiguration -> FlexNet.Framework -> FlexNetDocumentsFolder) or child directories.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DestinationFilePath | Char | Yes | Relative file path of combined PDF document. |
| Input | SourceFilePaths | List of Char | Yes | Relative file paths of source PDF documents. |

## Validations

- Validation fails if a source or destination file path is blank or empty. 
- Validation fails if a source or destination file path has invalid characters. 
- Validation fails if a source or destination file path is not a relative path. 
- Validation fails if a source or destination file path is not under the documents directory. 
- Validation fails if a source or destination file path does not specify a file with the .pdf extension. 
- Validation fails if there exists a file at the destination file path. 
- Validation fails if there does not exist a file at any source file path.

## System Processing

- System validates the DestinationFilePath input and that SourceFilePaths is populated. 
- System returns an error if the DestinationFilePath is invalid in any way, or there are no entries in SourceFilePaths. 
- System creates a new PDF document and iterates the documents specified at each entry in SourceFilePaths. Each valid source file is appended to the new PDF document. Invalid source files are skipped. 
- System saves the new PDF document to the DestinationFilePath unless all source files are invalid. 
- System returns an error if no source files are valid. 
- System returns an error if it is unable to save the new PDF document.
