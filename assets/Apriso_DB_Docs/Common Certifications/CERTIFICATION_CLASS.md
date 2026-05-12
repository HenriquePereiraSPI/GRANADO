# CERTIFICATION_CLASS

**Database:** Operational

**Description:** This table stores the certification class definition. The certification class is used to categorize certifications.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a certification class. |
| Name | NVARCHAR(255) | False |  | False |  | Certification class name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CERTIFICATION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CERTIFICATION_CERTIFICATION_CLASS** — CERTIFICATION -> CERTIFICATION_CLASS (`CertificationClassID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
