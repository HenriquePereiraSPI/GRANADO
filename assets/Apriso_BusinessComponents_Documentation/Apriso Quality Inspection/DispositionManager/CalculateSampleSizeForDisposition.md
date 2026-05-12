# CalculateSampleSizeForDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to calculate the sampling parameters for Disposition Test(s). The following parameters are calculated depending on the attached sampling procedure:
 
 
- Sample size 
- Acceptance number 
- Rejection number

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | The Facility of the Disposition. |
| Input | Disposition | Char | No | The Disposition name. |
| Input | LineSequenceNo | Integer | No | The Disposition Line Sequence Number. |
| Input | DispositionTestID | Integer | No | The ID of the Disposition Test. |
| Input | InspectionSeverity | Short | No | The inspection severity defined in INSPECTION_SEVERITY. Required only for SamplingProcedureType.UseScheme when SAMPLING_PROCEDURE.InspectionSeverityID is not defined. |
| Input | AQLValue | Decimal | No | The AQL value. Required (greater than 0) only for SamplingProcedureType.UseScheme (precision 3) when SAMPLING_PROCEDURE.AQLValue is not defined. |

## Validations

- The system validates that the Facility and Disposition exist in the DISPOSITION table (if provided).  
- The system validates that the Facility, Disposition, and LineSequenceNo exist in the DISPOSITION_LINE table (if provided). 
- The system validates that the DispositionTestID parameter exists in the DISPOSITION_TEST table (if provided) and matches the Facility, Disposition, LineSequenceNo (if provided). The system also validates that the status of the Disposition Test is New. 
- The system validates that at least one of the entities (Disposition, Disposition Line, Disposition Test) is specified. 
- The system validates that InspectionSeverity exists in the INSPECTION_SEVERITY table (if provided).

## System Processing

-  For every Disposition Test (of the New status) provided from the parameters, the system calculates the sampling parameters (SampleSize, RejectionNo, AcceptanceNo) as follows:  
 
-  The system retrieves the sampling procedure (if not defined on the Disposition Test level) from the Disposition Line level or the Disposition Level  
 
-  If the sampling procedure is not found then, an error message is returned.  
 
-  If the sampling procedure type is not FixedSize, then the system calculates LotSize as follows:  
 
-  If the sample UOM code is not defined for the Disposition Test, then an error is returned.  
-  If the sample UOM code is different than the Disposition UOM code, then the system converts the sample quantity to the UOM defined on the Disposition level.  
-  LotSize = ceiling (Disposition.Quantity / quantity calculated in the previous step).  
 
 
-  The system calcualtes SampleSize, RejectionNo, and AcceptanceNo by calling the CalculateSampleSize BC and passing the following parameters:  
 
-  The calculated LotSize  
-  The inutted InspectionSeverity  
-  The inputted AQLValue  
 
-  The system persists the calculated sample size, acceptance number, and rejection number into the DISPOSITION_TEST table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | SampleSize | The calculated Sample Size. |
|  | AcceptanceNo | The calculated acceptance number or DBNull if less than zero. |
|  | RejectionNo | The calculated rejection number or DBNull if less than or equal zero. |
