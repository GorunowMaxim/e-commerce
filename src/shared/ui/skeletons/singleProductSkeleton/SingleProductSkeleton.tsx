import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import SkeletonRow from "../skeletonRow/SkeletonRow";
import { Grid } from "@mui/material";

const SingleProductSkeleton = () => {
    return (
        <Stack spacing={2}>
            <Skeleton
                variant="rectangular"
                sx={{
                    width: { xs: "85vw", sm: "550px" },
                    height: { xs: "85vw", sm: "550px" },
                }}
            />
            <SkeletonRow spacing={1.5}>
                {[...Array(4)].map((_item, index) => {
                    return (
                        <Grid key={index} sx={{ padding: "0!important" }} item>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: { xs: "20vw", sm: "129px" },
                                    height: { xs: "20vw", sm: "129px" },
                                }}
                            />
                        </Grid>
                    );
                })}
            </SkeletonRow>
        </Stack>
    );
};

export default SingleProductSkeleton;
