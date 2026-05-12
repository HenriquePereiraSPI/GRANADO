# RECIPE_CHARACTERISTIC

**Database:** Operational

**Description:** This table contains the overwritten value of the specification to be used at runtime when the Recipe/SOP is selected. This table is not directly displayed in the Complex Assembly functionality, but it is used by standard Business Components during order Explosion.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | The link of the Recipe to the Characteristic. |
| CharacteristicRevision | NVARCHAR(40) | True |  | False | CHARACTERISTIC_REVISION | The revision of the Characteristic. |
| CharacteristicType | SMALLINT(5,0) | True |  | False | CHARACTERISTIC_TYPE | The type of Characteristic (Attribute or Variable) linked to the CHARACTERISTIC_TYPE table. |
| Custom | BIT | True |  | False |  | Indicates if the Characteristic for the Recipe is custom. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Recipe Characteristic. |
| Inherited | BIT | True |  | False |  | Indicates if the Characteristic for the Recipe is inherited. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The lower coherence limit of the Characteristic for the Recipe. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit of the Characteristic for the Recipe. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The lower specification limit of the Characteristic for the Recipe. |
| OperationStepID | INT(10,0) | True |  | False | OPERATION_STEP | The Operation ID linked to the Recipe. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Used for the recognition of the Operation source. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | The link to the Process Operation. |
| RecipeID | INT(10,0) | True |  | False | RECIPE | The link to the Recipe. |
| RefLowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The referenced lower coherence limit of the Characteristic for the Recipe. |
| RefLowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit value from the original Process. |
| RefLowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The lower specification limit value from the original Process. |
| RefTargetValue | DECIMAL(28,10) | True |  | False |  | The target value from the original Process. |
| RefUOM | NVARCHAR(10) | True |  | False | UOM | The UOM of the limits from the original Process. |
| RefUpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The referenced upper coherence limit of the Characteristic for the Recipe. |
| RefUpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit value from the original Process. |
| RefUpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit value from the original Process. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | The target value of the specification. |
| UOM | NVARCHAR(10) | True |  | False | UOM | The UOM of the Characteristic. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | The upper coherence limit of the Characteristic for the Recipe. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit of the Characteristic for the Recipe. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit of the Characteristic for the Recipe. |

## Primary Key

- **PK_RECIPE_CHARACTERISTIC** on `ID`

## Foreign Keys (this table -> other)

- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC_REVISION** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_RECIPE_CHARACTERISTIC_CHARACTERISTIC_TYPE** — RECIPE_CHARACTERISTIC -> CHARACTERISTIC_TYPE (`CharacteristicType -> CharacteristicType`)
- **FK_RECIPE_CHARACTERISTIC_OPERATION_STEP** — RECIPE_CHARACTERISTIC -> OPERATION_STEP (`OperationStepID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_PROCESS_OPERATION** — RECIPE_CHARACTERISTIC -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_PROCESS_OPERATION_STEP** — RECIPE_CHARACTERISTIC -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_RECIPE** — RECIPE_CHARACTERISTIC -> RECIPE (`RecipeID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_UOM** — RECIPE_CHARACTERISTIC -> UOM (`UOM -> UomCode`)
- **FK_RECIPE_CHARACTERISTIC_UOM1** — RECIPE_CHARACTERISTIC -> UOM (`RefUOM -> UomCode`)

## Referenced By (other tables -> this)

- **FK_RECIPE_CHARACTERISTIC_ATTR_RECIPE_CHARACTERISTIC** — RECIPE_CHARACTERISTIC_ATTR -> RECIPE_CHARACTERISTIC (`RecipeCharacteristicID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RECIPE_CHARACTERISTIC_CHARACTERISTIC** on `Characteristic`
- **IF_RECIPE_CHARACTERISTIC_CHARACTERISTIC_REVISION** on `Characteristic, CharacteristicRevision`
- **IF_RECIPE_CHARACTERISTIC_OPERATION_STEP** on `OperationStepID`
- **IF_RECIPE_CHARACTERISTIC_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_RECIPE_CHARACTERISTIC_RECIPE** on `RecipeID`
- **IF_RECIPE_CHARACTERISTIC_RECIPE_COMPONENT** on `ProcessOperationStepID`
