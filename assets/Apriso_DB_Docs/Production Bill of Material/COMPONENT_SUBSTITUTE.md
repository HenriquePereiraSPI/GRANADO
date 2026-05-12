# COMPONENT_SUBSTITUTE

**Database:** Operational

**Description:** Defines in a BOM that a component can be replaced by another component in certain cases. The use case is defined by the Substitution type, while business logic is contained in the Process Definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ComponentID | INT(10,0) | False |  | True | COMPONENT | For future use. |
| ConversionFactor | DECIMAL(28,10) | True | (1.0) | False |  | For future use. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | Validity (start) date of the entity in UTC. |
| ExpirationDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| IncludeExcludeFlag | BIT | True | (0) | False |  | For future use. |
| Quantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| SubstituteProductID | INT(10,0) | False |  | True | PRODUCT | ID of the Product that can be used as a substitute. |
| SubstituteType | SMALLINT(5,0) | True |  | False | SUBSTITUTE_TYPE | Type of the Substitution. |

## Primary Key

- **PK_BOM_SUBSTITE** on `ComponentID, SubstituteProductID`

## Foreign Keys (this table -> other)

- **FK_BOM_SUBSTITE_EC_ORDER** — COMPONENT_SUBSTITUTE -> EC_ORDER (`EcoID -> ID`)
- **FK_BOM_SUBSTITE_SUBSTITUTE_TYPE** — COMPONENT_SUBSTITUTE -> SUBSTITUTE_TYPE (`SubstituteType -> SubstituteType`)
- **FK_COMPONENT_SUBSTITUTE_COMPONENT** — COMPONENT_SUBSTITUTE -> COMPONENT (`ComponentID -> ID`)
- **FK_COMPONENT_SUBSTITUTE_PRODUCT** — COMPONENT_SUBSTITUTE -> PRODUCT (`SubstituteProductID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_BOM_SUBSTITE_EC_ORDER** on `EcoID`
- **IF_COMPONENT_SUBSTITUTE_PRODUCT** on `SubstituteProductID`
