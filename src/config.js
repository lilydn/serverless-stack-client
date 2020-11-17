const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-s3-bucket",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7g1vwf38l0.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_KC4AuARIc",
    APP_CLIENT_ID: "1eb925jm0ff7jflc4eidcga643",
    IDENTITY_POOL_ID: "us-east-2:0a4be940-eed2-48b4-a8a3-30ab046f948f",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;