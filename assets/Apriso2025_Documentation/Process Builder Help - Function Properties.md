# Function Properties

To Launch the Function Properties Tool Pane

       1. In the Entity Explorer select a Function from the list, or select the Function in the diagram.
       2. Choose one of the following options:

                      Choose Properties from the Function Navigation Right-Click Menu
                      Use the F4 Keyboard Shortcut
                      Choose View > Properties from the Main Menu

General Tab

Field              Description

Name               The name of the Function (up to 40 characters long).

Description The textual description of the entity.

Type               One of the available Function types (see Types of Functions).

Log Events If Log Events is selected, the execution history of the Function will be logged in the
                 TRANSACTION_HISTORY table provided that the following additional conditions are
                 met:

                   The LogTransactionHistory flag in Central Configuration is set to "True"
                   In the Apriso Configuration Manager's BI - Disable XML Generation tab,
                   Business Component XML generation is enabled for
                   FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter.Interpret
                   Business Component XML generation is enabled for the Business
                   Component(s) used by a given DFC
                   The XMLs being generated are configured to be routed to the Transaction
                   History Processor in the Apriso Configuration Manager's Routing
                   Configurations tab

Cache                If all four of the conditions have been met, TRANSACTION_HISTORY logging will
Results              be enabled even if the Log Events check box is not selected. However,
                     selecting Log Events will ensure that more complete information is recorded, as
                     Function Inputs and Outputs will also be logged.

                   If Cache Results is selected:

                              the Function will be executed only once for specific (new) Function Inputs
                              values and the Outputs will be stored in a Cache.
                              the Function will not be executed for successive executions with the same
                              Inputs and its Outputs will be returned from a Cache

                   The option is available only for User Formula Function, SQL Query Function, Sub-
                   DFC Function (Synchronous mode) and Screen Interface Function (Advanced tab).
                   Cache Results can be configured with use of the "FunctionResultsCacheLimit" and
                   "FunctionResultsCacheExpirationSpan" keys located in the "FunctionInterpreter"
                   section of the Central Configuration file (for details, see Central Configuration
                   Documentation ).

                   Note that this functionality is for advanced users. Use it if you are sure that your
                   data will not change. Otherwise a Function may return invalid results from cache
                   instead of the actual data.
