import { ReactNode } from "react";
import { Grid } from "@mui/material";

const SkeletonRow = ({ children, spacing }: { children: ReactNode, spacing?: number }) => {
    return <Grid container justifyContent="space-between" spacing={spacing}>{children}</Grid>;
};

export default SkeletonRow;
