# Exporting and Importing an Action Script

Export and Import an Action Script

Process Builder provides all the necessary tools to edit Action Scripts. However, it may be easier to
edit longer and more complicated Action Scripts in the third-party editors that contain more
advanced language support.

Export

If you do not want to use Process Builder for writing your Action Script's code, you can export the
Action Script to separate files by following these steps:

       1. Open the Action Scripts Manager.
       2. Choose the Export option from the Entity Explorer Right-Click Menu. This option is

           available only for Action Script root elements and Action Script Categories.
       3. The Export Action Script dialog box appears, where you can select the following:

                      Action Script Revision – this drop-down menu contains the Action Scripts
                      revisions that can be exported (only Action Scripts of the selected revision will be
                      exported)
                      Destination directory – the folder on your computer where the Action Script files
                      will be saved

              Once all the data is saved, a confirmation is presented that the save action was
              successful.
  The exported files will be saved into the selected folder in two additional directories:
              lib – this folder contains additional DELMIA Apriso libraries; you can use the functions from
              these libraries in your Action Scripts
              src – this folder contains the exported Action Script revisions

Import

Once you finish your work with the Action Scripts in another editor, you can import them back into
Process Builder by following these steps:

       1. Open the Action Scripts Manager.
       2. Choose the Import option from the Entity Explorer Right-Click menu. This option is

           available only for Action Script root elements and Action Script Categories.
       3. The Import Action Script dialog box appears, where you can select the following:

                      Source directory – the folder from which you import the Action Script
                      Import options:

                                  Import to existing revision

                                    Be aware that Action Scripts with the same names and revisions as
                                    the imported ones will be overridden and moved to the imported
                                    category.

                                  Import to new revision – create a new Action Script revision
                      Set imported Action Scripts as Default Revision – if you are sure that the
                      imported Action Scripts are correct, you can set them as the default revision so
                      that you can use them immediately after importing
