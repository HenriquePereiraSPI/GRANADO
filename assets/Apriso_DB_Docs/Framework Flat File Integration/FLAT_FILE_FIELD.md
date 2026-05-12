# FLAT_FILE_FIELD

**Database:** Operational

**Description:** Describes each field that can be decoded for a specific Flat File Entity in a message file. For example, a Product Number field can be decoded from a particular position in the message. A Flat File Entity (such as Carpets) may have multiple fields decoded from a message, such as Product Number and Quantity for example.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FieldNumber | INT(10,0) | True |  | False |  | Specifies the field number within a delimited file. |
| FlatFileEntityID | INT(10,0) | False |  | False | FLAT_FILE_ENTITY | The file in which this field is found. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| IsTranslated | BIT | True |  | False |  | True if the values obtained from the file must be decoded or translated using the mappings in the translation table. |
| Mask | NVARCHAR(2000) | True |  | False |  | A mask that specifies what characters in a fixed length message are part of this field. |
| Name | NVARCHAR(255) | False |  | False |  | The name of this field in the file. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_FLAT_FILE_FIELD** on `ID`

## Foreign Keys (this table -> other)

- **FK_FLAT_FILE_FIELD_FLAT_FILE_ENTITY** — FLAT_FILE_FIELD -> FLAT_FILE_ENTITY (`FlatFileEntityID -> ID`)

## Referenced By (other tables -> this)

- **FK_FLAT_FILE_FIELD_TRANSLATION_FLAT_FILE_FIELD** — FLAT_FILE_FIELD_TRANSLATION -> FLAT_FILE_FIELD (`FlatFileFieldID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FLAT_FILE_FIELD_FLAT_FILE_ENTITY** on `FlatFileEntityID`
