# KPI

**Database:** Solution Authoring

**Description:** Defines available Key Performance Indicators

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BaseUom | NVARCHAR(10) | True |  | False |  | Unit of Measure code |
| Category_ | NVARCHAR(50) | True |  | False | KPI_CATEGORY | The category of the KPI |
| ClientName | NVARCHAR(100) | True |  | False |  | The context of the KPI |
| Context_ | NVARCHAR(50) | True |  | False | KPI_CONTEXT | The context of the KPI |
| ContextSQLStatement | NVARCHAR | True |  | False |  | The context for the KPI |
| DefaultStrategy | SMALLINT(5,0) | True |  | False |  | The default KPI strategy to use |
| DesignMode | BIT | False | ((0)) | False |  | To enable/disable KPI validation at design time |
| DiagnosisReportID | INT(10,0) | True |  | False | REPORT | Link to the report |
| EnableMessaging | BIT | False | ((0)) | False |  | The flag indicating if Messaging is enabled on this KPI. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| Key1 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 1 from the context query |
| Key10 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 10 from the context query |
| Key2 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 2 from the context query |
| Key3 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 3 from the context query |
| Key4 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 4 from the context query |
| Key5 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 5 from the context query |
| Key6 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 6 from the context query |
| Key7 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 7 from the context query |
| Key8 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 8 from the context query |
| Key9 | NVARCHAR(30) | True |  | False |  | Entity to be mapped to Key Column 9 from the context query |
| Name | NVARCHAR(50) | False |  | True |  | The name of the KPI |
| Script | NVARCHAR | True |  | False |  | Information necessary to configure and execute the script (xml) for the KPI. |
| SequenceNo | INT(10,0) | True |  | False |  | The sequence in which the KPI should be displayed |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeFromExpression | NVARCHAR(500) | True |  | False |  | Expression To specify TimeFrom. |
| TimeFromTerm | NVARCHAR(100) | True |  | False | KPI_TERM | The term that is used to define the from time |
| TimeToExpression | NVARCHAR(500) | True |  | False |  | Expression To specify TimeTo. |
| TimeToTerm | NVARCHAR(100) | True |  | False | KPI_TERM | The term that is used to define the to time |

## Primary Key

- **PK_KPI** on `Name`

## Foreign Keys (this table -> other)

- **FK_KPI_KPI_CATEGORY** — KPI -> KPI_CATEGORY (`Category_ -> Name`)
- **FK_KPI_KPI_CONTEXT** — KPI -> KPI_CONTEXT (`Context_ -> Name`)
- **FK_KPI_KPI_TERM** — KPI -> KPI_TERM (`TimeToTerm -> Name`)
- **FK_KPI_KPI_TERM1** — KPI -> KPI_TERM (`TimeFromTerm -> Name`)
- **FK_KPI_REPORT** — KPI -> REPORT (`DiagnosisReportID -> ID`)

## Referenced By (other tables -> this)

- **FK_KPI_GRID_KPI_KPI** — KPI_GRID_KPI -> KPI (`KPIName -> Name`)
- **FK_KPI_LINK_KPI_ALERT_RULE_KPI** — KPI_LINK_KPI_ALERT_RULE -> KPI (`KpiName -> Name`)
- **FK_KPI_ROLE_KPI** — KPI_ROLE -> KPI (`KpiName -> Name`)
- **FK_KPI_TERM_ASSOCIATION_KPI** — KPI_TERM_ASSOCIATION -> KPI (`KPIName -> Name`)

## Unique Indexes

- **UK_KPI** on `FUID`

## Non-Unique Indexes

- **IF_KPI_KPI_CATEGORY** on `Category_`
- **IF_KPI_KPI_CONTEXT** on `Context_`
- **IF_KPI_KPI_OWNERSHIP** on `ClientName`
- **IF_KPI_KPI_STRATEGY** on `DefaultStrategy`
- **IF_KPI_KPI_TERM** on `TimeToTerm`
- **IF_KPI_KPI_TERM1** on `TimeFromTerm`
- **IF_KPI_REPORT** on `DiagnosisReportID`
