# FACILITY_CONTACT

**Database:** Operational

**Description:** The Facility's contacts. Specifies one or more contact persons and their contact information for a Facility.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | For future use. |

## Primary Key

- **PK_FACILITY_CONTACTS** on `Facility, ContactID`

## Foreign Keys (this table -> other)

- **FK_FACILITY_CONTACTS_CONTACTS** — FACILITY_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_FACILITY_CONTACTS_FACILITY** — FACILITY_CONTACT -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FACILITY_CONTACTS_CONTACTS** on `ContactID`
