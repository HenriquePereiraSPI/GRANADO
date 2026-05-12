# PRODUCT_CHARACTERISTIC

**Database:** Operational

**Description:** Contains the list of characteristics linked to the product defining its master specification

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicRevisionID | INT(10,0) | True |  | False | CHARACTERISTIC_REVISION | Reference to the revision of the characteristic |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record |
| Inherited | BIT | False | (0) | False |  | Flag indicating that all parameters of the characteristic including control and attribute limits are inherited from the characteristic |
| LowerCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Lower Coherence Limit of the Characteristic. |
| LowerControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower control limit |
| LowerSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Lower specification limit |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Reference to the product the given characteristic is linked to |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target value of the Specification. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the Characteristic. |
| UpperCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | Upper Coherence Limit of the Characteristic. |
| UpperControlLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper control limit |
| UpperSpecificationLimit | DECIMAL(28,10) | True | (0.0) | False |  | Upper Specification limit |

## Primary Key

- **PK_PRODUCT_CHARACTERISTIC** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_CHARACTERISTIC_CHARACTERISTIC_REVISION** — PRODUCT_CHARACTERISTIC -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_PRODUCT_CHARACTERISTIC_PRODUCT** — PRODUCT_CHARACTERISTIC -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_CHARACTERISTIC_UNIT** — PRODUCT_CHARACTERISTIC -> UNIT (`UnitID -> ID`)
- **FK_PRODUCT_CHARACTERISTIC_UOM** — PRODUCT_CHARACTERISTIC -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_PRODUCT_CHARACTERISTIC_ATTR_PRODUCT_CHARACTERISTIC** — PRODUCT_CHARACTERISTIC_ATTR -> PRODUCT_CHARACTERISTIC (`ProductCharacteristicID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PRODUCT_CHARACTERISTIC_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_CHARACTERISTIC_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_PRODUCT_CHARACTERISTIC_PRODUCT** on `ProductID`
- **IF_PRODUCT_CHARACTERISTIC_UNIT** on `UnitID`
