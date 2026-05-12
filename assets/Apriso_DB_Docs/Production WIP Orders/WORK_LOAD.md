# WORK_LOAD

**Database:** Operational

**Description:** The "WORK_LOAD" table is used to store all work load type of information that has been normalized out of their base tables. I.e RESOURCE and WORK_CENTER.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildPartsPerParent | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| PlanningUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| ResourceTypeRun | BIT | True |  | False |  | For future use. |
| ResourceTypeSetup | BIT | True |  | False |  | For future use. |
| ShrinkRate | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdMoveCostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| StdMoveHours | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| StdQueueCostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| StdQueueHours | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| StdRunCostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| StdRunHours | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| StdSetupCostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| StdSetupHours | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| StdUnitsChild | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdUnitsChildBasis | SMALLINT(5,0) | True | (0) | False |  | For future use. |
| StdUnitsChildFactor | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdUnitsCostClassID | INT(10,0) | True |  | False | COST_CLASS | For future use. |
| StdWaitHours | DECIMAL(28,10) | True |  | False |  | The wait time (in hours) before navigating to the next Operation or Step. |

## Primary Key

- **PK_WORK_LOAD** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_LOAD_COST_CLASS** — WORK_LOAD -> COST_CLASS (`StdUnitsCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS1** — WORK_LOAD -> COST_CLASS (`StdQueueCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS2** — WORK_LOAD -> COST_CLASS (`StdSetupCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS3** — WORK_LOAD -> COST_CLASS (`StdRunCostClassID -> ID`)
- **FK_WORK_LOAD_COST_CLASS4** — WORK_LOAD -> COST_CLASS (`StdMoveCostClassID -> ID`)
- **FK_WORK_LOAD_UOM** — WORK_LOAD -> UOM (`PlanningUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_OPERATION_REQ_RESOURCE_WORK_LOAD** — OPERATION_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_OPERATION_STEP_WORK_LOAD** — OPERATION_STEP -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_OPERATION_WORK_LOAD** — OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WORK_LOAD** — PROCESS_OPERATION_STEP -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PROCESS_OPERATION_WORK_LOAD** — PROCESS_OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_WORK_LOAD** — PROCESS_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_WORK_LOAD** — PRODUCT_ROUTING_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PRODUCT_ROUTING_STEP_WORK_LOAD** — PRODUCT_ROUTING_STEP -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_PRODUCT_ROUTING_WORK_LOAD** — PRODUCT_ROUTING -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_WORK_LOAD** — RESOURCE_ROUTING_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_RESOURCE_ROUTING_STEP_WORK_LOAD** — RESOURCE_ROUTING_STEP -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_RESOURCE_ROUTING_WORK_LOAD** — RESOURCE_ROUTING -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_RESOURCE_WORK_LOAD** — RESOURCE_ -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_WIP_OPERATION_STEP_WORK_LOAD** — WIP_OPERATION_STEP -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_WIP_OPERATION_WORK_LOAD** — WIP_OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_WIP_REQ_RESOURCE_WORK_LOAD** — WIP_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_WORK_CENTER_WORK_LOAD** — WORK_CENTER -> WORK_LOAD (`WorkLoadID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_LOAD_COST_CLASS** on `StdUnitsCostClassID`
- **IF_WORK_LOAD_COST_CLASS1** on `StdQueueCostClassID`
- **IF_WORK_LOAD_COST_CLASS2** on `StdSetupCostClassID`
- **IF_WORK_LOAD_COST_CLASS3** on `StdRunCostClassID`
- **IF_WORK_LOAD_COST_CLASS4** on `StdMoveCostClassID`
