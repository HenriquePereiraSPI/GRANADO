# RECIPE

**Database:** Operational

**Description:** This table links a product, its revision, and a Facility to a Process, a Resource, a range of quantity, and a BOM number. This table is not directly displayed in the Complex Assembly functionality, but it is used by standard Business Components during order Explosion.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BomNumber | NVARCHAR(10) | True |  | False |  | The reference to the BOM number used in the Recipe/SOP. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | The comment for the Recipe. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The assignment of the Recipe/SOP to a Facility. |
| FUID | NVARCHAR(36) | True |  | False |  | The unique identifier of the entity across multiple DELMIA Apriso instances. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Defines the assignment of the entity to a group (user-defined). |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | The class of the group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The type of the group. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Recipe and its attributes. |
| Name | NVARCHAR(50) | True |  | False |  | The name of the Recipe. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The link to a Process (and version). |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The reference to the product (product number and product version). |
| ProductUOM | NVARCHAR(10) | True |  | False | UOM | The UOM of the Recipe (used to define the range of validity). |
| QuantityFrom | DECIMAL(28,10) | True |  | False |  | Defines the bottom of the range of quantity for which the Recipe is valid. |
| QuantityTo | DECIMAL(28,10) | True |  | False |  | Defines the top of the range of quantity for which the Recipe is valid. |
| RecipeUOMCode | NVARCHAR(10) | True |  | False | UOM | The UOM of the Recipe. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The Resource name for which the Recipe is valid. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The Resource type defined uniquely for a Resource. |
| Status | SMALLINT(5,0) | True |  | False | RECIPE_STATUS | The Recipe status. |
| STDBatchSize | DECIMAL(28,10) | True |  | False |  | The quantity used to define the BOM (e.g., 200 wheels are needed to produce 100 bikes, 100 is the batch size of the bike product). |
| ValidationStatus | INT(10,0) | True |  | False | VALIDATION_STATUS | The status of the validation of the Recipe. |
| ValidFrom | DATETIME | True |  | False |  | The start of the validity period. |
| ValidTo | DATETIME | True |  | False |  | The end of the validity period. |

## Primary Key

- **PK_RECIPE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RECIPE_FACILITY** — RECIPE -> FACILITY (`Facility -> Facility`)
- **FK_RECIPE_GROUP_** — RECIPE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_RECIPE_PROCESS** — RECIPE -> PROCESS (`ProcessID -> ID`)
- **FK_RECIPE_PRODUCT** — RECIPE -> PRODUCT (`ProductID -> ID`)
- **FK_RECIPE_RECIPE_STATUS** — RECIPE -> RECIPE_STATUS (`Status -> Status`)
- **FK_RECIPE_RESOURCE_** — RECIPE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RECIPE_UOM** — RECIPE -> UOM (`RecipeUOMCode -> UomCode`)
- **FK_RECIPE_UOM1** — RECIPE -> UOM (`ProductUOM -> UomCode`)
- **FK_RECIPE_VALIDATION_STATUS** — RECIPE -> VALIDATION_STATUS (`ValidationStatus -> ID`)

## Referenced By (other tables -> this)

- **FK_RECIPE_CHARACTERISTIC_RECIPE** — RECIPE_CHARACTERISTIC -> RECIPE (`RecipeID -> ID`)
- **FK_RECIPE_COMPONENT_RECIPE** — RECIPE_COMPONENT -> RECIPE (`RecipeID -> ID`)
- **FK_WIP_ORDER_RECIPE** — WIP_ORDER -> RECIPE (`RecipeID -> ID`)

## Unique Indexes

- **UK_RECIPE** on `FUID`

## Non-Unique Indexes

- **IF_RECIPE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_RECIPE_PROCESS** on `ProcessID`
- **IF_RECIPE_RECIPE_STATUS** on `Status`
- **IF_RECIPE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_RECIPE_VALIDATION_STATUS** on `ValidationStatus`
- **IXD_ProductID_ResourceName_ValidFrom_ValidTo** on `ProductID, ResourceName, ValidFrom, ValidTo`
