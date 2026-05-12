# REASON_TYPE

**Database:** Operational

**Description:** Contains definitions for all the possible types of Reason Codes that can be created.  This gives the Reason Codes a degree of Grouping. Some are controled by Dassault SystFmes Business Components.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Color | NVARCHAR(20) | True |  | False |  | Defines colors to be used by reports, charts and dashboards. |
| ReasonType | SMALLINT(5,0) | False |  | True |  | Type of the Reason Code. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REASON_TYPES** on `ReasonType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_REGION_REASON_CODE_REASON_TYPE** — DOCUMENT_REGION_REASON_CODE -> REASON_TYPE (`ReasonType -> ReasonType`)
- **FK_PRODUCTION_FACT_DETAIL_REASON_TYPE** — PRODUCTION_FACT_DETAIL -> REASON_TYPE (`ReasonType -> ReasonType`)
- **FK_REASON_CODES_REASON_TYPES** — REASON_CODE -> REASON_TYPE (`ReasonType -> ReasonType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
