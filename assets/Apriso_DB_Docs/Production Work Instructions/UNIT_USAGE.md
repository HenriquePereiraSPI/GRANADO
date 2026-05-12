# UNIT_USAGE

**Database:** Operational

**Description:** This table is used for determination of the unit.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CustomParameters | NVARCHAR | True |  | False |  | Contains custom parameters. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Department that the unit is valid for. |
| EquipmentID | INT(10,0) | True |  | False | EQUIPMENT | Reference to the Equipment. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility that the unit is valid for. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Defines the assignment of the entity to a Group (user-defined). |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Class of Group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of Group. |
| ID | INT(10,0) | False |  | True |  | Unique ID of a record (key) in a table. |
| InspectionCharacteristicID | INT(10,0) | True |  | False | INSPECTION_CHARACTERISTIC | Reference to the Inspection Characteristic. |
| InspectionLineID | INT(10,0) | True |  | False | INSPECTION_LINE | Reference to the Inspection Line. |
| InspectionPlanID | INT(10,0) | True |  | False | INSPECTION_PLAN | Reference to the Inspection Plan. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to the Product (Product number and Product version). |
| ProductNo | NVARCHAR(80) | True |  | False |  | Reference to the Product number. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Reference to the Resource Class. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Name of the resource that the unit is valid for. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Name of the resource type that the unit is valid for. |
| RoleID | INT(10,0) | True |  | False | ROLE | Reference to the Role. |
| SkillID | INT(10,0) | True |  | False | SKILL | Reference to the Skill. |
| UnitID | INT(10,0) | False |  | False | UNIT | Unique identifier of the Unit. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center that the unit is valid for. |

## Primary Key

- **PK_UNIT_USAGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_UNIT_USAGE_DEPARTMENT** — UNIT_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_UNIT_USAGE_EQUIPMENT** — UNIT_USAGE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_UNIT_USAGE_FACILITY** — UNIT_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_UNIT_USAGE_GROUP_** — UNIT_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_UNIT_USAGE_INSPECTION_CHARACTERISTIC** — UNIT_USAGE -> INSPECTION_CHARACTERISTIC (`InspectionCharacteristicID -> ID`)
- **FK_UNIT_USAGE_INSPECTION_LINE** — UNIT_USAGE -> INSPECTION_LINE (`InspectionLineID -> ID`)
- **FK_UNIT_USAGE_INSPECTION_PLAN** — UNIT_USAGE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_UNIT_USAGE_PRODUCT** — UNIT_USAGE -> PRODUCT (`ProductID -> ID`)
- **FK_UNIT_USAGE_RESOURCE_** — UNIT_USAGE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_UNIT_USAGE_RESOURCE_CLASS** — UNIT_USAGE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_UNIT_USAGE_ROLE** — UNIT_USAGE -> ROLE (`RoleID -> ID`)
- **FK_UNIT_USAGE_SKILL** — UNIT_USAGE -> SKILL (`SkillID -> ID`)
- **FK_UNIT_USAGE_UNIT** — UNIT_USAGE -> UNIT (`UnitID -> ID`)
- **FK_UNIT_USAGE_WORKCENTER** — UNIT_USAGE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_UNIT_USAGE_EQUIPMENT** on `EquipmentID`
- **IF_UNIT_USAGE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_UNIT_USAGE_INSPECTION_CHARACTERISTIC** on `InspectionCharacteristicID`
- **IF_UNIT_USAGE_INSPECTION_LINE** on `InspectionLineID`
- **IF_UNIT_USAGE_INSPECTION_PLAN** on `InspectionPlanID`
- **IF_UNIT_USAGE_PRODUCT** on `ProductID`
- **IF_UNIT_USAGE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_UNIT_USAGE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_UNIT_USAGE_ROLE** on `RoleID`
- **IF_UNIT_USAGE_SKILL** on `SkillID`
- **IF_UNIT_USAGE_UNIT** on `UnitID`
