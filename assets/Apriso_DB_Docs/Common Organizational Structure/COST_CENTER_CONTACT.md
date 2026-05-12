# COST_CENTER_CONTACT

**Database:** Operational

**Description:** Cost center contact lists

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | Contact and attributes unique identifier |
| CostCenter | NVARCHAR(70) | False |  | True | COST_CENTER | Cost Center name and attributes |
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user |
| Division | NVARCHAR(70) | False |  | True | COST_CENTER | Division and its Attributes unique name |

## Primary Key

- **PK_COST_CENTER_CONTACTS** on `Division, CostCenter, ContactID`

## Foreign Keys (this table -> other)

- **FK_COST_CENTER_CONTACTS_CONTACTS** — COST_CENTER_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_COST_CENTER_CONTACTS_COST_CENTER** — COST_CENTER_CONTACT -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_CENTER_CONTACTS_CONTACTS** on `ContactID`
