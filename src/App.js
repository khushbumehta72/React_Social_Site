import { Box, Stack } from "@mui/material";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction = "row" spacing = {2} justifyContent= "space-evenly">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
   
    </Box>
    
  );
}

export default App;
