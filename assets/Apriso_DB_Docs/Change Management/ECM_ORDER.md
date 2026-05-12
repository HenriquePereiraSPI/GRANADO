# ECM_ORDER

**Database:** Operational

**Description:** Table contains Change Orders.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssignedTo | INT(10,0) | True |  | False | EMPLOYEE | Name of the person to whom Change Order is assigned. |
| ChangeType | NVARCHAR(50) | True |  | False |  | Change Order Type. |
| Details | NVARCHAR | True |  | False |  | Change Order General Details. |
| EffectiveDateEnd | DATETIME | True |  | False |  | Change Order Discontinue Date. |
| EffectiveDateStart | DATETIME | True |  | False |  | Change Order Effective Date. |
| EngineeringChangeOrderNo | NVARCHAR(50) | False |  | False |  | Change Order Number. |
| ExternalRefNo | NVARCHAR(50) | True |  | False |  | External Change Order Number. |
| FoundBy | INT(10,0) | True |  | False | EMPLOYEE | Name of the person who raised the Change Order. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Origin | NVARCHAR(50) | True |  | False |  | Change Order Origin. Values from System Parameter: Origin. |
| Priority | NVARCHAR(50) | True |  | False |  | Change Order Priority. Values from System Parameter: Priority. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Change Order Status. |
| ReasonForChange | NVARCHAR | True |  | False |  | Change Order Reason. |
| Severity | NVARCHAR(50) | True |  | False |  | Change Order Severity. |

## Primary Key

- **PK_ECM_ORDER** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_EMPLOYEE_ASSIGNEDTO** — ECM_ORDER -> EMPLOYEE (`AssignedTo -> ID`)
- **FK_ECM_ORDER_EMPLOYEE_FOUNDBY** — ECM_ORDER -> EMPLOYEE (`FoundBy -> ID`)
- **FK_ECM_ORDER_PROGRESS_STATUS** — ECM_ORDER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **FK_ECM_ORDER_BOM_ECM_ORDER** — ECM_ORDER_BOM -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_CHARACTERISTIC_REV_ECM_ORDER** — ECM_ORDER_CHARACTERISTIC_REV -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_ECM_ORDER** — ECM_ORDER_DOCUMENT -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_OPERATION_ECM_ORDER** — ECM_ORDER_OPERATION -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_PROCESS_ECM_ORDER** — ECM_ORDER_PROCESS -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_PRODUCT_ECM_ORDER** — ECM_ORDER_PRODUCT -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_WIP_ORDER_ECM_ORDER** — ECM_ORDER_WIP_ORDER -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_ECM_ORDER** — ECM_ORDER_WORK_INSTR_REVISION -> ECM_ORDER (`EcmOrderID -> ID`)

## Unique Indexes

- **UK_ECM_ORDER_ECONo** on `EngineeringChangeOrderNo`

## Non-Unique Indexes

- **IF_ECM_ORDER_PROGRESS_STATUS** on `ProgressStatus`
