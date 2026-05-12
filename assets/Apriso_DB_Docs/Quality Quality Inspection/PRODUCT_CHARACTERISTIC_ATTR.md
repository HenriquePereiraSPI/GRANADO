# PRODUCT_CHARACTERISTIC_ATTR

**Database:** Operational

**Description:** Contains all the attributes of the attributive characteristics defined in Product Characteristic

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Conforming | BIT | False |  | False |  | Flag indicating if the value of the attribute is conforming to the specification |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the product characterisitc attribute |
| ProductCharacteristicID | INT(10,0) | True |  | False | PRODUCT_CHARACTERISTIC | Reference to the product characterisitc attribute |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRODUCT_CHARACTERISTIC_ATTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_CHARACTERISTIC_ATTR_PRODUCT_CHARACTERISTIC** — PRODUCT_CHARACTERISTIC_ATTR -> PRODUCT_CHARACTERISTIC (`ProductCharacteristicID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PRODUCT_CHARACTERISTIC_ATTR_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_CHARACTERISTIC_ATTR_PRODUCT_CHARACTERISTIC** on `ProductCharacteristicID`
