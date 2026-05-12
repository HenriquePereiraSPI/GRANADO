# CheckJobResult

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.JobExecutor.JobManager`
**Assembly:** `FlexNet.BusinessFacade.JobExecutor.dll`
**Status:** Active

## Description

This Business Component method is used to return the result of a job with the given ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | JobId | Integer | Yes | The ID of the job that is returned by the method. |
| Output | Status | Short | No | The result of the job that is returned by the method. |

## Validations

- The system validates that JobId is non-negative.  
- The system validates that JobId is the ID of an existing and finished job.

## System Processing

- The system passes the JobId into the job queue history to get a job by its primary key.  
- The system returns the result property value of the job.

## Pre-Conditions

The user of CheckJobResult is responsible for checking if the job ID exists and if this job has the Finished status.
