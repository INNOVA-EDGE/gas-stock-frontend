import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiService } from '../services/apiService';
import styles from '../styles/CreateEmployeePage.module.css'; // Assurez-vous d'avoir ce fichier CSS

const CreateEmployeePage = () => {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        motDePasse: '',
        nomDuRole: 'TRANSPORTEUR',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const employeeRoles = [
        "TRANSPORTEUR", "RESPONSABLE_AGENCE", "RESPONSABLE_ENTREPOT",
        "RESPONSABLE_PRODUCTION", "RESPONSABLE_SUIVI"
    ];

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            await apiService.createEmployee(formData);
            
            // --- MODIFICATION APPLIQUÉE ICI ---
            // Rediriger vers la page de succès avec des informations spécifiques
            navigate('/inscription-reussie', { 
                state: { 
                    isEmployeeCreation: true, 
                    employeeName: `${formData.prenom} ${formData.nom}` 
                } 
            });

        } catch (err) {
            setError(err.response?.data || "Une erreur est survenue lors de la création de l'employé.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.registerBox}>
                    <Link to="/dashboard/admin" className={styles.logoContainer}>
                        <span className={styles.gaz}>gaz</span><span className={styles.flow}>Flow</span>
                    </Link>
                    <h2 className={styles.title}>Créer un Employé</h2>
                    <p className={styles.subtitle}>Remplissez les informations du nouvel employé.</p>
                    
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <div className={styles.inputGroup}><label htmlFor="prenom">Prénom</label><input type="text" id="prenom" value={formData.prenom} onChange={handleChange} required /></div>
                        <div className={styles.inputGroup}><label htmlFor="nom">Nom</label><input type="text" id="nom" value={formData.nom} onChange={handleChange} required /></div>
                        <div className={styles.inputGroup}><label htmlFor="email">Email</label><input type="email" id="email" value={formData.email} onChange={handleChange} required /></div>
                        <div className={styles.inputGroup}><label htmlFor="motDePasse">Mot de Passe Provisoire</label><input type="password" id="motDePasse" value={formData.motDePasse} onChange={handleChange} required /></div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="nomDuRole">Rôle de l'employé</label>
                            <select id="nomDuRole" value={formData.nomDuRole} onChange={handleChange}>
                                {employeeRoles.map(role => (
                                    <option key={role} value={role}>{role.replace(/_/g, ' ')}</option>
                                ))}
                            </select>
                        </div>
                        
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        {success && <p className={styles.successMessage}>{success}</p>}

                        <button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? 'Création en cours...' : "Créer l'employé"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeePage;