# CreateDispositionOnly

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The purpose of this Business Component is to create a Disposition without disposition
 line. As opposed to the CreateDisposition BC, this BC only creates a record in the
 DISPOSITION table, and not in DISPOSITION_LINE.

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
| Input | RootCauseReasonCode | Char | No | Valid root cause reason code. |
| Input | CorrectiveActionReasonCode | Char | No | Valid corrective action reason code. |
| Input | TestingDate | DateTime | No | The testing date of the disposition. |
| Input | EmployeeID | Integer | No | Valid Employee ID who is performing the disposition. |
| Input | SeverityID | Integer | No | Valid Severity ID. |
| Input | ResourceName | Char | No | Valid Resource name. |
| Input | ResourceType | Integer | No | Valid Resource Type for the Resource Name. Optional if ResourceName not specified. |

## Validations

System verifies that the DISPOSITION table does not contains a record for the inputted Facility + Disposition.

## System Processing

System creates a record in the DISPOSITION table with the input.

## History Recording in Production

For each record produced/updated in each "Quality" table, an entry is generated in both the TRANSACTION_HISTORY table and the TRANSACTION_HISTORY_QUALITY table.

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
