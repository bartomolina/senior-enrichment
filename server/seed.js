const db = require('../db')
const { Campus, Student } = require('../db/models')

module.exports = seed => {
    Campus.bulkCreate([
        {name: 'campus1', image: '/image1.jpg'},
        {name: 'campus2', image: '/image2.jpg'}
    ])
    .then(campuses => {
        Student.bulkCreate([
            {name: 'student1', campusId: 1},
            {name: 'student2', campusId: 2}
        ])
    })
}