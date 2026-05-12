# DIVISION_CONTACT

**Database:** Operational

**Description:** The Division's contacts. Specifies one or more contact persons and their contact information for a Division.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Division | NVARCHAR(70) | False |  | True | DIVISION | For future use. |

## Primary Key

- **PK_DIVISION_CONTACT_MASTER** on `Division, ContactID`

## Foreign Keys (this table -> other)

- **FK_DIVISION_CONTACTS_CONTACTS** — DIVISION_CONTACT -> CONTACT (`ContactID -> ID`)
- **FK_DIVISION_CONTACTS_DIVISION** — DIVISION_CONTACT -> DIVISION (`Division -> Division`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DIVISION_CONTACTS_CONTACTS** on `ContactID`
