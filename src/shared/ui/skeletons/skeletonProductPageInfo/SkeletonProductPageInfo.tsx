import { Skeleton, Stack } from "@mui/material";

const SkeletonProductPageInfo = () => {
    return (
        <Stack spacing={4} alignItems="center">
            <Stack spacing={1}>
                <Skeleton variant="rectangular" height={30} width={340} />
                <Skeleton variant="rectangular" height={25} width={340} />
                <Skeleton variant="rectangular" height={32} width={340} />
            </Stack>
            <Skeleton variant="rectangular" height={44} width={360} />
            <Skeleton variant="rectangular" height={44} width={280} />
            <Skeleton variant="rectangular" height={210} width={450} />
        </Stack>
    );
};

export default SkeletonProductPageInfo;
