import { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';

const Products = () => {
  // Состояние для хранения списка товаров
  const [products, setProducts] = useState([
    // Начальные данные для примера
    { 
      id: 1, 
      title: "Смартфон Galaxy", 
      description: "Мощный смартфон с отличной камерой", 
      price: 24999 
    },
    { 
      id: 2, 
      title: "Ноутбук UltraBook", 
      description: "Легкий и производительный ноутбук для работы", 
      price: 69990 
    }
  ]);

  // Состояние для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для добавления нового товара
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Наши товары</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Добавить товар
        </button>
      </div>
      
      {/* Список товаров */}
      <ProductList products={products} />
      
      {/* Модальное окно для добавления товара */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;