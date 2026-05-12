# CLASSIFICATION_ITEM

**Database:** Operational

**Description:** This table is used to link a Classification Grade to a Classification and thus to such entities as Product, Process, WIP, Resource, Work Center, etc. These relations are representing the data entities’ classifications.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationGradeID | INT(10,0) | False |  | False | CLASSIFICATION_GRADE | Unique identifier of the classification grade. |
| ClassificationID | BIGINT(19,0) | False |  | False | CLASSIFICATION | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ClassifiedItemTable | NVARCHAR(50) | False |  | False |  | The name of the table, which contains a classified data entity, for example Product, Process, or WIP Order. Information in this column combined with the identifier enables navigating from the classification to the data entity that can be stored in one of the tables where the ClassificationID column is present. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID) of a classified data entity. DSID can be related to one of the entities of the ClassifiedItemTable. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExternalID | NVARCHAR(100) | True |  | False |  | Unique identifier of a classified data entity that comes from an external system, which is a source of a classification grade definition. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the classification item � the assignment of a classification grade to a data entity. Currently supported for the maximum INT value. |
| ValidFrom | DATETIME | True |  | False |  | The start of the validity period of a classification item. |
| ValidTo | DATETIME | True |  | False |  | The end of the validity period of a classification item. |

## Primary Key

- **PK_CLASSIFICATION_ITEM** on `ID`

## Foreign Keys (this table -> other)

- **FK_CLASSIFICATION_ITEM_CLASSIFICATION** — CLASSIFICATION_ITEM -> CLASSIFICATION (`ClassificationID -> ID`)
- **FK_CLASSIFICATION_ITEM_CLASSIFICATION_GRADE** — CLASSIFICATION_ITEM -> CLASSIFICATION_GRADE (`ClassificationGradeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CLASSIFICATION_ITEM_CLASSIFICATION** on `ClassificationID`
- **IF_CLASSIFICATION_ITEM_CLASSIFICATION_GRADE** on `ClassificationGradeID`
