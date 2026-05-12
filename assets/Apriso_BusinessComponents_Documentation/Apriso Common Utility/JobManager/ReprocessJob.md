# ReprocessJob

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.JobExecutor.JobManager`
**Assembly:** `FlexNet.BusinessFacade.JobExecutor.dll`
**Status:** Active

## Description

This method restarts a job with the given id.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | JobId | Integer | Yes | Id of the job which should be restarted. |

## Validations

- System validates if JobId is non-negative. 
- System validates if JobId is an id of an existing job.

## System Processing

- System passes the JobId into the Job Queue History to get a job by primary key.
 The copy of that job is created as a new job. 
- System runs newly created job.

## Pre-Conditions

The user of ReprocessJob is responsible for checking if the job id exists.
