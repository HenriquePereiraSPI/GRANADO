# DOCUMENT_PARAMETER

**Database:** Operational

**Description:** Not used

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DocumentID | INT(10,0) | False |  | True | DOCUMENT_TRANSLATION | ID of the Document involved. |
| LanguageID | INT(10,0) | False |  | True | DOCUMENT_TRANSLATION | Language of the entity. |
| ParameterValue | NVARCHAR(80) | True |  | False |  | Must match a name in the schema referenced by XML-Schema-Name in the related Hard Routing Step Document. |
| SchemaElementName | NVARCHAR(80) | True |  | False |  | Parameter name/Element name. |
| SequenceNo | INT(10,0) | False |  | True |  | Sequence number of the parameter. |

## Primary Key

- **PK_DOCUMENT_DETAIL_PARAMETER** on `DocumentID, LanguageID, SequenceNo`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_PARAMETER_DOCUMENT_TRANSLATION** — DOCUMENT_PARAMETER -> DOCUMENT_TRANSLATION (`DocumentID, LanguageID -> DocumentID, LanguageID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DOCUMENT_PARAMETER_CLASSIFICATIONID** on `ClassificationID`
