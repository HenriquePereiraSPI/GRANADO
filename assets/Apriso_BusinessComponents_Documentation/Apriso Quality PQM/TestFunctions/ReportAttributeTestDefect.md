# ReportAttributeTestDefect

**Category:** Apriso/Quality/PQM
**Class:** `FlexNet.BusinessFacade.Quality.TestFunctions`
**Assembly:** `FlexNet.BusinessFacade.Quality`
**Status:** Deprecated

## Description

The purpose of this Business Component is to update an existing DISPOSITION_TEST record with the test attribute, conformance test result for attribute characteristic, comment, and reason code.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | inspectionLot | Char | No | Inspection Lot number. |
| Input | oprSequenceNo | Char | No | Wip Operation sequence no. |
| Input | characteristic | Char | No | Characteristic name. |
| Input | characteristicDescription | Char | No | Description of the characteristics. |
| Input | dispositionTestID | Integer | Yes | Disposition ID to report attribute test defect. |
| Input | serialNo | Char | No | Serial No for which the attribute test defect is reported. |
| Input | testAttribute | Char | Yes | Attribute which is reported. |
| Input | reasonCode | Char | No | Reasoncode for the defect. |
| Input | comments | Char | No | Comments for the defect. |
| Input | quantity | Integer | No | Quantity reported for the defect. |
| Input | employeeNo | Char | No | Employee reporting the attribute test defect. |

## Validations

- System verifies the disposition test record existing with Input DispositionTestID. 
- System verifies the Input testAttribute is valid. 
 
- An Attribute can be overwritten for a Specification. The Specification can optionally be defined in the DISPOSITION table. If this is the case the testAttribute should exist in the SPECIFICATION_ATTRIBUTE table. Otherwise, it is defined in the ATTRIBUTE table.  
 
- System verifies that the Input serialNo is valid when Input serialNo is not an empty value. 
 
- System verifies that the Input serialNo does not exist for the same disposition.

## System Processing

- The following inputs are not processed by this business component: InspectionLot, OprSequenceNo, Characteristic (name) and CharacteristicDescription. They are used for displaying purposes when using DELMIA Apriso Dynamic Grid. 
- The System retrieves the record for the Input dispositionTestID from the DISPOSITION_TEST table. 
- The System performs conformance test against the Input testAttribute. 
 
- System retrieves the Attribute. An Attribute can be overwritten for a Specification. The Specification can be defined in DISPOSITION table. If this is the case the Attribute is defined in the SPECIFICATION_ATTRIBUTE table. Otherwise, it is defined in the ATTRIBUTE table. 
- The conformance test result is the same value as the conforming flag (TRUE or FALSE) for the Input testAttribute in the SPECIFICATION_ATTRIBUTE or ATTRIBUTE table. 
- System updates the DISPOSITION_TEST record with testAttribute and the conformance test result.  
 
- The System creates a record in DISPOSITION_TEST_REASON with the Input reasonCode, serialNo, lotNo, comment, and quantity for the Input dispositionTestID.

## Pre-Conditions

- Characteristic type must be Attribute. 
- DISPOSITION, DISPOSTION_LINE, DISPOSITION_TEST must be created prior to calling this business component. This can be achieved by using Disposition Explosion Event.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ID | Input DispositionTestID (Required) |
|  | Characteristic | Input CharacteristicName (Required) |
|  | InspectorEmployeeNo | Input EmployeeNo |
|  | TestAttribute | Input testAttribute |
| DISPOSITION_TEST_REASON | DispositionTestID | Input DispositionTestID (Required) |
|  | REASONSEQUENCENO | System generated |
|  | SERIALNO | Input serialNo |
|  | REASONCODE | Input reasonCode |
|  | QUANTITY | Input Quantity |
|  | TEXTID | TEXT.ID |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | TEXTID | TEXT.ID |
|  | MEDIUM | Input Comments |
