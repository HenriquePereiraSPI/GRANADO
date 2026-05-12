# DET2_VALUES_REVISION

**Database:** Operational

**Description:** This table stores the revisions of the Determination entry definitions. Each record here represents a revision for a specific Determination definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DefaultRevision | BIT | False |  | False |  | Indicates the default revision. |
| Det2Code | NVARCHAR(25) | False |  | False |  | Reference to the Code column in the DET2 table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Revision | NVARCHAR(80) | False |  | False |  | The revision name. |
| RevisionStatusID | SMALLINT(5,0) | False | ((0)) | False |  | The status of the revision. The values are from the REVISION_STATUS table. |

## Primary Key

- **PK_DET2_VALUES_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DET2_ENTRY.DtRevisionID** — DET2_ENTRY -> DET2_VALUES_REVISION (`Det2ValuesRevisionID -> ID`)

## Business Keys (this table -> other)

- DET2_VALUES_REVISION -> DET2 (`Det2Code -> Code`)

## Unique Indexes

- **UX_DET2_VALUES_REVISION** on `Det2Code, Revision`

## Non-Unique Indexes

- **IF_DET2_VALUES_REVISION.RevisionStatusID** on `RevisionStatusID`
