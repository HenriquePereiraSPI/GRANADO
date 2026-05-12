# INSPECTION_SEVERITY

**Database:** Operational

**Description:** This table is required to maintain Inspection severities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Severity | SMALLINT(5,0) | False |  | True |  | Pre-configured: 1 - Reduced, 2 - Normal, 3 - Tightened. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INSPECTION_SEVERITY** on `Severity`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SAMPLING_SCHEME_PARAMS_SAMPLING_SCHEME_INSPECTION_SEVERITY** — SAMPLING_SCHEME_PARAMS -> INSPECTION_SEVERITY (`InspectionSeverity -> Severity`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
