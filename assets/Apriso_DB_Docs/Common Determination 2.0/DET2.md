# DET2

**Database:** Solution Authoring

**Description:** This table stores Determination definitions. Each record here represents a specific Determination definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(25) | False |  | False |  | The unique code of the Determination. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ParentDet2ID | INT(10,0) | True |  | False | DET2 | The parent Determination ID. In some configurations this could be a parent of itself. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| VerifyDFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| VerifyDFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |

## Primary Key

- **PK_DET2** on `ID`

## Foreign Keys (this table -> other)

- **FK_DET2_DFC** — DET2 -> DFC (`VerifyDFCID -> ID`)
- **FK_DET2_DFC_REVISION** — DET2 -> DFC_REVISION (`VerifyDFCRevisionID -> ID`)
- **FK_DET2.ParentDtID** — DET2 -> DET2 (`ParentDet2ID -> ID`)

## Referenced By (other tables -> this)

- **FK_DET2_FIELD.Det2ID** — DET2_FIELD -> DET2 (`Det2ID -> ID`)
- **FK_DET2_SECURITY_DET2** — DET2_SECURITY -> DET2 (`Det2ID -> ID`)
- **FK_DET2.ParentDtID** — DET2 -> DET2 (`ParentDet2ID -> ID`)

## Business Keys (other -> this table)

- DET2_VALUES_REVISION -> DET2 (`Det2Code -> Code`)

## Unique Indexes

- **UX_DET2** on `Code`

## Non-Unique Indexes

- **IF_DET2_DFC** on `VerifyDFCID`
- **IF_DET2_DFC_REVISION** on `VerifyDFCRevisionID`
- **IF_DET2.ParentDtID** on `ParentDet2ID`
