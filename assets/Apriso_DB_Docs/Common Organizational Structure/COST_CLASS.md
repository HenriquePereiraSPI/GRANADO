# COST_CLASS

**Database:** Operational

**Description:** Cost elements for products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostType | SMALLINT(5,0) | True |  | False | COST_TYPE | Enumeration of the values representing various cost types |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Enumeration of values representing various cost elements |
| Name | NVARCHAR(50) | True |  | False |  | Name used to describe the class. |
| RollToCostClassID | INT(10,0) | True |  | False | COST_CLASS | cost class at the next level where costs are transferred during cost roll-up |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COST_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_COST_CLASS_COST_CLASS** — COST_CLASS -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_COST_CLASS_COST_TYPE** — COST_CLASS -> COST_TYPE (`CostType -> CostType`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_DETAIL_COST_CLASS** — COST_CHANGE_DETAIL -> COST_CLASS (`CostClassID -> ID`)
- **FK_COST_CHANGE_DETAIL_COST_CLASS1** — COST_CHANGE_DETAIL -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_COST_CLASS_COST_CLASS** — COST_CLASS -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_COST_DETAIL_COST_CLASS** — COST_DETAIL -> COST_CLASS (`CostClassID -> ID`)
- **FK_COST_DETAIL_COST_CLASS1** — COST_DETAIL -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_OCCUPATION_COST_CLASS** — OCCUPATION -> COST_CLASS (`CostClassID -> ID`)
- **FK_OWNERSHIP_COST_CLASS** — OWNERSHIP -> COST_CLASS (`CostClassID -> ID`)
- **FK_REASON_CODE_COST_CLASS** — REASON_CODE -> COST_CLASS (`CostClassID -> ID`)
- **FK_WORK_ADD_ON_COST_CLASS** — WORK_ADD_ON -> COST_CLASS (`CostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS** — WORK_LOAD -> COST_CLASS (`StdUnitsCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS1** — WORK_LOAD -> COST_CLASS (`StdQueueCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS2** — WORK_LOAD -> COST_CLASS (`StdSetupCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS3** — WORK_LOAD -> COST_CLASS (`StdRunCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS4** — WORK_LOAD -> COST_CLASS (`StdMoveCostClassID -> ID`)

## Unique Indexes

- **UK_COST_CLASS** on `FUID`

## Non-Unique Indexes

- **IF_COST_CLASS_COST_CLASS** on `RollToCostClassID`
