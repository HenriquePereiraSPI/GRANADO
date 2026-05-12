# COMPONENT_ALLOCATION_TYPE

**Database:** Operational

**Description:** Type of component allocation (1 - Add, 2 - Remove, 3 - Handle, 4 - Produce, 5 - CheckIn, 6 - CheckOut, 7 - Pin, 8 - UnPin).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record. |
| Name | NVARCHAR(50) | False |  | False |  | Contains the constant string value of the allocation type. |
| ParentComponentAllocationTypeID | INT(10,0) | True |  | False | COMPONENT_ALLOCATION_TYPE | The foreign key used to refer to COMPONENT_ALLOCATION_TYPE table when the new allocation type is created. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COMPONENT_ALLOCATION_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **FK_COMPONENT_ALLOCATION_TYPE_ParentComponentAllocationTypeID** — COMPONENT_ALLOCATION_TYPE -> COMPONENT_ALLOCATION_TYPE (`ParentComponentAllocationTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_COMPONENT_ALLOCATION_TYPE_ParentComponentAllocationTypeID** — COMPONENT_ALLOCATION_TYPE -> COMPONENT_ALLOCATION_TYPE (`ParentComponentAllocationTypeID -> ID`)
- **FK_COMPONENT_INSTANCE_COMPONENT_ALLOCATION_TYPE** — COMPONENT_INSTANCE -> COMPONENT_ALLOCATION_TYPE (`ComponentAllocationTypeID -> ID`)

## Unique Indexes

- **UK_COMPONENT_ALLOCATION_TYPE_Name** on `Name`

## Non-Unique Indexes

- **** on ``
