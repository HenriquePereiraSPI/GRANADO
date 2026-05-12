# CreateDispositionForDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component is a merge of some key components to be used for simple cases. It behaves as if all the following business components were invoked in sequence:
 
 
-  

CreateDisposition
  
-  

CreateDispositionTest
  
-  

CreateDispositionTestReason
  
-  

LinkUnlinkDispositionMachineEvent
  
 

It creates records in the DISPOSITION, DISPOSITION_LINE, DISPOSITION_TEST, DISPOSITION_TEST_REASON and DISPOSITION_LINE_MACHINE_EVENT tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility of which the disposition occurred. |
| Input | Disposition | Char | Yes | New unique Disposition number. |
| Input | DispositionType | Integer | Yes | Disposition type must be '3 - Defect' |
| Input | WipOrderNo | Char | No | WIP Order that relates to disposition. |
| Input | WipOrderType | Integer | No | Valid WIP Order type. Required if WipOrderNo is specified. |
| Input | WipOprSequenceNo | Char | No | WIP Order Operation Sequence No for the WIP Order. |
| Input | ProductID | Integer | No | Valid Product ID. |
| Input | GradeID | Integer | No | Valid Grade ID. |
| Input | LotNo | Char | No | Valid Lot No. |
| Input | SerialNo | Char | No | Valid Serial No |
| Input | Container | Char | No | Valid Container. |
| Input | RootCauseReasonCode | Char | No | Valid root cause reason code |
| Input | CorrectiveActionReasonCode | Char | No | Valid corrective action reason code. |
| Input | TestingDate | DateTime | No | The testing date of the disposition. |
| Input | EmployeeID | Integer | No | Valid Employee ID who is performing the disposition. |
| Input | SeverityID | Integer | No | Valid Severity ID. |
| Input | Characteristic | Char | Yes | Characteristic |
| Input | TestValue | Decimal | No | Test value for variable characteristic. Required for variable characteristic. |
| Input | TestAttribute | Char | No | Test attribute for attibute characteristic. Required for attibute characteristic. |
| Input | UomCode | Char | No | Unit of Measure of the test value. |
| Input | ResourceName | Char | No | Valid Resource name. |
| Input | ResourceType | Integer | No | Valid Resource Type for the Resource Name. Required if ResourceName is specified. |
| Input | ReasonCode | Char | No | Valie Reason Code. |
| Input | Comment | Char | No | Text comment. |
| Input | LanguageID | Integer | No | Language ID for the Text Comment. |
| Input | ResourceLaborID | Integer | No | Resource Labor ID. |
| Input | LinkUnlinkFlag | Boolean | No | True to Link or False to Unlink resource labor to disposition line. Required if ResourceLaborID is specified. |
| Output | ConformingFlag | Boolean | No | True if characteristic test conforms to specification. Otherwise, False. |
| Output | SeverityRet | Integer | No | Severity used. |

## Validations

- System verifies that the DISPOSITION table does not contain a record for the inputted Facility + Disposition. 
- Depending on the type of the inputted Characteristic, system expects a value (inputted TestValue) or a valid attribute (inputted TestAttribute).

## System Processing

- System creates a record in the DISPOSITION table with the input. 
- System populates the first line of DISPOSITION_LINE with the input. 
- System performs specification test for the characteristic and stores the result by creating a record in the DISPOSITION_TEST table with other inputs. 
- If a SeverityId is inputted, it is outputted to SeverityRet. 
- System creates a new record in the DISPOSITION_TEST_REASON table with the inputs with ReasonSequenceNo = 1. 
- If inputted LinkUnlink flag = TRUE, system creates a record in the DISPOSITION_LINE_MACHINE_EVENT table with the inputs. 
- If inputted LinkUnlink flag = FALSE, system retrieves the record matching the inputs in the DISPOSITION_LINE_MACHINE_EVENT table and deletes it.

## History Recording in Production

For each record produced in each "Quality" table, an entry is generated in both the TRANSACTION_HISTORY table and the TRANSACTION_HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Facility | Input (Required) |
|  | Disposition | Input (Required) |
|  | DispositionType | DEFECT (3) (Required) |
|  | ProductID | Input |
|  | GradeID | Input |
|  | LotNo | Input |
|  | SerialNo | Input |
|  | Status | Not started (1) |
|  | RootCauseReasonCode | Input |
|  | CorrectiveActionReasonCode | Input |
|  | Container | Input |
|  | SeverityID | Input |
|  | WipOrderNo | Input |
|  | WipOrderType | Input |
|  | WipOperationNo | Input |
|  | ResourceName | Input |
|  | ResourceType | Input |
| DISPOSITION_LINE | Facility | Input |
|  | Disposition | Input |
|  | LineSequenceNo | 1 |
|  | Status | Not started (1) |
|  | RootCauseReasonCode | Input |
|  | CorrectiveActionReasonCode | Input |
|  | TestingStartDate | Input |
|  | TestingStartEmployeeID | Input |
|  | ProductID | Input |
|  | GradeID | Input |
|  | LotNo | Input |
|  | SerialNo | Input |
|  | Container | Input |
|  | SeverityID | Input |
|  | WipOrderNo | Input |
|  | WipOrderType | Input |
|  | WipOprSequenceNo | Input |
|  | ResourceName | Input |
|  | ResourceType | Input |
| DISPOSITION_TEST | Facility | Input |
|  | Disposition | Input |
|  | LineSequenceNo | Input |
|  | Characteristic | Input |
|  | TestValue | Input (if Characteristic is of type Variable) |
|  | TestAttribute | Input (if Characteristic is of type Attribute) |
|  | SeverityID | Inputted SeverityID or outputted SeverityRet |
|  | ConformingToSpecification | Outputted ConformingFlag- See System Processing |
| DISPOSITION_TEST_REASON | ReasonSequenceNo | System generated (auto-increment) |
|  | ReasonCode | Input |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | LanguageID | Input |
|  | Text | Inputted Comment |
| DISPOSITION_LINE_MACHINE_EVENT | Facility | Input |
|  | Disposition | Input |
|  | LineSequenceNo | Input |
|  | ResourceLaborID | Input |
