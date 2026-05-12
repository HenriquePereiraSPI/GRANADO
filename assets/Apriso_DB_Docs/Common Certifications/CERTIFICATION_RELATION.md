# CERTIFICATION_RELATION

**Database:** Operational

**Description:** This table enables building parent-child relations between certifications. These relations can be used, for example, to reflect certification programs composed of multiple certifications that can also be obtained individually. Certification relations are used to reflect real certification structures, where the resource, which obtains a parent certification, is also certified by all the children, or can be used to specify a set of required certifications for a particular activity. Such a set can be applied not only to a WIP Required Resource, but also to a resource to specify the certification requirements for the resource.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificationRelationshipClassID | INT(10,0) | False |  | True | CERTIFICATION_RELATIONSHIP_CLASS | Identifier of a certification relationship class. |
| ChildCertificationID | INT(10,0) | False |  | True | CERTIFICATION | Identifier of a child certification class name. |
| ParentCertificationID | INT(10,0) | False |  | True | CERTIFICATION | Unique identifier of a parent certification. |

## Primary Key

- **PK_CERTIFICATION_RELATION** on `ParentCertificationID, ChildCertificationID, CertificationRelationshipClassID`

## Foreign Keys (this table -> other)

- **FK_CERTIFICATION_RELATION_CERTIFICATION** — CERTIFICATION_RELATION -> CERTIFICATION (`ChildCertificationID -> ID`)
- **FK_CERTIFICATION_RELATION_CERTIFICATION_RELATIONSHIP_CLASS** — CERTIFICATION_RELATION -> CERTIFICATION_RELATIONSHIP_CLASS (`CertificationRelationshipClassID -> ID`)
- **FK_CERTIFICATION_RELATION_PARENTID_CERTIFICATION** — CERTIFICATION_RELATION -> CERTIFICATION (`ParentCertificationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CERTIFICATION_RELATION_CERTIFICATION** on `ChildCertificationID`
- **IF_CERTIFICATION_RELATION_CERTIFICATION_RELATIONSHIP_CLASS** on `CertificationRelationshipClassID`
