##

The app is accessible via the link:
http://randombucket135898.s3-website-us-east-1.amazonaws.com/

### aws urls of the project

1. aws s3 url :
   http://randombucket135898.s3-website-us-east-1.amazonaws.com/
2. database postgres host:
   mydb2.cqdodlstlmmv.us-east-1.rds.amazonaws.com
3. Elastic beanstalk url:
   https://Api-env.eba-cypwy9cp.us-east-1.elasticbeanstalk.com

### Step I have done To run the app

1. I created the database (mydb2)
2. variables changed in EB
3. in package.json inside udagram-api:
   "engines": {
   "npm": ">=7.0.0",
   "node": ">=16.0.0"
   }
4. I removed zip command, as when we deploy the app zipping file is done automatically

# On Piplines:

5.  removed profile name eb-cli from aws config
6.  set profile: default
