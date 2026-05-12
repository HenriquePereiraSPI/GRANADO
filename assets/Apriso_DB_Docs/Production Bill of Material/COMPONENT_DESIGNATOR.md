# COMPONENT_DESIGNATOR

**Database:** Operational

**Description:** Defines the Component Designator. This feature is used in the electronics industry to enable linking between a component and a location on the circuit board.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ComponentID | INT(10,0) | False |  | True | COMPONENT | Used to assign a Designator Code to a component of the BOM ( electronics industry). |
| Designator | NVARCHAR(50) | False |  | True |  | Designator of the component (electronics industry). |

## Primary Key

- **PK_COMPONENT_DESIGNATOR** on `ComponentID, Designator`

## Foreign Keys (this table -> other)

- **FK_COMPONENT_DESIGNATOR_COMPONENT** — COMPONENT_DESIGNATOR -> COMPONENT (`ComponentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
