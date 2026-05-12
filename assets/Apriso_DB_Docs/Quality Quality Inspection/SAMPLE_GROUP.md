# SAMPLE_GROUP

**Database:** Operational

**Description:** This table contains Sample grouping information - each Sample can be assigned to one or more groups

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Group_ | NVARCHAR(40) | False |  | False | GROUP_ | Group name the given Sample is assigned to |
| GroupClassID | INT(10,0) | False |  | False | GROUP_ | Group class identifier the given Sample is assigned to |
| GroupType | SMALLINT(5,0) | False |  | False | GROUP_ | Group type the given Sample is assigned to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Sample Group record |
| SampleID | INT(10,0) | False |  | False | SAMPLE | Link to the SAMPLE table |

## Primary Key

- **PK_SAMPLE_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_GROUP_GROUP_** — SAMPLE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SAMPLE_GROUP_SAMPLE** — SAMPLE_GROUP -> SAMPLE (`SampleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SAMPLE_GROUP_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_SAMPLE_GROUP_SAMPLE** on `SampleID`
