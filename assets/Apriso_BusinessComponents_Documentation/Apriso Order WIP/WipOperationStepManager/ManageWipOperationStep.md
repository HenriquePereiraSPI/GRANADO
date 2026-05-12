# ManageWipOperationStep

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationStepManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Create Insert WIP Operation Step

## Description

The purpose of this Business Component method is to create or update a record in the WIP_OPERATION_STEP table. This Business Component has a Dynamic Output UnitID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order. |
| Input | WipOrderType | Integer | Yes | WIP Order Type. |
| Input | OprSequenceNo | Char | Yes | Operation Sequence Number. |
| Input | SequenceNo | Integer | Yes | Step Sequence Number. |
| Output | UnitID | Integer | No | Unit ID of the Step record. This is a Dynamic Output. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| StdTotalRunEffort | Decimal | (future use) |
| DurationRemainingSeconds | Integer | The remaining duration of the Step in seconds. |
| StdEffortEarned | Decimal | (future use) |
| StepName | Char | The Step name. (An empty string is treated as a null value.) |
| ProgressStatus | Integer | The Progress Status. (Zero is treated as a null value.) |
| PercentageCompleted | Decimal | Percentage of work already completed. Range from 0 (nothing) to 1 (100 percent). |
| EffectiveDate | DateTime | The effective date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| DiscontinueDate | DateTime | The discontinue date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ScheduledStartDate | DateTime | The scheduled start date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ScheduledCompletionDate | DateTime | The scheduled completion date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ExpectedStartDate | DateTime | The expected start date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ExpectedCompletionDate | DateTime | The expected completion date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ActualStartDate | DateTime | The actual start date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ActualCompletionDate | DateTime | The actual completion date of the Step. (Date equal or before 1/1/1900 is treated as null.) |
| ScheduledDurationSeconds | Integer | The scheduled duration seconds of the Step. |
| ExpectedDurationSeconds | Integer | The expected duration seconds of the Step. |
| ActualDurationSeconds | Integer | The actual duration seconds of the Step. |
| OverrideWI | Boolean | The flag that indicates whether Work Instruction should be overridden. |
| MediumDescription | Char | The medium description of the Step. (An empty string is treated as a null value.) |
| ExtendedDescription | Char | The extended description of the Step. (An empty string is treated as a null value.) |
| Text | Char | The long text description of the Step. (An empty string is treated as a null value.) |

## Validations

- System validates if the WIP Operation exists in the WIP_OPERATION table (for provided WipOrderNo, WipOrderType and OprSequenceNo). 
- System validates if inputted ProgressStatus exists (if provided as Dynamic Input).

## System Processing

- System checks if a WIP_OPERATION_STEP record exists for inputted WipOrderNo, WipOrderType, OprSequenceNo and SequenceNo. 
 
- If it does not exist, a new record is created and populated with inputted values. 
- Otherwise the existing record is updated with the new values.  
 
- If a UNIT record related to the WIP Operation Step does not exist, a new record is created in the UNIT table. If a Dynamic Output UnitID exists, the system returns the UnitID related to the WIP_OPERATION_STEP record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_STEP | (all) | All column names match the names of Inputs. |
| UNIT | ID | Record linked to WIP_OPERATION_STEP.UnitID. |
| TEXT | ID | Record linked to WIP_OPERATION_STEP.TextID. |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | LanguageID | User's current language. |
|  | Medium | MediumDescription |
|  | Extended | ExtendedDescription |
|  | Text | Text |
