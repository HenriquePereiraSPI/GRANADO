# Naming Conventions and Categories

The Screen Flows functionality assumes certain naming conventions and a Process Builder
Categories structure are being used.

Naming Conventions

           Screen codes, Actions, Panels – use capital letters, digits, and the underscore (_). Do
           not use blank spaces.

                      The Screen codes should reflect the codes used in the detail design document, for
                      example:

                                        OPP_10
                                        RCV_20
                                        DET2

                      The Actions should describe the Action, for example:

                                        VALIDATE_PRODUCT
                                        NEW_PO
                                        CLOSE
                                        BACK

                      Example Panel names:

                                        HEAD
                                        FOOTER
                                        MAIN_TABS
                                        LOGO
                                        ALERT_LIST

Process Builder Categories

           Screen Flows
                      Event templates (for the Screen initialization and an Action handler DFC)
                      View templates (for a View DFC)
                      [your project] Events (all event handlers for your project)
                      [your project] Views (all the Views for your project)
                      Screen templates
