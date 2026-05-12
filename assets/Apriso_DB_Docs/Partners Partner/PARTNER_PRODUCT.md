# PARTNER_PRODUCT

**Database:** Operational

**Description:** Contains Partner Product Numbers for given Partner IDs and Product IDs.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ExternalProductType | SMALLINT(5,0) | True |  | False | EXTERNAL_PRODUCT_TYPE | For future use. |
| ExternalUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PartnerGrade | NVARCHAR(20) | True |  | False |  | For future use. |
| PartnerID | INT(10,0) | False |  | False | PARTNER | Relation to the Partner. |
| PartnerProductNo | NVARCHAR(80) | False |  | False |  | Partner Product Number. |
| PreferenceRank | INT(10,0) | True |  | False |  | It stores a provider preference rank for a given product_partner. |
| ProductID | INT(10,0) | False |  | False | PRODUCT | Reference to a Product (Product Number and Product Version). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PARTNER_PRODUCT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PARTNER_PRODUCT_EXTERNAL_PRODUCT_TYPE** — PARTNER_PRODUCT -> EXTERNAL_PRODUCT_TYPE (`ExternalProductType -> ExternalProductType`)
- **FK_PARTNER_PRODUCT_FACILITY** — PARTNER_PRODUCT -> FACILITY (`Facility -> Facility`)
- **FK_PARTNER_PRODUCT_GRADE** — PARTNER_PRODUCT -> GRADE (`GradeID -> ID`)
- **FK_PARTNER_PRODUCT_PARTNER** — PARTNER_PRODUCT -> PARTNER (`PartnerID -> ID`)
- **FK_PARTNER_PRODUCT_PRODUCT** — PARTNER_PRODUCT -> PRODUCT (`ProductID -> ID`)
- **FK_PARTNER_PRODUCT_UOM** — PARTNER_PRODUCT -> UOM (`ExternalUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PARTNER_PRODUCT_GRADE** on `GradeID`
- **IF_PARTNER_PRODUCT_PARTNER** on `PartnerID`
- **IF_PARTNER_PRODUCT_PRODUCT** on `ProductID`
