# PROGRESS_TRANSITION_RULES

**Database:** Operational

**Description:** This table is used to store the valid transitions of progress statuses. For statuses that belong to Orders, a specific event is executed when the status is changed. The nature of the event is defined in the EVENT_TYPE table where the event is generally the execution of a Business Component.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AsyncronousCall | BIT | True | (0) | False |  | Flagged if the sub component defined in the Event table is to be invoked asynchronously when progress status is changed |
| DestinationProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The destination progress status |
| DFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| EventType | INT(10,0) | True |  | False | EVENT_TYPE | Type of event to be generated when the progress status transition from a status to an other |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of the transition rule to a facility |
| HostIndicator1 | NVARCHAR(50) | True |  | False |  | User field that can be sued to implement custom logic. Passed to the business component defined in the event |
| HostIndicator2 | NVARCHAR(50) | True |  | False |  | User field that can be sued to implement custom logic. Passed to the business component defined in the event |
| HostMessageType | NVARCHAR(50) | True |  | False |  | The host message type to be uploaded to transaction history if this progress transition rule is applied |
| HostTransactionCode | NVARCHAR(50) | True |  | False |  | The host transaction code to be uploaded to transaction history if this progress transition rule is applied |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| OrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER_TYPE | Reference to the order type |
| SourceProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Source status in the transition definition |

## Primary Key

- **PK_PROGRESS_TRANSITION_RULES** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROGRESS_TRANSITION_RULES_EVENT_TYPE** — PROGRESS_TRANSITION_RULES -> EVENT_TYPE (`EventType -> EventType`)
- **FK_PROGRESS_TRANSITION_RULES_FACILITY** — PROGRESS_TRANSITION_RULES -> FACILITY (`Facility -> Facility`)
- **FK_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS** — PROGRESS_TRANSITION_RULES -> PROGRESS_STATUS (`SourceProgressStatus -> ProgressStatus`)
- **FK_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS1** — PROGRESS_TRANSITION_RULES -> PROGRESS_STATUS (`DestinationProgressStatus -> ProgressStatus`)
- **FK_PROGRESS_TRANSITION_RULES_WIP_ORDER_TYPE** — PROGRESS_TRANSITION_RULES -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)

## Referenced By (other tables -> this)

- **FK_PROGRESS_TRANSITION_RULES_ROLE_PROGRESS_TRANSITION_RULES** — PROGRESS_TRANSITION_RULES_ROLE -> PROGRESS_TRANSITION_RULES (`ProgressTransitionRulesID -> ID`)

## Business Keys (this table -> other)

- PROGRESS_TRANSITION_RULES -> DFC (`DFCFUID -> FUID`)
- PROGRESS_TRANSITION_RULES -> DFC_REVISION (`DFCRevisionFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROGRESS_TRANSITION_RULES_DFC_FUID** on `DFCFUID`
- **IF_PROGRESS_TRANSITION_RULES_DFC_REVISION_FUID** on `DFCRevisionFUID`
- **IF_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS** on `SourceProgressStatus`
- **IF_PROGRESS_TRANSITION_RULES_PROGRESS_STATUS1** on `DestinationProgressStatus`
- **IXD_Facility_OrderType_DestinationProgressStatus_SourceProgressStatus** on `Facility, OrderType, DestinationProgressStatus, SourceProgressStatus`
