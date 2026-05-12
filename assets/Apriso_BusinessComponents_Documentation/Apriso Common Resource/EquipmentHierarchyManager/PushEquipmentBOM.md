# PushEquipmentBOM

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active

## Description

This Business Component method copies components of a source Resource to all destination Resources (existing components of destination Resources are not removed).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceEquipmentID | Integer | Yes | ID of Equipment to be copied. |
| Input | DestinationEquipmentIDs | ListofInteger | Yes | List of IDs of destination Equipment. |

## Validations

- System validates if source and destination Equipment entities exist and are active. 
- System validates if source and destination Resources exist and are active.

## System Processing

- If validation of the sources failed, system generates a failure Outcome result. 
- If validation of the sources succeeded, system tries to push components to destination equipments. 
- If source and destination Equipment ID are the same, system skips copying components for this equipment. 
- While copying: 
 
- For each component of the source Equipment: 
 
- a new component with the same data is created, 
- a new ResourceComponent with the same data is created (links destination resource and a new component).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Component | ProductID | Copied from source. |
|  | GradeID |  |
|  | ExplodeProcess |  |
|  | EffectiveDate |  |
|  | DiscontinueDate |  |
|  | IssueType |  |
|  | UsageType |  |
|  | IncludeInBatchWeight |  |
|  | EcoID |  |
|  | Quantity |  |
|  | MinimimQuantity |  |
|  | MaximumQuantity |  |
|  | ReferenceQuantity |  |
|  | StdScrapPercent |  |
|  | UOMCode |  |
|  | Facility |  |
|  | Company |  |
|  | Warehouse |  |
|  | WarehouseLocationID |  |
|  | CoProductCostPercent |  |
|  | UnitID |  |
| Resource_Component | ResourceName | Name of destination resource. |
|  | ResourceType | Type of destination resource. |
|  | ComponentID | ID of new Component. |
|  | Company | Copied from source. |
|  | Facility |  |
|  | Warehouse |  |
|  | WarehouseLocationID |  |
