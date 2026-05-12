# ATTACHMENT_CLASS

**Database:** Operational

**Description:** Contains user defined classes of attachments for the grouping purposes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Local Unique Key for the Attachment Class. |
| Name | NVARCHAR(50) | False |  | False |  | Global Unique Key for the Attachment Class Name. |
| TextId | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ATTACHMENT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTACHMENT_ATTACHMENT_CLASS** — ATTACHMENT -> ATTACHMENT_CLASS (`ClassId -> ID`)

## Unique Indexes

- **UK_ATTACHMENT_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
