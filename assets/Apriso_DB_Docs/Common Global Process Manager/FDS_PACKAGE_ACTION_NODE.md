# FDS_PACKAGE_ACTION_NODE

**Database:** Operational

**Description:** Table contains information about cluster nodes on which the action has been processed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionSubType | SMALLINT(5,0) | True |  | False |  | Sub type of action. It is valid only for Deployment action. |
| Message | NVARCHAR | True |  | False |  | Result of the action |
| NodeName | NVARCHAR(255) | False |  | True |  | Name of the node the action is processing on. |
| PackageActionID | INT(10,0) | False |  | True | FDS_PACKAGE_ACTION | Link to Package Action. |
| PackageStatus | INT(10,0) | True |  | False |  | Status of the action on the node. |

## Primary Key

- **PK_FDS_PACKAGE_ACTION_NODE** on `PackageActionID, NodeName`

## Foreign Keys (this table -> other)

- **FK_FDS_PACKAGE_ACTION_NODE_FDS_PACKAGE_ACTION** — FDS_PACKAGE_ACTION_NODE -> FDS_PACKAGE_ACTION (`PackageActionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
on ``
