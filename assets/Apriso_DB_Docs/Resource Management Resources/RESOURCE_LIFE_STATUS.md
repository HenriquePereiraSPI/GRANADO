# RESOURCE_LIFE_STATUS

**Database:** Operational

**Description:** Stores the current status of a Resource. For example, a tank (Resource) can be in the "clean", "dirty", or "sanitized" status, and a liquid can be poured only into a "clean" tank (the decision is made based on the Resource status).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | True |  | False | UNIT_CHARACTERISTIC | Not used. |
| EndedOn | DATETIME | True |  | False |  | End of the state (=given status) of life cycle of a resource |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LifeStatusNumber | INT(10,0) | True |  | False |  | Sequence number representing the given status of the resource |
| PreviousResourceLifeStatusID | INT(10,0) | True |  | False | RESOURCE_LIFE_STATUS | The ID of the previous status of the resource |
| ProgressStatusID | INT(10,0) | True |  | False | RESOURCE_PROGRESS_STATUS | Current status of the resource |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Resource Name the current status record refers to |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |
| StartedOn | DATETIME | True |  | False |  | Date when resource status starts be valid |
| UnitID | INT(10,0) | True |  | False | UNIT_CHARACTERISTIC | Unique identifier of the Unit. |

## Primary Key

- **PK_RESOURCE_LIFE_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LIFE_STATUS_RESOURCE_** — RESOURCE_LIFE_STATUS -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LIFE_STATUS_RESOURCE_LIFE_STATUS** — RESOURCE_LIFE_STATUS -> RESOURCE_LIFE_STATUS (`PreviousResourceLifeStatusID -> ID`)
- **FK_RESOURCE_LIFE_STATUS_RESOURCE_PROGRESS_STATUS** — RESOURCE_LIFE_STATUS -> RESOURCE_PROGRESS_STATUS (`ProgressStatusID -> ID`)
- **FK_RESOURCE_LIFE_STATUS_UNIT_CHARACTERISTIC** — RESOURCE_LIFE_STATUS -> UNIT_CHARACTERISTIC (`UnitID, Characteristic -> UnitID, Characteristic`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_LIFE_STATUS_RESOURCE_LIFE_STATUS** — RESOURCE_LIFE_STATUS -> RESOURCE_LIFE_STATUS (`PreviousResourceLifeStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_LIFE_STATUS_RESOURCE_** on `ResourceName, ResourceType`
- **IF_RESOURCE_LIFE_STATUS_RESOURCE_LIFE_CYCLE** on `PreviousResourceLifeStatusID`
- **IF_RESOURCE_LIFE_STATUS_RESOURCE_PROGRESS_STATUS** on `ProgressStatusID`
- **IF_RESOURCE_LIFE_STATUS_UNIT_CHARACTERISTIC** on `UnitID, Characteristic`
