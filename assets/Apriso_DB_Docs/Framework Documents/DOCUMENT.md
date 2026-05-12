# DOCUMENT

**Database:** Operational

**Description:** This table stores the documents defined in DELMIA Apriso that can be displayed as part of a Process.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DiscontinueDate | DATETIME | True |  | False |  | The date when the validity of the entity ends. |
| DocumentClassID | INT(10,0) | True |  | False | DOCUMENT_CLASS | The link to the document class. |
| DocumentFormat | SMALLINT(5,0) | True |  | False | DOCUMENT_FORMAT | The enumeration of the document format type (e.g., *.doc, *.xls, *.pdf). |
| DocumentStatus | SMALLINT(5,0) | False | ((4)) | False | DOCUMENT_STATUS | Link to the DOCUMENT_STATUS table. |
| DocumentTypeCode | NVARCHAR(60) | True |  | False | DOCUMENT_TYPE | The enumeration of the values that describe various types of commercial documents. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| EditLockBy | NVARCHAR(50) | True |  | False |  | User who has document checked out. |
| EffectiveDate | DATETIME | True |  | False |  | The date when the validity of the entity starts. |
| FileFormatID | INT(10,0) | True |  | False | FILE_FORMAT | The ID of the file format. |
| FUID | NVARCHAR(36) | True |  | False |  | The unique ID of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| LastEditBy | NVARCHAR(50) | True |  | False |  | User that last edited the document. |
| LastEditOn | DATETIME | True |  | False |  | Date the document was checked out. |
| LastRevBy | NVARCHAR(50) | True |  | False |  | User that last revised the document. |
| LastRevDesc | NVARCHAR(75) | True |  | False |  | Revision description. |
| LastRevOn | DATETIME | True |  | False |  | Date document was last revised. |
| LockedLanguageID | INT(10,0) | True |  | False |  | Id of language that is checked out. |
| Name | NVARCHAR(255) | False |  | False |  | The name of the entity. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Link to the PROGRESS_STATUS table. |
| Revision | NVARCHAR(20) | False |  | False |  | For future use. |
| SchemaURLFlag | BIT | True |  | False |  | The link to the BizTalk Server repository. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_DOCUMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_DOCUMENT_CLASS** — DOCUMENT -> DOCUMENT_CLASS (`DocumentClassID -> ID`)
- **FK_DOCUMENT_DOCUMENT_FORMAT** — DOCUMENT -> DOCUMENT_FORMAT (`DocumentFormat -> DocumentFormat`)
- **FK_DOCUMENT_DOCUMENT_STATUS** — DOCUMENT -> DOCUMENT_STATUS (`DocumentStatus -> DocumentStatus`)
- **FK_DOCUMENT_DOCUMENT_TYPE** — DOCUMENT -> DOCUMENT_TYPE (`DocumentTypeCode -> DocumentTypeCode`)
- **FK_DOCUMENT_FILE_FORMAT** — DOCUMENT -> FILE_FORMAT (`FileFormatID -> ID`)
- **FK_DOCUMENT_PROGRESS_STATUS** — DOCUMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_DOCUMENT_UNIT** — DOCUMENT -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_DOCUMENT_GRID_DETAILS** — DOCUMENT_GRID_DETAILS -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOCUMENT_GROUP_01** — DOCUMENT_GROUP -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOCUMENT_REGION_REASON_CODE_DOCUMENT** — DOCUMENT_REGION_REASON_CODE -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOCUMENT_RELATION_DOCUMENT_CHILD** — DOCUMENT_RELATION -> DOCUMENT (`ChildDocumentID -> ID`)
- **FK_DOCUMENT_RELATION_DOCUMENT_PARENT** — DOCUMENT_RELATION -> DOCUMENT (`ParentDocumentID -> ID`)
- **FK_DOCUMENT_TRANSLATION_DOCUMENT** — DOCUMENT_TRANSLATION -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOCUMENT_UNIT_DOCUMENT** — UNIT_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOWNLOAD_DOCUMENT** — DOWNLOAD -> DOCUMENT (`DocumentID -> ID`)
- **FK_EC_ORDER_DOC_DOCUMENT** — EC_ORDER_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_DOCUMENT_DESTINATION_ID** — ECM_ORDER_DOCUMENT -> DOCUMENT (`DocumentDestinationID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_DOCUMENT_ID** — ECM_ORDER_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_EQUIPMENT_DOC_DOCUMENT** — EQUIPMENT_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_OPERATION_DOC_DOCUMENT** — OPERATION_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_OPERATION_STEP_DOC_DOCUMENT** — OPERATION_STEP_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PRINT_REQUEST_HISTORY_DOCUMENT** — PRINT_REQUEST_HISTORY -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_DOC_DOCUMENT** — PROCESS_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_OPERATION_DOC_DOCUMENT** — PROCESS_OPERATION_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_OPERATION_STEP_DOC_DOCUMENT** — PROCESS_OPERATION_STEP_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_DOC_DOCUMENT** — PROCESS_REQ_RESOURCE_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_PRODUCT_ROUTING_STEP_DOC_DOCUMENT** — PRODUCT_ROUTING_STEP_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_QUALITY_DEFECT_DOCUMENT** — QUALITY_DEFECT -> DOCUMENT (`DocumentID -> ID`)
- **FK_RESOURCE_CLASS_DOC_DOCUMENT** — RESOURCE_CLASS_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_RESOURCE_ROUTING_STEP_DOC_DOCUMENT** — RESOURCE_ROUTING_STEP_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_WIP_DOCUMENT_DOCUMENT** — WIP_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_WIP_REQ_RESOURCE_DOC_DOCUMENT** — WIP_REQ_RESOURCE_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_WORK_INSTR_REVISION_DOCUMENT_DOCUMENT** — WORK_INSTR_REVISION_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)

## Unique Indexes

- **UK_DOCUMENT** on `FUID`
- **UK_DOCUMENT_NAME_REVISION** on `Name, Revision`

## Non-Unique Indexes

- **IDX_DOCUMENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_DOCUMENT_DOCUMENT_CLASS** on `DocumentClassID`
- **IF_DOCUMENT_DOCUMENT_FORMAT** on `DocumentFormat`
- **IF_DOCUMENT_DOCUMENT_STATUS** on `DocumentStatus`
- **IF_DOCUMENT_DSID** on `DSID`
- **IF_DOCUMENT_FILE_FORMAT** on `FileFormatID`
- **IF_DOCUMENT_PROGRESS_STATUS** on `ProgressStatus`
- **IF_DOCUMENT_UNIT** on `UnitID`
