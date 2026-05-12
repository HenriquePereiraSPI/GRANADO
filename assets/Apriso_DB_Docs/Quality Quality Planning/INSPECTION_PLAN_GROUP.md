# INSPECTION_PLAN_GROUP

**Database:** Operational

**Description:** This table is required to support possibility of assigning inspection plan to a group.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Global unique indentifier for use within GPM |
| Group_ | NVARCHAR(40) | False |  | False | GROUP_ | Group name the given inspection plan is assigned to. |
| GroupClassID | INT(10,0) | False |  | False | GROUP_ | Group class ID the given inspection plan is assigned to. |
| GroupType | SMALLINT(5,0) | False |  | False | GROUP_ | Group type the given inspection plan is assigned to. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the inspection plan group. |
| InspectionPlanID | INT(10,0) | False |  | False | INSPECTION_PLAN | Reference to the Inspection Plan. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_PLAN_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_PLAN_GROUP_GROUP** — INSPECTION_PLAN_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_INSPECTION_PLAN_GROUP_INSPECTION_PLAN** — INSPECTION_PLAN_GROUP -> INSPECTION_PLAN (`InspectionPlanID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_INSPECTION_PLAN_GROUP_FUID** on `FUID`

## Non-Unique Indexes

- **IF_INSPECTION_PLAN_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_INSPECTION_PLAN_GROUP_INSPECTION_PLAN** on `InspectionPlanID`
