import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get token from cookies or headers
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '')

  const { pathname } = request.nextUrl

  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/register/customer',
    '/auth/register/provider',
    '/auth/register/rider',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/application-submitted'
  ]

  // Routes that require specific roles
  const protectedRoutes = {
    customer: [
      '/dashboard',
      '/find-dhobi',
      '/your-orders',
      '/inbox',
      '/settings',
      '/become-dhobi',
      '/become-rider',
      '/support'
    ],
    provider: ['/dhobi'],
    rider: ['/rider'],
    admin: ['/admin']
  }

  // Check if the current path is public
  const isPublicRoute = publicRoutes.includes(pathname) || 
                       pathname.startsWith('/auth/reset-password/')

  // If it's a public route, allow access
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // If no token and not a public route, redirect to login
  if (!token) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // For protected routes, let the client-side components handle role-based access
  // The middleware just ensures the user has a token
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets|public).*)',
  ],
}