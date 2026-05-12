# VALIDATION_STATUS_FLOW

**Database:** Operational

**Description:** This table contains the valid flows of the validation status for a entity (process, recipe) as well as the link with event type if some action have to be processed when changing from source to destination status.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EventType | INT(10,0) | True |  | False | EVENT_TYPE | The event that will be triggered during this status change |
| FromValidationStatusID | INT(10,0) | True |  | False | VALIDATION_STATUS | The from validation status the for the flow |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ToValidationStatusID | INT(10,0) | True |  | False | VALIDATION_STATUS | The to validation status the for the flow |
| ValidationEntityTypeID | SMALLINT(5,0) | True |  | False | VALIDATION_ENTITIY_TYPE | The validation entity type for the entity status |

## Primary Key

- **PK_VALIDATION_STATUS_FLOW** on `ID`

## Foreign Keys (this table -> other)

- **FK_VALIDATION_STATUS_FLOW_EVENT_TYPE** — VALIDATION_STATUS_FLOW -> EVENT_TYPE (`EventType -> EventType`)
- **FK_VALIDATION_STATUS_FLOW_VALIDATION_ENTITIY_TYPE** — VALIDATION_STATUS_FLOW -> VALIDATION_ENTITIY_TYPE (`ValidationEntityTypeID -> Type`)
- **FK_VALIDATION_STATUS_FLOW_VALIDATION_STATUS** — VALIDATION_STATUS_FLOW -> VALIDATION_STATUS (`FromValidationStatusID -> ID`)
- **FK_VALIDATION_STATUS_FLOW_VALIDATION_STATUS1** — VALIDATION_STATUS_FLOW -> VALIDATION_STATUS (`ToValidationStatusID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_VALIDATION_STATUS_FLOW_VALIDATION_STATUS** on `FromValidationStatusID`
- **IF_VALIDATION_STATUS_FLOW_VALIDATION_STATUS1** on `ToValidationStatusID`
