// src/components/Dashboards/ClientDashboard/ClientProductDetails.jsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productDetailsStyles from './ClientProductDetails.module.css'
import {
  FaShoppingCart,
  FaTruck,
  FaTag,
  FaBalanceScale,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa'

// Importations des images
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

const ClientProductDetails = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    // Simule une requête API pour récupérer les détails du produit
    const fetchProductDetails = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)) // Simule un délai de chargement
        const foundProduct = allProducts.find((p) => p.id === productId)
        if (foundProduct) {
          setProduct(foundProduct)
        } else {
          setError('Produit non trouvé.')
        }
        setIsLoading(false)
      } catch (err) {
        console.error('Erreur lors du chargement des détails du produit :', err)
        setError('Impossible de charger les détails du produit.')
        setIsLoading(false)
      }
    }
    fetchProductDetails()
  }, [productId])

  // Gère l'ajout du produit au panier et la redirection
  const handleAddToCart = () => {
    if (product && product.inStock) {
      // Redirige vers la page de commande en passant l'ID du produit
      // afin qu'il soit ajouté au panier directement
      navigate(`/dashboard/client/new-order?productId=${product.id}`)
    } else {
      alert('Ce produit est en rupture de stock.')
    }
  }

  if (isLoading)
    return (
      <div className={productDetailsStyles.loadingMessage}>
        Chargement des détails...
      </div>
    )
  if (error)
    return <div className={productDetailsStyles.errorMessage}>{error}</div>
  if (!product)
    return (
      <div className={productDetailsStyles.errorMessage}>
        Produit non trouvé.
      </div>
    )

  return (
    <main className={productDetailsStyles.mainContent}>
      <div className={productDetailsStyles.productDetailsCard}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={productDetailsStyles.productImage}
        />
        <div className={productDetailsStyles.productInfo}>
          <h1 className={productDetailsStyles.productTitle}>
            {product.name} {product.weight}
          </h1>
          <p className={productDetailsStyles.productPrice}>
            <FaTag /> {product.price.toLocaleString('fr-CM')} F
          </p>
          <p className={productDetailsStyles.productDescription}>
            {product.description}
          </p>
          <div className={productDetailsStyles.specsGrid}>
            <p className={productDetailsStyles.specItem}>
              <FaBalanceScale /> Poids : <span>{product.weight}</span>
            </p>
            <p className={productDetailsStyles.specItem}>
              <FaTruck /> Livraison : <span>{product.deliveryTime}</span>
            </p>
            <p
              className={`${productDetailsStyles.specItem} ${
                product.inStock
                  ? productDetailsStyles.inStock
                  : productDetailsStyles.outOfStock
              }`}
            >
              {product.inStock ? <FaCheckCircle /> : <FaTimesCircle />}
              <span>{product.inStock ? 'En stock' : 'Rupture de stock'}</span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className={productDetailsStyles.addToCartButton}
            disabled={!product.inStock}
          >
            <FaShoppingCart /> Ajouter au panier
          </button>
        </div>
      </div>
    </main>
  )
}

export default ClientProductDetails
