const generateManager = (manager) => {
    if (Object.entries(manager).length === 0) {
        return '';
    }
    const {
        name,
        id,
        email,
        officeNumber
    } = manager;
    return `<div class="card-body">
                        <h3 class="card-title">${manager.getName()}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h4>
                        <p class="card-text">${manager.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text">Office#: ${officeNumber}</p>
                    </div>`
};



const generateEngineer = (engineer) => {
    if (engineer.length === 0) {
        return '';
    }
    return `<h2>Engineers</h2>
            <div id="engineerContainer" class="row">
${engineer.map(engineer =>
           `<div id="engineerCardContainer" class="card">
                    <div class="card-body">
                        <h3 class="card-title">${engineer.getName()}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h4>
                        <p class="card-text">${engineer.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="card-text">GitHub Profile: <a href="${engineer.getGithub()}">${engineer.github}</a></p>
                    </div>
                </div>`).join('')}
            </div>`;
}


const generateIntern = (intern) => {
    if (intern.length === 0) {
        return '';
    }
    return `<h2>Intern</h2>
            <div id="internContainer" class="row">
${intern.map(intern =>
           `<div id="internCardContainer" class="card">
                    <div class="card-body">
                        <h3 class="card-title">${intern.getName()}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h4>
                        <p class="card-text">${intern.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="card-text">${intern.getSchool()}</p>
                    </div>
                </div>`).join('')}
            </div>`;
}


module.exports = card => {
    console.log("html page", card)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Employees</title>
</head>
<body>
    <header>
        <h1 class="text-light bg-dark text-center font-weight-bold">EMPLOYEE LIST</h1>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div id="managerContainer" class="card">
                    ${generateManager(card.manager)}
                </div>
            </div>
            ${generateEngineer(card.engineer)}
            
            ${generateIntern(card.intern)}
        </div>
    </main>
</body>
</html>`

};