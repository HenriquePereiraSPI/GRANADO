# CONTAINER_HOLD

**Database:** Operational

**Description:** Stores Holds against any given Container.  Each record in this table represents a Hold on a Container based on a particular Reason Code.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | False | CONTAINER | Reference to the Container (the one on Hold). |
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The containment the hold was created for. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINER_HOLD** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_HOLD_CONTAINER** — CONTAINER_HOLD -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_HOLD_CONTAINMENT** — CONTAINER_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_CONTAINER_HOLD_REASON_CODE** — CONTAINER_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_HOLD_CONTAINER** on `Container`
- **IF_CONTAINER_HOLD_CONTAINMENT** on `ContainmentID`
