## The app is accessible via the link:

http://randombucket135898.s3-website-us-east-1.amazonaws.com/

### Steps I have done To run the app:

1. I created the database (mydb2) via aws RDS.
2. I added the Environment variables in Elastic Beanstalk Configuration.
3. in package.json inside udagram-api i added the following:

```
   "engines": {
   "npm": ">=7.0.0",
   "node": ">=16.0.0"
   }
```

4. I have Set up IAM Keys (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY) and used it in the configuration of pipeline.

### updates:

1. Environment variables is being set via circleCi.
2. set_env.sh file has been removed from app backend.
3. Infrastructure description, app dependencies and pipeline process are in separate .md file.
