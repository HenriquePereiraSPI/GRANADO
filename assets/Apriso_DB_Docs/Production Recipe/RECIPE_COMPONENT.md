# RECIPE_COMPONENT

**Database:** Operational

**Description:** This table contains the assignment of the Components to consumption points (Steps). This table is not directly displayed in the Complex Assembly functionality, but it is used by standard Business Components during order Explosion.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ComponentID | INT(10,0) | True |  | False | COMPONENT | The link to the Component record that describes the actual ingredient/Component and the ingredient/Component quantity. |
| ComponentIntegrMethodID | INT(10,0) | True |  | False | COMPONENT_INTEGR_METHOD | The method used to introduce the Component (e.g., from a pipe or container) (user-defined). |
| ComponentSource | SMALLINT(5,0) | True |  | False |  | Defines if the Component in the Recipe comes from the Process or from the product BOM. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Recipe Component. |
| OperationStepID | INT(10,0) | True |  | False | OPERATION_STEP | The Operation ID linked to the Recipe. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Used for the recognition of the Operation source. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | The link to a Process Operation. |
| RecipeID | INT(10,0) | True |  | False | RECIPE | The link to the Recipe. |
| SequenceNo | INT(10,0) | True |  | False |  | The Sequence number. |

## Primary Key

- **PK_RECIPE_COMPONENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_RECIPE_COMPONENT_COMPONENT** — RECIPE_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_RECIPE_COMPONENT_COMPONENT_INTEGR_METHOD** — RECIPE_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_RECIPE_COMPONENT_OPERATION_STEP** — RECIPE_COMPONENT -> OPERATION_STEP (`OperationStepID -> ID`)
- **FK_RECIPE_COMPONENT_PROCESS_OPERATION** — RECIPE_COMPONENT -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_RECIPE_COMPONENT_PROCESS_OPERATION_STEP** — RECIPE_COMPONENT -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_RECIPE_COMPONENT_RECIPE** — RECIPE_COMPONENT -> RECIPE (`RecipeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RECIPE_COMPONENT_COMPONENT** on `ComponentID`
- **IF_RECIPE_COMPONENT_COMPONENT_INTEGR_METHOD** on `ComponentIntegrMethodID`
- **IF_RECIPE_COMPONENT_OPERATION_STEP** on `OperationStepID`
- **IF_RECIPE_COMPONENT_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_RECIPE_COMPONENT_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_RECIPE_COMPONENT_RECIPE** on `RecipeID`
