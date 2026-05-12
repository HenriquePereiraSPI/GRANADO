# DIVISION_SALES

**Database:** Operational

**Description:** The Division's Sales organization structure, as specified by the enterprise financial application. Orders are typically associated with a Division for accounting purposes. The sales organization structure is useful to understand the sales people responsible for or interested by an particular Order in the System.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DistributionChannel | NVARCHAR(2) | False |  | True | DISTRIBUTION_CHANNEL | For future use. |
| Division | NVARCHAR(70) | False |  | True | DIVISION | For future use. |
| SalesArea | NVARCHAR(10) | True |  | False |  | For future use. |
| SalesOrganization | NVARCHAR(4) | False |  | True | SALES_ORGANIZATION | For future use. |

## Primary Key

- **PK_DIVISION_ASSIGNMENTS** on `SalesOrganization, DistributionChannel, Division`

## Foreign Keys (this table -> other)

- **FK_DIVISION_ASSIGNMENTS_DISTRIBUTION_CHANNELS** — DIVISION_SALES -> DISTRIBUTION_CHANNEL (`DistributionChannel -> DistributionChannel`)
- **FK_DIVISION_ASSIGNMENTS_DIVISION** — DIVISION_SALES -> DIVISION (`Division -> Division`)
- **FK_DIVISION_ASSIGNMENTS_SALES_ORGANIZATION** — DIVISION_SALES -> SALES_ORGANIZATION (`SalesOrganization -> SalesOrganization`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DIVISION_ASSIGNMENTS_DISTRIBUTION_CHANNELS** on `DistributionChannel`
- **IF_DIVISION_ASSIGNMENTS_DIVISION** on `Division`
