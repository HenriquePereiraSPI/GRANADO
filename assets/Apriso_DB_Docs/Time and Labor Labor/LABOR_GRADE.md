# LABOR_GRADE

**Database:** Operational

**Description:** Labor grades

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Amount | DECIMAL(28,10) | True | (0.0) | False |  | The currency earnings amount |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | Code representing the name of the earnings currency |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Identifier for the Facility |
| LaborGrade | NVARCHAR(40) | False |  | True |  | Labor Grade and Its Attributes |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LABOR_GRADES** on `Facility, LaborGrade`

## Foreign Keys (this table -> other)

- **FK_LABOR_GRADE_CURRENCY** — LABOR_GRADE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_LABOR_GRADE_FACILITY** — LABOR_GRADE -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_OCCUPATION_LABOR_GRADE_LABOR_GRADE** — OCCUPATION_LABOR_GRADE -> LABOR_GRADE (`Facility, LaborGrade -> Facility, LaborGrade`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
