# Sample

**Category:** Apriso/Quality/PQM
**Class:** `FlexNet.BusinessFacade.Quality.TestFunctions`
**Assembly:** `FlexNet.BusinessFacade.Quality`
**Status:** Deprecated

## Description

The purpose of this business component is to calculate the Sample Size for a given PopulationQuantity and to create a Disposition to accommodate the sampling process. This new Disposition has disposition type 1 - 'Disposition Created by Sample Plan' and generates a unique DispositionNo, which is passed as an output parameter. This DispositionNo is to be use later for various quality tests, reporting against and analysis via quality charts - all of which will be available through DELMIA Apriso.
 

The major task of this Business Component is the calculation the Sample Size. It is calculated based on the populationQuantity size from which the sample is to be drawn, and a sampling rule. The populationQuantity is determined prior to this Business Component being invoked, and should be the output from a prior function such as 'Input with Validation' - where the Quality Worker has entered this value.
 

The sampling rule is retrieved from the Sample Plan. There are three predefined Sampling rules: Fixed, Percentage, or Aliquot. Once the Sample Size has been determined, the Sample unit can then be placed into Serialized Containers for which system can print appropriate container labels.
 

Sampling is performed against a Sample Unit, which will be considered to have a quantity of 1 per Sample Unit, except when the Sampling rule is Aliquot - where the unit quantity is one part of a total amount.
 

The Sample BC does not handle multiple disposition lines.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | populationQuantity | Decimal | Yes | The population quantity along with Sample Plan will determine the sample quantity. |
| Input | uom | Char | No | Unit of measure of Population quantity. |
| Input | wipOrderNo | Char | Yes | Wip Order where the Sample Plan is defined. |
| Input | wipOrderType | Integer | Yes | Wip Order type. |
| Input | oprSequenceNo | Char | Yes | Wip Operation sequence no. |
| Input | stepSequenceNo | Integer | No | Wip Operation Step sequence no. |
| Input | facility | Char | No | Facility relates to Wip Order and Sample Plan. |
| Input | dispositionSequenceNo | Integer | No | Disposition Sequence no relates to Sample Plan. |
| Input | lotNo | Char | No | Lot No. |
| Input | serialNo | Char | No | Serial No. |
| Input | employeeID | Integer | No | Employee IDE |
| Output | sampleQuantity | Decimal | No | the calculated quantity for sampling. |
| Input | numberOfContainers | Integer | No | number of containers. |
| Input | containerQuantity | Decimal | No | quantity in each container. |
| Input | lastContainerQuantity | Decimal | No | quantity of the last container. |
| Input | containerSerialFlag | Decimal | No | true if container is serialized. |
| Input | firstSerialNo | Char | No | first serial number. |
| Input | labelContainerFlag | Boolean | No | true if container is labeled. |
| Input | dispositionNo | Char | No | disposition number generated. |
| Input | labelXMLSchemaName | Char | No | XML schema name of the label. |

## Validations

- System verifies the Input WipOrderNo and WipOperation exist in the WIP_ORDER and WIP_OPERATION tables. 
- System verifies a Sample Plan is defined for the Input WipOrderNo. 
- System verifies the Sample Plan is valid. 
 
- If Sample Plan is Revision Controlled, system verifies the current date does fall within the effective date and the discontinue date for the revision in the SAMPLE_PLAN_REV table. i.e. Effective date =< current date < discontinue date.'

## System Processing

- System retrieves the Sample Plan and all relevant Sample Plan information: 
 
- System finds the Sample Plan ID linked to the Wip order, first search at Step level, than at Operation level, then at Wip Order level. 
- System retrieves the Sample Plan. A Sample Plan can be overwritten for a Disposition Sequence. If this is the case the Sample plan is defined in SAMPLE_PLAN_DISPOSITION table. Otherwise, from SAMPLE_PLAN table. 
- System retrieves the Sample Rules linked to the retrieved Sample Plan. 
 
- System retrieves Sample Rule from SAMPLE_PLAN if rule type is percentage. 
- or 
- System retrieves Sample Rule from SAMPLE_RULE_FIXED if rule type is 'fixed'. 
- or 
- System retrieves Sample Rule from SAMPLE_RULE_ALIQUOT if rule type is 'aliquot.  
 
 
- System uses the retrieved Sampling Rule to determine the Sample Size. See Calculate Sample Size subcomponent below. 
- System creates a Disposition by adding new records to the following disposition tables with a status of 'Not Started': 
 
- DISPOSITION - one record 
- DISPOSITION LINE - one record with LineSequenceNo = 1 
- DISPOSITION LINE SAMPLE - multiple records, one for each sampling unit.  
 
- System determines if Container is required as specified in the retrieved Sample Plan. 
 
- System uses the SampleQuantityPerContainer value from the retrieved Sample Plan to determine the number of containers that are needed. 
- System determines the container needs to be serialized as specified by the SerialContainerFlag in the retrieved Sample Plan. 
 
- System sets the SerialContainerFlag output parameter. 
- System generates serial numbers required for the containers and stores them in the CONTAINER table as container number.  
 
- System creates a new record in the DISPOSITION CONTAINER table with Sample Quantity equals SampleQuantityPerContainer for each container required except for the last container. The Sample Quantity in the last container is the fractional Sample Quantity if the Sample Quantity is not an even multiple of the SampleQuantityPerContainer value. 
- System determines if the container requires labels to be printed as specified by the LabelContainerFlag in the retrieved Sample Plan. 
 
- System sets the LabelContainerFlag output parameter.  
 
 
- System sets and returns the following as output for this business component: 
 
- Sample Size (in Sampling Unit Of Measure) 
- Number Of Containers in which the sample will be stored (optional) 
- Container Quantity for each container - except the last when it is ifferent, 
- Container Quantity for the last container - when it is different from the others, 
- Container Serialize Flag (TRUE or FALSE), 
- First Serial Number that was assigned to the Sample Containers 
- Label Containers Flag (TRUE or FALSE).  
 
 

 

 ** Calculate Sample Size Subcomponent ** 
 
 
 
- The following steps are used to calculate SampleQuantity for a given population: 
- System compares the Input uom for Population Quantity and uom retrieved from Sample Plan. If they are different, system converts the Input Population Quantity uom to the Sample Plan uom by invoking the UOMConvert BC.  
 
- If the Sampling Rule type is 'Fixed', system retrieves SampleQuantity and SamplePerQuantity from SAMPLE_RULE_FIXED table and performs one of the following calculation: 
 
- If ConstantSampleFlag = TRUE: 
 
 
- If converted PopulationQuantity >= SampleQuantity Value, then Calculated SampleQuantity = SampleQuantity Value. 
- If converted PopulationQuantity < SampleQuantity Value, then Calculated SampleQuantity = PopulationQuantity.  
 
 
- If ConstantSampleFlag = FALSE: 
 
 
- If converted PopulationQuantity >= SamplePerQuantity, then Calculated SampleQuantity = (PopulationQuantity /SamplePerQuantity) * SampleQuantity Value 
- If converted PopulationQuantity < SamplePerQuantity and PopulationQuantity >= SampleQuantity Value, then SampleQuantity = SampleQuantity Value. 
- If converted PopulationQuantity < SampleQuantity Value, then Calculated SampleQuantity = PopulationQuantity.  
 
 
 
- If the Sampling Rule type is 'Percentage', system retrieves SamplingPercentage from SAMPLE_PLAN table. The minimum percentage is zero and the maximum percentage is 100. 
 
- System performs the following formula: 
 
 
- Calculated SampleQuantity = (SamplingPercentage * PopulationQuantity)/100 where SamplingPercentage contains the percentage of the population to be sampled.  
 
 
 
- If the Sampling Rule is 'Aliquot': 
 
 
- System retrieves LotParts from SAMPLE_RULE_ALIQUOT table and AliquotsToSample from SAMPLE_RULE.  
 
- System performs the following formula: 
 
 
- Calculated SampleQuantity = (PopulationQuantity/LotParts) * AliquotsToSample where AliquotsToSample is the number of Samples to take with each sample (aliquot) having the Sample Quantity.  
 
 
 
 

 

 ** Calculate Sample Size Examples ** 
 

 **  ** 
 

 
 
-  

1. Assume the populationQuantity input value (for example, a production quantity) of 300. If the sampling rule is "fixed," the sample quantity is 30, the constant sample indicator is TRUE, the sample quantity per container is 0, the container serialization flag is FALSE and the container labeling flag is FALSE, then the Sample Business Component returns the following function outputs:
  
 
- SampleQuantity = 30 
- NumberOfSampleContainers = null 
- QuantityPerContainer = null 
- LastContainerQuantity = null 
- SerializeContainerFlag = FALSE 
- FirstContainerSerialNumber = null 
- LabelContainerFlag = FALSE  
 
-  

2. Using the same assumptions as Example 1 except that the constant sample indicator is FALSE and the sample per quantity is 100, then the Sample Business Component returns the following function outputs:
  
 
- SampleQuantity = 90 
 
- Calculated SampleQuantity = (PopulationQuantity/ SamplePerQuantity) * SampleQuantity 
- 90 = (300/100)) * 30  
  

All other outputs are the same as Example 1
  
 
-  

Using the same assumptions as Example 1 except that the sampling rule is "aliquot," the lot parts is 3 and aliquots to sample is 1, then the Sample Business Component returns the following function outputs:
  
 
- SampleQuantity = 100 
 
- Calculated SampleQuantity = (PopulationQuantity/LotParts) * AliquotsToSample 
- 100 = (300/3) * 1  
 
- All other outputs are the same as Example 1  
 
-  

Using the same assumptions as Example 1 except that the sampling rule is not "aliquot," "fixed" or "probability" and the sampling percentage is 10, then the Sample Business Component returns the following function outputs:
  
 
- SampleQuantity = 30 
 
- Calculated SampleQuantity = SamplingPercentage * PopulationQuantity/100 
- 30 = (10 * 300)/100  
 
- All other outputs are the same as Example 1  
 
-  

Using the same assumptions as Example 1 except that the sample quantity per container is 2, the container serialization flag is TRUE, the last-reserved serial number of 10354783 and the container labeling flag is TRUE, then the Sample Business Component returns the following function outputs:
  
 
- SampleQuantity = 30 
- NumberOfSampleContainers = 15 
- QuantityPerContainer = 2 
- LastContainerQuantity = 0 
- SerializeContainerFlag = TRUE 
- FirstContainerSerialNumber = 10354769 
- LabelContainerFlag = TRUE

## Pre-Conditions

- The Population Quantity has been determined and is required as an input to this function. 
- Sample Plan (and Sample Plan Revision) must be linked either at the Wip Operation Step, Wip Operation or Wip Order Level.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Facility | Input facility |
|  | Disposition | System Generated.(SEQUENCE.name='DISPOSITION') |
|  | Disposition Type | 1 - 'Disposition Created by Sample Plan' |
|  | Order Number | Input WipOrderNo (Required) |
|  | Operation Sequence Number | Input oprSequenceNo (Required) |
|  | Step Sequence Number | Input stepSequenceNo |
|  | Product ID | Product ID from WIP_ORDER for WipOrderNo |
|  | Sample Plan ID | Retrieved. |
|  | Specification ID | Retrieved. |
|  | Current Disposition Sequence No | Input dispositionSequenceNo |
|  | Lot No | Input LotNo |
|  | Serial No | Input SerialNo |
|  | Status | 1 - 'Not Started' |
| DISPOSITION_LINE | Facility | Input facility |
|  | Disposition | Same DISPOSITION.Disposition |
|  | Disposition Line Sequence Number | Input dispositionSequenceNo |
|  | Operation Sequence Number | Input oprSequenceNo (Required) |
|  | Step Sequence Number | Input stepSequenceNo |
|  | Sample Plan ID | Retrieved. |
|  | Specification ID | Retrieved. |
|  | Current Disposition Sequence Number | Input dispositionSequenceNo |
|  | Status | 1 - 'Not Started' |
| DISPOSITION_SAMPLE | Facility | Input facility |
|  | Disposition | Same DISPOSITION.Disposition |
|  | Disposition Line Sequence Number | Input dispositionSequenceNo |
|  | Sample Sequence Number | Incremental sequence number beginning at 1. |
|  | Sample Quantity | Calculated. |
|  | Sample Quantity UOM | Input uom converted to uom defined for Sample Plan |
|  | Number of Containers | Calculated. |
|  | Serial Container Flag | Retrieved from SAMPLE_PLAN. |
|  | Label Container Flag | Retrieved from SAMPLE_PLAN. |
|  | Status | 1 - 'Not Started' |
| DISPOSITION_CONTAINER | Facility | Input facility |
|  | Disposition | Same DISPOSITION.Disposition |
|  | Line Sequence Number | Input dispositionSequenceNo |
|  | Sample Sequence Number | DISPOSITION_SAMPLE.SampleSequenceNo |
|  | Container Sequence Number | Incremental sequence number beginning at 1. |
|  | Container | Blank when non-serialized containers otherwise the serial container number System Generated. (SEQUENCE.name=' DISPOSITION_SERIAL') |
|  | Sample Quantity | Calculated |
|  | Sample Quantity UOM | Input uom converted to uom defined for Sample Plan |
|  | Status | 1 - 'Not Started' |
| CONTAINER | Container | System Generated. (SEQUENCE.name=' DISPOSITION_SERIAL') |
|  | Facility | Input facility |
|  | Container Status | 5 - 'Disposition' |
|  | TEXTID | TEXT.ID |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | TEXTID | TEXT.ID |
|  | MEDIUM | 'Disposition Container' |
