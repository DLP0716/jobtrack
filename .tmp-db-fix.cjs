require('dotenv').config();
const { Client } = require('pg');
(async () => {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  const q = 'ALTER TABLE "public"."application" ALTER COLUMN "appliedAt" TYPE timestamptz(3) USING "appliedAt"::timestamptz';
  await client.query(q);
  const r = await client.query(
    'SELECT column_name, data_type, datetime_precision FROM information_schema.columns WHERE table_name = $1 AND table_schema = $2 AND column_name = $3',
    ['application', 'public', 'appliedAt']
  );
  console.log(JSON.stringify(r.rows, null, 2));
  await client.end();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
