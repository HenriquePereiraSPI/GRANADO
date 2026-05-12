# INSPECTION_LINE

**Database:** Operational

**Description:** This table is required to support Inspection Line configuration.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Code | NVARCHAR(40) | True |  | False |  | Inspection Line code. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Long text comment. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for Inspection Line. |
| ID | INT(10,0) | False |  | True |  | Unique ID of Inspection Line. |
| InspectionPlanID | INT(10,0) | False |  | False | INSPECTION_PLAN | Link to parent Inspection Plan. |
| SequenceNo | INT(10,0) | False |  | False |  | Inspection Line sequence number. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | Specification being the source of Inspection Line. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center assigned to the Inspection Line. |

## Primary Key

- **PK_INSPECTION_LINE** on `ID`

## Foreign Keys (this table -> other)

- **FK_INSPECTION_LINE_INSPECTION_PLAN** — INSPECTION_LINE -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_INSPECTION_LINE_SPECIFICATION** — INSPECTION_LINE -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_INSPECTION_LINE_UNIT** — INSPECTION_LINE -> UNIT (`UnitID -> ID`)
- **FK_INSPECTION_LINE_WORK_CENTER** — INSPECTION_LINE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_INSPECTION_CHARACTERISTIC_INSPECTION_LINE** — INSPECTION_CHARACTERISTIC -> INSPECTION_LINE (`InspectionLineID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_INSPECTION_LINE** — INSPECTION_PLAN_RESOURCE -> INSPECTION_LINE (`InspectionLineID -> ID`)
- **FK_UNIT_USAGE_INSPECTION_LINE** — UNIT_USAGE -> INSPECTION_LINE (`InspectionLineID -> ID`)

## Unique Indexes

- **UK_INSPECTION_LINE** on `InspectionPlanID, SequenceNo`
- **UK_INSPECTION_LINE_FUID** on `FUID`

## Non-Unique Indexes

- **IDX_INSPECTION_LINE_CLASSIFICATIONID** on `ClassificationID`
- **IF_INSPECTION_LINE_SPECIFICATION** on `SpecificationID`
- **IF_INSPECTION_LINE_UNIT** on `UnitID`
