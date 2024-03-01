import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton
                variant="rectangular"
                sx={{
                    width: { xs: "45vw", sm: "31vw", md: "270px" },
                    height: { xs: "45vw", sm: "31vw", md: "270px" },
                }}
            />
            <Skeleton
                variant="rounded"
                sx={{ width: { xs: "45vw", sm: "31vw", md: "270px" }, height: "20px" }}
            />
            <Skeleton
                variant="rounded"
                sx={{ width: { xs: "45vw", sm: "31vw", md: "270px" }, height: "10px" }}
            />
            <Skeleton
                variant="rounded"
                sx={{ width: { xs: "45vw", sm: "31vw", md: "270px" }, height: "10px" }}
            />
        </Stack>
    );
};

export default ProductSkeleton;
