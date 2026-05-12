# CURRENCY

**Database:** Operational

**Description:** Stores all known valid currencies. Each currency has its maximum decimal places defined. Rounding methods are used to round the currency.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountryCode | NVARCHAR(3) | True |  | False | COUNTRY | For future use. |
| CurrencyCode | NVARCHAR(3) | False |  | True |  | For future use. |
| CurrencySymbol | NVARCHAR(10) | True |  | False |  | For future use. |
| MaximumDecimalDigits | SMALLINT(5,0) | True |  | False |  | For future use. |
| RoundingMethodTypeID | SMALLINT(5,0) | True |  | False | ROUNDING_METHOD_TYPE | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CURRENCY** on `CurrencyCode`

## Foreign Keys (this table -> other)

- **FK_CURRENCY_COUNTRY** — CURRENCY -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_CURRENCY_ROUNDING_METHOD_TYPE** — CURRENCY -> ROUNDING_METHOD_TYPE (`RoundingMethodTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_CURRENCY** — ATTENDANCE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_ATTENDANCE_HOURS_CURRENCY** — ATTENDANCE_HOURS -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_COMPANY_CURRENCY** — COMPANY -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_COST_CHANGE_CURRENCY** — COST_CHANGE -> CURRENCY (`FromCurrencyCode -> CurrencyCode`)
- **FK_COST_CURRENCY** — COST -> CURRENCY (`StdCostCurrency -> CurrencyCode`)
- **FK_COST_CURRENCY1** — COST -> CURRENCY (`FrozenCostCurrency -> CurrencyCode`)
- **FK_COST_CURRENCY2** — COST -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_COST_DETAIL_CURRENCY** — COST_DETAIL -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_DIVISION_CURRENCY** — DIVISION -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_EMPLOYEE_CURRENCY** — EMPLOYEE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_EMPLOYEE_FACILITY_CURRENCY** — EMPLOYEE_FACILITY -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_EXCHANGE_RATE_CURRENCY** — EXCHANGE_RATE -> CURRENCY (`FromCurrencyCode -> CurrencyCode`)
- **FK_EXCHANGE_RATE_CURRENCY1** — EXCHANGE_RATE -> CURRENCY (`ToCurrencyCode -> CurrencyCode`)
- **FK_LABOR_CURRENCY** — LABOR -> CURRENCY (`CurrencyCode -> CurrencyCode`)
- **FK_LABOR_GRADE_CURRENCY** — LABOR_GRADE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_LABOR_HOURS_CURRENCY** — LABOR_HOURS -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_OCCUPATION_CURRENCY** — OCCUPATION -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_OCCUPATION_LABOR_GRADE_CURRENCY** — OCCUPATION_LABOR_GRADE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_WORK_ADD_ON_CURRENCY** — WORK_ADD_ON -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CURRENCY_COUNTRY** on `CountryCode`
