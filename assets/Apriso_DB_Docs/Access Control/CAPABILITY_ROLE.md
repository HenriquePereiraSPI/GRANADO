# CAPABILITY_ROLE

**Database:** Solution Authoring

**Description:** Contains the list of Capability Roles.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BusinessObjectID | INT(10,0) | True |  | False | BUSINESS_OBJECT | Link to Business Object. |
| CapabilityID | INT(10,0) | True |  | False | CAPABILITY | Link to Capability. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Role | NVARCHAR(40) | True |  | False |  | Reference to the Role column in the ROLE table. |

## Primary Key

- **PK_CAPABILITY_ROLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CAPABILITY_ROLE_BUSINESS_OBJECT** — CAPABILITY_ROLE -> BUSINESS_OBJECT (`BusinessObjectID -> ID`)
- **FK_CAPABILITY_ROLE_CAPABILITY** — CAPABILITY_ROLE -> CAPABILITY (`CapabilityID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- CAPABILITY_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CAPABILITY_ROLE_BUSINESS_OBJECT** on `BusinessObjectID`
- **IF_CAPABILITY_ROLE_CAPABILITY** on `CapabilityID`
- **IF_CAPABILITY_ROLE_ROLE** on `Role`
