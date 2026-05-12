# ActivateEquipment

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active

## Description

This Business Component method is used to activate Equipment. The Maintenance Procedures for the Equipment can be set to enabled. Child Equipment entities are not activated (to activate Equipment and all the child entities, use the ActivateEquipmentHierarchy BC method).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentIDs | ListofInteger | Yes | The list of Equipment IDs to be activated. |
| Input | SetMaintenanceProceduresEnabled | Boolean | Yes | Determines if the Maintenance Procedures should be enabled. |

## Validations

For each Equipment ID, the system validates if an Equipment and Resource exist.

## System Processing

This BC method returns an outcome containing the result of activation. If an Equipment or Resource does not exist, a failure outcome is returned. For each valid equipment, the following things are done:
 

 
 
- The system sets the Equipment to Active. 
- The system sets the Resource to Active. 
- If SetMaintenanceProceduresEnabled is true, the system sets the Maintenance Procedures to enabled.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Equipment | Active | Set to true. |
| Resource | Active | Set to true. |
| Resource_Maint_Task | Enabled | Set to true. |
