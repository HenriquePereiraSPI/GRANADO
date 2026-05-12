# ReleaseEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.EntitiesLocker`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This Business Component will remove the lock from the ENTITY_LOCK table if possible.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EntityKey | ListofChar | No | The entity key. |
| Input | EntityType | ListofChar | No | The entity type. |
| Input | ID | ListofInteger | No | The ID of the lock. |
| Input | LockingApplicationName | ListofChar | No | The name of locking application. |
| Input | LockExpirationDate | ListofDateTime | No | The date of the lock expiration. |
| Input | LockingEmployeeId | ListofInteger | No | The ID of an employee for whom the lock is added. |
| Input | ReasonCode | ListofChar | No | The reason code from the REASON_CODE table. |
| Input | ExclusiveLock | ListofBool | No | If set to True, the entity can be locked only by one application. If set to False (default), the entity can be locked by more than one appliction. |
| Input | AllowRemoveMultipleLocks | Boolean | No | Allows the BC to remove multiple locks. |
| Input | ContinueOnError | Boolean | No | Allows the BC not to fail if an error exists. Instead it returns status and statusmessage. |
| Output | Count | Integer | Yes | The amount of deleted records. |
| Output | Status | ListofInteger | Yes | Shows the status of a completed operation if ContinueOnError is set to True. |
| Output | StatusMessage | ListofChar | Yes | Shows an error message if ContinueOnError is set to True. |

## Validations

- Length of all lists should be equal.

## System Processing

- If ID is provided the BC will remove rows or will fail if rows do not exist. 
- Otherwise: 
 
- If AllowRemoveMultipleLocks is set to True the BC will remove records matching provided inputs. 
- If AllowRemoveMultipleLocks is False the BC will additionally query by LockingApplicationName and LockingEmployeeId. If LockingApplicationName is not provided, its value will be replaced by an empty value. If LockingEmployeeId is not provided, its value will be replaced by the current employee's ID. If query returns more than one record the BC will fail. 
- If ContinueOnError parameter is set to True it means that instead of failing the BC will return success but it will populate Status and StatusMessage parameters with an error ID and an error message. 
- 0 - Lock released successfully 
- -10 - The record with the given ID does not exist 
- -20 - Multiple rows removing is not allowed

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ENTITY_LOCK |  |  |
