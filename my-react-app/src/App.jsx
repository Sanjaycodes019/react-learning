import React, { useState, useEffect } from "react";
import {
  Container, TextField, Button, List, ListItem, ListItemText,
  IconButton, Checkbox, CssBaseline, Switch, AppBar, Toolbar, Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <DarkModeIcon />
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <LightModeIcon />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
        <TextField
          label="Enter Task"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Button variant="contained" color="primary" onClick={addTask} fullWidth>
          Add Task
        </Button>
        <List>
          {tasks.map((t, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" color="error" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox checked={t.completed} onChange={() => toggleTaskCompletion(index)} />
              <ListItemText
                primary={t.text}
                style={{ textDecoration: t.completed ? "line-through" : "none" }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
};

export default App;
