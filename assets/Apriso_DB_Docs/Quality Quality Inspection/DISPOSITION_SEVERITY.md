# DISPOSITION_SEVERITY

**Database:** Operational

**Description:** Contains all possible user defined severities available for all enitties of the Disposition hierarchy: Disposition (DISPOSITION.SeverityID), Disposition Line (DISPOSITION_LINE.SeverityID), Disposition

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Severity record |
| SeverityCode | NVARCHAR(20) | False |  | False |  | Code uniquely identifying the severity |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_SEVERITY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_D_DISPOSITION_SEVERITY** — CHARACTERISTIC_D -> DISPOSITION_SEVERITY (`Severity -> ID`)
- **FK_CHARACTERISTIC_DISPOSITION_SEVERITY** — CHARACTERISTIC -> DISPOSITION_SEVERITY (`Severity -> ID`)
- **FK_DISPOSITION_DISPOSITION_SEVERITY** — DISPOSITION -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_DISPOSITION_LINE_DISPOSITION_SEVERITY** — DISPOSITION_LINE -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_DISPOSITION_TEST_DISPOSITION_SEVERITY** — DISPOSITION_TEST -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_INSPECTION_CHARACTERISTIC_DISPOSITION_SEVERITY** — INSPECTION_CHARACTERISTIC -> DISPOSITION_SEVERITY (`Severity -> ID`)

## Unique Indexes

- **UK_DISPOSITION_SEVERITY** on `SeverityCode`

## Non-Unique Indexes

- **** on ``
