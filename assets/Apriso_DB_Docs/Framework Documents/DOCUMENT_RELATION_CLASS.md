# DOCUMENT_RELATION_CLASS

**Database:** Operational

**Description:** The class of link between documents.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(255) | False |  | False |  | Name of the class of relation between documents. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DOCUMENT_RELATION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_RELATION_DOCUMENT_RELATION_CLASS** — DOCUMENT_RELATION -> DOCUMENT_RELATION_CLASS (`DocumentRelationClassID -> ID`)

## Unique Indexes

- **UK_DOCUMENT_RELATION_CLASS_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
