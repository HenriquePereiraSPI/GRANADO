# ATTRIBUTE

**Database:** Operational

**Description:** Stores the valid Attributes under the CHARACTERISTIC table for quality tracking where the Characteristic is of type "Attribute".

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | True |  | Specific Attribute for the Characteristic when it is defined as type "Attribute". |
| Characteristic | NVARCHAR(40) | False |  | True | CHARACTERISTIC | Parent Characteristic that the Attribute is linked to. |
| Conforming | BIT | True |  | False |  | Flag specifying if the Attribute is Conforming or Non-Conforming. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| SeverityID | INT(10,0) | True |  | False | DEFECT_SEVERITY | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ATTRIBUTES** on `Characteristic, Attribute`

## Foreign Keys (this table -> other)

- **FK_ATTRIBUTE_DEFECT_SEVERITY** — ATTRIBUTE -> DEFECT_SEVERITY (`SeverityID -> ID`)
- **FK_ATTRIBUTE_GRADE** — ATTRIBUTE -> GRADE (`GradeID -> ID`)
- **FK_ATTRIBUTES_CHARACTERISTICS** — ATTRIBUTE -> CHARACTERISTIC (`Characteristic -> Characteristic`)

## Referenced By (other tables -> this)

- **FK_SPECIFICATION_ATTRIBUTE_ATTRIBUTE** — SPECIFICATION_ATTRIBUTE -> ATTRIBUTE (`Characteristic, Attribute -> Characteristic, Attribute`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTRIBUTE_DEFECT_SEVERITY** on `SeverityID`
- **IF_ATTRIBUTE_GRADE** on `GradeID`
- **IXD_Characteristic_Conforming** on `Characteristic, Conforming`
