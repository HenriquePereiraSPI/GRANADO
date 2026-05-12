# DOCUMENT_GROUP

**Database:** Operational

**Description:** This table contains links between Groups and documents.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| DocumentID | INT(10,0) | False |  | True | DOCUMENT | ID of the Document. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | The Group of the Document. |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | The Group Class ID of the Document. |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | The Group Type of the Document. |

## Primary Key

- **PK_DOCUMENT_GROUP** on `DocumentID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_DOCUMENT_GROUP_00** — DOCUMENT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DOCUMENT_GROUP_01** — DOCUMENT_GROUP -> DOCUMENT (`DocumentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DOCUMENT_GROUP_00** on `Group_, GroupType, GroupClassID`
