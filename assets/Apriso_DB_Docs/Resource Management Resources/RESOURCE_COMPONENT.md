# RESOURCE_COMPONENT

**Database:** Operational

**Description:** This table contains the link between a Resource and its components. It does not contain the component itself but only the link with the COMPONENT table that contains the details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| ComponentID | INT(10,0) | True |  | False | COMPONENT | Link to the component record that describes the actual component and its quantity. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | Assignment of BOM to a Facility. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Unique name of a Resource. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Type of the resource which defines the resource uniquely. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Assignment of BOM to a Warehouse. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Assignment of BOM to a Warehouse Location. |

## Primary Key

- **PK_RESOURCE_COMPONENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_COMPONENT_COMPANY** — RESOURCE_COMPONENT -> COMPANY (`Company -> Company`)
- **FK_RESOURCE_COMPONENT_COMPONENT** — RESOURCE_COMPONENT -> COMPONENT (`ComponentID -> ID`)
- **FK_RESOURCE_COMPONENT_RESOURCE** — RESOURCE_COMPONENT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_COMPONENT_WAREHOUSE** — RESOURCE_COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_RESOURCE_COMPONENT_WAREHOUSE_LOCATION** — RESOURCE_COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_MAINT_TASK_COMP_QUALITY_RESOURCE_COMPONENT** — RESOURCE_MAINT_TASK_COMP -> RESOURCE_COMPONENT (`ResourceComponentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_COMPONENT_COMPONENT** on `ComponentID`
- **IF_RESOURCE_COMPONENT_RESOURCE** on `ResourceName, ResourceType`
