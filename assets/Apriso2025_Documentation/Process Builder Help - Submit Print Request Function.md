# Submit Print Request Function

The Submit Print Request Function may be used to print reports or labels, or to reprint them. Inputs
are pre-populated based on the report definition.

To Add the Submit Print Request Function

       1. Drag the Submit Print Request Function from the Toolbox to the Function Navigation
           diagram, or double-click the Submit Print Request icon in the Toolbox.

       2. The system automatically adds these four Inputs to the Function by default
                      StoreRequestHistory
                      NumberOfCopies
                      PrinterID
                      ReportID

       3. Choose the type of print request: Report, Power Report, Label, or Reprint.
       4. Choose the report or label from the drop-down list. Inputs will be populated based on the

           printing definition.

                   Optionally, choose the Delivery type and Execution mode

Field              Description

Print request The user can choose one of the modes of printing: Report, Power Report,

type               Label, or Reprint. It is possible to choose the report or label name from a

                   drop-down list.

Delivery type The user can choose the type of delivery: to a file, as a printout or as a
                    document. It is possible to choose the file format from a drop-down list
                    (this is only available for the Print request type of Report). If the delivery
                    type is a file, it is possible to set the encoding using the Central
                    Configuration file (default code page is set to UTF-8). For details, refer to
                    the Printing Guide.

Execution          There are two types of Execution Modes to choose from:
mode
                              Synchronous – the printing is executed immediately, and further
                              Functions will not be executed until it is finished
                              Asynchronous – executes the DFC in Job Executor, and it is
                              possible to choose the Pool name (different Pools can have

              Input                  different priorities)
              parameters  It is possible to map the Function Inputs to a label's or report's fields
              mapping     (parameters).

Submit Print Request Function Inputs and Outputs

Input/Output              Description

StoreRequestHistory If set to true, the system stores the print request in the database for
                                  future reprint. This Input is mandatory.

NumberOfCopies            The user can choose the number of copies to be printed. This Input is
                          mandatory.

PrinterID                 This Input is mandatory. It is added when Delivery type is set to Printer.

ReportID                  Overrides the report or label ID chosen in the drop-down list. If set to
                          zero, the Input is ignored.

OriginalPrintRequestID If the user chooses the option to reprint, a new OriginalPrintRequestID
                                  Input is added instead of the ReportID Input.

ExportDirectory           The name of the directory where the report or label file will be saved. If
                          not specified, the default directory is used. This Input is available when
                          the delivery type is set to File.

ExportFileName            The name of the report or label file. If the value is not specified, the
                          system will generate a file name automatically. This Input is available
                          when the delivery type is set to File.

FilePath                  The file path where the printout is saved. This Output is automatically
                          created when the delivery type is set to File.

SynchronizationQueue The user-defined name of the synchronization queue, which guarantees
                                  that the printouts will be processed in the background in the same order
                                  that they were created. This Input is available when the Execution Mode
                                  is set to Asynchronous.

                          When the Execution Mode is set to Asynchronous and the Print
                          request type is set to Power Report, the SynchronizationQueue input
                          is overridden by the PrinterID input. This ensures successful
                          simultaneous printing.

The DOC report format is supported only by Crystal Reports, while the XML format is supported
only by the Reporting Services printing engine.

Multi-value parameters are supported only for Power Reports.
