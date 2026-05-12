# Annotation

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Annotation

## Description

This Business Component method is used to create an annotation in the transaction history for a given weigh group and other parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | The transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of the weigh group header record. |
| Input | WeighLineID | Integer | No | The weigh line ID. |
| Input | Container | Char | No | The Container number. |
| Input | EmployeeNo | Char | No | The employee number. |
| Input | Annotation | Char | No | The text of the annotation. |

## Validations

- The system validates if the weigh header exists. 
- The system validates if the weigh line exists.

## System Processing

The system writes an XML with an annotation to the transaction history for a given weigh group, line, Container, and employee. When the transaction name is not specified, the default class and method name of the BC is used.

## History Recording in Production

The TRANSACTION_HISTORY_WEIGH_ANT table is populated when the XML generation for the BC is enabled and the proper XML routing is set.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
| WEIGH_LINE | ID | WeighLineID |
| TRANSACTION_HISTORY_WEIGH_ANT | (all columns) | Populated when the XML generation and routing is configured. |
