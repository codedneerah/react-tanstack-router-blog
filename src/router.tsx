import { lazy, Suspense } from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import NotFound from "./pages/NotFound";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const PostDetail = lazy(() => import("./pages/PostDetail"));

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<p style={{ padding: 40 }}>Loading...</p>}>
      <Outlet />
    </Suspense>
  ),
  notFoundComponent: NotFound,
});

// Home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Post detail route
const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/post/$postId",
  component: PostDetail,
});

// Router instance
export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, postRoute]),
});
