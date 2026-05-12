# Stored Procedure Function

The Stored Procedure Function enables executing a Stored Procedure against a configured
database.

To Add the Stored Procedure Function

       1. Drag the Stored Procedure Function from the Toolbox to the Function Navigation diagram,
           or double-click the Stored Procedure icon in the Toolbox.

       2. The system displays a complete list of Stored Procedures that the user may choose from.
           When the user enters a part of the Stored Procedure name, the system suggests a list of
           matching entries from the database.

          3. After selecting a Stored Procedure, the system adds Inputs and Outputs to the Function
              based on the Inputs and Outputs of the Stored Procedure.

              Field     Description
              Database
                        Alias of the database on which the Stored Procedure will be executed. The
                        aliases can be configured using keys located in the "DataServices" section of
                        the Central Configuration file (for details and predefined aliases, see Central
                        Configuration Documentation ).

                    It is required to run the 7_Security_Views.sql script (available from:

                        <drive>\Program Files\Dassault Systemes\DELMIA Apriso 2025\Database

                    Upgrader\BeforeUpdates\3\o\7_SecurityViews.sql on the DELMIA Apriso
                    server) in order to use Stored Procedures from an external database.

SQL tab Contains the name of the Stored Procedure which will be executed on the
                 MS SQL database type.

                    The check boxes next to Inputs and Outputs are not modifiable.

Oracle tab Contains the name of the Stored Procedure which will be executed on the
                 Oracle database type.

                        The Boolean type of Stored Procedure parameter on the Oracle
                        database is not supported by Process Builder.

Link                    Links another Stored Procedure.
button

Refresh Refreshes the list of Inputs and Outputs from the Stored Procedure definition
Inputs and in the database.
Outputs
