const keys = require('../../config/keys');

module.exports = (survey) => {

    return `
    
        <html>
        <body>
            <div style="text-align: center;">
                <h3> I'd like your input </h3>
                <p> Please answer the following question: </p>
                <p> ${survey.body} </p>
                <div style="font-size: 1.8em;">
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="text-decoration: none;">Yes</a>
                    </div>

                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="text-decoration: none;">No</a>
                    </div>

                </div>
                
            </div>
        </body>
        </html>

    `;

};