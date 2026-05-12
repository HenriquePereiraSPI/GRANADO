# Testing and Debugging Action Scripts

Test and Debug Action Scripts

To Test and Debug an Action Script:

       1. Open the Action Scripts Manager and navigate to the Tests tab:

2. Create a testing code that will call an Action Script Function, execute it, and display the
   logged data by following these steps:
           a. Select the Action Script Function on the Action Script Revision Properties pane.
           b. Click (Generate Function Test Code), and an initial code will be inserted into
              the Tests tab.

                 Each revision of an Action Script has its own test code.

          3. Click  (Test Run) on the Toolbar to execute the testing of the code:

The results of the Action Script execution are displayed in the Test Output tab of the
Action Script Output Tool Pane. To enable the display of information in this tool pane, you
need to use the DebugConsole function named LogDebug in the test script. See this
example:

   DebugConsole.LogDebug("yourOutputName1: {0}\nyourOutputName2: {1}\n",
   result.yourOutputName1, result.yourOutputName2);

You can verify the compiled code used in the Test Run on the Action Script Output tool
pane (Compiled Code tab):

4. Click (Validate) on the Toolbar to check the validity of the displayed code.
5. Select the Include all default Action Scripts in Test Run check box on the Action Script

   Revision Properties Pane if your Action Script uses Action Script Functions from other
   Action Scripts (otherwise, the Action Script will not be tested). This option is not selected
   by default, because it may slow down the execution of the test and is only required in this
   particular situation.
