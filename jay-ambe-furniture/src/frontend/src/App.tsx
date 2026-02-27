import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
  Link,
  useLocation,
  createHashHistory,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";

export { Link, useLocation };

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-background font-poppins">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  ),
});

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: "/about", component: AboutPage });
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: "/gallery", component: GalleryPage });
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: "/services", component: ServicesPage });
const projectsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects", component: ProjectsPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: "/contact", component: ContactPage });
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  galleryRoute,
  servicesRoute,
  projectsRoute,
  contactRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
