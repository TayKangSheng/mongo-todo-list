// TODO. import TODO Model ;-)
const Todo = require('../models/todo')

function create (params) {
  // create a new TODO and console log the response
  const name = params.name
  const description = params.description
  const completed = params.completed

  if (!name) {
    console.log('Please input a valid name')
  }
  if (name.length < 5) {
    console.log('Name should be more than 5 characters')
  }

  Todo.create(params, function (err, saved) {
    if (err) {
      console.log(err)
      return
    }
    console.log('New todo created!\n' + saved)
  })
}
function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, outputs) {
    if (err) {
      console.log(err)
      return
    }
    console.log(outputs)
  })
}
function show (id) {
  // find the TODO with this id and console log it

  // Todo.find({ _id: id }, function (err, output) {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  //   // assuming id is unique
  //   console.log(output[0])
  // })

  Todo.findById(id, function (err, output) {
    if (err) {
      console.log(err)
      return
    }
    console.log(output)
  })
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  const name = params.name
  const description = params.description
  const completed = params.completed

  if (!id) {
    console.log('Please provide an ID')
    return
  }
  if (name) {
    Todo.update({_id: id}, { $set: { name: params.name } }, function (err, output) {
      if (err) {
        console.log(err)
        return
      }
      // console.log('Updated name')
    })
  }
  if (description) {
    Todo.update({_id: id}, { $set: { description: params.description } }, function (err, output) {
      if (err) {
        console.log(err)
        return
      }
      // console.log('Updated description')
    })
  }
  if (completed) {
    Todo.update({_id: id}, { $set: { description: params.completed } }, function (err, output) {
      if (err) {
        console.log(err)
        return
      }
      // console.log('Updated completed')
    })
  }

  console.log('Update completed')
}
function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.

  Todo.remove({ _id: id }, function (err, output) {
    if (err) {
      console.log(err)
      return
    }
    console.log('Todo removed')
  })
}
function destroyAll () {
  // console.log('Are you sure?')
  Todo.remove({}, function (err, output) {
    if (err) {
      console.log(err)
      return
    }
    console.log('All todos destroyed.')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
