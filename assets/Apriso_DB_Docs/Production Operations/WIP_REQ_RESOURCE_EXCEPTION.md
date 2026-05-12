# WIP_REQ_RESOURCE_EXCEPTION

**Database:** Operational

**Description:** This table stores information about exceptions to the requirements defined by the WIP_REQ_RESOURCE table. This table can accommodate the details, such as a resource for which an exception is applicable, reason code and a comment of the exception, and information about the time within which the exception is applicable.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment to the exception. |
| DiscontinueDate | DATETIME | True |  | False |  | The date and time when the exception ends to be applicable. |
| EffectiveDate | DATETIME | True |  | False |  | The date and time when the exception starts to be applicable. |
| ExceptResourceID | INT(10,0) | False |  | False | RESOURCE_ | Identifier of a resource for which a specific requirement defined by WipReqResourceID does not have to be met. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a WIP Required Resource exception. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason code of an exception. |
| WipReqResourceID | INT(10,0) | False |  | False | WIP_REQ_RESOURCE | Identifier of a WIP Required Resource to which an exception is applied. |

## Primary Key

- **PK_WIP_REQ_RESOURCE_EXCEPTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_REQ_RESOURCE_EXCEPTION_REASON_CODE** — WIP_REQ_RESOURCE_EXCEPTION -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_REQ_RESOURCE_EXCEPTION_RESOURCE_** — WIP_REQ_RESOURCE_EXCEPTION -> RESOURCE_ (`ExceptResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_EXCEPTION_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE_EXCEPTION -> WIP_REQ_RESOURCE (`WipReqResourceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_REQ_RESOURCE_EXCEPTION_RESOURCE_** on `ExceptResourceID`
- **IF_WIP_REQ_RESOURCE_EXCEPTION_WIP_REQ_RESOURCE** on `WipReqResourceID`
