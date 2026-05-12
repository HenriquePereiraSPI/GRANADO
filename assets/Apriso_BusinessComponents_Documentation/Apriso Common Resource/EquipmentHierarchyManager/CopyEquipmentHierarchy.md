# CopyEquipmentHierarchy

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active
**Keywords:** copyequipment, copy, equipment

## Description

This Business Component method copies Equipment including resources, child pieces of equipment, components, maintenance tasks, units, pay rules, and resource groups connected with the given Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | equipmentIdsToBeCopied | ListofInteger | Yes | List of Equipment IDs to be copied. |
| Input | newEquipmentNames | ListofChar | Yes | List of new Equipment names. |
| Input | resourceLinkClassIds | ListofInteger | No | List of IDs of resource link classes that should be copied (if null, all resource links will be copied). |
| Input | copyOnlyAssignedAndNotReleasedEq | Boolean | Yes | Determines if Equipment that is not assigned or already released should be copied. |
| Input | IgnoreInactive | Boolean | Yes | Determines if inactive Equipment should be ignored. |
| Input | Facility | ListofChar | Conditional | Destination Facility for new Equipment. |
| Input | Department | ListofChar | Conditional | Destination Department for new Equipment. |
| Input | WorkCenter | ListofChar | Conditional | Destination Work Center for new Equipment. |
| Input | ProductionLine | ListofChar | Conditional | Destination Production Line for new Equipment. |
| Input | DestinationParentEquipmentID | Integer | Conditional | Destination parent Equipment ID for new Equipment. |
| Output | sourceEquipmentIds | ListofInteger | No | List of source Equipment IDs that were copied. |
| Output | newEquipmentIds | ListofInteger | No | List of copied Equipment IDs arranged in the same order as sourceEquipmentIds. |

## Validations

- The system validates if equipmentIdsToBeCopied are not null. 
- The system validates if newEquipmentNames are not null. 
- The system validates if equipmentIdsToBeCopied are the same length as newEquipmentNames. 
- The system validates if one of destination data (Facility, Department, Work Center, Production Line and parent Equipment) exists and if all destination data given is consistent. 
- For each source equipment:  
 
- The system validates if source Equipment exists. 
- The system validates if source Resource exists. 
- The system validates if new Equipment name is not null or empty. 
- The system validates if new Equipment name does not exist.

## System Processing

- In case data is invalid, the system generates a failure Outcome. 
- In case data is valid, the system creates a new copied Resource, new Equipment, new Components, new ResourceComponents (binds Resource and its Components), new Resource maintenance tasks, new ResourceMaintTaskComps (binds resourceMaintenanceTasks and ResourceComponents), new units, new ResourceReasonCodes, new ResourceGroups, new Adresses, new ResourceAdresses, new Contacts and new ResourceContacts. 
- The system repeats copying for each child, also creating new parent-child relations.  
-  The system creates a new PayRule, if below conditions are meet:  
 
-  Source equipment has linked facility  
-  Source equipment has specified payrule  
-  PayRule exists for such facility and payrule  
-  Facility input is different than source equipment's facility

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| resource_ | all | Creating new Resource. |
| equipment | all | Creating new Equipment. |
| component | all | Creating new Component. |
| resource_component | all | Creating new Resource - Component relations. |
| resource_maint_task | all | Creating new Resource Maintenance Tasks. |
| resource_maint_task_comp | all | Creating new Resource Maintenance Task - Resource Component relations. |
| unit | all | Creating new units. |
| resource_reason_code | all | Creating new Resource - Reason Code relations. |
| resource_group | all | Creating new Resource - Group relations. |
| address | all | Creating new Addresses. |
| resource_address | all | Creating new Resource - Address relations. |
| contacts | all | Creating new Contacts. |
| resource_contacts | all | Creating new Resource - Contacts relations. |
| resource_resource_link | all | Creating new ParentResource - ChildResource relations |
| pay_rule | all without Facility | Copying PayRule from source equipment's PayRule. |
| pay_rule | Facility | Specified Facility input. |
