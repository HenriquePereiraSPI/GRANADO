# DOCUMENT_TRANSLATION

**Database:** Operational

**Description:** Links the Document's name and physical file (per language).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CodePage | INT(10,0) | True |  | False |  | Code page of Document Translation. |
| DocumentID | INT(10,0) | False |  | True | DOCUMENT | ID of the Document involved. |
| LanguageID | INT(10,0) | False |  | True |  | Language of the entity. |
| URLLocation | NVARCHAR(2000) | True |  | False |  | Location of the document for the given language. |
| XMLSchemaName | NVARCHAR(40) | True |  | False |  | XML Schema Definition for messages containing instances of the translated document. |

## Primary Key

- **PK_DOCUMENT_TRANSLATION** on `DocumentID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_TRANSLATION_DOCUMENT** — DOCUMENT_TRANSLATION -> DOCUMENT (`DocumentID -> ID`)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_PARAMETER_DOCUMENT_TRANSLATION** — DOCUMENT_PARAMETER -> DOCUMENT_TRANSLATION (`DocumentID, LanguageID -> DocumentID, LanguageID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DOCUMENT_TRANSLATION_CLASSIFICATIONID** on `ClassificationID`
