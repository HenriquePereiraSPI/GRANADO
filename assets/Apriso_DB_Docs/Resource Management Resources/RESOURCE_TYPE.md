# RESOURCE_TYPE

**Database:** Operational

**Description:** Contains the list of resource types supported by the system. This list should not be modified

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ResourceType | SMALLINT(5,0) | False |  | True |  | Resource type + resource define uniquely a resource |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RESOURCE_TYPE** on `ResourceType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_REVISION_RESOURCE_TYPE** — CHARACTERISTIC_REVISION -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_CHECK_LIST_CHECK_POINT_RESOURCE_TYPE** — CHECK_LIST_CHECK_POINT -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_CODE_SERIAL_NUMBER_RESOURCE_TYPE** — CODE_SERIAL_NUMBER -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_COST_DETAIL_RESOURCE_TYPE** — COST_DETAIL -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_COST_RESOURCE_TYPE** — COST -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_DISPOSITION_TEST_RESOURCE_TYPE** — DISPOSITION_TEST -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_INSPECTION_CHARACTERISTIC_RESOURCE_TYPE** — INSPECTION_CHARACTERISTIC -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_INSPECTION_DETERMINATION_RESOURCE_TYPE** — INSPECTION_DETERMINATION -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_OPERATION_REQ_RESOURCE_RESOURCE_TYPE** — OPERATION_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_TYPE** — PACKAGING_INSTR_USAGE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_RESOURCE_TYPE** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE_TYPE** — PROCESS_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_RESOURCE_TYPE** — PRODUCT_ROUTING_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_RESOURCE_CLASS_RESOURCE_TYPE** — RESOURCE_CLASS -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_RESOURCE_RESOURCE_TYPE** — RESOURCE_ -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_RESOURCE_TYPE** — RESOURCE_ROUTING_REQ_RESOURCE -> RESOURCE_TYPE (`ReqResourceType -> ResourceType`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE_TYPE** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_TYPE** — WIP_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_WORK_CENTER_REQ_RESOURCE_RESOURCE_TYPE** — WORK_CENTER_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
