# DOCUMENT_RELATION

**Database:** Operational

**Description:** This table stores links (relations) between documents.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildDocumentID | INT(10,0) | False |  | False | DOCUMENT | The ID of the linked child document. |
| DocumentRelationClassID | INT(10,0) | False |  | False | DOCUMENT_RELATION_CLASS | The ID of the linked document relation class. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| ParentDocumentID | INT(10,0) | False |  | False | DOCUMENT | The ID of the linked parent document. |
| PositionBottomRightX | INT(10,0) | False |  | False |  | The bottom-right X coordinate of the child document on the parent document. |
| PositionBottomRightY | INT(10,0) | False |  | False |  | The bottom-right Y coordinate of the child document on the parent document. |
| PositionTopLeftX | INT(10,0) | False |  | False |  | The top-left X coordinate of the child document on the parent document. |
| PositionTopLeftY | INT(10,0) | False |  | False |  | The top-left Y coordinate of the child document on the parent document. |
| RatioX | DECIMAL(28,10) | False |  | False |  | The scale-X attribute of the child document on the parent document. |
| RatioY | DECIMAL(28,10) | False |  | False |  | The scale-Y attribute of the child document on the parent document. |
| SequenceNo | INT(10,0) | True |  | False |  | The sequence number of the document relation. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(255) | True |  | False |  | Custom use. Can store any additional data. |

## Primary Key

- **PK_DOCUMENT_RELATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_RELATION_DOCUMENT_CHILD** — DOCUMENT_RELATION -> DOCUMENT (`ChildDocumentID -> ID`)
- **FK_DOCUMENT_RELATION_DOCUMENT_PARENT** — DOCUMENT_RELATION -> DOCUMENT (`ParentDocumentID -> ID`)
- **FK_DOCUMENT_RELATION_DOCUMENT_RELATION_CLASS** — DOCUMENT_RELATION -> DOCUMENT_RELATION_CLASS (`DocumentRelationClassID -> ID`)
- **FK_DOCUMENT_RELATION_UNIT** — DOCUMENT_RELATION -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DOCUMENT_RELATION_DOCUMENT_CHILD** on `ChildDocumentID`
- **IF_DOCUMENT_RELATION_DOCUMENT_PARENT** on `ParentDocumentID`
- **IF_DOCUMENT_RELATION_DOCUMENT_RELATION_CLASS** on `DocumentRelationClassID`
- **IF_DOCUMENT_RELATION_UNIT** on `UnitID`
