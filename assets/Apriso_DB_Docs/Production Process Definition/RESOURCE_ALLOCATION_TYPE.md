# RESOURCE_ALLOCATION_TYPE

**Database:** Operational

**Description:** The table stores the types of allocation that are available in the operation steps allocation (1 - Step Only (O), 2 - Reservation (R), 3 - Liberation (L)).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ResourceAllocationType | SMALLINT(5,0) | False |  | True |  | Type of resource allocation (1 - Step Only (O), 2 - Reservation (R), 3 - Liberation (L)). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_ALLOCATION_TYPE** on `ResourceAllocationType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PROCESS_REQ_RESOURCE_RESOURCE_ALLOCATION_TYPE** — PROCESS_REQ_RESOURCE -> RESOURCE_ALLOCATION_TYPE (`ResourceAllocationType -> ResourceAllocationType`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_ALLOCATION_TYPE** — WIP_REQ_RESOURCE -> RESOURCE_ALLOCATION_TYPE (`ResourceAllocationType -> ResourceAllocationType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
