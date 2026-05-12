# CalculateSampleSize

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.SamplingProcedureManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to calculate the sampling parameters based on the sampling procedure. The following parameters will be calculated depending on the sampling procedure used:
 
 
- Sample size 
- Acceptance number 
- Rejection number

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SamplingProcedureID | Integer | Yes | The ID of the sampling procedure. |
| Input | LotSize | Integer | Conditional | The lot size for which the sampling parameters will be calculated (not required if SAMPLING_PROCEDURE.Type is SamplingProcedureType.FixedSize). |
| Input | InspectionSeverity | Short | Conditional | The inspection severity defined in the INSPECTION_SEVERITY (required only for SamplingProcedureType.UseScheme when SAMPLING_PROCEDURE..InspectionSeverityID is not defined). |
| Input | AQLValue | Decimal | Conditional | The AQL value. This is required (greater than 0) only for SamplingProcedureType.UseScheme (precision 3) when SAMPLING_PROCEDURE..AQLValue is not defined. |
| Output | SampleSize | Integer | No | The calculated sample size. |
| Output | AcceptanceNo | Integer | No | The calculated acceptance number. |
| Output | RejectionNo | Integer | No | The calculated rejection number. |

## Validations

- The system validates that SamplingProcedureID is specified and exists in the SAMPLING_PROCEDURE table. 
- The system validates that LotSize is greater than 0 if the sampling procedure type is different than FixedSize. 
- The system validates that InspectionSeverity is provided (when the sampling procedure type is UseScheme) and exists in the INSPECTION_SEVERITY table. 
- The system validates that AQLValue is not negative when the sampling procedure type is UseScheme

## System Processing

-  When the sampling procedure type is FixedSize, then the following occurs:  
 
-  The SampleSize Output is populated with SAMPLING_PROCEDURE.SampleSize.  
-  The AcceptanceNo Output is populated with SAMPLING_PROCEDURE.AcceptanceNo (or -1 if its DBNull)  
-  The RejectionNo Output = AcceptanceNo + 1 or -1 if greater than the sample size. If calculated so that AcceptanceNo is -1, then RejectionNo will be set to -1.  
 
-  When the sampling procedure type is Percentage, then the following occurs:  
 
-  The SampleSize Output is populated with SAMPLING_PROCEDURE.SampleSizePercentage * LotSize rounded up to an integer.  
-  The AcceptanceNo Output is populated with the calculated sample size * SAMPLING_PROCEDURE.AcceptanceNoPercentage rounded down to an integer (or -1 if SAMPLING_PROCEDURE.AcceptanceNoPercentage is DBNull).  
-  The RejectionNo Output is populated with the calculated sample size * SAMPLING_PROCEDURE.AcceptanceNoPercentage rounded up to an integer (if AcceptanceNoPercentage is 0% then RejectionNo will be 1 if it has to be greater than AcceptanceNo or -1 if greater than Sample Size. If SAMPLING_PROCEDURE.AcceptanceNoPercentage is DBNull, then RejectionNo will be set to -1.  
 
-  When the sampling procedure type is Use Scheme, then the s ystem will use SAMPLING_PROCEDURE.SamplingSchemeID to find the SAMPLING_SCHEME record. Based on the type of sampling scheme (SAMPLING_SCHEME.SamplingSchemeType), the system will find the appropriate record in the SAMPLING_SCHEME_PARAMS table. The record will be identified by the BC Inputs InspectionSeverity and AQLValue or the equivalent values from SAMPLING_PROCEDURE (if the Inputs are not specified). If the record is not found, then this error message will be returned: "Sampling Scheme Table has not been found for the specified Inspection Severity/AQL Value." If the record is found, based on the LotSize parameter, the system will read the following parameters from the corresponding SAMPLING_SCHEME_TABLE table:  
 
-  The SampleSize Output as populated with SAMPLING_SCHEME_TABLE.SampleSize  
-  The AcceptanceNo Output as populated with SAMPLING_SCHEME_TABLE.A1 (-1 if not defined)  
-  The RejectionNo Output as populated with SAMPLING_SCHEME_TABLE.R1
