# CaptureWorkInstructions

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CaptureWorkInstructions, Capture, WorkInstructions

## Description

This Business Component method is used to retrieve the Work Instructions from the current WIP Operation Step or Operation Step and saves them to the EMR Context WorkInstructions session value. For more information about EMR Context, refer to the Electronic Manufacturing Records Guide.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
|  |  |  |  |  |

## Validations

- The system validates if the WIP Operation exists in the session.  
- The system validates if the WIP Operation Step exists in the session.

## System Processing

- The system retrieves the Work Instruction from the current WIP Operation Step. 
- If the WIP Operation Step does not exist in the session, the system validates if the Operation Step exists in the session. 
- The system retrieves the Work Instruction from the current Operation Step.  
- The system assigns the Work Instruction to the EMR Context WorkInstructions value.
