# CheckJobStatus

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.JobExecutor.JobManager`
**Assembly:** `FlexNet.BusinessFacade.JobExecutor.dll`
**Status:** Active

## Description

This Business Component method is used to return the status of a job with the given ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | JobId | Integer | Yes | The ID of the job that is returned by the method. |
| Output | Status | Short | Yes | The status of the job that is returned by the method. |

## Validations

- The system validates that JobId is non-negative.  
- The system validates that JobId is the ID of an existing job.

## System Processing

- The system passes the JobId, job queue history, and job queue to get thejob by its primary key. 
 
- If JobId exists in the job queue, the system gets the Status property of this job and returns it as status. 
- If JobId exists in job queue history, the system returns the Finished status.

## Pre-Conditions

The user of CheckJobStatus is responsible for checking if the job ID exists.
