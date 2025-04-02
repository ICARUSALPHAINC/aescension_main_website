import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import Button from "@mui/material/Button";

const cards = [
  {
    id: 1,
    title: "Patch 1",
    description: "Plants are essential for all life.",
    image: "./logo.png",
    date: "April 2",
  },
  {
    id: 2,
    title: "Patch 2",
    description: "Animals are a part of nature.",
    image: "./logo.png",
    date: "April 3",
  },
  {
    id: 3,
    title: "Patch 3",
    description: "Humans depend on plants and animals for survival.",
    image: "./logo192.png",
    date: "April 4",
  },
  {
    id: 4,
    title: "Patch 4",
    description: "Humans depend on plants and animals for survival.",
    image: "./logo192.png",
    date: "April 5",
  },
  {
    id: 5,
    title: "Patch 5",
    description: "Humans depend on plants and animals for survival.",
    image: "./AESCENSION.png",
    date: "April 6",
  },
  {
    id: 6,
    title: "Patch 6",
    description: "Humans depend on plants and animals for survival.",
    image: "./logo192.png",
    date: "April 7",
  },
  {
    id: 7,
    title: "Patch 7",
    description: "Humans depend on plants and animals for survival.",
    image: "./logo192.png",
    date: "April 8",
  },
];

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

function NewsSection() {
  return (
    <Box sx={{ backgroundColor: "#d1d5db", py: 5 }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: 4 }}>
        News
      </Typography>

      <Box sx={{ overflow: "hidden", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            gap: 12,
            animation: `${scroll} 60s linear infinite`,
            width: "fit-content",
            px: 2,
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <Card
              key={`${card.id}-${index}`}
              sx={{
                width: 280,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#1c1f2e",
                color: "#fff",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: 160,
                  overflow: "hidden",
                  backgroundColor: "#2a2d3e",
                }}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Box>

              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {card.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {card.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", marginTop: 1 }}
                >
                  {card.date}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: 1,
            backgroundColor: "#1e90ff",
            "&:hover": {
              backgroundColor: "#187bcd",
            },
          }}
        >
          VIEW ALL
        </Button>
      </Box>
    </Box>
  );
}

export default NewsSection;
