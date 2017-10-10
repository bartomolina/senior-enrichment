const db = require('../db')
const { Campus, Student } = require('../db/models')

module.exports = seed => {
    Campus.bulkCreate([
        {name: 'Angular', image: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg'},
        {name: 'React', image: 'https://cdn.worldvectorlogo.com/logos/react.svg'},
        {name: 'React-Router', image: 'https://cdn.worldvectorlogo.com/logos/react-router.svg'},
        {name: 'Redux', image: 'https://cdn.worldvectorlogo.com/logos/redux.svg'},
        {name: 'Rails', image: 'https://cdn.worldvectorlogo.com/logos/rails-1.svg'}
    ])
    .then(campuses => {
        Student.bulkCreate([
            {name: 'student1', campusId: 1},
            {name: 'student2', campusId: 2}
        ])
    })
}