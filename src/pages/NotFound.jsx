function NotFoundPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Йой! Ця сторінка не знайдена! <small>(Помилка 404)</small>
        </h1>
        <p className="text-lg text-gray-600">
          Швидше за все, ця сторінка ніколи не існувала або стала непотрібною, і
          ми її видалили.
        </p>
        <p className="text-lg text-gray-600">
          Таке трапляється, не засмучуйтесь. На головній є ще сторінки, не гірші
          за цю.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
