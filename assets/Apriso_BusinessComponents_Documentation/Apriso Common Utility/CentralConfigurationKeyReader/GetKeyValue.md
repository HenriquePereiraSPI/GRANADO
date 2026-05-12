# GetKeyValue

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.CentralConfigurationKeyReader`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active
**Keywords:** CentralConfiguration, Section, Key, Value

## Description

The purpose of this business component is to get a key value from a section in the Central Configuration.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SectionName | Char | Yes | Target section in CentralConfiguration.xml |
| Input | KeyName | Char | Yes | Key name |
| Output | KeyValue | Char | No | Value of key |

## Validations

- Validate if SectionName and/or KeyName is empty. If empty, return error "SectionKeyOrNameCannotBeEmpty." 
- Validate if SectionName and/or KeyName exists in CentralConfiguration.xml. If does not exist, return error "ConfigurationKeyNotFound."

## System Processing

- Get value of key in corresponding section of CentralConfiguration.xml.

## Pre-Conditions

SectionName and KeyName must not be empty and must exist in CentralConfiguration.xml.
