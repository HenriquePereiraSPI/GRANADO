# EPC_TAG_SGTIN

**Database:** Operational

**Description:** Specialized table to store EPC data for the SGTIN encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| CompanyPrefix | NVARCHAR(12) | True |  | False |  | Company Prefix |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for GID encoding type |
| Filter | INT(10,0) | True |  | False |  | Filter |
| ItemReference | NVARCHAR(7) | True |  | False |  | Serial Number |
| Partition | INT(10,0) | True |  | False |  | Partition |
| SerialNumber | NVARCHAR(20) | True |  | False |  | Serial Number |

## Primary Key

- **PK_EPC_TAG_SGTIN** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_SGTIN_EPC_TAG** — EPC_TAG_SGTIN -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
