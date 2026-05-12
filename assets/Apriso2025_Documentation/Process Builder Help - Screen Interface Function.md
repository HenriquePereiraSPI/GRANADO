# Screen Interface Function

A Screen Interface Function cannot be created manually. It shows up automatically when the HTML
Layout Editor functionality is used.

Screen Interface Function Limitations

       1. The Screen Interface Function cannot be iterated, duplicated, etc.
       2. The Step can contain only one Screen Interface Function.
       3. It is not possible to copy only the Screen Interface Function. To do this you need to copy

           the entire Step.
       4. The Screen Interface Function cannot contain User Inputs/Outputs.
       5. Deleting a Screen Interface Function from the Function Navigation Editor is not possible,

           as the Screen Interface Function is an integral part of HTML Layout Editor. To delete this
           Function, you have to switch back to the Layout Editor (see HTML Layout Editor Right-
           Click Menu).

Screen Interface Function Properties

General Tab

                          Field                      Description

                          Screen The list of Inputs added to
                          Interface the Screen Interface
                          Function Function (it is possible to
                          Inputs change its type and set its

                                         value). Refer to Screen
                                         Interface Input.

                          Screen                     The list of Outputs added to
                          Interface                  the Screen Interface
                          Function                   Function (it is possible to
                          Outputs                    change its type and set the
                                                     Auto Submit functionality).
                                                     Auto Submit check box –
                                                     the screen submits
                                                     automatically right after the
                                                     value is saved to the Input.
                                                     This functionality is used to
                                                     simplify the routing. You may
                                                     link one Output to many
                                                     Inputs. Refer to the Screen
                                                     Interface Output.

                          Screen                     The list of Screen Literals
                          Literals                   added to the Screen
                                                     Function. Refer toScreen

                                                     Literals. The (Remove)
                                                     button is available only if the
                                                     literal is not used in the
                                                     HTML text.

                                                     Mobile and Text platforms
                                                     are no longer supported.

Advanced Tab

                   Field  Description

                   Hide OK If selected,

                   Button the OK If you want to use the WI Button

                          button will or OK Button functionality when

                          not be         the Hide OK Button and Hide

                          displayed Work Instruction Button check

                          in runtime. boxes are selected, it is possible

                   Hide Work If selected, to apply them using functions:
                   Instruction the Show $Context.submit() and
                                         $Context.showWorkInstructions().
                   Button Work
                          Instructions For more information, see
                          button will Displaying the Submit and Work
                                         Instructions buttons.
                          not be

                          displayed

                          in runtime.

                   Cache See Function Properties.
                   Results

                   Invoke  Contains a list of DFCs that can be called
                   DFCs /  asynchronously from the scripts. The
                   AJAX    invoked DFC revision must be unique. See
                           Using AJAX.
