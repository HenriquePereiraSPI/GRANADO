# CHECK_POINT_VALUE

**Database:** Operational

**Description:** Contains the possible values for various responses the user can enter for a Checkpoint question, as well as the fact that the reponse is correct or not.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AnswerTextID | INT(10,0) | True |  | False |  | Localizable Text of the possible answer to the question. |
| CheckPointID | INT(10,0) | True |  | False | CHECK_POINT | ID of the Checkpoint history record the table is associated with. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| IsCorrect | BIT | True |  | False |  | Indicates if the value represents a correct answer. |
| ResponseTextID | INT(10,0) | True |  | False |  | Localizable Text of the response that may be given to the user (e.g. "Wrong answer"). |
| Sequence_ | INT(10,0) | True |  | False |  | Sequence number entered freely by the end user. |
| SequenceNo | INT(10,0) | True |  | False |  | Check List Sequence Number derived from the Global Sequence Number. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |

## Primary Key

- **PK_CHECK_POINT_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_POINT_VALUE_CHECK_POINT** — CHECK_POINT_VALUE -> CHECK_POINT (`CheckPointID -> ID`)

## Referenced By (other tables -> this)

- **FK_CHECK_POINT_HISTORY_CHECK_POINT_VALUE** — CHECK_POINT_HISTORY -> CHECK_POINT_VALUE (`CheckPointValueID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CHECK_POINT_VALUE_CHECK_POINT** on `CheckPointID`
