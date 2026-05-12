# CHECK_POINT

**Database:** Operational

**Description:** Contains the Names and the Classes of the various Checkpoints defined by a user.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckPointClassID | INT(10,0) | True |  | False | CHECK_POINT_CLASS | ID of the Checkpoint Class record the table is associated with. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Code | NVARCHAR(100) | True |  | False |  | Name of the entity |
| DSDataCollectID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Unique Identifier of the Data Collect that comes from the external system. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| SequenceNo | INT(10,0) | True |  | False |  | Check List Sequence Number derived from the Global Sequence Number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |

## Primary Key

- **PK_CHECK_POINT** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_POINT_CHECK_POINT_CLASS** — CHECK_POINT -> CHECK_POINT_CLASS (`CheckPointClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_CHECK_POINT_CHECK_POINT** — CHECK_LIST_CHECK_POINT -> CHECK_POINT (`CheckPointID -> ID`)
- **FK_CHECK_POINT_HISTORY_CHECK_POINT** — CHECK_POINT_HISTORY -> CHECK_POINT (`CheckPointID -> ID`)
- **FK_CHECK_POINT_VALUE_CHECK_POINT** — CHECK_POINT_VALUE -> CHECK_POINT (`CheckPointID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_CHECK_POINT_CLASSIFICATIONID** on `ClassificationID`
- **IF_CHECK_POINT_CHECK_POINT_CLASS** on `CheckPointClassID`
