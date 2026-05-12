# PRODUCT_GRADE

**Database:** Operational

**Description:** Contains the list of the various Grades supported by  a product

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Codes System and its Attributes unique identifier |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attributes unique identifier |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | Validity date (start) of the entity in UTC |
| ExpirationDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| GradeID | INT(10,0) | False |  | True | GRADE | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRODUCT_GRADE** on `ProductID, GradeID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_GRADE_CODE_DOMAIN_MANAGER** — PRODUCT_GRADE -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_PRODUCT_GRADE_CODE_FORMAT_TYPE** — PRODUCT_GRADE -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_PRODUCT_GRADE_GRADES** — PRODUCT_GRADE -> GRADE (`GradeID -> ID`)
- **FK_PRODUCT_GRADE_PRODUCT** — PRODUCT_GRADE -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **FK_COMPONENT_PRODUCT_GRADE** — COMPONENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_DISPOSITION_CONTENT_PRODUCT_GRADE** — DISPOSITION_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_DISPOSITION_PRODUCT_GRADE** — DISPOSITION -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_EXTERNAL_PRODUCT_GRADE_PRODUCT_GRADE** — EXTERNAL_PRODUCT_GRADE -> PRODUCT_GRADE (`GradeID, ProductID -> GradeID, ProductID`)
- **FK_GENEALOGY_PRODUCT_GRADE** — GENEALOGY -> PRODUCT_GRADE (`ParentProductID, ParentGradeID -> ProductID, GradeID`)
- **FK_GENEALOGY_PRODUCT_GRADE1** — GENEALOGY -> PRODUCT_GRADE (`ProductID, ProductGradeID -> ProductID, GradeID`)
- **FK_LABOR_DETAILS_PRODUCT_GRADE** — LABOR_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_LOT_NO_PRODUCT_GRADE** — LOT_NO -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_MATERIAL_ORDER_CONTENT_PRODUCT_GRADE** — MATERIAL_ORDER_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_ORDER_DETAIL_PRODUCT_GRADE** — ORDER_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_ORDER_SCHEDULE_PRODUCT_GRADE** — ORDER_SCHEDULE -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_PRODUCT_ROUTING_PRODUCT_GRADE** — PRODUCT_ROUTING -> PRODUCT_GRADE (`ProductID, ProductGradeID -> ProductID, GradeID`)
- **FK_RECEIPT_CONTENT_PRODUCT_GRADE** — RECEIPT_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_RECEIPT_DETAIL_PRODUCT_GRADE** — RECEIPT_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_RESOURCE_CONTENTS_PRODUCT_GRADE** — RESOURCE_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_RESOURCE_LABOR_DETAIL_PRODUCT_GRADE** — RESOURCE_LABOR_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_WIP_CONTENT_PRODUCT_GRADE** — WIP_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_WIP_ORDER_CONTENT_PRODUCT_GRADE** — WIP_ORDER_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRODUCT_GRADE_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_PRODUCT_GRADE_GRADES** on `GradeID`
