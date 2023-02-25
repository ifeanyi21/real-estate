import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function ChooseUsCard({ heading, icon,text }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {" "}
        <React.Fragment>
          <CardContent>
            <div className="justify-center flex">
              {icon}
            </div>

            <div className="text-center">
              <h5 className="my-4">{heading}</h5>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
               {text}
              </Typography>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
