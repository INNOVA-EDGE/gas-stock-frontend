// src/components/Dashboards/ClientDashboard/ClientNewOrder.jsx
import React, { useState, useEffect } from 'react';
import newOrderStyles from './ClientNewOrder.module.css';
import { FaShoppingCart, FaSearch, FaCheckCircle, FaTimesCircle, FaTruck, FaBan, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Importations des images avec des chemins absolus depuis la racine de src
import tof1Image from '/src/assets/images/tof1.jpeg';
import tof2Image from '/src/assets/images/tof2.webp'; // Assurez-vous que l'extension est correcte (.webp)
import tof3Image from '/src/assets/images/tof3.jpeg';
import tof4Image from '/src/assets/images/tof4.jpeg';
import tof5Image from '/src/assets/images/tof5.webp'; // Nouveau fichier d'image ajouté
import tof6Image from '/src/assets/images/tof6.jpeg'; // Nouveau fichier d'image ajouté


const ClientNewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState({}); // { productId: quantity, ... }

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));

        const fetchedProducts = [
          // Utilisation des variables d'importation pour les chemins d'images
          { id: 'BTL001', name: 'Bouteille Butane', weight: '12 kg', price: 12000, imageUrl: tof1Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL002', name: 'Bouteille Butane', weight: '10 kg', price: 10000, imageUrl: tof4Image, inStock: true, deliveryTime: '24h' }, // J'ai supposé tof4 pour BTL002
          { id: 'BTL003', name: 'Bouteille Butane', weight: '15 kg', price: 10000, imageUrl: tof5Image, inStock: false, deliveryTime: '24h' }, // Utilisation de tof5
          { id: 'BTL004', name: 'Bouteille Butane', weight: '5,5 kg', price: 15500, imageUrl: tof2Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL005', name: 'Bouteille Propane', weight: '6 kg', price: 7500, imageUrl: tof3Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL006', name: 'Bouteille GPL', weight: '20 kg', price: 25000, imageUrl: tof6Image, inStock: true, deliveryTime: '48h' }, // Utilisation de tof6
        ];
        
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setIsLoading(false);

        const params = new URLSearchParams(location.search);
        const productIdFromUrl = params.get('productId');
        if (productIdFromUrl) {
            const productToAdd = fetchedProducts.find(p => p.id === productIdFromUrl);
            if (productToAdd && productToAdd.inStock) {
                setCart(prevCart => ({
                    ...prevCart,
                    [productIdFromUrl]: (prevCart[productIdFromUrl] || 0) + 1
                }));
            }
        }

      } catch (err) {
        console.error("Erreur lors du chargement des produits :", err);
        setError("Impossible de charger les produits. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.weight.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.id.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Recherche soumise :", searchTerm);
  };

  const handleUpdateCart = (productId, change) => {
    setCart(prevCart => {
      const newQuantity = (prevCart[productId] || 0) + change;
      if (newQuantity <= 0) {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
      return {
        ...prevCart,
        [productId]: newQuantity
      };
    });
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const handleViewCart = () => {
    console.log("Panier actuel :", cart);
    // TODO: Implémenter la navigation vers une page de résumé/validation du panier
    // Exemple: navigate('/dashboard/client/cart-summary', { state: { cart } });
    alert("Fonctionnalité 'Voir le panier' à implémenter ! Panier actuel dans la console.");
  };

  return (
    <main className={newOrderStyles.mainContent}>
      <div className={newOrderStyles.pageHeader}>
        <h1 className={newOrderStyles.pageTitle}>
          <FaShoppingCart /> Commander du Gaz
        </h1>
        {/* Icône du panier dans l'en-tête, toujours visible */}
        <div className={newOrderStyles.headerCartIconContainer} onClick={handleViewCart}>
          <FaShoppingCart />
          {getTotalCartItems() > 0 && ( // Le badge ne s'affiche que s'il y a des articles
            <span className={newOrderStyles.itemCount}>{getTotalCartItems()}</span>
          )}
        </div>
      </div>

      {/* La barre de recherche est masquée comme demandé */}
      {
      <div className={newOrderStyles.searchBarContainer}>
        <form className={newOrderStyles.searchForm} onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className={newOrderStyles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className={newOrderStyles.searchButton}>
            <FaSearch />
          </button>
        </form>
      </div>
      }

      {isLoading && (
        <div className={newOrderStyles.loadingMessage}>Chargement des produits...</div>
      )}

      {error && (
        <div className={newOrderStyles.errorMessage}>{error}</div>
      )}

      {!isLoading && !error && filteredProducts.length === 0 && (
        <div className={newOrderStyles.noProductsMessage}>
          <p>Aucun produit trouvé pour "{searchTerm}".</p>
        </div>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className={newOrderStyles.productsGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={newOrderStyles.productCard}>
              <img src={product.imageUrl} alt={product.name} className={newOrderStyles.productImage} />
              <h3 className={newOrderStyles.productName}>{product.name} {product.weight}</h3>
              <p className={newOrderStyles.productPrice}>{product.price.toLocaleString('fr-CM')} F</p>
              
              <div className={newOrderStyles.stockStatus}>
                {product.inStock ? (
                  <>
                    <FaCheckCircle className={newOrderStyles.inStockIcon} /> <span className={newOrderStyles.inStockText}>En stock</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className={newOrderStyles.outOfStockIcon} /> <span className={newOrderStyles.outOfStockText}>Rupture de stock</span>
                  </>
                )}
              </div>
              <p className={newOrderStyles.deliveryInfo}><FaTruck /> Livraison en {product.deliveryTime}</p>
              
              {product.inStock ? (
                <>
                  <div className={newOrderStyles.quantityControls}>
                    <button 
                      onClick={() => handleUpdateCart(product.id, -1)} 
                      className={newOrderStyles.quantityButton}
                      disabled={cart[product.id] === undefined || cart[product.id] <= 0}
                    >
                      <FaMinus />
                    </button>
                    <span className={newOrderStyles.productQuantity}>
                      {cart[product.id] || 0}
                    </span>
                    <button 
                      onClick={() => handleUpdateCart(product.id, 1)} 
                      className={newOrderStyles.quantityButton}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button 
                    onClick={() => handleUpdateCart(product.id, 1)}
                    className={newOrderStyles.actionButton}
                  >
                    <FaShoppingCart /> Commander {/* Texte du bouton changé ici */}
                  </button>
                </>
              ) : (
                <button disabled className={newOrderStyles.outOfStockButton}>
                  <FaBan /> Rupture de stock
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ClientNewOrder;