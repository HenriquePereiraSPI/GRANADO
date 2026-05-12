# CONTAINER_CLASS

**Database:** Operational

**Description:** Stores information used to differentiate types of Containers from one another.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildContainerAllowed | BIT | True | (0) | False |  | For future use. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | ID of the Domain Manager. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryAllowed | BIT | True | (0) | False |  | For future use. |
| Kanban | BIT | True | (0) | False |  | For future use. |
| MobilityFlag | BIT | True | ((1)) | False |  | Specifies if Container of this class is mobile. |
| MultipleLotAllowed | BIT | True | (0) | False |  | For future use. |
| MultipleOrdersAllowed | BIT | True | (0) | False |  | For future use. |
| MultipleProductAllowed | BIT | True | (0) | False |  | For future use. |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity. |
| ParentContainerAllowed | BIT | True | (0) | False |  | For future use. |
| PermanentFlag | BIT | True | ((1)) | False |  | Specifies if Container of this class is permanent. |
| Shippable | BIT | True | (0) | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackedInWIP | BIT | True | (0) | False |  | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_CONTAINER_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_CLASS_CODE_DOMAIN_MANAGER** — CONTAINER_CLASS -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_CONTAINER_CLASS_UNIT** — CONTAINER_CLASS -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_CODE_CLASS_NUMBER_CONTAINER_CLASS** — CODE_CLASS_NUMBER -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_CONTAINER_CLASS_DIMENSION_CONTAINER_CLASS** — CONTAINER_CLASS_DIMENSION -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_CONTAINER_CONTAINER_TYPE** — CONTAINER -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_LOCATION_CL_CONTAINER_CL_CONTAINER_CLASS** — LOCATION_CL_CONTAINER_CL -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_ORDER_DETAIL_CONTENT_CONTAINER_CLASS** — ORDER_DETAIL_CONTENT -> CONTAINER_CLASS (`ContainerClassID -> ID`)

## Unique Indexes

- **UK_CONTAINER_CLASS** on `FUID`
- **UK_CONTAINER_CLASS_Name** on `Name`

## Non-Unique Indexes

- **IF_CONTAINER_CLASS_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_CONTAINER_CLASS_UNIT** on `UnitID`
