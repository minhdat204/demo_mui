import React, { useState } from "react";

import { 
  TextField,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  createTheme,
  ThemeProvider,
  CssBaseline 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Css } from "@mui/icons-material";
function App() {
  const [tasks, setTasks] = useState([
    { text: "Hit the gym", checked: false },
    { text: "Pay bills", checked: true },
    { text: "Meet George", checked: false },
    { text: "Buy eggs", checked: false },
    { text: "Read a book", checked: false },
    { text: "Organize office", checked: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, checked: false }]);
      setInput("");
    }
  };

  const toggleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const theme = createTheme({
   palette: {
    mode: "dark",
    background:{
      default: '#3d8d88',
      light: "#f5f5f5",
      dark: "#212121",
      paper: '#1d7baf',
    }
   }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box component="section" sx={{ textAlign: "center"}}>
        <Box component="section" sx={{ p:2, textAlign: "center"}} backgroundColor = "background.paper">
          <Typography variant="h4" sx={{paddingBottom: 2}}>
            My Todo List
          </Typography>
          
          <Box  component="section" sx={{textAlign: "center", display: "flex"}}>
            <TextField label="New Task" id="outlined-basic" variant="outlined" fullWidth size="small" value={input} sx={{marginRight: 1}} onChange={(e) => {setInput(e.target.value)}}/>
            <Button variant="contained" onClick={() => {addTask()}}>Add</Button>
          </Box>
        </Box>
        <Box component="section" sx={{ textAlign: "center"}}>
          <List sx={{ width: '100%'}}>
            {tasks.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => {deleteTask(index)}}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  disablePadding
                  sx={{ backgroundColor: item.checked ? 'red' : 'none'}}
                >
                  <ListItemButton role={undefined} onClick={() => {toggleCheck(index)}} dense sx={{p:"10px"}}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
    </Box>
  </ThemeProvider>
  );
}

export default App;
