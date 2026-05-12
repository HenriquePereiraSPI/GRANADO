# UNIT_DOCUMENT

**Database:** Operational

**Description:** This table stores links between documents and entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | The ID of the linked document. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| Name | NVARCHAR(255) | True |  | False |  | The name of the linked document. It may be different than the actual document title. |
| Status | INT(10,0) | False | ((1)) | False |  | The Status of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | False |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(255) | True |  | False |  | Custom use. Can store any additional data. |

## Primary Key

- **PK_UNIT_DOCUMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_UNIT_DOCUMENT** — UNIT_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_UNIT_UNIT_DOCUMENT** — UNIT_DOCUMENT -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_UNIT_DOCUMENT_USAGE_UNIT_DOCUMENT** — UNIT_DOCUMENT_USAGE -> UNIT_DOCUMENT (`UnitDocumentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_UNIT_DOCUMENT_DSInstanceID** on `DSInstanceID`
- **IXD_DocumentID** on `DocumentID`
- **IXD_UnitID** on `UnitID`
