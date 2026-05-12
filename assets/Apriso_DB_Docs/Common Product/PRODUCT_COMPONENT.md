# PRODUCT_COMPONENT

**Database:** Operational

**Description:** This table contains the link between a Product and its components. It is usually called Product Bill of Material (BOM). This table does not contain the component itself but only the link with the COMPONENT table that contains the details. This table contains the BOM number, the component locator and the integration method. BOM can be global or restricted to a Facility.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocationType | SMALLINT(5,0) | True |  | False |  | For future use. |
| AllowOverAllocation | BIT | True |  | False |  | For future use. |
| BOMNumber | NVARCHAR(10) | True |  | False |  | This is the BOM number (BOM version). It allows a product to have multiple product BOM active at a time |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ComponentID | INT(10,0) | True |  | False | COMPONENT | Link to the component record that describe the actual ingredient/component and ingredient/component quantity |
| ComponentIntegrMethodID | INT(10,0) | True |  | False | COMPONENT_INTEGR_METHOD | Method used to introduce the component (from pipe, container�), user-defined. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of a product BOM to a facility |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Locator | NVARCHAR(20) | True |  | False |  | Link a component to a locator (Electronic industry) |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to a product (product number and product version) |
| SequenceNo | INT(10,0) | True |  | False |  | For future use. |

## Primary Key

- **PK_PRODUCT_COMPONENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_COMPONENT_COMPONENT** — PRODUCT_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_PRODUCT_COMPONENT_COMPONENT_INTEGR_METHOD** — PRODUCT_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_PRODUCT_COMPONENT_FACILITY** — PRODUCT_COMPONENT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_COMPONENT_PRODUCT** — PRODUCT_COMPONENT -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **FK_PRODUCT_COMPONENT_FACILITY_PRODUCT_COMPONENT** — PRODUCT_COMPONENT_FACILITY -> PRODUCT_COMPONENT (`ProductComponentID -> ID`)
- **FK_PRODUCT_COMPONENT_PROCESS_USED_PRODUCT_COMPONENT** — PRODUCT_COMPONENT_PROCESS_USED -> PRODUCT_COMPONENT (`ProductComponentID -> ID`)
- **FK_QUALITY_DEFECT_PRODUCT_COMPONENT** — QUALITY_DEFECT -> PRODUCT_COMPONENT (`ProductComponentID -> ID`)

## Unique Indexes

- **UK_PRODUCT_COMPONENT** on `FUID`

## Non-Unique Indexes

- **IDX_PRODUCT_COMPONENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_COMPONENT_COMPONENT** on `ComponentID`
- **IF_PRODUCT_COMPONENT_COMPONENT_INTEGR_METHOD** on `ComponentIntegrMethodID`
- **IXD_ProductID_ComponentID** on `ProductID, ComponentID`
