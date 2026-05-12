# GetWorkInstructions

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** GetWorkInstructions, Get, WorkInstructions

## Description

This Business Component method retrieves the Work Instructions from current WIP Operation step or Operation step.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Output | WorkInstructions | Char | No | Retrieved Work instruction. |

## Validations

- System validates if the WIP Operation exists in the session. 
- System validates if the WIP Operation step exists in the session.

## System Processing

- System retrieves Work Instruction from the current WIP Operation step. 
- If the WIP Operation step does not exist in the session, then system validates if the Operation step exists in the session. 
- System retrieves Work Instructions from the current Operation step. 
- System returns Work Instructions.
