# CERTIFICATION

**Database:** Operational

**Description:** This table stores basic information about certifications. Certification is a standardized credential that certifies a resource (that is, employee or equipment) for work on a particular shop floor activity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificationClassID | INT(10,0) | False |  | False | CERTIFICATION_CLASS | Identifier of the certification class. |
| Code | NVARCHAR(255) | False |  | False |  | Certification code. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a certification. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Identifier of a partner that issues a certificate. |
| ResourceType | INT(10,0) | True |  | False |  | Specifies what type of resource can obtain a certification. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackForExpiration | BIT | True |  | False |  | Indicates whether a certification expires in time. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValidityPeriodInDays | INT(10,0) | True |  | False |  | Number of days of the certificate validity after its issue. |

## Primary Key

- **PK_CERTIFICATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_CERTIFICATION_CERTIFICATION_CLASS** — CERTIFICATION -> CERTIFICATION_CLASS (`CertificationClassID -> ID`)
- **FK_CERTIFICATION_PARTNER** — CERTIFICATION -> PARTNER (`PartnerID -> ID`)
- **FK_CERTIFICATION_UNIT** — CERTIFICATION -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CERTIFICATION_RELATION_CERTIFICATION** — CERTIFICATION_RELATION -> CERTIFICATION (`ChildCertificationID -> ID`)
- **FK_CERTIFICATION_RELATION_PARENTID_CERTIFICATION** — CERTIFICATION_RELATION -> CERTIFICATION (`ParentCertificationID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_CERTIFICATION** — PROCESS_REQ_RESOURCE -> CERTIFICATION (`CertificationID -> ID`)
- **FK_RESOURCE_CERTIFICATION_CERTIFICATION** — RESOURCE_CERTIFICATION -> CERTIFICATION (`CertificationID -> ID`)
- **FK_WIP_REQ_RESOURCE_CERTIFICATION** — WIP_REQ_RESOURCE -> CERTIFICATION (`CertificationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CERTIFICATION_CERTIFICATION_CLASS** on `CertificationClassID`
- **IF_CERTIFICATION_PARTNER** on `PartnerID`
- **IF_CERTIFICATION_UNIT** on `UnitID`
