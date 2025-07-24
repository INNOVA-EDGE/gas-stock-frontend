// src/components/Dashboards/ClientDashboard/ClientCartSummary.jsx
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cartStyles from './ClientCartSummary.module.css'
import {
  FaShoppingCart,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
} from 'react-icons/fa'

// Importations des images
import tof1Image from '/src/assets/images/tof1.jpeg'
import tof2Image from '/src/assets/images/tof2.webp'
import tof3Image from '/src/assets/images/tof3.jpeg'
import tof4Image from '/src/assets/images/tof4.jpeg'
import tof5Image from '/src/assets/images/tof5.webp'
import tof6Image from '/src/assets/images/tof6.jpeg'

const productImages = {
  BTL001: tof1Image,
  BTL004: tof2Image,
  BTL005: tof3Image,
  BTL002: tof4Image,
  BTL003: tof5Image,
  BTL006: tof6Image,
}

const getTomorrowDate = () => {
  const today = new Date()
  today.setDate(today.getDate() + 1)
  return today.toISOString().split('T')[0]
}

const ClientCartSummary = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { cart, products } = location.state || { cart: {}, products: [] }

  const [deliveryDate, setDeliveryDate] = useState(getTomorrowDate())
  // États permanents pour l'adresse personnalisée
  const [customAddress, setCustomAddress] = useState('')
  const [addressDescription, setAddressDescription] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Paiement à la livraison')

  const getProductDetails = (productId) => {
    return products.find((p) => p.id === productId)
  }

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = getProductDetails(productId)
      if (product) {
        return total + product.price * quantity
      }
      return total
    }, 0)
  }

  const handleValidateOrder = () => {
    // Vérifie si les champs d'adresse sont remplis
    if (!customAddress || !addressDescription) {
      alert(
        'Veuillez renseigner votre adresse et une description pour valider la commande.'
      )
      return
    }

    const orderData = {
      items: Object.entries(cart).map(([productId, quantity]) => ({
        ...getProductDetails(productId),
        quantity,
      })),
      deliveryDate,
      deliveryAddress: customAddress,
      addressDescription,
      paymentMethod,
      totalAmount: calculateTotal(),
    }

    console.log('Données de la commande à envoyer :', orderData)
    alert(
      `Commande validée ! Informations de livraison : \n- Date : ${deliveryDate} \n- Adresse : ${customAddress} (${addressDescription}) \n- Paiement : ${paymentMethod}`
    )

    // navigate('/dashboard/client/orders');
  }

  if (Object.keys(cart).length === 0) {
    return (
      <main className={cartStyles.mainContent}>
        <div className={cartStyles.emptyCartMessage}>
          <FaShoppingCart size={60} />
          <h2>Votre panier est vide.</h2>
          <p>
            Ajoutez des produits depuis la page "Commander du Gaz" pour voir
            votre récapitulatif ici.
          </p>
          <button
            onClick={() => navigate('/dashboard/client/new-order')}
            className={cartStyles.backButton}
          >
            Retourner aux produits
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className={cartStyles.mainContent}>
      <h1 className={cartStyles.pageTitle}>
        <FaShoppingCart /> Récapitulatif de votre commande
      </h1>

      <div className={cartStyles.cartSummaryContainer}>
        <div className={cartStyles.cartItemsList}>
          {Object.entries(cart).map(([productId, quantity]) => {
            const product = getProductDetails(productId)
            if (!product) return null

            return (
              <div key={productId} className={cartStyles.cartItemCard}>
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className={cartStyles.itemImage}
                />
                <div className={cartStyles.itemDetails}>
                  <h3>
                    {product.name} {product.weight}
                  </h3>
                  <p>
                    {quantity} x {product.price.toLocaleString('fr-CM')} F
                  </p>
                  <p>
                    Total : {(quantity * product.price).toLocaleString('fr-CM')}{' '}
                    F
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={cartStyles.cartTotalBox}>
          <div className={cartStyles.formSection}>
            <h2>
              <FaMapMarkerAlt /> Informations de livraison
            </h2>
            <div className={cartStyles.formGroup}>
              <label htmlFor='deliveryDate' className={cartStyles.formLabel}>
                <FaCalendarAlt /> Date de livraison
              </label>
              <input
                type='date'
                id='deliveryDate'
                className={cartStyles.formControl}
                value={deliveryDate}
                min={getTomorrowDate()}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>

            {/* Champs d'adresse permanents */}
            <div className={cartStyles.formGroup}>
              <label htmlFor='customAddress' className={cartStyles.formLabel}>
                Votre adresse
              </label>
              <input
                type='text'
                id='customAddress'
                className={cartStyles.formControl}
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                placeholder='Ex: Rue 5, Quartier des Fleurs'
                required
              />
            </div>
            <div className={cartStyles.formGroup}>
              <label
                htmlFor='addressDescription'
                className={cartStyles.formLabel}
              >
                Détails (à côté de...)
              </label>
              <textarea
                id='addressDescription'
                className={cartStyles.formControl}
                value={addressDescription}
                onChange={(e) => setAddressDescription(e.target.value)}
                placeholder='Ex: Maison à côté de la pharmacie du carrefour'
                rows='3'
                required
              />
            </div>

            <h2>
              <FaCreditCard /> Mode de paiement
            </h2>
            <div className={cartStyles.formGroup}>
              <select
                className={cartStyles.formControl}
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value='Paiement à la livraison'>
                  Paiement à la livraison
                </option>
                <option value='Mobile Money (MTN/Orange)'>
                  Mobile Money (MTN/Orange)
                </option>
              </select>
            </div>
          </div>

          <div className={cartStyles.totalSection}>
            <h2>Total de la commande</h2>
            <p className={cartStyles.totalAmount}>
              {calculateTotal().toLocaleString('fr-CM')} F
            </p>
            <button
              onClick={handleValidateOrder}
              className={cartStyles.validateButton}
            >
              <FaCheckCircle /> Valider la commande
            </button>
            <button
              onClick={() => navigate('/dashboard/client/new-order')}
              className={cartStyles.continueShoppingButton}
            >
              Continuer mes achats
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ClientCartSummary
