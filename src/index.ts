import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const allRoutes = new Hono()



serve(allRoutes, ({ port }) =>{
  console.log(`\t Running @ http://localhost:${port}`)
})
