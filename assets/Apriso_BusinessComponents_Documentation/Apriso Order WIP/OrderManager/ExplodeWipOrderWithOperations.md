# ExplodeWipOrderWithOperations

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this business component is to explode the given work order with the specified standard operations. Unlike other explosion methods, the user supplies the standard operations that should be used to explode the work order operations.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | Yes | Work order to explode. |
| Input | wipOrderType | Integer | Yes | Work order to explode. |
| Input | wipOprSequenceNo | ListofChar | No | Work operation list to explode. |
| Input | standardOperationID | ListofInteger | No | The standard operation the work operation will execute. |

## Validations

- The system validates if the work order exists.  
- The system validates if the WIP order is canceled.  
- The system validates all existing work operations from the wipOprSequenceNo list to see if the corresponding standard operations from the standardOperationID list exist when their ID is greater than 0.  
- The system validates all existing work operations to see if standard operations can be determined by determinations when the work operation is not configured on the wipOprSequenceNo list or the corresponding standard operation from the standardOperationID is not set (value less than 1).

## System Processing

- Retrieve work operations for the inputted work order.  
- For each work operation retrieve a corresponding standard operation.  
 
- If a work operation has an entry in the wipOprSequenceNo list and the corresponding value in the standardOperationID list is greater than 0, that standard operation is used.  
- If a work operation has an entry in the wipOprSequenceNo list and the corresponding value in the standardOperationID list is less than 1, determinations are called to set a corresponding standard operation.  
- Determinations are also called when the wipOprSequenceNo list does not have an entry for a work operation. First, the APR_EXPLOSION_OPERATION classic determination is called. If this classic determination is not able to get the OperationID but provides the OperationCode, then additionally the APR_PPR_EXPLOSION_REVISION classic determination is called to choose the correct revision.  
 
- Copy values from standard operations to the new exploded work operations.  
- Explode standard operation components, resources, and work instructions.  
- Explode product component if there is a product linked to the work order.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | DeterminationStrategyUsed | Determined type either already specified or from FLX_EXPLOSION_DETERMINATION_ORDER_TYPE determination function output. |
| WIP_ORDER | ProcessID | Determined process either already specified or from FLX_EXPLOSION_DETERMINATION_PROCESS /FLX_EXPLOSION_DETERMINATION_REVISION if for process/recipe orders. |
| WIP_ORDER | RecipeID | Abandoned. |
| WIP_ORDER | WorkOrderStatus | NEW. |
| WIP_ORDER | WorkflowStatusID | DETERMINATION COMPLETED. |
| WIP_ORDER | EcoID | Process EcoID. |
| WIP_ORDER | SamplePlanID | Process SamplePlanID. |
| WIP_ORDER | SpecificationID | Process SpecificationID. |
| WIP_ORDER | OriginalProcessID | WipOrder.ProcessID. |
| WIP_ORDER | LaborProrateType | Process.LaborProrateType. |
| WIP_ORDER | WipOperationFlowLayout | Process.OperationFlowLayout. |
| WIP_ORDER | ProcessID | Process ID. |
| WIP_OPERATION | All | Records are created. |
| WIP_OPERATION | OperationCode | Copied from process operation/standard operation. |
| WIP_OPERATION | DeterminationStrategyUsed | Copied from process operation/standard operation. |
| WIP_OPERATION | Occupation | Copied from process operation/standard operation. |
| WIP_OPERATION | LaborProrateType | Copied from process operation/standard operation. |
| WIP_OPERATION | TaskStrategyType | Copied from process operation/standard operation. |
| WIP_OPERATION | WBSCode | Copied from process operation/standard operation. |
| WIP_OPERATION | KanbanCards | Copied from process operation/standard operation. |
| WIP_OPERATION | KanbanLotSizes | Copied from process operation/standard operation. |
| WIP_OPERATION | MinKanbanCards | Copied from process operation/standard operation. |
| WIP_OPERATION | ValueAdd | Copied from process operation/standard operation. |
| WIP_OPERATION | SamplePlanID | Copied from process operation/standard operation. |
| WIP_OPERATION | SpecificationID | Copied from process operation/standard operation. |
| WIP_OPERATION | OperationStatus | NEW. |
| WIP_OPERATION_SEQUENCE | All | Records created and values copied from process_operation_sequence. |
| WIP_COMPONENT | All | Records created and values copied from product component/recipe component/process component. |
| WIP_COMPONENT | IssuedQuantity | Determined by shrinking parent quantity by product_information/workload shrink rate.* |
| WIP_COMPONENT | WipOrderNo | wipOrderNo. |
| WIP_COMPONENT | WipOrderType | wipOrderType. |
| WIP_COMPONENT | OprSequenceNo | Operation sequence number which this component is specified for or null if component is work order level. |
| WIP_COMPONENT | StepSequenceNo | Step sequence number which this component is specified for or null if component is at operation level. |
| WIP_COMPONENT | IncludeInBatchWeight | Copied from COMPONENT. |
| WIP_COMPONENT | ComponentUsage | Copied from COMPONENT. |
| WIP_COMPONENT | ProductID | Copied from COMPONENT. |
| WIP_COMPONENT | ComponentIntegrMethodID | Copied from RECIPE_COMPONENT if this method is called for a RECIPE order. |
| COMPONENT | All | Every COMPONENT record which is exploded into a WIP_COMPONENT is first cloned, and then WIP_COMPONENT references the cloned COMPONENT. |
| WIP_REQ_RESOURCE | All | Records created for each WIP_OPERATION. Since WIP_OPERATION references a PROCESS_OPERATION or OPERATION, the PROCESS_COMPONENT table is used to determine which COMPONENTS correspond to a WIP_OPERATION. |
| WIP_REQ_RESOURCE | WipOrderNo | wipOrderNo. |
| WIP_REQ_RESOURCE | WipOrderType | wipOrderType. |
| WIP_REQ_RESOURCE | OprSequenceNo | Operation sequence number of WIP_OPERATION which is being exploded. |
| WIP_REQ_RESOURCE | ResourceClassID | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | ResourceType | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | ResourceName | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | EffectiveDate | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | DiscontinueDate | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | RoleID | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | SkillID | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | SkillExperienceLevel | Copied from PROCESS_REQ_RESOURCE. |
| WIP_REQ_RESOURCE | WorkLoadID | Copied from PROCESS_REQ_RESOURCE. |
| WORK_LOAD | All | Every workload which is referenced by an exploded entity is first cloned and the exploded entity references the clone. |
