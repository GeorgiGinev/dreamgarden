import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
 
export const config = {
  matcher: ['/', '/(bg|en)/:path*']
};

export function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    // Лист от езици
    locales: ['en', 'bg'],
   
    // Език по подразбиране
    defaultLocale: 'en',
  });

  const response = handleI18nRouting(request);

  if(response) {
    return response; 
  } 

  /**
   * Сложен е под handleI18nRouting понеже преводите са по-приоритетни и да се провери дали съществуват
   */
  if (request.method === 'POST') {
    const url = request.nextUrl.clone();
    url.pathname = process.env.API_URL + 'contact';
    
    return NextResponse.rewrite(url);
  }
}