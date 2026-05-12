# CERTIFICATION_RELATIONSHIP_CLASS

**Database:** Operational

**Description:** Classifications can be a part of multiple parent-child relations serving different purposes. The purpose can be identified by the certification relationship class.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a certification relationship class. |
| Name | NVARCHAR(255) | False |  | False |  | Certification relationship class name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CERTIFICATION_RELATIONSHIP_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CERTIFICATION_RELATION_CERTIFICATION_RELATIONSHIP_CLASS** — CERTIFICATION_RELATION -> CERTIFICATION_RELATIONSHIP_CLASS (`CertificationRelationshipClassID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
