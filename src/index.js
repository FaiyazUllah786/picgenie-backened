import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({ path: ".env" });

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT} \n`);
    });
    app.on("error", (error) => {
      console.log("Error Occured: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Failed !!! ", err);
  });
