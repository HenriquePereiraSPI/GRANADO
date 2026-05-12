# DeactivateEquipmentHierarchy

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active

## Description

This Business Component method is used to deactivate Equipment. All child Equipment entities are also deactivated, Maintenance Procedures of Equipment can be set to Disabled and Maintenance Orders that are not started can be cancelled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentIDs | ListofInteger | Yes | List of equipment IDs to be deactivated. |
| Input | SetMaintenanceProceduresDisabled | Boolean | Yes | Determines if Maintenance Procedures should be disabled and all not started orders cancelled. |
| Input | CancelOrderReasonCode | ListofChar | Conditional | ReasonCode for cancelling orders - required when WIP Orders have to be cancelled. |

## Validations

- For each equipment ID, the system validates if equipment and resource exists.

## System Processing

This BC method returns an Outcome containing a result of deactivation. If Equipment or Resource doesn't exist, a failure Outcome is returned.
 

For each valid equipment:
 
 
- The system creates a list of its child Equipments. 
- For each valid Equipment and Equipment from the list: 
 
- The system sets Equipment to inactive. 
- The system sets Resource to inactive. 
- If SetMaintenanceProceduresDisabled is true: 
 
- The system sets Maintenance Procedures to disabled. 
- The system cancels all not started WIP Orders created by Equipment's Maintenance Procedures.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Equipment | Active | Set to false. |
| Resource | Active | Set to false. |
| Resource_Maint_Task | Enabled | Set to false. |
| WIP_Order | WorkOrderStatus | Set on 5 (cancelled). |
