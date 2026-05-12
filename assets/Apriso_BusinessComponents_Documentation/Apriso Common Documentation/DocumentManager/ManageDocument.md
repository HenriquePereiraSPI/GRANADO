# ManageDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, manage, create, upload

## Description

The purpose of this Business Component method is to add or update a Document in the Document Repository. The method can also create or update the Document translation entry and upload a file to the Documents folder on the server. The location of the Documents folder is determined by the value of the FlexnetDocumentsFolder key in Central Configuration.

*Sample usage for creating a Document based on an uploaded file.*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Conditional | The ID of the Document to be updated. |
| Input | Name | Char | Conditional | The name of the Document. |
| Input | Revision | Char | Conditional | The revision of the Document. |
| Input | LanguageID | Integer | No | The language of the Document translation. |
| Input | URLLocation | Char | No | The absolute or relative URL of the Document translation (i.e. within the Document folder). |
| Output | CreatedDocumentID | Integer | Yes | The ID of the newly created record. |
| Output | UploadedFileName | Char | No | Populated with uploaded file's name. This is a Dynamic Output. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DeleteSourceFile | Boolean | Used on upload. Indicates if the source (temporary) file on the server should be removed. |
| Description | Char | The description of the Document. |
| DiscontinueDate | DateTime | The date to which the Document is valid. |
| DocumentClassID | Integer | The Document Class ID. |
| EffectiveDate | DateTime | The date from which the Document is valid. |
| FileFormatID | Integer | The file format ID of the Document. |
| LocalizedName | Char | The localized name of the Document. |
| StripFUID | Boolean | Used on upload. Indicates if FUID preceding the file name should be removed. |
| UploadFile | Boolean | Indicates if the file from URLLocation should be uploaded to the Documents folder. |
| DocumentStatus | Integer | The ID of the Document status to which the Document will be set on creation. |
| DocumentTypeCode | Char | The Document Type Code of the Document. |

## Validations

- If DocumentID is zero, the system validates that Name and Revision are provided (a new Document has to be created). 
- The system validates that Name and Revision are provided together. 
- The system validates that the provided Name and Revision are unique across all Documents. 
- The system validates that LanguageID and URLLocation are provided together. 
- The system validates that the provided DocumentID exists (in the update mode). 
- The system validates that the provided DocumentClassID exists. 
- The system validates that the provided DocumentTypeCode exists. 
- The system validates that the provided FileFormatID exists.  
- The system validates that the Document Translation to be updated is not a link to the servers' Documents folder. 
- When the UploadFile flag is set, the system validates that the URLLocation is absolute and it is possible to extract a file name from it.

## System Processing

- If the provided DocumentID is zero, the system creates a record in the DOCUMENT table using the provided inputs. 
- If the provided DocumentID is not zero, the system updates the record in the DOCUMENT table using the provided inputs. Empty Name and Revision inputs are ignored in the update mode. 
- When a new Document is created, the system automatically determines the file format using the provided URLLocation. 
- The system determines if the provided URLLocation is absolute or relative, before storing it in the database: 
 
- A relative path or a path that points to the server's Document folder are converted to "[ServerPath]/" combined with a file name. 
- When uploading a file, the URLLocation must be absolute. Then, the location is converted to "[ServerPath]/" combined with a name of uploaded file. 
- Other absolute paths are stored unchanged. 
 
- If LanguageID and URLLocation are provided, the system creates or updates (if exists) a record in the DOCUMENT_TRANSLATION table. It is not possible to update a translation record that points to the local Documents folder. 
- If the UploadFile flag is set to False, the system uploads the file (pointed to by an absolute URLLocation) to the server's Uploads folder (<drive>\Program Files\Dassault Systemes\DELMIA Apriso <version>\WebSite\Portal\Uploads\). 
- If the UploadFile flag is set to True, the system uploads the file (pointed to by an absolute URLLocation) to the server's Document folder. 
 
- If the StripFUID flag is set, the system removes a FUID preceding the file name from URLLocation. The option is useful to trim the name of the file that was uploaded earlier to a temporary folder on the server (e.g. by the File Picker UI control). 
- If the DeleteSourceFile flag is set, the system deletes a local file after the upload. This option can be used to delete a file that was uploaded earlier to a temporary folder on the server. 
- If uploaded file name exists in the Documents folder, it is followed by a generated FUID. 
- The upload (deployment) of the file is performed in the background by the Global Process Manager to ensure all nodes of the server are synchronized and receive the uploaded file. 
- The file name of the uploaded document can only contain characters from the list: "a-z", "A-Z", "0-9", ".", "-" and "_". Any other characters will be removed from the file name. 
 
- The system returns the ID of the record that was created or updated in the DOCUMENT table. 
- If a Dynamic Output UploadedFileName (of type Char) exists (i.e. if UploadFile is set to True), it is populated with the name of the uploaded file. 
- If the Dynamic Input DocumentStatus is not specified, the Document will be created with the default status of New.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DOCUMENT | ID | DocumentID/CreatedDocumentID |
|  | Name | Name |
|  | Revision | Revision |
|  | EffectiveDate | EffectiveDate |
|  | DiscontinueDate | DiscontinueDate |
|  | DocumentClassID | DocumentClassID |
|  | DocumentTypeCode | DocumentTypeCode |
|  | FileFormatID | FileFormatID (automatically determined by URLLocation when a new Document is created). |
| DOCUMENT_TRANSLATION | DocumentID | CreatedDocumentID |
|  | LanguageID | LanguageID |
|  | URLLocation | URLLocation (relative URLs are automatically preceded by "[ServerPath]/"). |
| TEXT_TRANSLATION | Medium | LocalizedName |
|  | Extended | Description |
