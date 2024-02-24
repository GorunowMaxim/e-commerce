import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" height={270} width={270} />
            <Skeleton variant="rounded" height={20} width={270} />
            <Skeleton variant="rounded" height={10} width={270} />
            <Skeleton variant="rounded" height={10} width={270} />
        </Stack>
    );
};

export default ProductSkeleton;
