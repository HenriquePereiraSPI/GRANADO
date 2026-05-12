# ActivateEquipmentHierarchy

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active

## Description

This Business Component method is used to activate Equipment and all of the child entities. The Maintenance Procedures for this Equipment can be set to enabled.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentIDs | ListofInteger | Yes | List of Equipment IDs to be activated. |
| Input | SetMaintenanceProceduresEnabled | Boolean | Yes | Determines if Maintenance Procedures should be enabled. |

## Validations

For each Equipment ID, the system validates if an Equipment and Resource exist.

## System Processing

This BC method returns an outcome containing the result of an activation. If an Equipment or Resource does not exist, a failure outcome is returned.
 

For each valid Equipment, the following things are done:
 
 
- The system creates a list of its child Equipments. 
- For each valid Equipment and Equipment from the list, the following things are done: 
 
- The system sets the Equipment to Active. 
- The system sets the Resource to Active. 
- If SetMaintenanceProceduresEnabled is true, the system sets the Maintenance Procedures to enabled.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Equipment | Active | Set to true. |
| Resource | Active | Set to true. |
| Resource_Maint_Task | Enabled | Set to true. |
