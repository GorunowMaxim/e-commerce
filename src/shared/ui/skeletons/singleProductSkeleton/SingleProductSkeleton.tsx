import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import SkeletonRow from "../skeletonRow/SkeletonRow";
import { Grid } from "@mui/material";

const SingleProductSkeleton = () => {
    return (
        <Stack spacing={2}>
            <Skeleton variant="rectangular" height={550} width={550} />
            <SkeletonRow >
                <Grid sx={{ padding: "0 !important" }} item>
                    <Skeleton variant="rectangular" height={129} width={129} />
                </Grid>
                <Grid sx={{ padding: "0 !important" }} item>
                    <Skeleton variant="rectangular" height={129} width={129} />
                </Grid>
                <Grid sx={{ padding: "0 !important" }} item>
                    <Skeleton variant="rectangular" height={129} width={129} />
                </Grid>
                <Grid sx={{ padding: "0 !important" }} item>
                    <Skeleton variant="rectangular" height={129} width={129} />
                </Grid>
            </SkeletonRow>
        </Stack>
    );
};

export default SingleProductSkeleton;
