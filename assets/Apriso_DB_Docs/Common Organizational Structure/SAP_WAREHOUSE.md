# SAP_WAREHOUSE

**Database:** Operational

**Description:** Contains the list of the SAP warehouse. SAP warehouse are linked to Apriso warehouse. (1 SAP warehouse can contain more than one Apriso warehouse). This is used to interface SAP

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SAPWarehouse | NVARCHAR(10) | False |  | True |  | SAP MM Location |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SAP_WAREHOUSE** on `SAPWarehouse`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DIFFERENCE_INDICATORS_SAP_WAREHOUSE** — DIFFERENCE_INDICATOR -> SAP_WAREHOUSE (`Warehouse -> SAPWarehouse`)
- **FK_ORDER_DETAIL_SAP_WAREHOUSE** — ORDER_DETAIL -> SAP_WAREHOUSE (`FromSAPWarehouse -> SAPWarehouse`)
- **FK_ORDER_DETAIL_SAP_WAREHOUSE1** — ORDER_DETAIL -> SAP_WAREHOUSE (`ToSAPWarehouse -> SAPWarehouse`)
- **FK_TASK_MATERIAL_USE_SAP_WAREHOUSE** — TASK_MATERIAL_USE -> SAP_WAREHOUSE (`SAPWarehouse -> SAPWarehouse`)
- **FK_WAREHOUSE_SAP_WAREHOUSE** — WAREHOUSE -> SAP_WAREHOUSE (`SAPWarehouse -> SAPWarehouse`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
