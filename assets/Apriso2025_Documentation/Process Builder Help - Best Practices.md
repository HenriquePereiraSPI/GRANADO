# Best Practices

Performance

System response time for a single Screen depends on the logic implemented in the Views and
Action handler DFCs:

           Internal processing takes between 60-100 milliseconds per screen
           The remaining time depends on the number of View DFCs used and their complexity
           A typical Screen (with an average of 4-6 Views of medium complexity) should render in
           around 300-500 milliseconds

If the response is slow, use the debug view in PB or the performance logs to analyze which Views
are responsible for the bottleneck.

Screen and Layout loading performance may be affected if the system-wide Automatic proxy
setup setting is configured to Automatically detect settings.

Some general recommendations:

           On test/production environments, always enable the DFC and Step cache (to gain up to
           30% performance improvement)

                      These settings are controlled in the DELMIA Apriso Central Configuration
                      (OperationCache = True, StepCache = True)
           In View DFCs, use the HTML Layout Editor instead of the “old” layout editor
           Validate the Screen navigation type for all the screens:
                      Make sure that the home Screen is used frequently (to clear the Screen and
                      variable stack)
                      Avoid too many levels (or infinite calls) of Sub-Portal Screens

Screen Resolution

It is important to consider the lowest resolution that will need to be supported before starting
Screen design. The system will then automatically adapt the UI to higher resolution devices.
