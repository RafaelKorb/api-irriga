'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['user.store'], ['User']], [['user.update'], ['User']]
]))

Route.resource('client', 'ClientController').apiOnly()
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('trainings', 'TrainingController').apiOnly()