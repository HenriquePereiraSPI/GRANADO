# DET2_ENTRY_VALUE

**Database:** Operational

**Description:** This table stores the Determination entry values. Each record in this table represents a value in a column for a specific entry and revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Det2EntryID | INT(10,0) | False |  | False | DET2_ENTRY | The entry definition ID of the Determination. |
| Det2FieldCode | NVARCHAR(30) | False |  | False |  | Reference to the Code column in the DET2_FIELD table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes (when the Localizable column in DET2_FIELD is set to True for this field). |
| ValueBool | BIT | False |  | False |  | Boolean value of a column in the Determination revision entry. |
| ValueChar | NVARCHAR(2000) | True |  | False |  | String value of a column in the Determination revision entry. |
| ValueDateTime | DATETIME | False |  | False |  | Date value of a column in the Determination revision entry. |
| ValueDecimal | DECIMAL(28,10) | False |  | False |  | Decimal value of a column in the Determination revision entry. |
| ValueInt | INT(10,0) | False |  | False |  | Integer value of a column in the Determination revision entry. |

## Primary Key

- **PK_DET2_ENTRY_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DET2_ENTRY_VALUE.DtEntryID** — DET2_ENTRY_VALUE -> DET2_ENTRY (`Det2EntryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- DET2_ENTRY_VALUE -> DET2_FIELD (`Det2FieldCode -> Code`)

## Unique Indexes

- **IX_DET2_ENTRY_VALUE** on `Det2FieldCode, Det2EntryID, ValueInt, ValueDecimal, ValueChar, ValueDateTime, ValueBool, TextID`

## Non-Unique Indexes

- **IF_DET2_ENTRY_VALUE_DET2_FIELD** on `Det2FieldCode`
- **IX_FK_Det2EntryID** on `Det2EntryID`
