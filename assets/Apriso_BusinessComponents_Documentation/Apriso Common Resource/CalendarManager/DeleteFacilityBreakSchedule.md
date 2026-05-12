# DeleteFacilityBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes Facility Schedule Breaks.
 

There are 3 ways to delete breaks. Users can specify:
 
 
- Facility Break Schedule ID, 
- Facility Work Schedule ID, 
- Facility, Pay Day. 
 

If Facility Break Schedule ID is not equal 0, the Business Component will try to delete only the specified Break record. An error message will be returned if the Break record cannot be found. If Facility Break Schedule ID is equal to 0 and Facility Work Schedule ID is not equal to 0, the Business Component will try to delete all breaks for the specified Work Schedule record. An error will be returned if the Work Schedule record does not exist. There will not be any error messages if the Work Schedule does not have any breaks. If Facility Break Schedule ID and Facility Work Schedule ID are both 0, Facility and Pay Day must be provided. The Business Component will try to delete any Break records that might exist for any Work Schedule for the specified Facility and Pay Day. There will not be any error messages returned if there are no Work Schedule records or Break records. The BreakType will be used only when Facility Work Schedule ID or Facility and Pay Day has been provided. BreakType can be used to delete only a specific type of Break or all (by passing zero).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FacilityBreakScheduleID | Integer | No | Identifies the Facility Break Schedule record to be deleted. |
| Input | FacilityWorkScheduleID | Integer | No | It can be used to delete all Breaks for a given Facility Work Schedule. |
| Input | Facility | Char | No | It can be used to delete all Breaks for a given Facility and Pay Day. |
| Input | PayDay | DateTime | No | It can be used to delete all Breaks for a given Facility and Pay Day. |
| Input | BreakType | Integer | No | The Break type to be deleted. If 0(zero) is inputted, it will delete all Breaks. It is used only when either FacilityWorkScheduleID or Facility and PayDay has been provided. |

## System Processing

- If FacilityBreakScheduleID != 0, 
 
 
- Validates Facility Break Schedule,  
- Deletes Facility Break Schedule, 
 
 
- If FacilityBreakScheduleID == 0 and FacilityWorkScheduleID != 0,  
 
 
- Validates Facility Work Schedule,  
- Retrieves Breaks, 
- If BreaktType == 0,  
 
- Deletes all Breaks, 
 
- If BreakType != 0,  
 
- Deletes Break for the inputted type, 
 
 
 
- If FacilityBreakScheduleID == 0 and FacilityWorkScheduleID == 0,  
 
- For each Facility Work Schedule in the specified (facility, payday),  
 
 
- For each break in the Facility Work Schedule,  
 
- If BreakType == 0,  
 
- Deletes all Break, 
 
- If BreakType != 0,  
 
- Deletes Break for inputted type.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_BREAK_SCHEDULE | ID | Record is deleted. |
