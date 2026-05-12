# COMPONENT

**Database:** Operational

**Description:** This table stores the base Component information for the following tables: PRODUCT_COMPONENT, WIP_COMPONENT, OPERATION_COMPONENT, PROCESS_COMPONENT, RECIPE_COMPONENT, RESOURCE_COMPONENT. Each of these tables stores Component information for its respective area and links to the COMPONENT table in order to store the information that is the same across all these areas.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| CoProductCostPercent | DECIMAL(28,10) | True |  | False |  | For future use. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | The end date of the entity's validity. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | The validity (start) date of the entity in UTC. |
| ExplodeProcess | BIT | True | (0) | False |  | For future use. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record. |
| IncludeInBatchWeight | BIT | True |  | False |  | For future use. |
| IssueType | SMALLINT(5,0) | True |  | False | COMPONENT_ISSUE_TYPE | The type of issue: Consumed or Produced. |
| MaximumQuantity | DECIMAL(28,10) | True | (0.0) | False |  | The maximum quantity of the Component to be introduced. |
| MinimimQuantity | DECIMAL(28,10) | True | (0.0) | False |  | The minimum quantity of the Component to be introduced. |
| ProductID | INT(10,0) | True |  | False | PRODUCT_GRADE | The reference to the product (the product number and product version). |
| Quantity | DECIMAL(28,10) | True | (0.0) | False |  | The quantity of the Components required. |
| ReferenceQuantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdScrapPercent | DECIMAL(28,10) | True | (0.0) | False |  | The expected percentage of scrap. Used to grow the quantity needed from the Components. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | The UOM to be used for the Components. |
| UsageType | SMALLINT(5,0) | True |  | False | COMPONENT_USAGE_TYPE | The type of Component usage: Regular, Active, Compensating, Ingredient, Constant, or Incidental. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |

## Primary Key

- **PK_COMPONENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_COMPONENT_COMPANY** — COMPONENT -> COMPANY (`Company -> Company`)
- **FK_COMPONENT_COMPONENT_ISSUE_TYPE** — COMPONENT -> COMPONENT_ISSUE_TYPE (`IssueType -> Type`)
- **FK_COMPONENT_COMPONENT_USAGE_TYPE** — COMPONENT -> COMPONENT_USAGE_TYPE (`UsageType -> Type`)
- **FK_COMPONENT_EC_ORDER** — COMPONENT -> EC_ORDER (`EcoID -> ID`)
- **FK_COMPONENT_FACILITY** — COMPONENT -> FACILITY (`Facility -> Facility`)
- **FK_COMPONENT_GRADE** — COMPONENT -> GRADE (`GradeID -> ID`)
- **FK_COMPONENT_PRODUCT_GRADE** — COMPONENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_COMPONENT_PRODUCTID** — COMPONENT -> PRODUCT (`ProductID -> ID`)
- **FK_COMPONENT_UNIT** — COMPONENT -> UNIT (`UnitID -> ID`)
- **FK_COMPONENT_UOM** — COMPONENT -> UOM (`UOMCode -> UomCode`)
- **FK_COMPONENT_WAREHOUSE** — COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COMPONENT_WAREHOUSE_LOCATION** — COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_COMPONENT_DESIGNATOR_COMPONENT** — COMPONENT_DESIGNATOR -> COMPONENT (`ComponentID -> ID`)
- **FK_COMPONENT_INSTANCE_COMPONENT** — COMPONENT_INSTANCE -> COMPONENT (`ComponentID -> ID`)
- **FK_COMPONENT_SUBSTITUTE_COMPONENT** — COMPONENT_SUBSTITUTE -> COMPONENT (`ComponentID -> ID`)
- **FK_GROUP_COMPONENT_COMPONENT** — GROUP_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_OPERATION_COMPONENT_COMPONENT** — OPERATION_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_PROCESS_COMPONENT_COMPONENT** — PROCESS_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_PRODUCT_COMPONENT_COMPONENT** — PRODUCT_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_RECIPE_COMPONENT_COMPONENT** — RECIPE_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_RESOURCE_COMPONENT_COMPONENT** — RESOURCE_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_WIP_COMPONENT_COMPONENT** — WIP_COMPONENT -> COMPONENT (`ComponentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_COMPONENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_COMPONENT_DSID** on `DSID`
- **IF_COMPONENT_EC_ORDER** on `EcoID`
- **IF_COMPONENT_GRADE** on `GradeID`
- **IF_COMPONENT_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_COMPONENT_UNIT** on `UnitID`
- **IF_COMPONENT_WarehouseLocationID** on `WarehouseLocationID`
