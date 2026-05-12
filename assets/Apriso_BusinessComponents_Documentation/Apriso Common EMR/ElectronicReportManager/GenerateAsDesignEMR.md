# GenerateAsDesignEMR

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.ElectronicReportManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Deprecated
**Keywords:** GenerateAsDesignEMR, Generate, Design, EMR

## Description

This Business Component method generates an EMR format report by the inputted Process/Process Revision.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Process | Char | Yes | Process name. |
| Input | ProcessRevision | Char | No | Process revision. |
| Input | EmrHeaderNo | Char | Yes | Number of the EMR Header to be generated. |
| Output | EmrHeaderID | Integer | No | Generated EMR Header ID. |

## Validations

- System validates if Process or Process with revision exist in the system. 
- System validates if EMR Header exists in the system.

## System Processing

- System creates an EMR Header by the pre-defined EMR Header definition "ADEMR" with the Process name as key1, Process Revision as key2.  
- System creates EMR Records for each Process, Process Required Resources, Process Specification.  
- System creates EMR Record for each Process Operation and all the Operation Information, Required Roles and skills, Required Resources and Characteristics under it.  
- System creates EMR Record for each Step Information, Work Instruction, Required Role and skills, Required Resources, Documents, Characteristics and EMR records under Process operation.  
- System returns EmrHeaderID.
