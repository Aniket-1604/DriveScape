import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:e0wuyAFOH5nx@ep-patient-breeze-a5qkisbe.us-east-2.aws.neon.tech/ai-car-redesign?sslmode=require',
  },
});
