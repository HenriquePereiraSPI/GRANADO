# COMPONENT_INSTANCE

**Database:** Operational

**Description:** This table stores component instance information defined in a 3D Work Instruction and other objects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ComponentAllocationTypeID | INT(10,0) | True |  | False | COMPONENT_ALLOCATION_TYPE | The reference to the type of the allocation. |
| ComponentID | INT(10,0) | False |  | False | COMPONENT | Link to the component table. |
| DSImplementLinkID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE implementation link ID. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier |
| Quantity | DECIMAL(28,10) | True |  | False |  | The quantity of the Component Instance required. |
| StdScrapPercent | DECIMAL(28,10) | True |  | False |  | The expected percentage of scrap. Used to grow the quantity needed from the Component Instances. |
| UOMCode | NVARCHAR(10) | True |  | False | UOM | The UOM to be used for the Component Instances. |
| UsageType | INT(10,0) | True |  | False |  | Usage of the instance:  1 - 3D Work Instruction. |

## Primary Key

- **PK_COMPONENT_INSTANCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_COMPONENT_INSTANCE_COMPONENT** — COMPONENT_INSTANCE -> COMPONENT (`ComponentID -> ID`)
- **FK_COMPONENT_INSTANCE_COMPONENT_ALLOCATION_TYPE** — COMPONENT_INSTANCE -> COMPONENT_ALLOCATION_TYPE (`ComponentAllocationTypeID -> ID`)
- **FK_COMPONENT_INSTANCE_UOM** — COMPONENT_INSTANCE -> UOM (`UOMCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COMPONENT_INSTANCE_COMPONENT** on `ComponentID`
