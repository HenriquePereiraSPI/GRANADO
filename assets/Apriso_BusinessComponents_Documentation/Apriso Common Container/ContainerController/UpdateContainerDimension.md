# UpdateContainerDimension

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create or update the dimensions of a container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container the dimension is updated. |
| Input | DimensionCode | Char | Yes | Dimension Uom code. |
| Input | MinValue | Decimal | No | MinValue of dimension. The value set to 0 if no input is provided. |
| Input | MaxValue | Decimal | No | MaxValue of dimension. The value set to 0 if no input is provided |
| Input | AverageValue | Decimal | No | AvgValue of dimension. The value set to 0 if no input is provided. |
| Input | UomCode | Char | Yes | Uom code of the dimension values. |

## Validations

- System validates that the Container exists. 
- System validates that the UomCode exists. 
- System validates that the DimensionCode exists.

## System Processing

System creates or updates Container_Dimension for the given container and dimension code with the input dimension values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER_DIMENSION | MaxValue | Input MaxValue |
|  | MinValue | Input MinValue |
|  | AverageValue | Input AverageValue |
|  | Container | Input (if new record) |
|  | DimensionCode | Input (if new record) |
