import * as dotenv from "dotenv";
dotenv.config();

//central configuration file 

export const config ={
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  awsRegion: process.env.AWS_REGION,
  dbport: Number(process.env.POSTGRES_PORT),
  awsProfile: process.env.AWS_PROFILE,
  awsMediaBucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },
};

