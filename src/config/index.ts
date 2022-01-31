import dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, `../../.env`),
});

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi.number().default(9090),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_DAYS: Joi.string()
      .default('1d')
      .description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.string()
      .default('30d')
      .description('days after which refresh tokens expire'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_DAYS,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  },
};
