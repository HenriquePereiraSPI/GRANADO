# RESOURCE_REASON_CODE

**Database:** Operational

**Description:** Reason code authorized when dealing with a specific resource (for downtime reason code tracking as an example)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LaborType | SMALLINT(5,0) | True |  | False | LABOR_TYPE | The type of labor |
| ReasonCode | NVARCHAR(20) | False |  | False | REASON_CODE | Reason code why the entity is on hold |
| ResourceName | NVARCHAR(80) | False |  | False | RESOURCE_ | Resource Name the reason code record is assigned to |
| ResourceType | SMALLINT(5,0) | False |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |

## Primary Key

- **PK_RESOURCE_REASON_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_REASON_CODE_LABOR_TYPE** — RESOURCE_REASON_CODE -> LABOR_TYPE (`LaborType -> Type`)
- **FK_RESOURCE_REASON_CODE_REASON_CODE** — RESOURCE_REASON_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_RESOURCE_REASON_CODE_RESOURCE** — RESOURCE_REASON_CODE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **IX_RESOURCE_REASON_CODE** on `ResourceName, ResourceType, ReasonCode, LaborType`

## Non-Unique Indexes

- **** on ``
