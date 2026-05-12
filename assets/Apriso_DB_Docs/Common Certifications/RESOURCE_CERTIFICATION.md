# RESOURCE_CERTIFICATION

**Database:** Operational

**Description:** This table stores the complete information about the resource’s certifications: controlling receipt date, expiration date, mandatory certification flag, and valid flag. It allows reflecting multiple use cases, such as when: a resource obtained a certification, a certification is going to expire, a certification is mandatory but has not yet been obtained, a certification is not expired but invalidated because of a certain reason, and other.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificationID | INT(10,0) | False |  | False | CERTIFICATION | Certification applied to a resource. |
| ExpirationDate | DATETIME | True |  | False |  | The date and time of the resource certification expiration. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a resource certification. |
| Invalid | BIT | False | ((0)) | False |  | Flag indicating whether a resource certification is invalid. Default value is false (0). |
| InvalidatedOn | DATETIME | True |  | False |  | The date and time when a resource certification was invalidated. |
| InvalidationReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code of a resource certification. |
| MandatoryCertification | BIT | True |  | False |  | Flag indicating if a certification is mandatory for a resource to perform work. This indication is generic and not related to a WIP. |
| ReceiptDate | DATETIME | True |  | False |  | The date and time when a resource obtained a certification. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | Name of a resource related to a certification. |

## Primary Key

- **PK_RESOURCE_CERTIFICATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_CERTIFICATION_CERTIFICATION** — RESOURCE_CERTIFICATION -> CERTIFICATION (`CertificationID -> ID`)
- **FK_RESOURCE_CERTIFICATION_REASON_CODE** — RESOURCE_CERTIFICATION -> REASON_CODE (`InvalidationReasonCode -> ReasonCode`)
- **FK_RESOURCE_CERTIFICATION_RESOURCE_** — RESOURCE_CERTIFICATION -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_CERTIFICATION_CERTIFICATION** on `CertificationID`
- **IF_RESOURCE_CERTIFICATION_RESOURCE_** on `ResourceID`
