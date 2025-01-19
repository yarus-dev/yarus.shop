export default async function ArticlePage() {
  return (
    <div className="flex flex-col container mx-auto sm:flex-row">
      <main className="flex-1">
        <div className="max-w-prose mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          possimus quae odio perferendis error laudantium nemo eaque quaerat
          deleniti quas natus officia rem minus, obcaecati cupiditate facilis
          impedit quia aliquid!
        </div>
      </main>

      <nav className="order-first sm:w-32">Sidebar</nav>

      <aside className="sm:w-32">Right Sidebar</aside>
    </div>
  );
}
