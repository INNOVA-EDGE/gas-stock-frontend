// src/components/Dashboards/ClientDashboard/ClientNewOrder.jsx
import React, { useState, useEffect } from 'react'
import newOrderStyles from './ClientNewOrder.module.css'
import {
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaBan,
  FaPlus,
  FaMinus,
  FaEye,
} from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'

// Importations des images avec des chemins absolus depuis la racine de src
import tof1Image from '/src/assets/images/tof1.jpeg'
import tof2Image from '/src/assets/images/tof2.webp'
import tof3Image from '/src/assets/images/tof3.jpeg'
import tof4Image from '/src/assets/images/tof4.jpeg'
import tof5Image from '/src/assets/images/tof5.webp'
import tof6Image from '/src/assets/images/tof6.jpeg'

// Définition des produits pour la démo
const allProducts = [
  {
    id: 'BTL001',
    name: 'Bouteille Butane',
    weight: '12 kg',
    price: 12000,
    imageUrl: tof1Image,
    inStock: true,
    deliveryTime: '24h',
    description:
      'Bouteille de gaz butane de 12 kg, idéale pour les usages domestiques et professionnels. Garantie de sécurité et de qualité supérieure.',
  },
  {
    id: 'BTL002',
    name: 'Bouteille Butane',
    weight: '10 kg',
    price: 10000,
    imageUrl: tof4Image,
    inStock: true,
    deliveryTime: '24h',
    description:
      'Une bouteille de gaz butane compacte de 10 kg, parfaite pour les espaces restreints. Facile à transporter et à utiliser.',
  },
  {
    id: 'BTL003',
    name: 'Bouteille Butane',
    weight: '15 kg',
    price: 10000,
    imageUrl: tof5Image,
    inStock: false,
    deliveryTime: '24h',
    description:
      'Bouteille de gaz butane de grande capacité pour une utilisation prolongée. Actuellement en rupture de stock, mais de retour bientôt.',
  },
  {
    id: 'BTL004',
    name: 'Bouteille Butane',
    weight: '5,5 kg',
    price: 15500,
    imageUrl: tof2Image,
    inStock: true,
    deliveryTime: '24h',
    description:
      'La plus petite bouteille de notre gamme, légère et pratique pour les petits appareils de cuisson. Un incontournable pour les étudiants.',
  },
  {
    id: 'BTL005',
    name: 'Bouteille Propane',
    weight: '6 kg',
    price: 7500,
    imageUrl: tof3Image,
    inStock: true,
    deliveryTime: '24h',
    description:
      "Bouteille de gaz propane pour les applications nécessitant une haute pression, comme le soudage ou les chauffages d'appoint extérieurs.",
  },
  {
    id: 'BTL006',
    name: 'Bouteille GPL',
    weight: '20 kg',
    price: 25000,
    imageUrl: tof6Image,
    inStock: true,
    deliveryTime: '48h',
    description:
      'Bouteille de gaz GPL de 20 kg pour une utilisation industrielle ou les grandes cuisines. Livraison rapide garantie.',
  },
]

const ClientNewOrder = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cart, setCart] = useState({})

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    const fetchProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800))
        setProducts(allProducts)
        setFilteredProducts(allProducts)
        setIsLoading(false)

        const params = new URLSearchParams(location.search)
        const productIdFromUrl = params.get('productId')
        if (productIdFromUrl) {
          const productToAdd = allProducts.find(
            (p) => p.id === productIdFromUrl
          )
          if (productToAdd && productToAdd.inStock) {
            setCart((prevCart) => ({
              ...prevCart,
              [productIdFromUrl]: (prevCart[productIdFromUrl] || 0) + 1,
            }))
          }
        }
      } catch (err) {
        console.error('Erreur lors du chargement des produits :', err)
        setError(
          'Impossible de charger les produits. Veuillez réessayer plus tard.'
        )
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [location.search])

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.weight.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.id.toLowerCase().includes(lowerCaseSearchTerm)
    )
    setFilteredProducts(results)
  }, [searchTerm, products])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Recherche soumise :', searchTerm)
  }

  const handleUpdateCart = (productId, change) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[productId] || 0) + change
      if (newQuantity <= 0) {
        const newCart = { ...prevCart }
        delete newCart[productId]
        return newCart
      }
      return {
        ...prevCart,
        [productId]: newQuantity,
      }
    })
  }

  const handleViewDetails = (productId) => {
    navigate(`/dashboard/client/product-details/${productId}`)
  }

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  }

  const handleViewCart = () => {
    if (getTotalCartItems() === 0) {
      alert('Votre panier est vide.')
      return
    }
    navigate('/dashboard/client/cart-summary', { state: { cart, products } })
  }

  return (
    <main className={newOrderStyles.mainContent}>
      <div className={newOrderStyles.pageHeader}>
        <h1 className={newOrderStyles.pageTitle}>
          <FaShoppingCart /> Commander du Gaz
        </h1>
        <div
          className={newOrderStyles.headerCartIconContainer}
          onClick={handleViewCart}
        >
          <FaShoppingCart />
          {getTotalCartItems() > 0 && (
            <span className={newOrderStyles.itemCount}>
              {getTotalCartItems()}
            </span>
          )}
        </div>
      </div>

      <div className={newOrderStyles.searchBarContainer}>
        <form
          className={newOrderStyles.searchForm}
          onSubmit={handleSearchSubmit}
        >
          <input
            type='text'
            placeholder='Rechercher un produit...'
            className={newOrderStyles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type='submit' className={newOrderStyles.searchButton}>
            <FaSearch />
          </button>
        </form>
      </div>

      {isLoading && (
        <div className={newOrderStyles.loadingMessage}>
          Chargement des produits...
        </div>
      )}

      {error && <div className={newOrderStyles.errorMessage}>{error}</div>}

      {!isLoading && !error && filteredProducts.length === 0 && (
        <div className={newOrderStyles.noProductsMessage}>
          <p>Aucun produit trouvé pour "{searchTerm}".</p>
        </div>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className={newOrderStyles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={newOrderStyles.productCard}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={newOrderStyles.productImage}
              />
              <h3 className={newOrderStyles.productName}>
                {product.name} {product.weight}
              </h3>
              <p className={newOrderStyles.productPrice}>
                {product.price.toLocaleString('fr-CM')} F
              </p>

              <div className={newOrderStyles.stockStatus}>
                {product.inStock ? (
                  <>
                    <FaCheckCircle className={newOrderStyles.inStockIcon} />{' '}
                    <span className={newOrderStyles.inStockText}>En stock</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className={newOrderStyles.outOfStockIcon} />{' '}
                    <span className={newOrderStyles.outOfStockText}>
                      Rupture de stock
                    </span>
                  </>
                )}
              </div>
              <p className={newOrderStyles.deliveryInfo}>
                <FaTruck /> Livraison en {product.deliveryTime}
              </p>

              {product.inStock ? (
                <>
                  <div className={newOrderStyles.quantityControls}>
                    <button
                      onClick={() => handleUpdateCart(product.id, -1)}
                      className={newOrderStyles.quantityButton}
                      disabled={
                        cart[product.id] === undefined || cart[product.id] <= 0
                      }
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
                    onClick={() => handleViewDetails(product.id)}
                    className={`${newOrderStyles.actionButton} ${newOrderStyles.detailsButton}`}
                  >
                    <FaEye /> <span>Voir les détails</span>
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
  )
}

export default ClientNewOrder
