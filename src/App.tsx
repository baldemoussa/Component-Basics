
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import {ProductDisplay} from "./components/ProductDisplay/ProductDisplay";
import {UserProfileCard} from "./components/UserProfileCard/UserProfileCard";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://freesvg.org/img/1547510251.png'
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg',
  inStock: true
};
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const  onEdit= (userId: string) => {alert(`Editing user ${userId}`)}
 
  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={onEdit}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>
        <UserProfileCard
          user={user}
          showEmail={false}
          showRole={false}
          onEdit={onEdit}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
        <ProductDisplay
          product={product}
          showDescription={false}
          showStockStatus={false}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      </div>
    </div>
  );
};

export default App;