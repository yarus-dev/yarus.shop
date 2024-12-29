import Container from '@/components/layout/Container';

function NotFoundPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Container className="max-w-prose text-center text-lg px-3 py-4">
        <h1 className="text-4xl font-bold mb-4">
          Йой! Ця сторінка не знайдена!
          <br />
          <small>(Помилка 404)</small>
        </h1>
        <p>
          Швидше за все, ця сторінка ніколи не існувала
          <br />
          або стала непотрібною, і ми її видалили.
        </p>
        <p>
          Таке трапляється, не засмучуйтесь.
          <br />
          На головній є ще сторінки, не гірші за цю.
        </p>
      </Container>
    </div>
  );
}

export default NotFoundPage;
