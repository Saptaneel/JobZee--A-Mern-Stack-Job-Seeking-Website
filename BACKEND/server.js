import app from "./app.js";
import cloudinary from "cloudinary";


cloudinary.v2.config({
    cloud_name: "djf9iixiu",
    api_key: 981647738542136,
    api_secret: "3J95npc033iobD_aXq4shDy1YC8",
  });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });