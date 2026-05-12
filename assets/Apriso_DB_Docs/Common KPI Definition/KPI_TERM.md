# KPI_TERM

**Database:** Solution Authoring

**Description:** Terms for constructing key performance indicator calculations

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Assembly | NVARCHAR(200) | True |  | False |  | The assembly name that is invoked for term resolution |
| BCMethodID | INT(10,0) | True |  | False | BUSINESS_COMPONENT_METHOD | Method in the class to get the value |
| Class_ | NVARCHAR(200) | True |  | False |  | The class name that is invoked for term resolution |
| ClientName | NVARCHAR(100) | True |  | False |  | Owner of the term |
| ConnectionString | NVARCHAR(255) | True |  | False |  | The connection string for the DB in which to invoke the SP |
| Context | NVARCHAR(50) | True |  | False |  | The context of the term |
| DFCID | INT(10,0) | True |  | False | DFC | Link to the OPERATION_HEADER table. |
| DfcOutputName | NVARCHAR(255) | True |  | False |  | Name of Operation external output |
| DFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | The Unique identifier for Operation. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| GroupNamespace | NVARCHAR(255) | True |  | False |  | The group of the term |
| MDXProviderAlias | NVARCHAR(255) | True |  | False |  | Provider Alias used by MDX Query to connect to the cube. |
| MDXQuery | NVARCHAR | True |  | False |  | MDX query for this KPI Term. |
| MIPoint | NVARCHAR(255) | True |  | False |  | The Machine Integrator Point that this term is connected to |
| Name | NVARCHAR(100) | False |  | True |  | The name of the term |
| Script | NVARCHAR | True |  | False |  | Information necessary to configure and execute the script (xml) for the KPI_TERM. |
| StoredProcedure | NVARCHAR(255) | True |  | False |  | The stored procedure that is invoked for term resolution |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False | KPI_TERM_TYPE | The type of the term |

## Primary Key

- **PK_KPI_TERM_1** on `Name`

## Foreign Keys (this table -> other)

- **FK_KPI_TERM_BUSINESS_COMPONENT_METHOD** — KPI_TERM -> BUSINESS_COMPONENT_METHOD (`BCMethodID -> ID`)
- **FK_KPI_TERM_DFC** — KPI_TERM -> DFC (`DFCID -> ID`)
- **FK_KPI_TERM_DFC_REVISION** — KPI_TERM -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_KPI_TERM_KPI_TERM_TYPE** — KPI_TERM -> KPI_TERM_TYPE (`Type -> Type`)

## Referenced By (other tables -> this)

- **FK_KPI_KPI_TERM** — KPI -> KPI_TERM (`TimeToTerm -> Name`)
- **FK_KPI_KPI_TERM1** — KPI -> KPI_TERM (`TimeFromTerm -> Name`)
- **FK_KPI_TERM_ASSOCIATION_KPI_TERM** — KPI_TERM_ASSOCIATION -> KPI_TERM (`KPITermName -> Name`)
- **FK_KPI_TERM_ASSOCIATION_KPI_TERM1** — KPI_TERM_ASSOCIATION -> KPI_TERM (`ParentKPITermName -> Name`)

## Unique Indexes

- **UK_KPI_TERM** on `FUID`

## Non-Unique Indexes

- **IF_KPI_TERM_BUSINESS_COMPONENT_METHOD** on `BCMethodID`
- **IF_KPI_TERM_KPI_OWNERSHIP** on `ClientName`
- **IF_KPI_TERM_OPERATION** on `DFCRevisionID`
- **IF_KPI_TERM_OPERATION_HEADER** on `DFCID`
