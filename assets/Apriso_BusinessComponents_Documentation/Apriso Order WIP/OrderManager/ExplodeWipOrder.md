# ExplodeWipOrder

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Deprecated

## Description

**Note: **There are two BCs named ExplodeWipOrder, but they have different input sets. The explosionStrategy input exists only in one set. 
 

The purpose of these Business Components is to explode a given work order. They determine the process/recipe or standard operations to use independently of the users parameters.
 

These BCs invoke determination functions to determine if the order is a standard operation/process or a recipe-based order, and to determine which process or operations to use. If the order is recipe-based, the BCs select a valid recipe from the recipe table.
 

For more information, refer to the Explosion, Navigation & Tasking Guide.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | Yes | Work order to explode. |
| Input | wipOrderType | Integer | Yes | Work order type to explode. |
| Input | explosionStrategy | Integer | No | Explosion strategy that should be used for the exploded order. This input exists in only one of the ExplodeWipOrder BCs. |

## Validations

Validation passes if the work order exists.

## Pre-Conditions

The genealogy graph's structure which the child order belongs to is not cyclic.

## History Recording in Production

FlexNet.BusinessFacade.Wip.Explosion.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | DeterminationStrategyUsed | Determined type either already specified or from FLX_EXPLOSION_DETERMINATION_ORDER_TYPE determination function output. |
| WIP_ORDER | ProcessID | Determined process either already specified or from FLX_EXPLOSION_DETERMINATION_PROCESS /FLX_EXPLOSION_DETERMINATION_REVISION if for process/recipe orders. |
| WIP_ORDER | RecipeID | Abandoned |
| WIP_ORDER | WorkOrderStatus | NEW |
| WIP_ORDER | WorkflowStatusID | DETERMINATION COMPLETED |
| WIP_ORDER | EcoID | Process EcoID |
| WIP_ORDER | SamplePlanID | Process SamplePlanID |
| WIP_ORDER | SpecificationID | Process SpecificationID |
| WIP_ORDER | OriginalProcessID | WipOrder.ProcessID |
| WIP_ORDER | LaborProrateType | Process.LaborProrateType |
| WIP_ORDER | WipOperationFlowLayout | Process.OperationFlowLayout |
| WIP_ORDER | ProcessID | Process ID |
| WIP_OPERATION | All | Records are created |
| WIP_OPERATION | OperationCode | Copied from process operation/standard operation |
| WIP_OPERATION | DeterminationStrategyUsed | Copied from process operation/standard operation |
| WIP_OPERATION | Occupation | Copied from process operation/standard operation |
| WIP_OPERATION | LaborProrateType | Copied from process operation/standard operation |
| WIP_OPERATION | TaskStrategyType | Copied from process operation/standard operation |
| WIP_OPERATION | WBSCode | Copied from process operation/standard operation |
| WIP_OPERATION | KanbanCards | Copied from process operation/standard operation |
| WIP_OPERATION | KanbanLotSizes | Copied from process operation/standard operation |
| WIP_OPERATION | MinKanbanCards | Copied from process operation/standard operation |
| WIP_OPERATION | ValueAdd | Copied from process operation/standard operation |
| WIP_OPERATION | SamplePlanID | Copied from process operation/standard operation |
| WIP_OPERATION | SpecificationID | Copied from process operation/standard operation |
| WIP_OPERATION | OperationStatus | NEW |
| WIP_OPERATION_SEQUENCE | All | Records created and values copied from process_operation_sequence |
| WIP_COMPONENT | All | Records created and values copied from product component/recipe component/process component. |
| WIP_COMPONENT | IssuedQuantity | Determined by shrinking parent quantity by product_information/workload shrink rate. * |
| WIP_COMPONENT | WipOrderNo | wipOrderNo |
| WIP_COMPONENT | WipOrderType | wipOrderType |
| WIP_COMPONENT | OprSequenceNo | Operation sequence number which this component is specified for or null if component is work order level. |
| WIP_COMPONENT | StepSequenceNo | Step sequence number which this component is specified for or null if component is at operation level. |
| WIP_COMPONENT | IncludeInBatchWeight | Copied from COMPONENT |
| WIP_COMPONENT | ComponentUsage | Copied from COMPONENT |
| WIP_COMPONENT | ProductID | Copied from COMPONENT |
| WIP_COMPONENT | ComponentIntegrMethodID | Copied from RECIPE_COMPONENT if this method is called for a RECIPE order. |
| COMPONENT | All | Every COMPONENT record which is exploded into a WIP_COMPONENT is first cloned, and then WIP_COMPONENT references the cloned COMPONENT. |
| WIP_REQ_RESOURCE | All | Records created for each WIP_OPERATION. Since WIP_OPERATION references a PROCESS_OPERATION or OPERATION, the PROCESS_COMPONENT table is used to determine which COMPONENTS correspond to a WIP_OPERATION. |
| WIP_REQ_RESOURCE | WipOrderNo | wipOrderNo |
| WIP_REQ_RESOURCE | WipOrderType | wipOrderType |
| WIP_REQ_RESOURCE | OprSequenceNo | Operation sequence number of WIP_OPERATION which is being exploded. |
| WIP_REQ_RESOURCE | ResourceClassID | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | ResourceType | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | ResourceName | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | EffectiveDate | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | DiscontinueDate | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | RoleID | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | SkillID | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | SkillExperienceLevel | Copied from PROCESS_REQ_RESOURCE |
| WIP_REQ_RESOURCE | WorkLoadID | Copied from PROCESS_REQ_RESOURCE |
| WORK_LOAD | All | Every workload which is referenced by an exploded entity is first cloned and the exploded entity references the clone. |
