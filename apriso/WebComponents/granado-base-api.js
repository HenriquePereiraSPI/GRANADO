async function callDFCAsync(context, dfc, inputs, revisao = '') {
    try {
        var result = await context.callDFC(
            dfc,                 // nome do DFC
            revisao,             // revisão (opcional)
            inputs               // objeto com os Inputs (External Inputs do DFC)
        );

        return {
            responseHTTPStatus: 200,
            responseHTTPMessage: 'OK',
            responseResultData: result
        };

    } catch (ex) {

        return {
            responseHTTPStatus: ex.status || ex.httpStatus || 500,
            responseHTTPMessage: ex.message,
            responseResultData: null
        };
    }
}
