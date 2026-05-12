# GetPossibleNextStepSequences

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Active

## Description

The Business Component returns a list of possible routing values with corresponding list of Steps they route to, for the specified DFC Step.
 

In the *Example Step Layout* above, when the **StepSequenceNo** is inputted as "0" (Start Step) the outputs will be as follows:
 
 
-  **NextStepSequenceNoList** = "1" (the number of the first step) 
-  **RoutingValueList** = "FIRSTSTEP" (indicating the only possibility in this unique case) 
 

If the **StepSequenceNo** is inputted as "1" the outputs will be:
 
 
-  **NextStepSequenceNoList** = "A, B, DEFAULT" 
-  **RoutingValueList** = "2, 3, STOP" 
 

If the **StepSequenceNo** is inputted as "2" the outputs will be:
 
 
-  **NextStepSequenceNoList** = "DEFAULT" 
-  **RoutingValueList** = "STOP"

*Example Step Layout*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationID | Integer | Yes | ID of the DFC |
| Input | StepSequenceNo | Integer | Yes | ID of the DFC Step |
| Output | NextStepSequenceNoList | ListofChar | Yes | Step sequence number routing value routes to, "BACK", "ABANDON", "STOP" or "LOGOUT". |
| Output | RoutingValueList | ListofChar | Yes | Routing values for corresponding NextStepSequenceNoList elements (specific routing value, "DEFAULT" or "FIRSTSTEP"). |
