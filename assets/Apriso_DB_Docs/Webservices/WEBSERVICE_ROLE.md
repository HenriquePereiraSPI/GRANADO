# WEBSERVICE_ROLE

**Database:** Solution Authoring

**Description:** This table stores links between Web Services and Roles.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Role | NVARCHAR(40) | False |  | True |  | Reference to the Role column in the ROLE table. |
| WebServiceID | INT(10,0) | False |  | True | WEBSERVICE | Link to WebService |

## Primary Key

- **PK_WEBSERVICE_ROLE** on `WebServiceID, Role`

## Foreign Keys (this table -> other)

- **FK_WEBSERVICE_ROLE_WEBSERVICE** — WEBSERVICE_ROLE -> WEBSERVICE (`WebServiceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- WEBSERVICE_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WEBSERVICE_ROLE_ROLE** on `Role`
