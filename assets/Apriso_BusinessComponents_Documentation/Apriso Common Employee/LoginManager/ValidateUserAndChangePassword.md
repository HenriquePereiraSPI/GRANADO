# ValidateUserAndChangePassword

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

The purpose of this Business Component is to allow a user to change his Logon Password.
 

 **Supported features:** 
 
 
- User changes password, 
- System enforces password change for new users, 
- Password History, 
- Minimum Password Age, 
- Maximum Password Age, 
- Minimal Password Length, 
- Password Complexity Rule, 
- Password Can Include User Data. 
 

 **Unsupported features:** 
 
 
- Allow multiple login. 
 

 Triggers 
 
 
- The Portal User communicates to system the desire to change their password by selecting the change password option from the Portal, or 
- When the Portal User attempts to Logon, system determines that the User ID and Password are equal based on new employee business logic. System prompts the Portal User to change their password, or 
- When the Portal User attempts to Logon, system determines that the password has expired based on password expiration business logic. System prompts the Portal User to change their password.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | User | Char | Yes | Employee to change password for. |
| Input | OldPassword | Char | Yes | Old password to check. |
| Input | NewPassword | Char | Yes | New password to change. |
| Input | ConfirmNewPassword | Char | Yes | Confirmation of the new password. |
| Output | IsPasswordChanged | Boolean | No | Returns value indicating whether password was succesfully changed. |

## Validations

- System validates the inputted User and OldPassword are valid. 
- System verifies that the inputted NewPassword is different then the inputted OldPassword 
- System verifies that the inputted ConfirmNewPassword is identical to the inputted NewPassword 
- System validates that the inputted NewPassword has not been previously used within the number of times specified under set PasswordHistory value. 
- System validates that the set MinimalPasswordAge has passed. 
- System validates that the set MaximumPasswordAge has not been exceeded. 
- System validates that the inputted NewPassword has a minimal length that is equal to or greater then the set MinimalPasswordLength value. 
- If the set Password Can Include User Data flag is Enabled, then system validates that the NewPassword does not match data elements associated to this employee. 
- System validates that the NewPassword meets the set Password Complexity Rule.

## System Processing

- System proceeds to update the EMPLOYEE table with the New Password. 
- System updates the history of previous passwords. 
- System logs the User in.

## Pre-Conditions

- Following system settings must be set before BC is used: 
- Allow multiple login = TRUE, FALSE 
 Determines if system allows users to be logged in on more then one session at a time. 
- Account Logout Threshold 
- Account Logout Reset Duration 
- Account Logout Duration 
- Password History = (n) where n is described below: 
 Determines the number of unique new passwords that have to be associated with a user account before an old password can be reused. The value must be between 0 and 24 passwords. 
- Minimum Password Age = (n) where n is described below: 
 Determines the period of time (in days) that a password must be used before the user can change it. You can set values between 1 and 999 days, or you can allow changes immediately by setting the number of days to 0. 
- Maximum Password Age = (n) where n is described below. 
 Determines the period of time (in days) that a password can be used before system requires the user to change it. You can set passwords to expire after a number of days between 1 and 999, or you can specify that passwords never expire by setting the number of days to 0. 
- Minimal Password Length = (n) characters where n is described below: 
 Determines the least number of characters a user account's password may contain. You can set values between 1 and 14 characters, or you can establish that no password is required by setting the number of characters to 0. 
- Password Complexity Rule = Characters, Numeric, Mixed or Any 
 Determines whether passwords must meet complexity requirements. Contains characters from one of the following four groups:  
 

 

         

 ** *Group* ** 
   

 ** *Examples* ** 
     

 *Characters* 
   

 *A, B, C, Ü, Ç, Ã を,か,ち, 본, 웨, 브, И, Д, Ж ﰟ, ﰣ, ﰼ, NO BLANKS...* 
     

 *Numeric* 
   

 *0, 1, 2, 3, 4, 5, 6, 7, 8, 9* 
     

 *Mixed* 
   

 *Must include both Character and Numeric* 
     

 *Any* 
   

 *Any Character or Numeric* 
     
 

 
 
- Password Can Include User Data = TRUE, FALSE 
 Determines whether passwords must be unique data as compared to the following set of data maintained on the employee details: Name, GivenName, MiddleName, FamilyName, EmployeeNo, LogonName. This setting is not case-sensitive. 
- Password Expiration Notification 
- Default settings in the Central Configuration <FlexNet.SystemServices.Security> are the following: 
 
- AllowMultipleLogin =true 
- AccountLockoutThreshold=0 
- AccountLockoutResetDuration=0 
- AccountLockoutDuration=0 
- PasswordHistory=0 
- MinimumPasswordAge=0 
- MaximumPasswordAge=0 
- MinimumPasswordLength=0 
- PasswordComplexityRule=Any 
- PasswordCanIncludeUserData=true 
- PasswordExpirationNotification=0

## History Recording in Production

The System updates the history of previous passwords in the EMPLOYEE table

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | LoginName | Inputted User |
| EMPLOYEE | Password | Inputted NewPasswordInputted OldPassword |
| EMPLOYEE | LoginExpirationDate | = NOW for password= inputted OldPassword |
