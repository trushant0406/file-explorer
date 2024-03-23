import { useNavigate } from "react-router-dom";
import { Card } from "@mui/joy";
import Typography from '@mui/joy/Typography';


const TypographyCard = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center p-5 hover:cursor-pointer " onClick={() => navigate("/home")}>
            <Card variant="outlined" sx={{ maxWidth: 450, height: 150 }}>
                <Typography level="h1">Welcome to File Explorer </Typography>
                <Typography level="h4">
                    Click here to explore
                </Typography>
            </Card>
        </div>
    )
}

export default TypographyCard;