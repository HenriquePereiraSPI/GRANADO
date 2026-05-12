# CLASSIFICATION_GRADE_TYPE

**Database:** Operational

**Description:** This table is used mainly for multilevel structures of classification grades, where each level can be of a different type. Classification grade type is defined by its code and description, and can be used to distinguish between classes and their categories, groups, libraries, and other.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(255) | False |  | False |  | Unique code of a classification grade type. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a classification grade type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CLASSIFICATION_GRADE_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CLASSIFICATION_GRADE_CLASSIFICATION_GRADE_T** — CLASSIFICATION_GRADE -> CLASSIFICATION_GRADE_TYPE (`ClassificationGradeTypeID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
