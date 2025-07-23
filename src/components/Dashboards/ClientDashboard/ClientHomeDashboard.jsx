// src/components/Dashboards/ClientDashboard/ClientHome.jsx
// Ou src/components/Dashboards/ClientDashboard/ClientHomeDashboard.jsx si c'est le nom de fichier que vous utilisez
import React, { useState, useEffect, useRef } from 'react';
import styles from './ClientDashboard.module.css'; // Styles généraux du dashboard
import homeStyles from './ClientHome.module.css'; // Styles spécifiques à la page d'accueil
import { FaBox, FaChartLine, FaClipboardList, FaTruck, FaCheckCircle, FaTimesCircle, FaBan, FaUndo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Importations des images avec des chemins absolus depuis la racine du projet (/src)
import tof1Image from '/src/assets/images/tof1.jpeg';
import tof2Image from '/src/assets/images/tof2.webp';
import tof3Image from '/src/assets/images/tof3.jpeg';
import tof4Image from '/src/assets/images/tof4.jpeg';
// Ajoutez ces imports si vous utilisez tof5 et tof6
// import tof5Image from '/src/assets/images/tof5.jpeg';
// import tof6Image from '/src/assets/images/tof6.jpeg';


const ClientHome = () => { // Ou const ClientHomeDashboard = () => { si c'est le nom de votre composant
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const productCarouselRef = useRef(null);
  const [isAutoScrollingActive, setIsAutoScrollingActive] = useState(true);
  const animationFrameIdRef = useRef(null);

  const user = {
    fullName: "M. Jean Dupont",
    lastLogin: "20 juillet 2025 à 10:30",
    profileLink: "/dashboard/client/profile",
    avatarUrl: "https://via.placeholder.com/40" 
  };

  const quickStats = {
    pendingOrders: 3,
    deliveredOrders: 15,
    returnsInProgress: 1,
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchFeaturedProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const originalProducts = [
          { id: 'BTL001', name: 'Bouteille Butane', weight: '12 kg', price: 12000, imageUrl: tof1Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL004', name: 'Bouteille Butane', weight: '5,5 kg', price: 15500, imageUrl: tof2Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL005', name: 'Bouteille Propane', weight: '6 kg', price: 7500, imageUrl: tof3Image, inStock: true, deliveryTime: '24h' },
          { id: 'BTL002', name: 'Bouteille Butane', weight: '10 kg', price: 10000, imageUrl: tof4Image, inStock: true, deliveryTime: '24h' },
          // Décommentez et ajoutez ces lignes si vous souhaitez utiliser tof5 et tof6 :
          // { id: 'BTL003', name: 'Bouteille Butane', weight: '15 kg', price: 15000, imageUrl: tof5Image, inStock: true, deliveryTime: '24h' },
          // { id: 'BTL006', name: 'Bouteille Propane', weight: '13 kg', price: 12500, imageUrl: tof6Image, inStock: true, deliveryTime: '24h' },
        ];
        
        const duplicatedProducts = originalProducts.map(p => ({ 
          ...p, 
          id: `${p.id}-dup-${Math.random().toString(36).substring(2, 9)}` 
        }));
        
        setFeaturedProducts([...originalProducts, ...duplicatedProducts]);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des produits à la une :", err);
        setError("Impossible de charger les produits. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Logique de défilement automatique
  useEffect(() => {
    const carousel = productCarouselRef.current;

    if (!carousel || !isAutoScrollingActive) {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      return;
    }

    const scrollSpeed = 1; 
    let lastTimestamp = 0;

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      const framesPassed = elapsed / (1000 / 60); 
      const currentScrollAmount = scrollSpeed * framesPassed;
      
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) { 
        carousel.scrollLeft = 0; 
      } else {
        carousel.scrollLeft += currentScrollAmount; 
      }
      
      animationFrameIdRef.current = requestAnimationFrame(animateScroll);
      lastTimestamp = timestamp; 
    };

    animationFrameIdRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };
  }, [isAutoScrollingActive, featuredProducts.length]);

  const handleMouseEnter = () => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (isAutoScrollingActive && !animationFrameIdRef.current) {
      const carousel = productCarouselRef.current;
      if (carousel) {
        let lastTimestamp = performance.now(); 
        const scrollSpeed = 1; 

        const animateScroll = (timestamp) => {
            const elapsed = timestamp - lastTimestamp;
            const framesPassed = elapsed / (1000 / 60);
            const currentScrollAmount = scrollSpeed * framesPassed;

            if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft += currentScrollAmount;
            }
            animationFrameIdRef.current = requestAnimationFrame(animateScroll);
            lastTimestamp = timestamp;
        };
        animationFrameIdRef.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  // MODIFICATION ICI : Redirection vers la page de commande
  const handleProductClick = (originalProductId) => {
    setIsAutoScrollingActive(false); 
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
    // Redirige vers la page de commande avec l'ID du produit pour éventuellement le pré-sélectionner ou le mettre en évidence
    navigate(`/dashboard/client/new-order?productId=${originalProductId}`);
  };

  // MODIFICATION ICI : Redirection pour le bouton "Passer une Nouvelle Commande"
  const handleOrderNowClick = () => {
    navigate('/dashboard/client/new-order');
  };

  return (
    <main className={styles.mainContent}>
      {/* En-tête du contenu principal - Affiche seulement "Bienvenue" en haut à gauche */}
      

      {/* Section Produits Populaires / À la une (Carrousel) */}
      <section className={`${styles.section} ${homeStyles.featuredProductsSection}`}>
        <h2 className={homeStyles.sectionTitle}><FaBox /> Produits Populaires</h2>
        
        {isLoading && (
          <div className={homeStyles.loadingMessage}>Chargement des produits...</div>
        )}

        {error && (
          <div className={homeStyles.errorMessage}>{error}</div>
        )}

        {!isLoading && !error && featuredProducts.length === 0 && (
          <div className={homeStyles.noProductsMessage}>
            <p>Aucun produit populaire à afficher pour le moment.</p>
          </div>
        )}

        {!isLoading && !error && featuredProducts.length > 0 && (
          <div
            ref={productCarouselRef} 
            className={homeStyles.productCarousel}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {featuredProducts.map(product => (
              <div
                key={product.id} 
                className={`${homeStyles.productCard} ${!product.inStock ? homeStyles.outOfStockCard : ''}`}
                // Le clic sur la carte redirige vers la page de commande
                onClick={() => handleProductClick(product.id.split('-dup')[0])} 
              >
                {/* L'image est maintenant liée à la variable d'importation unique */}
                <img src={product.imageUrl} alt={product.name} className={homeStyles.productImage} />
                <h3 className={homeStyles.productName}>{product.name} {product.weight}</h3>
                <p className={homeStyles.productPrice}>{product.price.toLocaleString('fr-CM')} F</p>
                
                <div className={homeStyles.stockStatus}>
                  {product.inStock ? (
                    <>
                      <FaCheckCircle className={homeStyles.inStockIcon} /> <span className={homeStyles.inStockText}>En stock</span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className={homeStyles.outOfStockIcon} /> <span className={homeStyles.outOfStockText}>Rupture de stock</span>
                    </>
                  )}
                </div>
                <p className={homeStyles.deliveryInfo}><FaTruck /> Livraison en {product.deliveryTime}</p>
                
                {product.inStock ? (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Empêche le clic sur le bouton de déclencher le clic sur la carte parente
                      handleProductClick(product.id.split('-dup')[0]);
                    }} 
                    className={homeStyles.viewProductButton}
                  >
                    Voir le produit
                  </button>
                ) : (
                  <button disabled className={homeStyles.outOfStockButton} onClick={(e) => e.stopPropagation()}>
                    <FaBan /> Rupture de stock
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bouton "Passer une Nouvelle Commande" - Redirige vers la page de commande */}
      <div className={homeStyles.orderNowSection}>
        <button onClick={handleOrderNowClick} className={homeStyles.orderNowButton}>
          <FaBox /> Passer une Nouvelle Commande
        </button>
      </div>

      {/* Section Aperçu Rapide (Quick Stats) */}
      <section className={`${styles.section} ${homeStyles.quickStats}`}>
        <h2 className={homeStyles.sectionTitle}><FaChartLine /> Aperçu Rapide</h2>
        <div className={homeStyles.statsGrid}>
          <div className={homeStyles.statCard}>
            <h3>Commandes en attente</h3>
            <p className={homeStyles.statNumber}>{quickStats.pendingOrders}</p>
            <button onClick={() => navigate('/dashboard/client/orders')} className={homeStyles.statActionButton}>Voir mes commandes</button>
          </div>
          <div className={homeStyles.statCard}>
            <h3>Commandes livrées</h3>
            <p className={homeStyles.statNumber}>{quickStats.deliveredOrders}</p>
            <button onClick={() => navigate('/dashboard/client/orders')} className={homeStyles.statActionButton}>Voir l'historique</button>
          </div>
          <div className={homeStyles.statCard}>
            <h3>Retours en cours</h3>
            <p className={homeStyles.statNumber}>{quickStats.returnsInProgress}</p>
            <button onClick={() => navigate('/dashboard/client/returns')} className={homeStyles.statActionButton}>Gérer les retours</button>
          </div>
        </div>
      </section>
      
      {/* Section : Vos Autres Actions Rapides (avec l'option Mes Retours) */}
      <section className={`${styles.section} ${homeStyles.shortcutsSection}`}> 
        <h2 className={homeStyles.sectionTitle}><FaClipboardList /> Vos Autres Actions Rapides</h2>
        <div className={homeStyles.shortcutsGrid}>
            <button onClick={() => navigate('/dashboard/client/orders')} className={homeStyles.shortcutButton}>
                <FaClipboardList /> Voir Mes Commandes
            </button>
            <button onClick={() => navigate('/dashboard/client/delivery-tracking')} className={homeStyles.shortcutButton}>
                <FaTruck /> Suivre Mes Livraisons
            </button>
            <button onClick={() => navigate('/dashboard/client/returns')} className={homeStyles.shortcutButton}>
                <FaUndo /> Mes Retours
            </button>
        </div>
      </section>

    </main>
  );
};

export default ClientHome; // Ou export default ClientHomeDashboard;