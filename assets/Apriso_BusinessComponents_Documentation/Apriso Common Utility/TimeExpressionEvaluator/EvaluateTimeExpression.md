# EvaluateTimeExpression

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeExpressionEvaluator`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This business component is used to evaluate the time from input expression.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Expression | Char | Yes | Time expression to be evaluated |
| Output | LocalTime | DateTime | No | Evaluated local time |
| Output | UTCTime | DateTime | No | Evaluated UTC time |

## Validations

The business component validates that a valid Time expression is input.

## System Processing

Time expression is parsed for time literals and the time is evaluated. 
 

The Time expression consists of Time Literals which can be used to specify the time and to add or subtract days, hours, minute etc from that to get a Time to be used as a parameter for any method that requires DateTime input.
 

The list of available Time Literals listed below. The expression must always start with a Time Value literal such as 'Current Time' and have only one Time Value literal. The expression can only have addition or subtraction operator. E.g. CurrentDay + 4H - 30Mins will evaluate to 3:30AM of that day.
 

         

 **Time Value** 
   

 **Literal** 
     

Current local time
   

CurrentTime
 

*
     

Current UTC Time
   

CurrentUTCTime
 

^
     

Current Minute
   

CurrentMinute
 

CMin
     

Current Hour
   

CurrentHour
 

CH
     

Current Day
   

CurrentDay
 

CD
     

Start of Current Week
   

CurrentWeek
 

CW
     

End of Current Week
   

CurrentDayEnd
     

Start of Current Month
   

CurrentMonth
 

CM
     

 End of Current Month 
   

CurrentMonthEnd
     

Start of Current Year
   

CurrentYear
 

CY
     

End of Current Year
   

CurrentYearEnd
     
 

         

 **Time Increments** 
   

 **Literal** 
     

Second
   

Second
 

S
 

Sec
 

Secs
 

Seconds
     

Minute
   

Minute
 

M
 

Min
 

Mins
 

Minutes
     

Hour
   

Hour
 

H
 

Hrs
 

Hours
     

Day
   

Day
 

D
     

Month
   

Month
 

MM
 

MTH
 

MTHS
 

Months
     

Year
   

Year
 

Y
 

Years
