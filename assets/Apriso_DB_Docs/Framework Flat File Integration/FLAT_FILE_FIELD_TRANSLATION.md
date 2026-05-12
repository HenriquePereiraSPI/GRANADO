# FLAT_FILE_FIELD_TRANSLATION

**Database:** Operational

**Description:** Specifies a translation table for values of a particular Flat File Field. When a field value is extracted from a message it can then be automatically translated to a more meaningful value through this look up table. For example, a broadcast message may have 2 letter codes for each option of Carpet that is desired. This table may be used to translate the 2 letter code into a Product Number that is meaningful for the application.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FlatFileFieldID | INT(10,0) | False |  | False | FLAT_FILE_FIELD | The field for which this translation value applies. |
| FromValue | NVARCHAR(255) | True |  | False |  | The value that is identified in the body of the message. When this value is found in the code string it is translated to the ToValue. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| ToValue | NVARCHAR(255) | True |  | False |  | The resulting, translated value from the decoding process. When the FromValue is found in the field, this ToValue is returned as the decoded string. |

## Primary Key

- **PK_FLAT_FILE_FIELD_TRANSLATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_FLAT_FILE_FIELD_TRANSLATION_FLAT_FILE_FIELD** — FLAT_FILE_FIELD_TRANSLATION -> FLAT_FILE_FIELD (`FlatFileFieldID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FLAT_FILE_FIELD_TRANSLATION_FLAT_FILE_FIELD** on `FlatFileFieldID`
