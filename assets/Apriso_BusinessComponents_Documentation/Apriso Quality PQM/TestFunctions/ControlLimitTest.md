# ControlLimitTest

**Category:** Apriso/Quality/PQM
**Class:** `FlexNet.BusinessFacade.Quality.TestFunctions`
**Assembly:** `FlexNet.BusinessFacade.Quality`
**Status:** Deprecated

## Description

The purpose of this Business Component is to perform a conformance test of the collected SampleReading value against the control limits of a variable characteristic. The test result of a conformance test is evaluated as conforming or non-conforming. The SampleReading value is conforming when it is within the Control Limits defined by characteristic's lower control limit (LCL) and upper control limit (UCL). The actual SampleReading value and test result are recorded.
 

This Business Component can be invoked multiple times for the same SampleSequenceNo of the same Disposition when there are multiple SampleReading values

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | Disposition number of the attribute test |
| Input | CharacteristicName | Char | Yes | Characteristic number. |
| Input | SampleReading | Char | Yes | Value to be used in the attribute test. |
| Input | Uom | Char | No | Uom |
| Input | WipOrderNo | Char | Yes | Wip Order where the Sample Plan is defined. |
| Input | WipOrderType | Integer | Yes | Wip Order type. |
| Input | OprSequenceNo | Char | Yes | Wip Operation sequence no. |
| Input | StepSequenceNo | Integer | No | Wip Operation Step sequence no. |
| Input | Facility | Char | No | Facility relates to Wip Order and Sample Plan |
| Input | DispositionSequenceNo | Integer | No | Disposition Sequence no relates to Sample Plan. |
| Input | SampleSequenceNo | Integer | Yes | Sample sequence number. |
| Input | ContainerSequenceNo | Integer | No | Container sequence no |
| Input | EmployeeID | Integer | No | Employee who is performing the attribute test. |
| Output | ConformToControl | Boolean | No | True if the sampleReading is conforming control limits of the characteristic otherwise, false |

## Validations

- System validates that the reading value (SampleReading) is an integer or decimal value. 
- System verifies that the Input EmployeeID exist in the EMPLOYEE table. 
- System verifies that the Input WipOrderNo, WipOrderType and OprSequenceNo exist in WIP_ORDER and WIP_OPERATION tables. 
- System verifies that the Specification linked to WipOrder/WipOperation/WipOperationStep exists and is valid. 
 
- Current date must be between EffectiveDate and DiscontinueDate defined in the SPECIFICATION table or SPECIFICATION_FACILITY if exist. 
 
- System verifies that the Input CharacteristicName is defined for the Specification. 
- System verifies that the Input CharacteristicName exists. 
- System verifies that the Disposition Sample for the Input SampleSequenceNo exists.

## System Processing

- The System determines that the function type is "Control Limit Test". 
- The System determines that the characteristic type is "Variable". 
- The System determines whether the reading value conforms to characteristic or not: 
 
- If LowerControlUnit <= SampleReading <= UpperControlUnit, then system records the test result indicating the reading value conforms to control. 
 
 
- System records the reading value by creating a new record in DISPOSITION_READING and DISPOSITION_TEST. 
- System returns ConformToControl=TRUE. 
 
 
- If SampleReading < LowerControlUnit or SampleReading > UpperControlUnit, then system records the test result indicating the reading value does not conform to specification. 
 
 
- System records the reading value by creating a new record in DISPOSITION_READING and DISPOSITION_TEST. 
- System returns ConformToControl =FALSE.

## Pre-Conditions

- The characteristic is of type "Variable". 
- The function type is "ControlLimitTest".

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CHARACTERISTIC | Characteristic | Input CharacteristicName |
|  | CharacteristicType | Retrieved |
|  | UpperControlLimit | Retrieved & compared to Input SampleReading |
|  | LowerControlLimit | Retrieved & compared to Input SampleReading |
| DISPOSITION_TEST | Facility | Input Facility |
|  | Disposition | Input Disposition |
|  | LineSequenceNo | Input DispositionSequenceNo |
|  | SampleSequenceNo | Input SampleSequenceNo |
|  | ContainerSequenceNo | Input ContainerSequenceNo |
|  | InspectorEmployeeNo | Input EmployeeID |
|  | Characteristic | Input CharacteristicName |
|  | TestValue | Input SampleReading |
|  | ConformingToControl | True if TestValue conforms control limits. Otherwise, false. |
|  | ID | System generated |
| DISPOSITION_READING | DispositionTestId | DISPOSITION_TEST.ID |
|  | Characteristic | Input CharacteristicName |
|  | ReadingSequenceNo | Auto-numbering (sequence) to allow multiple readings of 1 test. Increments for each new value read. Since this method only allows one SampleReading, this is always 1. |
|  | CollectedValue | Input SampleReading |
