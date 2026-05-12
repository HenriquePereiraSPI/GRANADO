# CalculateChart_v2

**Category:** Apriso/Quality/SPC
**Class:** `FlexNet.BusinessFacade.SPC.ChartDataController`
**Assembly:** `FlexNet.BusinessFacade.SPC.dll`
**Status:** Active

## Description

Based on the inputted chart ID, this Business Component method will calculate the required SPC chart data and notifies if any alert rule is violated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ChartID | Integer | Yes | The chart to calculate. |
| Input | Query | Char | No | The override calculation query. |
| Input | Key1 | Char | No | A custom value used for querying. |
| Input | Key2 | Char | No | A custom value used for querying. |
| Input | Key3 | Char | No | A custom value used for querying. |
| Input | Key4 | Char | No | A custom value used for querying. |
| Input | Key5 | Char | No | A custom value used for querying. |
| Input | StoreResults | Boolean | No | Set to True if the results to be stored in the database. |
| Input | UseInputtedUpperSpecificationLimit | Boolean | No | Set to True if using the upper specification limit from the user Input. |
| Input | UpperSpecificationLimit | Decimal | No | The upper specification limit. |
| Input | UseInputtedLowerSpecificationLimit | Boolean | No | Set to True if using the lower specification limit from the user Input. |
| Input | LowerSpecification | Decimal | No | The lower specification limit. |
| Input | UseInputtedTargetSpecificationLimit | Boolean | No | Set to True if using the target specification limit from the user Input. |
| Input | TargetSpecificationLimit | Decimal | No | The target specification limit. |
| Input | SpecificationLimitCalculationType | Short | No | The type to calculate the specification limit: 0 - From M&M configuration, 1 - Manually defined, 2 - From Characteristic, 3 - ± 3 Sigma, 4 - ± 2 Sigma, 5 - ± 1 Sigma. |
| Output | SPCChartCalculationID | Integer | No | The unique ID for the SPC chart calculation. |
| Output | AlarmsViolated | Boolean | No | Indicates if any alarms have been violated. |
| Output | SPCChartID | Integer | No | The chart identifier. |
| Output | Capability | Decimal | No | The value of the Process capability. |
| Output | CapabilityIndex | Decimal | No | The value of the capability index (Cpk). |
| Output | Performance | Decimal | No | The value of the Process performance. |
| Output | PerformanceIndex | Decimal | No | The value of the Process performance index. |
| Output | Positive1Sigma | Decimal | No | 1 Sigma/standard deviation. |
| Output | Positive2Sigma | Decimal | No | 2 Sigma/standard deviations. |
| Output | Positive3Sigma | Decimal | No | 3 Sigma/standard deviations. |
| Output | Negative1Sigma | Decimal | No | -1 Sigma/standard deviation. |
| Output | Negative2Sigma | Decimal | No | -2 Sigma/standard deviations. |
| Output | Negative3Sigma | Decimal | No | -3 Sigma/standard deviations. |
| Output | Normality | Decimal | No | The normality value. |
| Output | Maximum | Decimal | No | The maxima value of the data points. |
| Output | Minimum | Decimal | No | The minimum value of the data points. |
| Output | _UpperSpecificationLimit | Decimal | No | The upper specification limit. |
| Output | _LowerSpecificationLimit | Decimal | No | The lower specification limit. |
| Output | _TargetSpecificationLimit | Decimal | No | The target specification limit. |
| Output | SubgroupSize | ListofInteger | No | The size of the subgroup. |
| Output | Average | ListofDecimal | No | The arithmetic mean of the data points. |
| Output | Range | ListofDecimal | No | The range of data point values. |
| Output | Sigma | ListofDecimal | No | One standard deviation. |
| Output | Median | ListofDecimal | No | The median value of all the data points on the chart. |
| Output | Characteristic | ListOfChar | No | The Characteristic name and its Attributes. |
| Output | XAxisValue | ListOfChar | No | The value of the X-Axis. |
| Output | PlottedValue1 | ListofDecimal | No | The value to be plotted on the top chart. |
| Output | LCLValue1 | ListofDecimal | No | The lower control limit on the top chart. |
| Output | UCLValue1 | ListofDecimal | No | The upper control limit on the top chart. |
| Output | PlottedValue2 | ListofDecimal | No | The value to be plotted on the bottom chart. |
| Output | LCLValue2 | ListofDecimal | No | The lower control limit on the bottom chart. |
| Output | UCLValue2 | ListofDecimal | No | The upper control limit on the bottom chart. |
| Output | _2Sigma | ListofDecimal | No | 2 Sigma/standard deviations. |
| Output | _3Sigma | ListofDecimal | No | 3 Sigma/standard deviations. |
| Output | ChartDataStatus | ListofInteger | No | The status of the SPC chart point. |
| Output | NoteID | ListofInteger | No | Any associated note for the SPC chart point. |
| Output | CustomPoint1 | ListofDecimal | No | A custom point field. |
| Output | CustomPoint2 | ListofDecimal | No | A custom point field. |
| Output | CustomPoint3 | ListofDecimal | No | A custom point field. |
| Output | CustomPoint4 | ListofDecimal | No | A custom point field. |
| Output | CustomPoint5 | ListofDecimal | No | A custom point field. |
| Output | ControlValue1 | ListofDecimal | No | The target value of the upper chart (or the centerline value). |
| Output | ControlValue2 | ListofDecimal | No | The target value of the upper chart (or the centerline value). |

## Validations

- The system checks that the chart ID is specified.  
- The system checks that the chart ID is valid  
- The system checks that the chart has a chart type.  
- The system checks the specification limit calculation type. 
- The system checks that the calculate query is found. 
- The system checks that the number of columns returned by the query is valid.  
- The system checks that the column format returned by the query is valid.

## System Processing

- The system validates the BC Inputs. 
 
- The Inputs may vary depending on the chart type. 
-  The system validates ChartID. If it has not been specified, the system returns an error. If it has been specified, the system validates whether it is a valid ChartID in the SPC_CHART table. If it is not valid, the system returns an error. If it is valid, the system validates whether it has a SPCChartType associated with it. If it doesn’t have an SPCChartType associated with it, the system returns an error. If it has an SPCChartType associated with it, the system uses the ChartID for calculation.  
-  The system validates SpecificationLimitCalculationType. If it has not been specified, the system returns an error. 
 
- If the value is Manually Defined (1), the following actions are performed: 
 
- The system validates UseInputtedUpperSpecificationLimit. If it has been set to True, the system uses UpperSpecificationLimit for calculation. If it has not been set to True, the system returns an error. 
- The system validates UseInputtedLowerSpecificationLimit. If it has been set to True, the system uses LowerSpecificationLimit for calculation. If it has not been set to True, the system returns an error. 
- The system validates UseInputtedTargetSpecificationLimit. If it has been set to True, the system uses TargetSpecificationLimit for calculation. If it has not been set to True, the system returns an error. 
 
- If the value is (2), the system validates the value of CharacteristicRevisionID. If it has the value, then the system uses the UpperSpecificationLimit, LowerSpecificationLimit, and TargetSpecificationLimit fields from the CHARACTERISTIC_REVISION table. If it does not have the value, the system checks the value of the Characteristic. If it has the value, then the system uses the UpperSpecificationLimit, LowerSpecificationLimit, and TargetSpecificationLimit fields from the CHARACTERISTIC table. If it does not have the value, the system returns an error. 
- If the value is (3) ~ (5), the system calculates either by ±3 Sigma (3), ±2 Sigma (4), or ±1 Sigma (5), depending on the value of SpecificationLimitCalculationType. 
 
- The system validates Query. If it has been specified, the system uses Query for the calculation. If it has not been specified, the system uses the CalculateQuery field in the SPC_CHART table. If there is no CalculateQuery in the SPC_CHART table, the system uses the CalculateQuery field in the SPC_CHART_TYPE table. If there is no CalculateQuery in the SPC_CHART_TYPE table, the system returns an error.  
 
- The system substitutes the tags for real values. 
 
- The charts used are PChart, NPChart, CChart, UChart, RunChart, XBarRChart, XBarSChart, MedianChart, IndividualChart, and EWMAChart. 
- The columns in the query need to be different depending on the different charts being calculated: 

           

 **Chart Type** 
   

 **Column1** 
   

 **Column2** 
   

 **Column3** 
     

PChart
   

Sample no. (string, integer)
   

Non-conforming samples (integer)
   

Sample size (integer)
     

NPChart
   

Sample no. (string, integer)
   

Sample size (integer)
   

Non-conforming samples (integer)
     

CChart
   

Part no. (string, integer)
   

Non-conformities (integer)
   

     

UChart
   

Part no. (string, integer)
   

Sample size (integer)
   

Non-conformities (integer)
     

RunChart
   

No. (string, integer)
   

Characteristic value (decimal)
   

     

XBarRChart
   

Characteristic value (decimal)
   

No. (string, integer)
   

     

XBarSChart
   

Characteristic value (decimal)
   

No. (string, integer)
   

     

MedianChart
   

Characteristic value (decimal)
   

No. (string, integer)
   

     

IndividualChart
   

Characteristic value (decimal)
   

No. (string, integer)
   

     

EWMAChart
   

No. (string, integer)
   

Characteristic value (decimal)
   

     
  
 
 
 
- The system then opens the query for calculation. 
 
- The system validates the number of columns and the column format of the relevant column, and then it performs other specific validations. 
- If the query is not valid, the system returns an error. 
 
- The system calculates the information retrieved: SubgroupSize, SPCChartID, XAxisValue, ControlValue1, ControlValue2, PlottedValue1, PlottedValue2, LCLValue1, LCLValue2, UCLValue1, UCLValue2, Average, Range, Sigma, Median, FirstMeasuredOn, and ChartDataStatus. These calculations are different depending on the different chart used: 

         

 **PChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from SPC_CHART table.
     

 **XAxisValue** 
   

Sample
     

 **ControlValue1** 
   

The sum of non-conforming/sum of samples.
     

 **PlottedValue1** 
   

The non-conforming samples/sample size.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = ControlValue1 - 3 * (√ (ControlValue1 * (1 - ControlValue1)/sample size)).
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = ControlValue1 + 3 * (√ (ControlValue1 * (1 - ControlValue1)/sample size)).
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **NPChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

Sample no.
     

 **ControlValue1** 
   

The sum of non-conforming/total number of subgroups.
     

 **PlottedValue1** 
   

The non-conforming samples.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = ControlValue1 - 3 * (√ (1 - ControlValue1/sample size)).
     

 **UCLValue1** 
   

If both UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = ControlValue1 + 3 * (√ (1 - ControlValue1/sample size)).
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **CChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

Part no.
     

 **ControlValue1** 
   

The sum of non-conformities/number of parts.
     

 **PlottedValue1** 
   

Non-conformities.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = ControlValue1 - 3 * (√ ControlValue1).
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = ControlValue1 + 3 * (√ ControlValue1).
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **UChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

Part no.
     

 **ControlValue1** 
   

The sum of non-conformities/number of parts.
     

 **PlottedValue1** 
   

The sum of non-conformities/sample size.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = ControlValue1 - 3 * (√ (ControlValue1/sample size)).
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = ControlValue1 + 3 * (√ (ControlValue1/sample size)).
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **RunChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **PlottedValue1** 
   

The Characteristic value.
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **XBarRChart** 
     

 **SubgroupSize** 
   

If the UseDynamicSubGroup field from the SPC_CHART table is equal to False, SubgroupSize = SubGroupSize of the chart from the SPC_CHART table. Otherwise, SubgroupSize is dynamically calculated (mentioned below).
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **ControlValue1** 
   

XBar = sum of subgroup averages/total number of subgroups.
     

 **ControlValue2** 
   

RBar = sum of subgroup ranges/total number of subgroups.
     

 **PlottedValue1** 
   

Subgroup average = totals of the subgroup/subgroup size.
     

 **PlottedValue2** 
   

Subgroup range = maximum of the subgroup - minimum of the subgroup.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = XBar - (Ratio3 * RBar) where Ratio3 is a value dependent on the subgroup size.
     

 **LCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue2 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue2 = Ratio2 * RBar where Ratio2 is a value dependent on the subgroup size.
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = XBar + (Ratio3 * RBar) where Ratio3 is a value dependent on the subgroup size.
     

 **UCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue2 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue2 = Ratio1 * RBar where Ratio1 is a value dependent on the subgroup size.
     

 **Average** 
   

PlottedValue1
     

 **Range** 
   

PlottedValue2
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active). If the subgroup is partial, ChartDataStatus = 4 (IncompleteSubgroup).
     
 

 

         

 **XBarSChart** 
     

 **SubgroupSize** 
   

If the UseDynamicSubGroup field from the SPC_CHART table is equal to False, SubgroupSize = SubGroupSize of the chart from the SPC_CHART table. Otherwise, SubgroupSize is dynamically calculated (mentioned below).
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **ControlValue1** 
   

XBar = sum of subgroup averages/total number of subgroups.
     

 **ControlValue2** 
   

SBar = sum of subgroup standard deviations/total number of subgroups.
     

 **PlottedValue1** 
   

Subgroup average = totals of the subgroup/subgroup size.
     

 **PlottedValue2** 
   

Subgroup standard deviation = √ (∑ (xi - subgroup average)2/subgroup size) where xi = ith Characteristic value,
 

i = 0 to subgroup size - 1.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = XBar - (Ratio1 * SBar) where Ratio1 is a value dependent on the subgroup size.
     

 **LCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, the LCLValue2 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue2 = Ratio2 * SBar where Ratio2 is a value dependent on the subgroup size.
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = XBar + (Ratio1 * SBar) where Ratio1 is a value dependent on the subgroup size.
     

 **UCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue2 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue2 = Ratio1 * SBar where Ratio1 is a value dependent on the subgroup size.
     

 **Average** 
   

PlottedValue1
     

 **Range** 
   

PlottedValue2
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active). If the subgroup is partial, ChartDataStatus = 4 (IncompleteSubgroup).
     
 

 

         

 **MedianChart** 
     

 **SubgroupSize** 
   

If the UseDynamicSubGroup field from the SPC_CHART table is equal to False, SubgroupSize = SubGroupSize of the chart from the SPC_CHART table. Otherwise, SubgroupSize is dynamically calculated (mentioned below).
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **ControlValue1** 
   

XBar = median of subgroup medians = the midpoint value of the subgroup medians sorted in the ascending order. If there are two middle values, the mean of them is taken.
     

 **ControlValue2** 
   

RBar = median of subgroup ranges = the midpoint value of the subgroup ranges sorted in the ascending order. If there are two middle values, the mean of them is taken.
     

 **PlottedValue1** 
   

Subgroup median = the midpoint value of the subgroup Characteristic values sorted in the ascending order. If there are two middle values, the mean of them is taken.
     

 **PlottedValue2** 
   

Subgroup range = maximum of the subgroup - minimum of the subgroup.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = XBar - (Ratio1 * XBar) where Ratio1 is a value dependent on the subgroup size.
     

 **LCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue2 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue2 = Ratio3 * RBar where Ratio3 is a value dependent on the subgroup size.
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = XBar + (Ratio1 * XBar) where Ratio1 is a value dependent on the subgroup size.
     

 **UCLValue2** 
   

If both UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue2 = the UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue2 = Ratio2 * RBar where Ratio2 is a value dependent on the subgroup size.
     

 **Average** 
   

PlottedValue1
     

 **Range** 
   

PlottedValue2
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active). If the sub group is partial, ChartDataStatus = 4 (IncompleteSubgroup).
     
 

 

         

 **IndividualChart** 
     

 **SubgroupSize** 
   

1
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **ControlValue1** 
   

The average of measurements = sum of measurements/total number of measurements.
     

 **ControlValue2** 
   

The average of moving ranges = sum of moving ranges/total number of moving ranges.
     

 **PlottedValue1** 
   

The Characteristic (measurement) value.
     

 **PlottedValue2** 
   

Moving range = absolute of the difference between a measurement value and its previous one.
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = ControlValue1 - (Ratio1 * ControlValue2)
 

where Ratio1 is a value dependent on the subgroup size.
     

 **LCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue2 = LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue2 = Ratio3 * ControlValue2 where Ratio3 is a value dependent on subgroup size.
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = ControlValue1 + (Ratio1 * ControlValue2)
 

where Ratio1 is a value dependent on the subgroup size.
     

 **UCLValue2** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue2 = UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue2 = Ratio2 * ControlValue2 where Ratio2 is a value dependent on the subgroup size.
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active)
     
 

 

         

 **EWMAChart** 
     

 **SubgroupSize** 
   

If the UseDynamicSubGroup field from the SPC_CHART table is equal to False, SubgroupSize = SubGroupSize of the chart from the SPC_CHART table. Otherwise, SubgroupSize is dynamically calculated (mentioned below).
     

 **SPCChartID** 
   

The ID of the chart from the SPC_CHART table.
     

 **XAxisValue** 
   

No.
     

 **ControlValue1** 
   

XBar = sum of the subgroup averages/total number of subgroups.
     

 **PlottedValue1** 
   

For the first record, PlottedValue1 = subgroup average = totals of the subgroup/subgroup size. Otherwise, PlottedValue1 = (λ * subgroup average) + ((1 - λ) * previous PlottedValue1) where λ = WeightingFactor value from the SPC_CHART table (0< λ<=1).
     

 **LCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, LCLValue1 = the LowerControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, LCLValue1 = XBar - (ControlLimitFactor * InControlStdDeviation * (√ (λ/((2 - λ) * subgroup size)))) where λ = WeightingFactor value from the SPC_CHART table (0< λ<=1), ControlLimitFactor = ControlLimitFactor value from the SPC_CHART table, InControlStdDeviation = InControlStdDeviation value from the SPC_CHART table.
     

 **UCLValue1** 
   

If both the UpperControlLimit and LowerControlLimit fields from the SPC_CHART_PROPERTIES table are not NULL, UCLValue1 = UpperControlLimit value from the SPC_CHART_PROPERTIES table.
 

Otherwise, UCLValue1 = XBar + (ControlLimitFactor * InControlStdDeviation * (√ (λ/((2 - λ) * subgroup size)))) where λ = WeightingFactor value from the SPC_CHART table (0< λ<=1), ControlLimitFactor = ControlLimitFactor value from the SPC_CHART table, InControlStdDeviation = InControlStdDeviation value from the SPC_CHART table.
     

 **Average** 
   

The subgroup average.
     

 **FirstMeasuredOn** 
   

The current UTC.
     

 **ChartDataStatus** 
   

1 (Active). If the subgroup is partial, ChartDataStatus = 4 (IncompleteSubgroup).
     
  
 
 
- The system performs dynamic subgroup calculation for charts with RequiresSubGroup field in the SPC_CHART_TYPE table equal to True (XBAR_RChart, XBAR_SChart, MedianChart, and EWMAChart) and the UseDynamicSubGroup field in the SPC_CHART table equal to True. The system dynamically calculates SubgroupSize based on the values in the Query column that stores XAxisValue. Here it is assumed that the XAxisValue column values are sorted and are the same for a particular subgroup. Accordingly, a subgroup begins when the XAxisValue column value changes. Dynamic subgrouping is required whenever different logical groups of the values are passed to the calculation engine. 
- If StoreResult = True, the system persists the calculated data into the SPC_CHART_DATA table. 
- The system persists the Query, Key1, Key2, Key3, Key4, Key5, Capability, CapabilityIndex, Performance, PerformanceIndex, StandardDeviation, Positive1Sigma, Positive2Sigma, Positive3Sigma, Negative1Sigma, Negative2Sigma, Negative3Sigma, Average, Normality, Maxima, and Minimum values into the SPC_CHART_CALCULATION table and creates the SPC_CHART_DATA points for the data required. It assigns the calculation ID from the SPC_CHART_CALCULATION table to all the chart points for the calculation. 
- The system then checks if there is a remainder subgroup or incomplete. If so, then this record will be created with a status of Incomplete (4). 
- The system outputs SPCChartCalculationID, SPCChartID, SubgroupSize, Average, Range, Sigma, Median, Characteristic, XAxisValue, PlottedValue1, LCLValue1, UCLValue1, PlottedValue2, LCLValue2, UCLValue2, ChartDataStatus, NoteID, CustomPoint1, CustomPoint2, CustomPoint3, CustomPoint4, CustomPoint5, ControlValue1 and ControlValue2, Capability, CapabilityIndex, Performance, PerformanceIndex, Positive1Sigma, Positive2Sigma, Positive3Sigma, Negative1Sigma, Negative2Sigma, Negative3Sigma, Normality, Maxima, Minimum, _UpperSpecificationLimit, _LowerSpecificationLimit, and _TargetSpecificationLimit. 
- The system performs the calculation against the alert rules on the records created. The system creates alert records in the SPC_CHART_ALERT table if the chart point records comply with the alert rules for the chart specified in the SPC_CHART_ALERT_RULE table. All the conditions in a custom rule or any one of the conditions in a WECO rule have to be complied with in order to create an alert. The system must check if an alert has not already been generated and not acknowledged. The same alert cannot be generated twice. The system outputs AlarmsVoilated=True if any alerts are created. If no alerts are created, the system outputs AlarmsVoilated=False.

## Pre-Conditions

The chart should be defined using the SPC chart administrator.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SPC_CHART_ALERT | All fields | ChartID |
| SPC_CHART_CALCULATION | All fields | ChartID, Query, Key1, Key2, Key3, Key4, Key5 |
| SPC_CHART_DATA | All fields | ChartID |
