# CLASSIFICATION_GRADE

**Database:** Operational

**Description:** Depending on the used classification grade type, classification grade represents different kinds or levels of classification definition, for example classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationGradeTypeID | INT(10,0) | False |  | False | CLASSIFICATION_GRADE_TYPE | Unique identifier of a record (key) in a table. |
| Code | NVARCHAR(255) | False |  | False |  | Unique code of a classification grade. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExternalID | NVARCHAR(100) | True |  | False |  | Unique identifier of a classification grade that comes from an external system, which is a source of a classification grade definition. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a classification grade |
| ParentID | INT(10,0) | True |  | False | CLASSIFICATION_GRADE | Identifier of the parent classification grade. Refers to another record in the table, which enables building parent-child relationships. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ValidFrom | DATETIME | True |  | False |  | The start of the validity period of a classification grade. |
| ValidTo | DATETIME | True |  | False |  | The end of the validity period of a classification grade. |

## Primary Key

- **PK_CLASSIFICATION_GRADE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CLASSIFICATION_GRADE_CLASSIFICATION_GRADE** — CLASSIFICATION_GRADE -> CLASSIFICATION_GRADE (`ParentID -> ID`)
- **FK_CLASSIFICATION_GRADE_CLASSIFICATION_GRADE_T** — CLASSIFICATION_GRADE -> CLASSIFICATION_GRADE_TYPE (`ClassificationGradeTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_CLASSIFICATION_GRADE_CLASSIFICATION_GRADE** — CLASSIFICATION_GRADE -> CLASSIFICATION_GRADE (`ParentID -> ID`)
- **FK_CLASSIFICATION_ITEM_CLASSIFICATION_GRADE** — CLASSIFICATION_ITEM -> CLASSIFICATION_GRADE (`ClassificationGradeID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CLASSIFICATION_GRADE_CLASSIFICATION_GRADE** on `ParentID`
