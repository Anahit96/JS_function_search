const searchUser = (param) => {
    const user = [{
        firstName: 'Davit',
        lastName: 'Sargsyan',
        age: 20,
    }, {
        firstName: 'Ani',
        lastName: 'Hovsepyan',
        age: 40
    }, {
        firstName: 'Anna',
        lastName: 'Tashchyan',
        age: 50
    }, {
        firstName: 'Aram',
        lastName: 'Nazaryan',
        age: 70
    }, {
        firstName: 'Hovo',
        lastName: 'Manukyan',
        age: 30
    }, {
        firstName: 'Rafo',
        lastName: 'Safaryan',
        age: 18
    }, ];
    let filterResult = [];
    for (i = 0; i < user.length; i++) {
        if (user[i].firstName.toLowerCase().includes(param)) {
            filterResult.push(user[i].firstName)
        }
        if (user[i].lastName.toLowerCase().includes(param)) {
            filterResult.push(user[i].lastName)
        }
    }
    console.log(filterResult);
}
searchUser('an');