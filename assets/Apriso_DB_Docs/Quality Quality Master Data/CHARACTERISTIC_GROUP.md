# CHARACTERISTIC_GROUP

**Database:** Operational

**Description:** This entity will be used to create the link between characteristic and the multiple groups.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Characteristic | NVARCHAR(40) | False |  | False | CHARACTERISTIC | Unique identifier of the characteristic. |
| Group_ | NVARCHAR(40) | False |  | False | GROUP_ | Group name the given characterstic is assigned to |
| GroupClassID | INT(10,0) | False |  | False | GROUP_ | Group class the given characterstic  is assigned to |
| GroupType | SMALLINT(5,0) | False |  | False | GROUP_ | Group type the given characterstic  is assigned to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the inspection characteristic code group. |

## Primary Key

- **PK_CHARACTERISTIC_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_GROUP_CHARACTERISTIC** — CHARACTERISTIC_GROUP -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_CHARACTERISTIC_GROUP_GROUP_** — CHARACTERISTIC_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_CHARACTERISTIC_GROUP** on `Characteristic, Group_, GroupType, GroupClassID`

## Non-Unique Indexes

- **IF_CHARACTERISTIC_GROUP_GROUP_** on `Group_, GroupType, GroupClassID`
