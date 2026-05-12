# CHECK_POINT_HISTORY

**Database:** Operational

**Description:** Contains a reponse to the question asked for a given Checkpoint. The Employee who responded and the Date/Time of the response.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AnsweredOn | DATETIME | True |  | False |  | Date when the Checkpoint question was answered. |
| Checked | BIT | True |  | False |  | 0 - not checked, 1 - checked. |
| CheckListHistoryID | INT(10,0) | True |  | False | CHECK_LIST_HISTORY | ID of the Checklist History record the table is associated with. |
| CheckPointID | INT(10,0) | True |  | False | CHECK_POINT | ID of the Checkpoint History record the table is associated with. |
| CheckPointValueID | INT(10,0) | True |  | False | CHECK_POINT_VALUE | ID of the Checkpoint Value record the table is associated with. |
| DSDataCollectID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Unique Identifier of the Data Collect that comes from the external system. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee who provided the Checkpoint Value. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Value_ | NVARCHAR(500) | True |  | False |  | Value of the Checkpoint. |

## Primary Key

- **PK_CHECK_POINT_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_POINT_HISTORY_CHECK_LIST_HISTORY** — CHECK_POINT_HISTORY -> CHECK_LIST_HISTORY (`CheckListHistoryID -> ID`)
- **FK_CHECK_POINT_HISTORY_CHECK_POINT** — CHECK_POINT_HISTORY -> CHECK_POINT (`CheckPointID -> ID`)
- **FK_CHECK_POINT_HISTORY_CHECK_POINT_VALUE** — CHECK_POINT_HISTORY -> CHECK_POINT_VALUE (`CheckPointValueID -> ID`)
- **FK_CHECK_POINT_HISTORY_EMPLOYEE** — CHECK_POINT_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CHECK_POINT_HISTORY_CHECK_LIST_HISTORY** on `CheckListHistoryID`
- **IF_CHECK_POINT_HISTORY_CHECK_POINT** on `CheckPointID`
- **IF_CHECK_POINT_HISTORY_CHECK_POINT_VALUE** on `CheckPointValueID`
