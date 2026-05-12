# EPC_TAG

**Database:** Operational

**Description:** Store all generic EPC data for all encoding types

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Binary | NVARCHAR(256) | True |  | False |  | Binary representation for the EPC tag |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The container the EPC Tag is associated with |
| EanUcc | NVARCHAR(30) | True |  | False |  | European Article Numbering - Uniform Code Council |
| EncodingType | NVARCHAR(20) | True |  | False | EPC_ENCODING_TYPE | Encoding type |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The facility the EPC is associated with |
| Hex | NVARCHAR(256) | True |  | False |  | Hex representation for the EPC tag |
| ID | INT(10,0) | False |  | True |  | Auto increment PK |
| Legacy | NVARCHAR(512) | True |  | False |  | The Legacy representation of the EPC tag |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The lot number the EPC is associated with |
| Osn | NVARCHAR(256) | True |  | False |  | Osn representation for the EPC tag |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The product the EPC is associated with |
| PureIdentity | NVARCHAR(256) | True |  | False |  | Pure Identity representation for the EPC tag |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The resource the EPC is associated with |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The serial number the EPC is associated with |
| TagEncoding | NVARCHAR(256) | True |  | False |  | Tag Encoding Uri representation for the EPC tag |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The warehouse the EPC is associated with |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The warehouse location the EPC is associated with |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The work center the EPC is associated with |

## Primary Key

- **PK_EPC_TAG** on `ID`

## Foreign Keys (this table -> other)

- **FK_EPC_TAG_CONTAINER** — EPC_TAG -> CONTAINER (`Container -> Container`)
- **FK_EPC_TAG_EPC_ENCODING_TYPE** — EPC_TAG -> EPC_ENCODING_TYPE (`EncodingType -> EncodingType`)
- **FK_EPC_TAG_EPC_FACILITY** — EPC_TAG -> FACILITY (`Facility -> Facility`)
- **FK_EPC_TAG_EPC_LOT_NO** — EPC_TAG -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_EPC_TAG_EPC_PRODUCT** — EPC_TAG -> PRODUCT (`ProductID -> ID`)
- **FK_EPC_TAG_EPC_RESOURCE** — EPC_TAG -> RESOURCE_ (`ResourceID -> ID`)
- **FK_EPC_TAG_EPC_UNIT** — EPC_TAG -> UNIT (`UnitID -> ID`)
- **FK_EPC_TAG_EPC_WAREHOUSE** — EPC_TAG -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_EPC_TAG_EPC_WAREHOUSE_LOCATION** — EPC_TAG -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_EPC_TAG_EPC_WORK_CENTER** — EPC_TAG -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EPC_TAG_SERIAL_NO** — EPC_TAG -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)

## Referenced By (other tables -> this)

- **FK_EPC_TAG_DOD_EPC_TAG** — EPC_TAG_DOD -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_GIAI_EPC_TAG** — EPC_TAG_GIAI -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_GID_EPC_TAG** — EPC_TAG_GID -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_GRAI_EPC_TAG** — EPC_TAG_GRAI -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_SGLN_EPC_TAG** — EPC_TAG_SGLN -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_SGTIN_EPC_TAG** — EPC_TAG_SGTIN -> EPC_TAG (`EpcTagID -> ID`)
- **FK_EPC_TAG_SSCC_EPC_TAG** — EPC_TAG_SSCC -> EPC_TAG (`EpcTagID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EPC_TAG_CONTAINER** on `Container`
- **IF_EPC_TAG_EPC_LOT_NO** on `LotNo, ProductID`
- **IF_EPC_TAG_EPC_PRODUCT** on `ProductID`
- **IF_EPC_TAG_EPC_RESOURCE** on `ResourceID`
- **IF_EPC_TAG_EPC_UNIT** on `UnitID`
- **IF_EPC_TAG_SERIAL_NO** on `SerialNo, ProductID`
- **IXD_PureIdentity** on `PureIdentity`
