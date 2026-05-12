# LockEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.EntitiesLocker`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This Business Component will either insert lock into the ENTITY_LOCK table or update existing lock if it exists.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LockingApplicationName | ListofChar | No | The name of locking application. |
| Input | LockExpirationDate | ListofDateTime | No | The date of the lock expiration. |
| Input | LockingEmployeeId | ListofInteger | No | The ID of an employee for whom the lock is added. |
| Input | ReasonCode | ListofChar | No | The reason code from the REASON_CODE table. |
| Input | ExclusiveLock | ListofBool | No | If set to True, the entity can be locked only by one application. If set to False (default), the entity can be locked by more than one appliction. |
| Input | ContinueOnError | Boolean | No | Allows BC not to fail if an error exists. Instead it returns status and statusmessage. |
| Input | EntityKey | ListofChar | Yes | The entity key. |
| Input | EntityType | ListofChar | Yes | The entity type. |
| Output | Status | ListofInteger | Yes | Shows the status of a completed operation. |
| Output | StatusMessage | ListofChar | Yes | Shows an error message if ContinueOnError is set to True. |
| Output | ID | ListofInteger | Yes | The list of inserted/updated locks. |

## Validations

- Length of all lists should be equal. 
- EntityKey and EntityType could not be empty

## System Processing

-  This BC will first check if a record with the given EntityType, EntityKey and not expired LockExpirationDate exists.  
-  If it does not exist, the BC will insert a new record with given parameters.  
-  If the record exists the BC will check the value of ExclusiveLock parameter.  
 
-  If ExclusiveLock parameter is True and the existing record matches input parameters (EntityType, EntityKey, LockingEmployeeId, LockingApplicationName, ExclusiveLock) then the BC updates LockExpirationDate and ReasonCode parameters. 
- If ExclusiveLock parameter is set to True and the existing record does not match input parameters then the BC will fail.  
 
- If ExclusiveLock is False but a record with ExclusiveLock = True exists in the table, the BC will fail. 
- If ContinueOnError parameter is set to True it means that instead of failing the BC will return success but it will populate Status and StatusMessage parameters with an error ID and an error message. 
- Status, StatusMessage could be equal 
 
- 0 - Added successfully 
- 1 - Updated successfully 
- -10 -The record with ExclusiveLock parameter already exists

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ENTITY_LOCK |  |  |
