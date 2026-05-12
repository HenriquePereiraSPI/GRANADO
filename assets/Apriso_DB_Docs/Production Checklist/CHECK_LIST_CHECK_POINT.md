# CHECK_LIST_CHECK_POINT

**Database:** Operational

**Description:** Stores links between CHECK_LIST and CHECK_POINT with attributes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListID | INT(10,0) | True |  | False | CHECK_LIST | ID of the Checklist record the table is associated with. |
| CheckPointID | INT(10,0) | True |  | False | CHECK_POINT | ID of the Checkpoint record the table is associated with. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility for which the Checklist/Checkpoint pair is valid for. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Group for which the Checklist/Checkpoint pair is valid for. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Class of the Group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of the Group. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | ID of the Product that the Checklist/Checkpoint is valid for. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Resource for which the Checklist/Checkpoint pair is valid for. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource Type + Resource uniquely define a Resource. |
| SequenceNo | NVARCHAR(20) | True |  | False |  | Sequential number of the association between the Checklist and Checkpoint. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center for which the Checklist/Checkpoint pair is valid for. |

## Primary Key

- **PK_CHECK_LIST_CHECK_POINT** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHECK_LIST_CHECK_POINT_CHECK_LIST** — CHECK_LIST_CHECK_POINT -> CHECK_LIST (`CheckListID -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_CHECK_POINT** — CHECK_LIST_CHECK_POINT -> CHECK_POINT (`CheckPointID -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_FACILITY** — CHECK_LIST_CHECK_POINT -> FACILITY (`Facility -> Facility`)
- **FK_CHECK_LIST_CHECK_POINT_GROUP_** — CHECK_LIST_CHECK_POINT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHECK_LIST_CHECK_POINT_GROUP_CLASS** — CHECK_LIST_CHECK_POINT -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_GROUP_TYPE** — CHECK_LIST_CHECK_POINT -> GROUP_TYPE (`GroupType -> GroupType`)
- **FK_CHECK_LIST_CHECK_POINT_PRODUCT** — CHECK_LIST_CHECK_POINT -> PRODUCT (`ProductID -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_RESOURCE_** — CHECK_LIST_CHECK_POINT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_CHECK_LIST_CHECK_POINT_RESOURCE_TYPE** — CHECK_LIST_CHECK_POINT -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_CHECK_LIST_CHECK_POINT_WORK_CENTER** — CHECK_LIST_CHECK_POINT -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CHECK_LIST_CHECK_POINT_CHECK_LIST** on `CheckListID`
- **IF_CHECK_LIST_CHECK_POINT_CHECK_POINT** on `CheckPointID`
- **IF_CHECK_LIST_CHECK_POINT_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_CHECK_LIST_CHECK_POINT_GROUP_CLASS** on `GroupClassID`
- **IF_CHECK_LIST_CHECK_POINT_PRODUCT_GROUP** on `ProductID, Group_, GroupType, GroupClassID`
- **IF_CHECK_LIST_CHECK_POINT_RESOURCE_** on `WorkCenter, ResourceType`
