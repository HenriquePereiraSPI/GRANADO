# DuplicateExecutionOrder

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderCopier`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This façade provides users functionality to duplicate an execution order. The meaning of execution order in the context of WipOrderCopier is more than just a WipOrder record. It is an order that could be executed by DELMIA Apriso. Execution order is a logical entity that might be composed by multiple records from different tables. Therefore the WipOrderCopier will be responsible for copying all the main pieces that comprise a "runable" wip_order.
 

Due to the high flexibility of DELMIA Apriso, it is impossible to define what comprises a full "runable" order because every single implementation will have different pieces of data that combined together will create a logical execution order for that implementation. Having said that, the biggest challenge of the WipOrderCopier is to define what pieces of data creates a base execution order and how to provide users a mechanisms where they can make any custom modifications that his/her implementation might require.
 

WipOrderCopier will provide users two extension points. The first extension point will be trigger just after the base execution order has been cloned and the second one just after the order has been exploded. The standard implementations for both extension points don't do anything. They are just empty functions.
 

The WipOrderCopier will allow users to clone orders that have been or will be exploded on any explosion strategy (Process, StandardOperation or Recipe). WipOrderCopier will internally determine what strategy will be used for the new order and copy the related data.
 

 **Extension Points** 
 

 *FlexNet.BusinessRules.WipOrderCopier.AfterCopyExtension* 
 

It is an extension mechanism to allow users to add custom logic after the order has been duplicated. Users can modify or create new data after the base execution order has been duplicated.
 

          

 **Name** 
   

 **DataType** 
   

 **Comment** 
     

 **WipOrderNo** 
   

Char
   

Wip Order No for the order that was cloned.
     

 **WipOrderType** 
   

Integer
   

Wip Order Type for the order that was cloned.
     

 **NewWipOrderNo** 
   

Char
   

New Wip Order No.
     

 **ExplosionStrategy** 
   

Integer
   

Explosion strategy that should be used for this order.
     
 

Standard Implementation is just an empty function.
 

 *FlexNet.BusinessRules.WipOrderCopier.AfterExplosionExtension* 
 

It is an extension mechanism to allow users to add custom logic after the order has been exploded. The AfterExplosionExtension will be triggered only when ExplodeOrder == TRUE and ExplodeImmediately == TRUE.
 

          

 **Name** 
   

 **DataType** 
   

 **Comment** 
     

 **WipOrderNo** 
   

Char
   

Wip Order No for the order that was cloned.
     

 **WipOrderType** 
   

Integer
   

Wip Order Type for the order that was cloned.
     

 **NewWipOrderNo** 
   

Char
   

New Wip Order No.
     

 **ExplosionStrategy** 
   

Integer
   

Explosion strategy that should be used for this order.
     
 

Standard Implementation is just an empty function.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The Wip Order to be cloned |
| Input | WipOrderType | Integer | Yes | The Wip Order to be cloned. |
| Input | NewWipOrderNo | Char | No | The Wip Order No for the new wip order. |
| Input | ExplodeOrder | Boolean | No | When true, the DuplicateExecutionOrder will also invoke the explosion. |
| Input | ExplodeImmediately | Boolean | No | It controls how the explosion will be invoked. When true and ExplodeOrder also true, the explosion is invoked synchronously. When false and ExplodeOrder = true, it triggers the explosion asynchronously which means it just creates a background job to explode the order. |
| Input | ProcessID | Integer | No | It will be used only when ExplodeOrder == true. It can be used to override the determination function. Users can override the determination function by either passing the ProcessID or RecipeID. |
| Input | RecipeID | Integer | No | It will be used only when ExplodeOrder == true. It can be used to override the determination function. The WipOrderCopier will determine the processID based on the recipeID. Users can override the determination function by either passing the ProcessID or RecipeID. |

## Validations

- Validate Inputs. 
 
- If ExplodeOrder == TRUE and ExplodeImmediately == FALSE, recipeID MUST BE == 0 
- If ExplodeOrder == FALSE, processID MUST BE == 0 and recipeID MUST BE == 0 
- If ProcessID != 0 and RecipeID !=0, Cannot specify ProcessID and RecipeID  
 
- Validate Wip_Order 
- If ProcessID != 0 
 
- Validate Process (process record must exist in process table)  
 
- If RecipeID != 0 
 
- Validate Recipe (recipe must exist in the recipe table) 
- ProcessID = Recipe.ProcessID  
 
-  If NewWipOrderNo is null or empty, its value is generated based on the sequence WIP_ORDER_NO for Facility where the source Wip Order is released

## System Processing

- Duplicate WIP_ORDER(NewWipOrderNo,WipOrderType). 
 
- Reset CompletedQuantity = null 
- Reset WorkOrderStatus = New (1) 
- Reset ProgressStatus = null 
- Reset TextID = null 
- Reset UnitID = null 
- Reset ActualCompletionDate = null 
- Reset ActualStartDate = null 
- Reset ActualDurationSeconds = null 
- Reset OriginalProcessID = null 
- Reset ProcessID = null 
- Reset RecipeID = null 
- Reset DeterminationStrategyUsed = null 
- Reset WorkFlowStatusID = null 
- Reset TargetOrderQuantity = null 
- Reset InternalState = null 
 
- Duplicate TEXT_TRANSLATION record. 
 
- if WIP_ORDER.TextID is not null 
 
- Duplicate TEXT record 
- Update NewWipOrder.TextID = new TEXT.ID 
- For each TEXT_TRANSLATION (WIP_ORDER.TextID, EmployeeContext.LanguageID) 
 
- Duplicate TEXT_TRANSLATION(new WIP_ORDER.TextID) record. 
 
 
 
- Duplicate UNIT/UNIT_CHARACTERISTIC for WIP_ORDER 
 
- If WIP_ORDERd.UnitID is not Null 
 
- Duplicate UNIT record. 
- Update NewWipOrder.UnitID = new Unit.ID 
- Foreach UNIT_CHARACTERISTIC(WIP_ORDER.UnitID) 
 
 
- Duplicate UNIT_CHARACTERISTIC(new WIP_ORDER.UnitID) 
- Generate FlexNet.BusinessFacade.Manufacturing.WipOrderCreator.CreateWipOrder.xml 
 
- It must instantiate the Composer. 
- Add the XMLs to the composer collection 
- Write the XML (Composer.Write) 
- The steps above should be done to avoid mizing XMLs. 
 
- Duplicate WIP_REV 
 
- For each WIP_REV(WipOrderNo,WipOrderType) 
 
- Duplicate WIP_REV(NewWipOrderNo,WipOrderType) 
- Duplicate TEXT/TEXT_TRANSLATION (same logic as described for WIP_ORDER) 
 
 
- Duplicate ORDER_DATE 
 
- Foreach ORDER_DATE(WipOrderNo,WipOrderType, OprSequenceNo) 
 
- Duplicate ORDER_DATE(NewWipOrderNo,WipOrderType,OprSequenceNo) 
 
 
- If (ProcessID == 0 and RecipeID == 0) 
- Get Explosion Strategy 
 
- ExplosionStrategy = FlexNet.BusinessRules.Production.Explosion.GetWipOrderDeterminationStrategy(WipOrderRow) 
 
- If ExplosionStrategy = DeterminationStrategy.StandardOperation 
 
- For each WIP_OPERATION(WipOrderNo) 
 
- Duplicate WIP_OPERATION(NewWipOrderNo) 
 
- Reset OperationStatus = New(1) 
- Reset ProgressStatus = null 
- Reset OperationID = null 
- Reset OperationCode = null 
- Reset DeterminationStrategyUsed = null 
- Reset TaskStrategyType = null 
- Reset TextID = null 
- Reset UnitID = null 
- Reset ActualCompletionDate = null 
- Reset ActualStartDate = null 
- Reset ActualDurationSeconds = null 
- Reset WorkFlowStatusID = null 
 
- Duplicate TEXT/TEXT_TRANSLATION (same logic as described for WIP_ORDER) 
- Duplicate UNIT/UNIT_CHARACTERISTIC (same logic as described for WIP_ORDER) 
- Duplicate WORK_LOAD if WorkLoadID is populated 
- Duplicate ORDER_DATE 
 
 
- For each ORDER_DATE(WipOrderNo,WipOrderType) and ORDER_DATE.OprSequenceNo is null 
 
- Duplicate ORDER_DATES(NewWipOrderNo,WipOrderType) 
- For each WIP_OPERATION_SEQUENCE(WipOrderNo, DestinationWipOrderNo) 
 
- Duplicate WIP_OPERATION_SEQUENCE(NewWipOrderNo) 
 
- Fore ach WIP_COMPONENT (WipOrderNo) and ExternalSource is not null and not equal = 0 
 
- Duplicate COMPONENT(WipComponent.ComponentID) 
- Duplicate WIP_COMPONENT(NewWipOrderNo) 
- Assign New WIP_COMPONENT.ComponentID = New COMPONENT.ID 
 
- Fore ach WIP_OPERATION_STEP (WipOrderNo) 
 
- Duplicate WIP_OPERATION_STEP(NewWipOrderNo) 
 
- For each WIP_OPERATION_STEP_CHAR (WipOrderNo) 
 
- Duplicate WIP_OPERATION_STEP_CHAR(NewWipOrderNo) 
- For each WIP_OPERATION_STEP_CHAR (WipOperationStepCharID) 
 
 
- Duplicate WIP_OPERATION_STEP_CHAR_ATTR 
- Invoke FlexNet.BusinessRules.WipOrderCopier.AfterCopyExtension(WipOrderNo, WipOrderType,NewWipOrderNo, ProcessID, RecipeID, ExplosionStrategy) 
- If ExplodeOrder == true 
 
- If ExplodeImmediately == true 
 
- FlexNet.BusinessFacade.Common.WipOrderManager.ExplodeWipOrder_v93(NewWipOrderNo, WipOrderType, ProcessID, RecipeID, true) 
- FlexNet.BusinessRules.WipOrderCopier.AfterExplosionExtension WipOrderNo, WipOrderType,NewWipOrderNo, , ProcessID, RecipeID ExplosionStrategy) 
 

Else
 
 
- Read NewWipOrderRow to make sure we pick up any changes that have occurred in the AfterCopyExtension; 
- FlexNet.BusinessFacade.Manufacturing.ExecuteExplosionJob(New WipOrderRow);

## Pre-Conditions

The wip order to duplicate must exist.

## Published Events

Creates jobs for explosion if explosion was required and was set to asynchronous

## History Recording in Production

FlexNet.BusinessFacade.Manufacturing.WipOrderCreator.CreateWipOrder

## Host Integration Support

FlexNet.BusinessFacade.Manufacturing.WipOrderCreator.CreateWipOrder

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
| WIP_REV | All fields |  |
| ORDER_DATE | All fields |  |
| WIP_OPERATION | All fields |  |
| WIP_OPERATION_SEQUENCE | All fields |  |
| WIP_COMPONENT | All fields |  |
| COMPONENT | All fields |  |
| WIP_OPERATION_STEP | All fields |  |
| WIP_OPERATION_STEP_CHAR | All fields |  |
| TEXT | All fields |  |
| TEXT_TRANSLATION | All fields |  |
| UNIT | All fields |  |
| UNIT_CHARACTERISTIC | All fields |  |
