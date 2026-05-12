# EVENT_TYPE

**Database:** Operational

**Description:** Stores the action to be performed based on a Progress Status change (defined in the PROGRESS_STATUS_TRANSITION_RULES table).  If a Progress Status is changed at any Order Level via the appropriate Business Component then the event will be triggered and the Business Component configured via the prime data will be executed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BCMethodFUID | NVARCHAR(36) | True |  | False |  | FUID of the Business Component linked to the event. The method is invoked when the Progress Status transition linked to that event is changed. |
| EventType | INT(10,0) | False |  | True |  | Type of the Event to be generated when the Progress Status transition changes. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EVENT_TYPE** on `EventType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PROGRESS_TRANSITION_RULES_EVENT_TYPE** — PROGRESS_TRANSITION_RULES -> EVENT_TYPE (`EventType -> EventType`)
- **FK_RESOURCE_FLOW_STATUS_CONDITION_EVENT_TYPE** — RESOURCE_FLOW_STATUS_CONDITION -> EVENT_TYPE (`EventType -> EventType`)
- **FK_VALIDATION_STATUS_FLOW_EVENT_TYPE** — VALIDATION_STATUS_FLOW -> EVENT_TYPE (`EventType -> EventType`)

## Business Keys (this table -> other)

- EVENT_TYPE -> BUSINESS_COMPONENT_METHOD (`BCMethodFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EVENT_TYPE_BUSINESS_COMPONENT_METHOD** on `BCMethodFUID`
