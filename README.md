
# Serverless Framework Node HTTP API on AWS - CRUD

Este es un CRUD aplicando patrones de diseño y abstracción, se usan buenas practicas para la integración, realizado con JavaScript, es en serverless framework recuerda conectarla con tus datos de AWS y hacer el deploy

## Usage

### Deployment

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Service deployed to stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [HTTP API (API Gateway V2) event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api).

```

### Local development

El entorno de desarrollo local lo podemos usar con el comando

```
serverless offline start
```


