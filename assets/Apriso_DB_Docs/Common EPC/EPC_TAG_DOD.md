# EPC_TAG_DOD

**Database:** Operational

**Description:** Specialized table to store EPC data for the DOD encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| Cage | NVARCHAR(8) | True |  | False |  | Government Managed Identified |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for DOD encoding type |
| Filter | INT(10,0) | True |  | False |  | Filter. |
| SerialNumber | NVARCHAR(11) | True |  | False |  | Serial Number |

## Primary Key

- **PK_EPC_TAG_DOD** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_DOD_EPC_TAG** — EPC_TAG_DOD -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
