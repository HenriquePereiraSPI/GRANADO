# Manage Work Instructions

You can display work instructions in a form of session variables using DFCs or DFC steps.

To Use Work Instructions

The following scenario illustrates the use of session variables to display work instructions using a
DFC step:

       1. Create an Input to Output function and add a pair of an input and output.
       2. In the input properties, select the list of char type.
       3. Display the Constant List Editor and enter either one or more work instruction names or

           FUIDs of specific work instruction revisions.

          4. Set the function output as a session variable by adding a session routing.
          5. In the step properties, go to the Work Instructions tab and configure the options of

              displaying work instructions in runtime.
          6. In the Work Instructions from Session Variable section, choose a session variable

              created in step 4.

7. Runtime displays work instructions as configured (in this example: sidebar, on the right
   side of the screen):

 To Handle a Work Instruction with a Document of an Unsupported
 Type

          1. Click Test Run to see the linked work instructions in the Test Run view.
          2. Click the "Use following extension ([.extension]) to save this file on local disc" link

              (unsupported file type).
                Depending on the file type, it might be necessary to refer to information on how to
                configure a browser or a server to support a given file type.

3. The Save File pop-up window might appear.
4. Change the file name to its original extension as was written in the link (by default it is

   ShowDocuments.aspx), and save it locally.
