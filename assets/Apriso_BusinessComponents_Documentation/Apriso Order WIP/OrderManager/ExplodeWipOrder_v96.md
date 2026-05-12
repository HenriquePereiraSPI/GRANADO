# ExplodeWipOrder_v96

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active
**Keywords:** ExplodeWipOrder_v96 explode wiporder

## Description

Explodes a given order based on the following logic: 
 
-  

ProcessID and RecipeID are supplied - explodes the given work order with the specified recipe. The user supplies the recipe to explode the work order with.
  
-  

ProcessID is supplied - explodes the given work order with the specified process. The user supplies the process that should be used to explode the work order.
  
-  

StandardOperationID and WipOprSequenceNo are supplied - explodes the given work order with the specified standard operations. The user supplies the standard operations that should be used to explode the work order operations.
  
-  

ProcessID and RecipeID are not supplied - calls determinations and tries to determine how to explode the given work order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Work order to explode. |
| Input | WipOrderType | Integer | Yes | Type of work order to explode. |
| Input | ProcessID | Integer | No | Process ID. |
| Input | RecipeID | Integer | No | Recipe ID. |
| Input | StandardOperationID | ListofInteger | No | Standard Operation IDs. |
| Input | WipOprSequenceNo | ListofChar | No | WIP Operation sequence for a specific StandardOperationID. |
| Input | NavigateFirstOperation | Boolean | Yes | Determines whether or not to navigate the first operation. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DSFilter | Char | A JSON formatted object that contains optional additional filters. 3DEXPERIENCE platform can use these filters to tailor a process when creating an order. |
| DSPlatformAlias | Char | The name of a 3DEXPERIENCE platform configuration. |
| DSProcessID | Char | The unique identifier of a process in the 3DEXPERIENCE platform. |

## Validations

Validation fails if a WIP order is cancelled.

## System Processing

- If the NavigateFirstOperation input is set to True, the system applies navigation and tasking to the first operation. If this input is False, then navigation will not be executed and a task will not exist for this order. 
- WIP_REQ_RESOURCE fields will be deleted during re-explosion if WIP_REQ_RESOURCE.ExternalSource is not set to "1" (true). For more details, see **Explosion Navigation Tasking Guide**, Required Resource Explosion section.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
| WIP_OPERATION | All fields |  |
| WIP_OPERATION_SEQUENCE | All fields |  |
| WIP_REQ_RESOURCE | All fields |  |
| WIP_COMPONENT | All fields |  |
| COMPONENT | All fields |  |
| WIP_CONTENT | All fields |  |
| WIP_CONTENT_DETAIL | All fields |  |
| TEXT | All fields |  |
| TEXT_TRANSLATION | All fields |  |
| WORK_LOAD | All fields |  |
| WIP_OPERATION_STEP | All fields |  |
| WIP_OPERATION_STEP_CHAR | All fields |  |
| WIP_OPERATION_STEP_CHAR_ATTR | All fields |  |
| TASK | All fields |  |
| TASK_MATERIAL_USE | All fields |  |
| UNIT_CHARACTERISTIC | All fields |  |
| UNIT | All fields |  |
