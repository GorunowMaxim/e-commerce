import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircleLoading() {
    return (
        <Box sx={{ display: "flex" }}>
            <CircularProgress color="inherit" sx={{fill: "black"}} />
        </Box>
    );
}
