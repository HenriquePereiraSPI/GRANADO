# PROJECT

**Database:** Operational

**Description:** The "PROJECT" table is used to store projects within Apriso.  Order Headers, Order Details and Wip Orders all can be associated to a project.  Projects in turn store what Facility, and or Department, and or Work Center they have been created to exist in.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Assignment of a project to a department |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of the project to a facility |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ProjectCode | NVARCHAR(40) | True |  | False |  | Project Code |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WBSElement | NVARCHAR(40) | True |  | False |  | WBS element |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | For future use. |

## Primary Key

- **PK_PROJECT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROJECT_DEPARTMENT** — PROJECT -> DEPARTMENT (`Department -> Department`)
- **FK_PROJECT_FACILITY** — PROJECT -> FACILITY (`Facility -> Facility`)
- **FK_PROJECT_UNIT** — PROJECT -> UNIT (`UnitID -> ID`)
- **FK_PROJECT_WORK_CENTER** — PROJECT -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_PROJECT** — COST_DETAIL -> PROJECT (`ProjectID -> ID`)
- **FK_COST_PROJECT** — COST -> PROJECT (`ProjectID -> ID`)
- **FK_ORDER_DETAIL_PROJECT** — ORDER_DETAIL -> PROJECT (`ProjectID -> ID`)
- **FK_ORDER_HEADER_PROJECT** — ORDER_HEADER -> PROJECT (`ProjectID -> ID`)
- **FK_PROCESS_PROJECT** — PROCESS -> PROJECT (`ProjectID -> ID`)
- **FK_WIP_ORDER_PROJECT** — WIP_ORDER -> PROJECT (`ProjectID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROJECT_UNIT** on `UnitID`
- **IXD_ProjectCode_WBSElement** on `ProjectCode, WBSElement`
