# WEBSERVICE

**Database:** Solution Authoring

**Description:** This table stores information about Web Services.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Anonymous | BIT | True |  | False |  | Indicates if anonymous access to WebService is allowed. |
| DFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| DFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| Enabled | BIT | False |  | False |  | Indicates if WebService is Enabled. |
| FUID | NVARCHAR(36) | False |  | False |  | DELMIA Apriso unique id (GUID). |
| ID | INT(10,0) | False |  | True |  | Autoincrement PK |
| Name | NVARCHAR(50) | True |  | False |  | Name of the WebService. |
| ObjectType | INT(10,0) | True |  | False |  | 1 - DFC, 2 - BusinessComponent, 3 - MIScript |
| Parameters | NVARCHAR | True |  | False |  | WebService parameters. |
| Status | SMALLINT(5,0) | False |  | False |  | Current status of the WebService. |

## Primary Key

- **PK_WEBSERVICE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WEBSERVICE_DFC** — WEBSERVICE -> DFC (`DFCID -> ID`)
- **FK_WEBSERVICE_DFC_REVISION** — WEBSERVICE -> DFC_REVISION (`DFCRevisionID -> ID`)

## Referenced By (other tables -> this)

- **FK_WEBSERVICE_ROLE_WEBSERVICE** — WEBSERVICE_ROLE -> WEBSERVICE (`WebServiceID -> ID`)

## Unique Indexes

- **UK_WEBSERVICE** on `Name`

## Non-Unique Indexes

- **IF_WEBSERVICE_DFC** on `DFCID`
- **IF_WEBSERVICE_DFC_REVISION** on `DFCRevisionID`
