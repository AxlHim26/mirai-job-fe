import * as z from 'zod';

// env variables schema
// this is used to validate the environment variables at runtime
// this is example of env variables schema
const EnvSchema = z.object({
  API_URL: z.string(),
  ENABLE_API_MOCKING: z
    .union([z.literal('true'), z.literal('false')])
    .transform((val) => val === 'true')
    .optional(),
  APP_URL: z.string().default('http://localhost:3000'),
  APP_MOCK_API_PORT: z.string().default('8080'),
});

// This function filters out the environment variables that start with 'VITE_APP_'
const getClientEnvVars = () => {
  return Object.entries(import.meta.env).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      if (key.startsWith('VITE_APP_')) {
        acc[key.replace('VITE_APP_', '')] = value;
      }
      return acc;
    },
    {},
  );
};


/**
 *  Creates and validates the environment variables for the client.
 *  It uses the `EnvSchema` to ensure that the required variables are present and correctly
 * @returns { API_URL: string; ENABLE_API_MOCKING?: boolean; APP_URL: string; APP_MOCK_API_PORT: string; }
 */
const createEnv = () => {
  const parsed = EnvSchema.safeParse(getClientEnvVars());

  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors;
    const message = Object.entries(issues)
      .map(([field, errors]) => `- ${field}: ${errors?.join(', ')}`)
      .join('\n');
    console.log(`Invalid environment variables:\n${message}`);
  }

  return parsed.data;
};

export const env = Object.freeze(createEnv());
