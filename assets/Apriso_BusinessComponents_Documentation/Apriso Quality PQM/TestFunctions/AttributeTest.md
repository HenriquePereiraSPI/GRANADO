# AttributeTest

**Category:** Apriso/Quality/PQM
**Class:** `FlexNet.BusinessFacade.Quality.TestFunctions`
**Assembly:** `FlexNet.BusinessFacade.Quality`
**Status:** Deprecated

## Description

This Business Component method is used is to perform a conformance test of the collected sample reading value against an attribute characteristic. The test result of a conformance test is evaluated as conforming or non-conforming. The actual sample reading value and test result are recorded. This BC can be invoked multiple times for the same SampleSequenceNo of the same Disposition when there are multiple sample reading values.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | The Disposition number of the attribute test. |
| Input | CharacteristicName | Char | Yes | The characteristic number. |
| Input | SampleReading | Char | Yes | The value to be used in the attribute test. |
| Input | WipOrderNo | Char | Yes | The WIP Order where the sample plan is defined. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation Sequence number. |
| Input | StepSequenceNo | Integer | No | The WIP Operation Step Sequence number. |
| Input | Facility | Char | No | The Facility related to the WIP Order and the sample plan. |
| Input | DispositionSequenceNo | Integer | No | The Disposition Sequence not related to the sample plan. |
| Input | SampleSequenceNo | Integer | Yes | The sample Sequence number. |
| Input | ContainerSequenceNo | Integer | No | The Container Sequence number. |
| Input | EmployeeID | Integer | No | The employee who is performing the attribute test. |
| Output | ConformToSpecification | Boolean | No | True if the sample reading is a conforming attribute. Otherwise, false. |

## Validations

- The system verifies that the EmployeeID Input exists in the EMPLOYEE table. 
- The system verifies that the WipOrderNo, WipOrderType, and OprSequenceNo Inputs exist in the WIP_ORDER and WIP_OPERATION tables. 
- The system verifies that the specification linked to the WIP Order, WIP Operation, and WIP Operation Step exists and is valid. The current date must be between EffectiveDate and DiscontinueDate as defined in the SPECIFICATION table (or SPECIFICATION_FACILITY if it exist). 
- The system verifies that the CharacteristicName Input is defined for the specification. 
- The system verifies that the CharacteristicName Input exists. 
- The system verifies that the Disposition sample for the SampleSequenceNo Input exists.

## System Processing

- The system determines that the Function type is Attribute Test. 
- The system determines that the characteristic type is Attribute. 
- The system determines whether the reading value conforms to the characteristic. 
- If the SampleReading Input is in the list of conforming attributes, the system records the test result, indicating that the reading value conforms to the specification. 
 
- The system records the reading value by creating a new record in DISPOSITION_READING and DISPOSITION_TEST. 
- The system returns ConformToSpecification=TRUE. 
 
- If SampleReading is not in the list of conforming attributes, the system records the test result indicating the reading value does not conform to the specification. 
 
- The system records the reading value by creating a new record in DISPOSITION_READING and DISPOSITION_TEST. 
- The system returns ConformToSpecification=FALSE.

## Pre-Conditions

The characteristic must be of the type Attribute. The Function type must be AttributeTest.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CHARACTERISTIC | Characteristic | The CharacteristicName Input. |
|  | CharacteristicType | Retrieved |
| ATTRIBUTE | Characteristic | The CharacteristicName Input. |
|  | Attribute | Retrieved and compared to the SampleReading Input. |
| DISPOSITION_TEST | Facility | The Facility Input. |
|  | Disposition | The Disposition Input. |
|  | LineSequenceNo | The DispositionSequenceNo Input. |
|  | SampleSequenceNo | The SampleSequenceNo Input. |
|  | ContainerSequenceNo | The ContainerSequenceNo Input. |
|  | InspectorEmployeeNo | The EmployeeID Input. |
|  | Characteristic | The CharacteristicName Input. |
|  | TestAttribute | The SampleReading Input. |
|  | ConformingToSpecification | True if TestAttribute is a conforming attribute. Otherwise, false. |
|  | ID | System-generated |
| DISPOSITION_READING | DispositionTestId | DISPOSITION_TEST.ID |
|  | Characteristic | The CharacteristicName Input. |
|  | ReadingSequenceNo | The auto-numbering (Sequence) to allow for multiple readings of 1 test. Increments for each new value are read. Since this method only allows one SampleReading, this is always 1. |
|  | CollectedAttribute | The SampleReading Input. |
