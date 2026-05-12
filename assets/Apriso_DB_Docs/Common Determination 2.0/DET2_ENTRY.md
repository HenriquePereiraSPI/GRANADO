# DET2_ENTRY

**Database:** Operational

**Description:** This table stores the entry definitions for the Determinations. Each record represents a column definition of a specific Determination entry and revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Det2ValuesRevisionID | INT(10,0) | False |  | False | DET2_VALUES_REVISION | Indicates the revision of this record. |
| FUID | NVARCHAR(36) | False | (newid()) | False |  | Apriso object unique Identifier for the Determination Revision entry. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ParentDet2EntryID | INT(10,0) | True |  | False | DET2_ENTRY | Indicates the parent entry ID for this record. |
| Sequence | INT(10,0) | False |  | False |  | The entry (column) order. Used as the display order in the editor and as ORDER BY in generated Views. |
| ValidFrom | DATETIME | True |  | False |  | The start date used for validation for a row of data. |
| ValidTo | DATETIME | True |  | False |  | The end date used for validation for a row of data. |

## Primary Key

- **PK_DET2_ENTRY** on `ID`

## Foreign Keys (this table -> other)

- **FK_DET2_ENTRY.DtRevisionID** — DET2_ENTRY -> DET2_VALUES_REVISION (`Det2ValuesRevisionID -> ID`)
- **FK_DET2_ENTRY.ParentDtEntryID** — DET2_ENTRY -> DET2_ENTRY (`ParentDet2EntryID -> ID`)

## Referenced By (other tables -> this)

- **FK_DET2_ENTRY_VALUE.DtEntryID** — DET2_ENTRY_VALUE -> DET2_ENTRY (`Det2EntryID -> ID`)
- **FK_DET2_ENTRY.ParentDtEntryID** — DET2_ENTRY -> DET2_ENTRY (`ParentDet2EntryID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IX_FK_Det2ValuesRevisionID** on `Det2ValuesRevisionID`
- **IX_FK_ParentDet2EntryID** on `ParentDet2EntryID`
