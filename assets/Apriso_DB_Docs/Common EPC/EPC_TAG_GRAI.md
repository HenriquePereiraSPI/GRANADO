# EPC_TAG_GRAI

**Database:** Operational

**Description:** Specialized table to store EPC data for the GRAI encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssetType | NVARCHAR(6) | True |  | False |  | Asset Type |
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| CompanyPrefix | NVARCHAR(12) | True |  | False |  | Company Prefix |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for GRAI encoding type |
| Filter | INT(10,0) | True |  | False |  | Filter |
| Partition | INT(10,0) | True |  | False |  | Partition |
| SerialNumber | NVARCHAR(16) | True |  | False |  | Serial Number |

## Primary Key

- **PK_EPC_TAG_GRAI** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_GRAI_EPC_TAG** — EPC_TAG_GRAI -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
