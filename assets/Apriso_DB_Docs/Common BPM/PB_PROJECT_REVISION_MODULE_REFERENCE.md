# PB_PROJECT_REVISION_MODULE_REFERENCE

**Database:** Solution Authoring

**Description:** Sets references between Modules in a Project revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ModuleID | INT(10,0) | False |  | True | PB_PROJECT_REVISION_MODULE | The foreign key to the PB_PROJECT_REVISION_MODULE table. |
| ReferencedModuleID | INT(10,0) | False |  | True | PB_PROJECT_REVISION_MODULE | The foreign key used to reference the PB_PROJECT_REVISION_MODULE_REFERENCE table. |

## Primary Key

- **PK_PB_PROJECT_REVISION_MODULE_REFERENCE** on `ModuleID, ReferencedModuleID`

## Foreign Keys (this table -> other)

- **FK_PB_PROJECT_REVISION_MODULE_REFERENCE_MODULE** — PB_PROJECT_REVISION_MODULE_REFERENCE -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_PB_PROJECT_REVISION_MODULE_REFERENCE_REF_MODULE** — PB_PROJECT_REVISION_MODULE_REFERENCE -> PB_PROJECT_REVISION_MODULE (`ReferencedModuleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PB_PROJECT_REVISION_MODULE_REFERENCE_REF_MODULE** on `ReferencedModuleID`
