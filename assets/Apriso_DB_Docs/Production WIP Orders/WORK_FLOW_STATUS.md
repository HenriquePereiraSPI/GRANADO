# WORK_FLOW_STATUS

**Database:** Operational

**Description:** The "WORK_FLOW_STATUS" table is used to define the result of explosion and navigation for the WIP Order or Operation.  Each time explosion or navigation is performed on either the order or operation, it WorkFlowStatus column is updated with the status of the event.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_FLOW_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_OPERATION_WORK_FLOW_STATUS** — WIP_OPERATION -> WORK_FLOW_STATUS (`WorkflowStatusID -> ID`)
- **FK_WIP_ORDER_WORK_FLOW_STATUS** — WIP_ORDER -> WORK_FLOW_STATUS (`WorkflowStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
