# RESOURCE_COUNTER

**Database:** Operational

**Description:** This table contains instances of counters for the given Equipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CounterID | INT(10,0) | False |  | False | COUNTER | ID of the Counter. |
| CounterMode | INT(10,0) | False |  | False |  | Counter mode for utilization(1=Counter Mode, 2=Actual Mode). |
| CounterValue | DECIMAL(28,10) | True |  | False |  | Value of the Counter. |
| EquipmentMIFeatureID | INT(10,0) | True |  | False | EQUIPMENT_MI_FEATURE | ID of the Equipment MI Feature. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| LastReportedOn | DATETIME | True |  | False |  | The date when the last report utilization was performed for this task. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | ID of the Equipment. |

## Primary Key

- **PK_RESOURCE_COUNTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_COUNTER_COUNTER** — RESOURCE_COUNTER -> COUNTER (`CounterID -> ID`)
- **FK_RESOURCE_COUNTER_EQUIPMENT_MI_FEATURE** — RESOURCE_COUNTER -> EQUIPMENT_MI_FEATURE (`EquipmentMIFeatureID -> ID`)
- **FK_RESOURCE_COUNTER_RESOURCE** — RESOURCE_COUNTER -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_MAINT_TASK_SC_COUNTER_RESOURCE_COUNTER** — RESOURCE_MAINT_TASK_SC_COUNTER -> RESOURCE_COUNTER (`ResourceCounterID -> ID`)

## Unique Indexes

- **UK_RESOURCE_COUNTER** on `CounterID, ResourceID`

## Non-Unique Indexes

- **IF_RESOURCE_COUNTER_EQUIPMENT_MI_FEATURE** on `EquipmentMIFeatureID`
- **IF_RESOURCE_COUNTER_RESOURCE** on `ResourceID`
