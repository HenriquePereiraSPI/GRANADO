# TEXT_DETAIL

**Database:** Operational

**Description:** Contains the various text detail link to a Text reccords. This table is mainly used to store text coming from external systems like SAP.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TextType | NVARCHAR(70) | True |  | False |  | Type of Text |

## Primary Key

- **PK_TEXT_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TEXT_DETAIL_TRANSLATION_TEXT_DETAIL** — TEXT_DETAIL_TRANSLATION -> TEXT_DETAIL (`TextDetailID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_TextID** on `TextID`
