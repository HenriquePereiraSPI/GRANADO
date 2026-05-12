# GetNextStepSequence

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Active

## Description

The Business Component returns the next Step for a specific DFC Step and a routing value. It could return a specific Step sequence, "BACK", "ABANDON", "STOP" or "LOGOUT".

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationID | Integer | Yes | ID of the DFC |
| Input | StepSequenceNo | Integer | Yes | ID of the DFC Step |
| Input | RoutingValue | Char | Yes | One of possible Routing Output values. |
| Output | NextStepSequenceNo | Char | Yes | Specific Step sequence, "BACK", "ABANDON", "STOP" or "LOGOUT" |
