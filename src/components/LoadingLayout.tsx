function LoadingLayout({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  return isLoading ? (
    <main className="text-2xl font-semibold">Cargando...</main>
  ) : (
    <>{children}</>
  );
}

export default LoadingLayout;
