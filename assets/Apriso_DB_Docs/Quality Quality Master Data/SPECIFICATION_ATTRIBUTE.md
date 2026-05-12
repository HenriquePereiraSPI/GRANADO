# SPECIFICATION_ATTRIBUTE

**Database:** Operational

**Description:** The SPECIFICATION_ATTRIBUTE table is used by quality to store attribute overrides for characteristics belonging to a specification disposition sequence.  Such that each SPECIFICATION is linked to one or more CHARACTERISTICS, but each characteristics linked can have a specialization.  This table maintains the specialization of the CHARACTERISTIC of type Attribute. Each SPECIFACATION override level is linked through the SPECIFICATION_DISPOSITION table by a disposition sequence number.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | True | ATTRIBUTE | Unique identifier for the attribute |
| Characteristic | NVARCHAR(40) | False |  | True | ATTRIBUTE | Link the specification line to a characteristic |
| Conforming | BIT | True |  | False |  | A flag specifying if this Attribute is Conforming or Non-Conforming. |
| DispositionSequenceNo | INT(10,0) | False |  | True | SPECIFICATION_DISPOSITION | Link ot the disposition Line |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| SpecificationID | INT(10,0) | False |  | True | SPECIFICATION_DISPOSITION | The Link between the Attribute and the parent SPECIFICATION. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPECIFICATION_ATTRIBUTE** on `SpecificationID, Characteristic, DispositionSequenceNo, Attribute`

## Foreign Keys (this table -> other)

- **FK_SPECIFICATION_ATTRIBUTE_ATTRIBUTE** — SPECIFICATION_ATTRIBUTE -> ATTRIBUTE (`Characteristic, Attribute -> Characteristic, Attribute`)
- **FK_SPECIFICATION_ATTRIBUTE_GRADE** — SPECIFICATION_ATTRIBUTE -> GRADE (`GradeID -> ID`)
- **FK_SPECIFICATION_ATTRIBUTE_SPECIFICATION_DISPOSITION** — SPECIFICATION_ATTRIBUTE -> SPECIFICATION_DISPOSITION (`SpecificationID, Characteristic, DispositionSequenceNo -> SpecificationID, Characteristic, DispositionSequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPECIFICATION_ATTRIBUTE_ATTRIBUTE** on `Characteristic, Attribute`
- **IF_SPECIFICATION_ATTRIBUTE_GRADE** on `GradeID`
