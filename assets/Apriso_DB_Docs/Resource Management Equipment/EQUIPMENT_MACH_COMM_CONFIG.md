# EQUIPMENT_MACH_COMM_CONFIG

**Database:** Operational

**Description:** This table contains Equipment machine communication configuration.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificateFile | NVARCHAR(250) | True |  | False |  | Path to the certificate to use for FTPS and HTTPS protocols |
| DeleteDownloads | BIT | True |  | False |  | Flag determining whether to delete the contents of the download folder before downloading more files to it. |
| DFCFUID | NVARCHAR(36) | True |  | False |  | DFC to handle upload and download. Reference to the FUID column in the DFC table. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | DFC to handle upload and download. Reference to the FUID column in the DFC_REVISION table. |
| EquipmentID | INT(10,0) | False |  | True | EQUIPMENT | Reference to an Equipment. |
| EquipmentProtocolType | SMALLINT(5,0) | True |  | False | EQUIPMENT_PROTOCOL_TYPE | Protocol Type of the Equipment |
| FtpPassword | NVARCHAR(260) | True |  | False |  | Encrypted Password for FTP |
| FtpUserName | NVARCHAR(126) | True |  | False |  | User Name for FTP |
| GenericProcess | NVARCHAR(250) | True |  | False |  | Generic process to handle Upload and Download similar to download script |
| HostName | NVARCHAR(100) | True |  | False |  | Host name for ftp site |
| Port | INT(10,0) | True |  | False |  | Port for FTP |
| ReceiveSource | NVARCHAR(250) | True |  | False |  | location of file on machine when it is transferred from the machine to the Apriso system |
| ReceiveTarget | NVARCHAR(250) | True |  | False |  | Where to place a file transferred from a machine to the Apriso system |
| SendNameConstruct | NVARCHAR(1000) | True |  | False |  | For naming files on machine after transfer |
| SendPath | NVARCHAR(250) | True |  | False |  | Target for the file when sending to this machine |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EQUIPMENT_MACH_COMM_CONFIG** on `EquipmentID`

## Foreign Keys (this table -> other)

- **FK_EQUIPMENT_MACH_COMM_CONFIG_EQUIPMENT** — EQUIPMENT_MACH_COMM_CONFIG -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_EQUIPMENT_MACH_COMM_CONFIG_EQUIPMENT_PROTOCOL_TYPE** — EQUIPMENT_MACH_COMM_CONFIG -> EQUIPMENT_PROTOCOL_TYPE (`EquipmentProtocolType -> EquipmentProtocolType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- EQUIPMENT_MACH_COMM_CONFIG -> DFC (`DFCFUID -> FUID`)
- EQUIPMENT_MACH_COMM_CONFIG -> DFC_REVISION (`DFCRevisionFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
