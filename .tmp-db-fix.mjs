import { Client } from 'pg';
const c = new Client(process.env.DATABASE_URL);
await c.connect();
const q = 'ALTER TABLE "public"."application" ALTER COLUMN "appliedAt" TYPE timestamptz(3) USING "appliedAt"::timestamptz';
await c.query(q);
const r = await c.query(
  'SELECT column_name, data_type, datetime_precision FROM information_schema.columns WHERE table_name = $1 AND table_schema = $2 AND column_name = $3',
  ['application', 'public', 'appliedAt']
);
console.log(JSON.stringify(r.rows, null, 2));
await c.end();
