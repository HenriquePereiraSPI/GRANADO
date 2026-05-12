# EQUIPMENT_MI_FEATURE

**Database:** Operational

**Description:** This table contains links between the Equipment and MI item.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EquipmentClassFeatureID | INT(10,0) | False |  | False | EQUIPMENT_CLASS_FEATURE | The link to the Equipment Feature. |
| EquipmentID | INT(10,0) | False |  | False | EQUIPMENT | The link to the Equipment. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the row. |
| MIActionGroupID | INT(10,0) | True |  | False | MI_ACTION_GROUP | The link to the MI Action Group. |
| MIPointID | INT(10,0) | True |  | False | MI_POINT | The link to the MI Point. |
| MIScriptID | INT(10,0) | True |  | False | MI_SCRIPT | The link to the MI public Script. |

## Primary Key

- **PK_EQUIPMENT_MI_FEATURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_MI_FEATURE_CLASS_FEATURE** — EQUIPMENT_MI_FEATURE -> EQUIPMENT_CLASS_FEATURE (`EquipmentClassFeatureID -> ID`)
- **FK_EQUIPMENT_MI_FEATURE_EQUIPMENT** — EQUIPMENT_MI_FEATURE -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_MI_FEATURE_MI_ACTION_GROUP** — EQUIPMENT_MI_FEATURE -> MI_ACTION_GROUP (`MIActionGroupID -> ID`)
- **FK_EQUIPMENT_MI_FEATURE_MI_POINT** — EQUIPMENT_MI_FEATURE -> MI_POINT (`MIPointID -> ID`)
- **FK_EQUIPMENT_MI_FEATURE_MI_SCRIPT** — EQUIPMENT_MI_FEATURE -> MI_SCRIPT (`MIScriptID -> ID`)

## Referenced By (other tables -> this)

- **FK_RESOURCE_COUNTER_EQUIPMENT_MI_FEATURE** — RESOURCE_COUNTER -> EQUIPMENT_MI_FEATURE (`EquipmentMIFeatureID -> ID`)

## Unique Indexes

- **UX_EQUIPMENT_MI_FEATURE** on `EquipmentID, EquipmentClassFeatureID`

## Non-Unique Indexes

- **IF_EQUIPMENT_MI_FEATURE_CLASS_FEATURE** on `EquipmentClassFeatureID`
- **IF_EQUIPMENT_MI_FEATURE_MI_ACTION_GROUP** on `MIActionGroupID`
- **IF_EQUIPMENT_MI_FEATURE_MI_POINT** on `MIPointID`
- **IF_EQUIPMENT_MI_FEATURE_MI_SCRIPT** on `MIScriptID`
