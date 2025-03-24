import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/customers/guarantors')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <Outlet />
}
