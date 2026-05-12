# ECM_ORDER_CHARACTERISTIC_REV

**Database:** Operational

**Description:** Table contains all Characteristic Revisions affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicRevisionDestID | INT(10,0) | True |  | False | CHARACTERISTIC_REVISION | Destination Characteristic Revision ID. |
| CharacteristicRevisionID | INT(10,0) | True |  | False | CHARACTERISTIC_REVISION | Characteristic Revision ID. |
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_CHARACTERISTIC_REV** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV** — ECM_ORDER_CHARACTERISTIC_REV -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV_DEST** — ECM_ORDER_CHARACTERISTIC_REV -> CHARACTERISTIC_REVISION (`CharacteristicRevisionDestID -> ID`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_ECM_ORDER** — ECM_ORDER_CHARACTERISTIC_REV -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_PROGRESS_STATUS** — ECM_ORDER_CHARACTERISTIC_REV -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_CHARACTERISTIC_REV_EOID_OID** on `EcmOrderID, CharacteristicRevisionID, CharacteristicRevisionDestID`

## Non-Unique Indexes

- **IF_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV** on `CharacteristicRevisionID`
- **IF_ECM_ORDER_CHARACTERISTIC_REV_CHARACTERISTIC_REV_DEST** on `CharacteristicRevisionDestID`
- **IF_ECM_ORDER_CHARACTERISTIC_REV_PROGRESS_STATUS** on `ProgressStatus`
