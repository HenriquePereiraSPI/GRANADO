# RESOURCE_FLOW_STATUS_CONDITION

**Database:** Operational

**Description:** Persist the authorized flow of status a resource can accept. (Dirty, clean, dry as an example)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EventType | INT(10,0) | True |  | False | EVENT_TYPE | Type of event to be generated when the progress status transition from a status to an other |
| FromProgressStatusID | INT(10,0) | True |  | False | RESOURCE_PROGRESS_STATUS | The from progress status that defines this flow (e.g. When entity's status is changed from New to Started the value of the field is New) |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ToProgressStatusID | INT(10,0) | True |  | False | RESOURCE_PROGRESS_STATUS | The to progress status that defines this flow (e.g. When entity's status is changed from New to Started the value of the field is Started) |

## Primary Key

- **PK_RESOURCE_FLOW_STATUS_CONDITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_FLOW_STATUS_CONDITION_EVENT_TYPE** — RESOURCE_FLOW_STATUS_CONDITION -> EVENT_TYPE (`EventType -> EventType`)
- **FK_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS** — RESOURCE_FLOW_STATUS_CONDITION -> RESOURCE_PROGRESS_STATUS (`FromProgressStatusID -> ID`)
- **FK_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS1** — RESOURCE_FLOW_STATUS_CONDITION -> RESOURCE_PROGRESS_STATUS (`ToProgressStatusID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS** on `FromProgressStatusID`
- **IF_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS1** on `ToProgressStatusID`
