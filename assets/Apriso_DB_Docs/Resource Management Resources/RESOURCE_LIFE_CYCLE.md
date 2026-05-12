# RESOURCE_LIFE_CYCLE

**Database:** Operational

**Description:** Stores the current life cycle of a Resource. For example, a tool can be repaired only a specific number of times (i.e., it has a specific number of life cycles), or, after sharpening, a knife can be used only for a specific period of time (i.e., the end time of the current life cycle indicates when it should be sharpened again).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EndedOn | DATETIME | True |  | False |  | End of the life cycle of a resource |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LifeCycleNumber | INT(10,0) | True |  | False |  | The life cycle number of the resource |
| NextResourceLifeCycleID | INT(10,0) | True |  | False | RESOURCE_LIFE_CYCLE | Next Resource Life Cycle |
| PreviousResourceLifeCycleID | INT(10,0) | True |  | False | RESOURCE_LIFE_CYCLE | Previous Resource Life Cycle |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Link with the parent resource |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |
| StartedOn | DATETIME | True |  | False |  | Date the resource life is valid from |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_RESOURCE_LIFE_CYCLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_** — RESOURCE_LIFE_CYCLE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE** — RESOURCE_LIFE_CYCLE -> RESOURCE_LIFE_CYCLE (`PreviousResourceLifeCycleID -> ID`)
- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE1** — RESOURCE_LIFE_CYCLE -> RESOURCE_LIFE_CYCLE (`NextResourceLifeCycleID -> ID`)
- **FK_RESOURCE_LIFE_CYCLE_UNIT** — RESOURCE_LIFE_CYCLE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_CONTENT_RESOURCE_LIFE_CYCLE** — DISPOSITION_CONTENT -> RESOURCE_LIFE_CYCLE (`ResourceLifeCycleID -> ID`)
- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE** — RESOURCE_LIFE_CYCLE -> RESOURCE_LIFE_CYCLE (`PreviousResourceLifeCycleID -> ID`)
- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE1** — RESOURCE_LIFE_CYCLE -> RESOURCE_LIFE_CYCLE (`NextResourceLifeCycleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_LIFE_CYCLE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE** on `PreviousResourceLifeCycleID`
- **IF_RESOURCE_LIFE_CYCLE_RESOURCE_LIFE_CYCLE1** on `NextResourceLifeCycleID`
- **IF_RESOURCE_LIFE_CYCLE_UNIT** on `UnitID`
