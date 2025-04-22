import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';

type Post = {
  id: string;
  title: string;
};

const posts: Post[] = [
  { id: "1", title: "Top 10 Greatest Cricket Matches of All Time" },
  { id: "2", title: "Virat Kohli's Best Innings in International Cricket" },
  { id: "3", title: "How T20 Cricket is Changing the Game" },
  { id: "4", title: "The Evolution of Cricket Bats: From Wood to Power" },
  { id: "5", title: "IPL 2025: Teams, Players and Predictions" },
];

const allRoutes = new Hono()

allRoutes.use(
  cors({
    origin: 'http://localhost:4000',
  })
)

allRoutes.get('/posts', async (c) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return c.json(posts, 200)
})

allRoutes.get('/posts/:id', async (c) => {
  const { id } = c.req.param()
  const post = posts.find((p) => p.id === id)
  if (!post) {
    return c.notFound();
  }
  return c.json(post, 200)
})

serve(allRoutes, ({ port }) => {
  console.log(`Server is running on http://localhost:${port}`)
})