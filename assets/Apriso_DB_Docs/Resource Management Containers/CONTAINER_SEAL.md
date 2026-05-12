# CONTAINER_SEAL

**Database:** Operational

**Description:** Stores seals against any given Container.  Each record in this table represents a seal made against a particular Container.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BrokenDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| Container | NVARCHAR(40) | False |  | True | CONTAINER | For future use. |
| SealedDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| SealIssuer | NVARCHAR(50) | True |  | False |  | For future use. |
| SealNumber | NVARCHAR(20) | False |  | True |  | For future use. |
| SealStatus | SMALLINT(5,0) | True |  | False | SEAL_STATUS | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTAINER_SEALS** on `Container, SealNumber`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_SEALS_CONTAINER** — CONTAINER_SEAL -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_SEALS_SEAL_STATUS** — CONTAINER_SEAL -> SEAL_STATUS (`SealStatus -> SealStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_SEALS_SEAL_STATUS** on `SealStatus`
