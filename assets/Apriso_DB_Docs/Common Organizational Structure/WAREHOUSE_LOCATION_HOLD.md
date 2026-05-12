# WAREHOUSE_LOCATION_HOLD

**Database:** Operational

**Description:** Contain the list of reson codes describing why a location is on hold

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustNotAllowed | BIT | True |  | False |  | Not used. |
| ContainmentID | INT(10,0) | True |  | False | CONTAINMENT | The containment the hold was created for. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LocationID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION | Link to warehouse location. |
| MoveFromNotAllowed | BIT | True |  | False |  | Not used. |
| MoveToNotAllowed | BIT | True |  | False |  | Not used. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code why the entity is on hold |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_HOLDS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_HOLD_CONTAINMENT** — WAREHOUSE_LOCATION_HOLD -> CONTAINMENT (`ContainmentID -> ID`)
- **FK_WAREHOUSE_LOCATION_HOLDS_REASON_CODES** — WAREHOUSE_LOCATION_HOLD -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WAREHOUSE_LOCATION_HOLDS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_HOLD -> WAREHOUSE_LOCATION (`LocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_HOLD_CONTAINMENT** on `ContainmentID`
