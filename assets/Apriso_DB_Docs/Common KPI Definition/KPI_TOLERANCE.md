# KPI_TOLERANCE

**Database:** Operational

**Description:** Defines the current tolerances for a specific KPI for a role and calculation type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee ID to whom the KPI Tolerance applies |
| ID | INT(10,0) | False |  | True |  | Identity  of the KPI Tolerance |
| Key1 | NVARCHAR(100) | True |  | False |  | Context value 1 associated with KPI |
| Key10 | NVARCHAR(100) | True |  | False |  | Context value 10 associated with KPI |
| Key2 | NVARCHAR(100) | True |  | False |  | Context value 2 associated with KPI |
| Key3 | NVARCHAR(100) | True |  | False |  | Context value 3 associated with KPI |
| Key4 | NVARCHAR(100) | True |  | False |  | Context value 4 associated with KPI |
| Key5 | NVARCHAR(100) | True |  | False |  | Context value 5 associated with KPI |
| Key6 | NVARCHAR(100) | True |  | False |  | Context value 6 associated with KPI |
| Key7 | NVARCHAR(100) | True |  | False |  | Context value 7 associated with KPI |
| Key8 | NVARCHAR(100) | True |  | False |  | Context value 8 associated with KPI |
| Key9 | NVARCHAR(100) | True |  | False |  | Context value 9 associated with KPI |
| KpiName | NVARCHAR(50) | True |  | False |  | KPIName fro which the tolerance is applied |
| KpiToleranceType | SMALLINT(5,0) | True |  | False | KPI_TOLERANCE_TYPE | Type of KPI Tolerance |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower Control Limit |
| LowerSpecLimit | DECIMAL(28,10) | True |  | False |  | Lower Spec Limit |
| NoCustomOverride | BIT | True |  | False |  | Indicates if custom tolerances can be set |
| TargetValue | DECIMAL(28,10) | True |  | False |  | Target Value |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM Code |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Upper Control Limit |
| UpperSpecLimit | DECIMAL(28,10) | True |  | False |  | Upper Spec Limit |

## Primary Key

- **PK_KPI_TOLERANCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_TOLERANCE_EMPLOYEE** — KPI_TOLERANCE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_KPI_TOLERANCE_KPI_TOLERANCE_TYPE** — KPI_TOLERANCE -> KPI_TOLERANCE_TYPE (`KpiToleranceType -> KpiToleranceType`)
- **FK_KPI_TOLERANCE_UOM** — KPI_TOLERANCE -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_TOLERANCE_KPI** on `KpiName`
