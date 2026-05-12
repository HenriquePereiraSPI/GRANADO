# MoveEquipment

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active

## Description

This Business Component method moves Equipment to another Equipment (as a child), Work Center, Department, Production Line or Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceEquipmentIDs | ListofInteger | Yes | List of Equipment IDs to be moved. |
| Input | SourceParentEquipmentIDs | ListofInteger | Conditional | List of Equipment IDs of SourceEquipment parents. Have to be specified if SourceEquipment has more than 1 parent. |
| Input | Facility | ListofChar | Conditional | Destination Facility name. |
| Input | Department | ListofChar | Conditional | Destination Department name. |
| Input | WorkCenter | ListofChar | Conditional | Destination Work Center name. |
| Input | ProductionLine | ListofChar | Conditional | Destination Production Line name. |
| Input | DestinationParentEquipmentID | Integer | Conditional | Destination parent Equipment ID. |

## Validations

- The system validates if source Equipment exists. 
- The system validates if parent Equipment exists (in case it is specified and source Equipment has more than 1 parent). 
- The system validates if Facility exists (in case it is specified). 
- The system validates if Department exists (in case it is specified). 
- The system validates if WorkCenter exists (in case it is specified). 
- The system validates if ProductionLine exists (in case it is specified). 
- The system validates if DestinationParentEquipmentID exists (in case it is specified). 
- The system validates if destination data given is consistent.

## System Processing

- The system validates destination data. If it does not exist or is not consistent, the system generates a failure Outcome. 
- If destination data is valid, the system tries to move equipment: 
 
- If DestinationParentEquipmentID is specified, the system moves Source Equipment and its children to Destination Parent Equipment (as children). 
- If WorkCenter is specified, the system moves Source Equipment and its children to WorkCenter. 
- If Department is specified, the system moves Source Equipment and its children to Department. 
- If ProductionLine is specified, the system moves Source Equipment and its children to ProductionLine. 
- If Facility is specified, the system moves Source Equipment and its children to Facility.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Equipment | Facility | Set to destination Facility. |
| Resource | Facility | Set to destination Facility. |
|  | Department | Set to destination Department or NULL. |
|  | ProductionLine | Set to destination ProductionLine or NULL. |
|  | WorkCenter | Set to destination WorkCenter or NULL. |
| ResourceResourceLink | ResourceName | Can be created, removed or changed when change in Equipment hierarchy is needed. |
|  | ResourceType |  |
|  | ParentResourceName |  |
|  | ParentResourceType |  |
