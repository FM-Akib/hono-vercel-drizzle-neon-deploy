import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import db from './db/db.js'
import { usersTable } from './db/schema.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/users', async (c) => {
  try {
    const users = await db.select().from(usersTable);
    return c.json(users);
  } catch (error) {
    console.error('Database error:', error);
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

app.post('/users', async (c) => {
 try{
    const body = await c.req.json();
    const user = await db.insert(usersTable).values(body).returning();
    return c.json(user);
 }catch (error) {
    console.error('Database error:', error);
    return c.json({ error: 'Failed to post users' }, 500);
  }
})


const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
export default app;
