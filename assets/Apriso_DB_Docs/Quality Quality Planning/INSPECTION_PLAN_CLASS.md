# INSPECTION_PLAN_CLASS

**Database:** Operational

**Description:** This table is required to support possibility of assigning inspection plan classes into an inspection plan. The number of classes is extendable and user will be able to define his own classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of the inspection plan class. |
| Name | NVARCHAR(50) | False |  | False |  | Name of the inspection plan class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_PLAN_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_INSPECTION_PLAN_INSPECTION_PLAN_CLASS** — INSPECTION_PLAN -> INSPECTION_PLAN_CLASS (`InspectionPlanClassID -> ID`)

## Unique Indexes

- **UK_INSPECTION_PLAN_CLASS** on `Name`

## Non-Unique Indexes

- **** on ``
