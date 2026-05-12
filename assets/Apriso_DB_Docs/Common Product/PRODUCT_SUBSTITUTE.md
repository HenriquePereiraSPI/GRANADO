# PRODUCT_SUBSTITUTE

**Database:** Operational

**Description:** This table describs how a product can be subsitued to an other in various condition (linked to the substitution type) business logic to be implemented in the process

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConversionFactor | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| ExpirationDate | DATETIME | True |  | False |  | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| IncludeExcludeFlag | BIT | True | (0) | False |  | For future use. |
| ProductID | INT(10,0) | False |  | False | PRODUCT | Reference to a product (product number and product version) |
| SubstituteGradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| SubstituteProductID | INT(10,0) | True |  | False | PRODUCT | ProductId that can be substituted |
| SubstituteType | SMALLINT(5,0) | True |  | False | SUBSTITUTE_TYPE | Type of substitution |

## Primary Key

- **PK_PRODUCT_SUBSTITUTE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_SUBSTITUTE_EC_ORDER** — PRODUCT_SUBSTITUTE -> EC_ORDER (`EcoID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_GRADE** — PRODUCT_SUBSTITUTE -> GRADE (`GradeID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_GRADE_1** — PRODUCT_SUBSTITUTE -> GRADE (`SubstituteGradeID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_PRODUCT** — PRODUCT_SUBSTITUTE -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_PRODUCT_1** — PRODUCT_SUBSTITUTE -> PRODUCT (`SubstituteProductID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_SUBSTITUTE_TYPE** — PRODUCT_SUBSTITUTE -> SUBSTITUTE_TYPE (`SubstituteType -> SubstituteType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_SUBSTITUTE_EC_ORDER** on `EcoID`
- **IF_PRODUCT_SUBSTITUTE_GRADE** on `GradeID`
- **IF_PRODUCT_SUBSTITUTE_GRADE_1** on `SubstituteGradeID`
- **IF_PRODUCT_SUBSTITUTE_PRODUCT_1** on `SubstituteProductID`
- **IF_PRODUCT_SUBSTITUTE_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_PRODUCT_SUBSTITUTE_PRODUCT_GRADE1** on `SubstituteProductID, SubstituteGradeID`
