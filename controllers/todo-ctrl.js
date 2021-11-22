const { getUserByIdPromise } = require("../utils/getUser");

getTodos = (req, res) => {
  const { id } = req.user;
  //id cannot be undedined since this route is protected, handling an edge case
  //This is not the user's fault
  if (id === undefined) {
    const errorMessage = "Decoded token is undefined";
    console.error(errorMessage);
    return res.status(500).json({
      message: errorMessage,
    });
  }
  getUserByIdPromise(id).then(
    (user) => {
      const todoData = {
        todos: user.todos,
      };
      return res.status(200).json(todoData);
    },
    () => {
      //This is also not the user's fault
      const errorMessage = "Error getting Id !";
      console.error(errorMessage);
      return res.status(500).json({
        message: errorMessage,
      });
    }
  );
};

addTodo = (req, res) => {
  const { id } = req.user;
  //id cannot be undedined since this route is protected, handling an edge case
  //This is not the user's fault
  if (id === undefined) {
    const errorMessage = "Decoded token is undefined";
    console.error(errorMessage);
    return res.status(500).json({
      message: errorMessage,
    });
  }
  getUserByIdPromise(id).then(
    (user) => {
      const body = req.body;
      user.todos.push(body);
      user
        .save()
        .then(() => {
          console.log("Added todo");
          return res.status(201).json({
            todo: body,
          });
        })
        .catch((error) => {
          console.log("Failed to add todo");
          return res.status(500).json({
            error: error,
            message: "Unable to add todo",
          });
        });
    },
    () => {
      //This is also not the user's fault
      const errorMessage = "Error getting Id !";
      console.error(errorMessage);
      return res.status(500).json({
        message: errorMessage,
      });
    }
  );
};

module.exports = {
  getTodos,
  addTodo,
};
