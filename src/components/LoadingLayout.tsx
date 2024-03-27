function LoadingLayout({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  return isLoading ? <main>Cargando...</main> : <>{children}</>;
}

export default LoadingLayout;
