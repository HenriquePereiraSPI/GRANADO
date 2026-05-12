# EPC_TAG_GID

**Database:** Operational

**Description:** Specialized table to store EPC data for the GID encoding type

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BitSize | INT(10,0) | True |  | False |  | Tag bit size |
| EpcTagID | INT(10,0) | False |  | True | EPC_TAG | EPC Tag ID for GID encoding type |
| GeneralManager | INT(10,0) | True |  | False |  | General Manager |
| ObjectClass | INT(10,0) | True |  | False |  | Object Class |
| SerialNumber | NVARCHAR(11) | True |  | False |  | Serial Number |

## Primary Key

- **PK_EPC_TAG_GID** on `EpcTagID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_GID_EPC_TAG** — EPC_TAG_GID -> EPC_TAG (`EpcTagID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
