# ALERT_GROUP

**Database:** Operational

**Description:** Logical grouping of alerts. Groups are user-defined and depend on the each implementation. Alert groups are used to find alerts and determine the actions that must be taken for acknowledgment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertID | INT(10,0) | False |  | True | ALERT | ID of the Alert involved. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | The Group in which the Alert is classifed. Linked to the GROUP table. |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the Group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the Group. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ALERT_GROUP** on `AlertID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_ALERT_GROUP_ALERT** — ALERT_GROUP -> ALERT (`AlertID -> ID`)
- **FK_ALERT_GROUP_GROUP_** — ALERT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ALERT_GROUP_GROUP_** on `Group_, GroupType, GroupClassID`
