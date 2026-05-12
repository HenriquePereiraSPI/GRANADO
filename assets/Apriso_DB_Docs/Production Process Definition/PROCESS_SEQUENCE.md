# PROCESS_SEQUENCE

**Database:** Operational

**Description:** This table contains the dynamic routing of Operations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DestinationOperationID | INT(10,0) | True |  | False | OPERATION | The Operation which we want to perform depending on SequenceType and ReasonType. |
| DestinationProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The Process Operation to perform depending on the Sequence type and Reason Type. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Sequence and its attributes. |
| Level_ | INT(10,0) | True |  | False |  | Denotes the order level to which or from which the quantity is navigated. |
| LevelingGroup | NVARCHAR(5) | True |  | False |  | He code identifying the leveling group to which the Operation belongs. |
| NavigationType | SMALLINT(5,0) | True |  | False | NAVIGATION_TYPE | Specifies how the quantity from the child order Operation content will be merged into the good Operation content. |
| OperationID | INT(10,0) | True |  | False | OPERATION | The unique identifier of the Operation and its attributes. |
| PreferredNext | BIT | True |  | False |  | Indicates whether or not the Operation is the preferred next Operation. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The unique identifier of the Process Operation and its attributes. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The reason for the decision on the Sequence of Operations. |
| SequenceType | NVARCHAR(20) | True |  | False | PROCESS_SEQUENCE_TYPE | The enumeration of the values that describe the type of flow (Next, Previous, Invoke, Redirect). |
| SequencingGroup | NVARCHAR(5) | True |  | False |  | The code describing the group to which the Sequence belongs. |
| SequencingGroupMerge | NVARCHAR(5) | True |  | False |  | Stores information for the navigation plugin. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WIPContentClassID | SMALLINT(5,0) | True |  | False | WIP_CONTENT_CLASS | The enumeration of the values that describe the various classes of the work order content. |

## Primary Key

- **PK_PROCESS_SEQUENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_SEQUENCE_NAVIGATION_TYPE** — PROCESS_SEQUENCE -> NAVIGATION_TYPE (`NavigationType -> NavigationType`)
- **FK_PROCESS_SEQUENCE_OPERATION** — PROCESS_SEQUENCE -> OPERATION (`DestinationOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_OPERATION2** — PROCESS_SEQUENCE -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_SEQUENCE_PROCESS_OPERATION** — PROCESS_SEQUENCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_PROCESS_OPERATION1** — PROCESS_SEQUENCE -> PROCESS_OPERATION (`DestinationProcessOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_PROCESS_SEQUENCE_TYPE** — PROCESS_SEQUENCE -> PROCESS_SEQUENCE_TYPE (`SequenceType -> SequenceType`)
- **FK_PROCESS_SEQUENCE_REASON_CODE** — PROCESS_SEQUENCE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_PROCESS_SEQUENCE_UNIT_ID** — PROCESS_SEQUENCE -> UNIT (`UnitID -> ID`)
- **FK_PROCESS_SEQUENCE_WIP_CONTENT_CLASS** — PROCESS_SEQUENCE -> WIP_CONTENT_CLASS (`WIPContentClassID -> WipContentClass`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_SEQUENCE_OPERATION** on `DestinationOperationID`
- **IF_PROCESS_SEQUENCE_OPERATION2** on `OperationID`
- **IF_PROCESS_SEQUENCE_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_SEQUENCE_PROCESS_OPERATION1** on `DestinationProcessOperationID`
- **IF_PROCESS_SEQUENCE_UNIT_ID** on `UnitID`
- **IF_PROCESS_SEQUENCE_WIP_CONTENT_CLASS** on `WIPContentClassID`
