# DET2_FIELD

**Database:** Solution Authoring

**Description:** This table stores the field definitions of the Determinations. Each record represents a field definition for a specific Determination definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BusinessEntityType | INT(10,0) | True |  | False |  | The values are hardcoded: 1 - Dynamic Operation, 12 - Category. |
| Code | NVARCHAR(30) | False |  | False |  | The unique field code name within one Determination definition. |
| DataType | INT(10,0) | False |  | False |  | The data type of the field. The values are hardcoded (equal to standard Apriso type numbers): 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| DefaultValueBool | BIT | False |  | False |  | Default boolean value of the Determination field. |
| DefaultValueChar | NVARCHAR(2000) | True |  | False |  | Default string value of the Determination field. |
| DefaultValueDateTime | DATETIME | False |  | False |  | Default date value of the Determination field. |
| DefaultValueDecimal | DECIMAL(28,10) | False |  | False |  | Default decimal value of the Determination field. |
| DefaultValueInt | INT(10,0) | False |  | False |  | Default integer value of the Determination field. |
| Det2ID | INT(10,0) | False |  | False | DET2 | Link to Determination definition. |
| EditorSourceType | INT(10,0) | False |  | False |  | Displays the format in the Determination editor. The values are hardcoded: 2 - Constant, 3 - Long Constant, 4 - Static Dictionary, 6 - SQL Dictionary. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| IsUnique | BIT | False |  | False |  | Defines whether the value Integer in this field is unique for the Determination. |
| Localizable | BIT | False | ((0)) | False |  | Defines whether the value in this field is localizable. |
| Properties | NVARCHAR | True |  | False |  | The properties such as: static or SQL query dictionary. |
| ReferenceDet2FieldID | INT(10,0) | True |  | False | DET2_FIELD | Indicates that the values saved in a Determination field are provided from another Determination field. |
| ReferenceProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |
| Sequence | INT(10,0) | False |  | False |  | The sequence of the field (used to display the order inside the editor). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| VerifyDFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| VerifyDFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |

## Primary Key

- **PK_DET2_FIELD** on `ID`

## Foreign Keys (this table -> other)

- **DET2_FIELD_PB_PROJECT** — DET2_FIELD -> PB_PROJECT (`ReferenceProjectID -> ID`)
- **FK_DET2_FIELD_DFC** — DET2_FIELD -> DFC (`VerifyDFCID -> ID`)
- **FK_DET2_FIELD_DFC_REVISION** — DET2_FIELD -> DFC_REVISION (`VerifyDFCRevisionID -> ID`)
- **FK_DET2_FIELD.Det2ID** — DET2_FIELD -> DET2 (`Det2ID -> ID`)
- **FK_DET2_FILED_ReferenceDet2FieldID** — DET2_FIELD -> DET2_FIELD (`ReferenceDet2FieldID -> ID`)

## Referenced By (other tables -> this)

- **FK_DET2_FIELD_SECURITY_DET2_FIELD** — DET2_FIELD_SECURITY -> DET2_FIELD (`Det2FieldID -> ID`)
- **FK_DET2_FILED_ReferenceDet2FieldID** — DET2_FIELD -> DET2_FIELD (`ReferenceDet2FieldID -> ID`)

## Business Keys (other -> this table)

- DET2_ENTRY_VALUE -> DET2_FIELD (`Det2FieldCode -> Code`)

## Unique Indexes

- **UX_DET2_FIELD** on `Det2ID, Code`

## Non-Unique Indexes

- **IF_DET2_FIELD_DFC** on `VerifyDFCID`
- **IF_DET2_FIELD_DFC_REVISION** on `VerifyDFCRevisionID`
- **IF_DET2_FILED_ReferenceDet2FieldID** on `ReferenceDet2FieldID`
