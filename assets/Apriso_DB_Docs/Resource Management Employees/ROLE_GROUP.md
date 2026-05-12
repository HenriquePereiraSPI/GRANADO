# ROLE_GROUP

**Database:** Operational

**Description:** This table contains links between Groups and Roles.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Group_ | NVARCHAR(40) | False |  | False | GROUP_ | The Group of the Role. |
| GroupClassID | INT(10,0) | False |  | False | GROUP_ | The Group Class ID of the Role. |
| GroupType | SMALLINT(5,0) | False |  | False | GROUP_ | The Group Type of the Role. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record. |
| RoleID | INT(10,0) | False |  | False | ROLE | ID of the Role. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValidFrom | DATETIME | True |  | False |  | The date when the validity of the assignment starts. |
| ValidTo | DATETIME | True |  | False |  | The date when the validity of the assignment ends. |

## Primary Key

- **PK_ROLE_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_ROLE_GROUP_GROUP** — ROLE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ROLE_GROUP_ROLE** — ROLE_GROUP -> ROLE (`RoleID -> ID`)
- **FK_ROLE_GROUP_UNIT** — ROLE_GROUP -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ROLE_GROUP** on `RoleID, Group_, GroupType, GroupClassID`

## Non-Unique Indexes

- **IF_ROLE_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_ROLE_GROUP_UNIT** on `UnitID`
