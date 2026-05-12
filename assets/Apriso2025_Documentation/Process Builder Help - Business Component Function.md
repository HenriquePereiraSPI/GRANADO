# Business Component Function

A Business Component Function allows the user to call DELMIA Apriso Business Components
(BCs) from DFCs.

To Add the Business Component Function

       1. Drag the Business Component Function from the Toolbox to the Function Navigation
           diagram, or double-click the Business Component icon in the Toolbox.

       2. The system displays a list of Business Component Methods (except the retired ones) from
           which the user is able to choose. When the user enters a part of Business Component
           Method name, the system suggests a list of matching entries from the database.

          3. After the selection of the Business Component Method, the system adds Inputs (Required
              Inputs) and Outputs to the function based on the Inputs and Outputs of the Method.
              Additionally some Business Components Methods can have Dynamic Inputs which can be
              added to the Function by selecting check boxes on the Dynamic Inputs list.

Name                Description
Business Component  Category of the Business Component.
Category
Business Component  The full name of the Business Component class.
Method              The name of the Method.
Version             Business Component version information.
Link button         Opens a window with the Business Components Methods to be
                    linked.
Repository button   Provides access to the Business Component Repository, where
                    it is possible to link other Business Component Methods.
Refresh Inputs and  Refreshes the list of Inputs and Outputs available for the
Outputs button      Business Component Method.

 Passing Values from Function to Business Components Function

  The configuration described in this section is for advanced users only.
In some cases, a Business Component consumes many values.

  Instead of linking each Output to an Input separately, you can use the DynamicOutputs Output and
  pass its values to the DynamicInputs Input in a Business Component Function. See an example
  below.

  The DynamicOutputs Output (of the Char Scalar type) can be added to the following Function types
  in Process Builder:

              Sub-DFC
              User Formula
              SQL Query
              Screen Interface
  This Output contains a JSON string with all other Outputs of the Function. In case of the User
  Formula, you can create a formula that will take only the selected outputs and serialize them to
  JSON. See an example below.

     The DynamicOutputs Output can be decoded using the DecodeDynamicParameters Business
     Component. For examples of using this Business Component, refer to Sub-DFC Function.

  When the JSON string is passed to the DynamicInputs Input, it will set values for the specific
  Dynamic Inputs. The string does not override the values of the Dynamic Inputs that were

  configured manually on the Properties Pane.
