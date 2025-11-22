import PublicRoute from '@/components/PublicRoute';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicRoute>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/dhobisignup.jpg')",
          }}
        >
          <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">DhobiGo</h1>
              <p className="text-xl">Fresh Clothes, Delivered Daily</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center bg-[#F0F7FF] p-4 sm:p-6 lg:p-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </PublicRoute>
  );
}
