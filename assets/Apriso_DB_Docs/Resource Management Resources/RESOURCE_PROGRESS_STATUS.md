# RESOURCE_PROGRESS_STATUS

**Database:** Operational

**Description:** contains the user defined list of progress status resource can accept

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity |
| ProgressStatusClassID | INT(10,0) | True |  | False | RESOURCE_PROGRESS_STATUS_CLASS | The class of the resource progress status |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_PROGRESS_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_PROGRESS_STATUS_RESOURCE_PROGRESS_STATUS_CLASS** — RESOURCE_PROGRESS_STATUS -> RESOURCE_PROGRESS_STATUS_CLASS (`ProgressStatusClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS** — RESOURCE_FLOW_STATUS_CONDITION -> RESOURCE_PROGRESS_STATUS (`FromProgressStatusID -> ID`)
- **FK_RESOURCE_FLOW_STATUS_CONDITION_RESOURCE_PROGRESS_STATUS1** — RESOURCE_FLOW_STATUS_CONDITION -> RESOURCE_PROGRESS_STATUS (`ToProgressStatusID -> ID`)
- **FK_RESOURCE_LIFE_STATUS_RESOURCE_PROGRESS_STATUS** — RESOURCE_LIFE_STATUS -> RESOURCE_PROGRESS_STATUS (`ProgressStatusID -> ID`)

## Unique Indexes

- **UX_RESOURCE_PROGRESS_STATUS** on `Name`

## Non-Unique Indexes

- **IF_RESOURCE_PROGRESS_STATUS_RESOURCE_PROGRESS_STATUS_CLASS** on `ProgressStatusClassID`
