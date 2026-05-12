# TEXT_DETAIL_TRANSLATION

**Database:** Operational

**Description:** Contain the various text translation of text details. This table can persite multiple texts (short, medium…) as well as icones for multiple devices types and URLs

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Format | NVARCHAR(2) | True |  | False |  | The format of the text in the host system |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LanguageID | INT(10,0) | True |  | False |  | Language of the entity |
| Text | NVARCHAR | True |  | False |  | Text information. |
| TextDetailID | INT(10,0) | True |  | False | TEXT_DETAIL | Link with the text detail |

## Primary Key

- **PK_TEXT_DETAIL_TRANSLATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_TEXT_DETAIL_TRANSLATION_TEXT_DETAIL** — TEXT_DETAIL_TRANSLATION -> TEXT_DETAIL (`TextDetailID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TEXT_DETAIL_TRANSLATION_TEXT_DETAIL** on `TextDetailID`
