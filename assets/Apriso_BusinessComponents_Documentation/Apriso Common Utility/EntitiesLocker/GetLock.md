# GetLock

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.EntitiesLocker`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This Business Component will return records from the ENTITY_LOCK table matching input parameters or an empty list if nothing matches.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EntityKey | ListofChar | No | The entity key. |
| Input | EntityType | ListofChar | No | The entity type. |
| Input | ExclusiveLock | ListofBoolean | No | Exclusively locking entity. |
| Input | ID | ListofInteger | No | The ID of the lock. |
| Input | LockingApplicationName | ListofChar | No | The name of locking application. |
| Input | LockExpirationDate | ListofDateTime | No | The date of the lock expiration. |
| Input | LockingEmployeeId | ListofInteger | No | The ID of an employee for whom the lock is added. |
| Input | ReasonCode | ListofChar | No | The reason code from the REASON_CODE table. |
| Output | ResultEntityKey | ListofChar | Yes | The entity key. |
| Output | ResultEntityType | ListofChar | Yes | The entity type. |
| Output | ResultLockingApplicationName | ListofChar | Yes | The name of locking application. |
| Output | ResultLockExpirationDate | ListofDateTime | Yes | The date of the lock expiration. |
| Output | ResultLockingEmployeeId | ListofInteger | Yes | The ID of an employee for whom the lock is added. |
| Output | ResultReasonCode | ListofChar | Yes | The reason code from the REASON_CODE table. |
| Output | ResultExclusiveLock | ListofBool | Yes | If set to True, the entity can be locked only by one application. If set to False (default), the entity can be locked by more than one appliction. |
| Output | ResultLastUpdateOn | ListofDateTime | Yes | The date of the last update. |
| Output | ResultLastUpdateBy | ListofChar | Yes | The name of the employee who was the last one to update the BC. |
| Output | ResultCreatedOn | ListofDateTime | Yes | The creation date. |
| Output | ResultCreatedBy | ListofChar | Yes | The name of the employee who created the BC. |

## Validations

- Length of all input lists should be equal.

## System Processing

- This BC will query DB with input parameters and return records which match.  
- If input parameter ID is provided the BC will ignore all other input parameters and query only by ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ENTITY_LOCK |  |  |
