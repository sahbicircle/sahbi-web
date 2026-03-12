import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Mail, ArrowLeft } from "lucide-react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./LegalPage.module.scss";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            {t("nav.back")}
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.header}>
              <div className={styles.iconWrap}>
                <Shield size={40} />
              </div>
              <h1>Politique de confidentialité — SAHBI</h1>
              <p className={styles.updated}>Dernière mise à jour : 09/03/2025 · Date d'effet : 09/03/2025</p>
            </div>

            <div className={styles.content}>
              <section>
                <h2>1. Points clés</h2>
                <ul>
                  <li><strong>Amitié avant tout</strong> : Sahbi facilite des rencontres amicales en petits groupes dans des lieux publics.</li>
                  <li><strong>Nous ne vendons pas vos données.</strong></li>
                  <li><strong>Vérification « liveness »</strong> : pour limiter les faux comptes, nous utilisons un selfie dynamique.</li>
                  <li><strong>Transparence</strong> : vous pouvez accéder, corriger, supprimer certaines données et modifier vos préférences (quiz inclus). La Loi 09-08 reconnaît ces droits.</li>
                  <li><strong>Cookies/traceurs</strong> : nous appliquons la délibération CNDP D-939-2025, notamment la conservation maximale de 6 mois pour les données collectées via cookies.</li>
                  <li><strong>Hébergement / transferts</strong> : vos données peuvent être hébergées via des prestataires cloud ; Sahbi s'engage à respecter les conditions de transfert prévues par la Loi 09-08.</li>
                </ul>
              </section>

              <section>
                <h2>2. Qui sommes-nous ?</h2>
                <p>La plateforme Sahbi est exploitée par [Dénomination sociale] [Forme juridique], société de droit marocain. Sahbi agit en tant que responsable du traitement des données personnelles traitées via l'application et le site. La Loi 09-08 définit ce cadre.</p>
                <p><strong>Contact confidentialité :</strong> privacy@sahbi.ma</p>
              </section>

              <section>
                <h2>3. Données que nous collectons</h2>
                <p>Nous collectons uniquement des données nécessaires au fonctionnement du service (principe de proportionnalité / finalité).</p>
                <p><strong>3.1 Données de compte et d'identité :</strong> Numéro de téléphone et/ou adresse e-mail, prénom (ou pseudonyme), date de naissance (contrôle 18+), photo de profil (si fournie).</p>
                <p><strong>3.2 Vérification « liveness » :</strong> Images/vidéos de vérification, résultat de vérification (statut « vérifié / non vérifié ») et métadonnées minimales.</p>
                <p><strong>3.3 Préférences & Quiz :</strong> Centres d'intérêt, activités, langues, réponses au quiz de style social. Le quiz n'est pas une évaluation médicale/psychologique.</p>
                <p><strong>3.4 Données de localisation :</strong> Ville et zone/quartier (approximatif). Pas de suivi GPS en temps réel par défaut.</p>
                <p><strong>3.5 Données liées aux événements :</strong> Participations/réservations, statut de présence (check-in), historique « no-show ».</p>
                <p><strong>3.6 Données de sécurité et support :</strong> Signalements, échanges avec le support.</p>
                <p><strong>3.7 Données techniques :</strong> Adresse IP, identifiants techniques, logs de sécurité, crash reports.</p>
              </section>

              <section>
                <h2>4. Finalités</h2>
                <p>Conformément à la Loi 09-08, nous utilisons vos données pour : créer et gérer votre compte ; vérifier l'authenticité (anti-fraude) via liveness ; proposer des groupes adaptés (matching) ; gérer la participation ; assurer la sécurité de la communauté ; améliorer l'application ; respecter nos obligations légales.</p>
              </section>

              <section>
                <h2>5. Base(s) juridique(s)</h2>
                <p>Le traitement repose sur : votre consentement ; l'exécution du service ; l'intérêt légitime (sécurité, anti-fraude) ; obligations légales.</p>
              </section>

              <section>
                <h2>6. Logique de matching</h2>
                <p>Sahbi utilise des traitements partiellement automatisés basés sur : ville/zone, disponibilités, centres d'intérêt, langues, préférences du quiz. Vous pouvez modifier vos préférences et réinitialiser le quiz à tout moment.</p>
              </section>

              <section>
                <h2>7. Cookies et traceurs</h2>
                <p>Nous appliquons la délibération CNDP D-939-2025. Traceurs strictement nécessaires : déposés sans consentement. Traceurs non strictement nécessaires : déposés uniquement après consentement. Durée de conservation : maximum 6 mois.</p>
              </section>

              <section>
                <h2>8. Partage des données</h2>
                <p><strong>Nous ne vendons pas vos données.</strong></p>
                <p><strong>Avec les membres de votre groupe :</strong> prénom/pseudonyme, éventuellement photo, centres d'intérêt communs.</p>
                <p><strong>Avec les lieux partenaires :</strong> informations nécessaires au check-in (prénom, code de réservation, taille du groupe).</p>
                <p><strong>Avec nos sous-traitants :</strong> hébergement cloud, SMS/e-mail, notifications, analytics, prestataire liveness, support. Ces prestataires sont encadrés contractuellement.</p>
                <p><strong>Autorités :</strong> nous pouvons communiquer des données si la loi l'exige.</p>
              </section>

              <section>
                <h2>9. Transferts internationaux</h2>
                <p>Si nous utilisons des prestataires cloud hors du Maroc, vos données peuvent être transférées. La Loi 09-08 encadre ces transferts.</p>
              </section>

              <section>
                <h2>10. Durées de conservation</h2>
                <p>Compte & profil : pendant la durée du compte. Liveness : suppression des médias bruts au plus tard 30 jours après vérification. Quiz/préférences : jusqu'à modification/suppression. Logs sécurité : durée proportionnée (ex. 12 mois). Signalements : durée proportionnée à la sécurité.</p>
              </section>

              <section>
                <h2>11. Sécurité</h2>
                <p>Sahbi met en œuvre des mesures techniques et organisationnelles appropriées (contrôles d'accès, chiffrement en transit, journalisation, etc.).</p>
              </section>

              <section>
                <h2>12. Violations de données</h2>
                <p>En cas de violation susceptible d'engendrer un risque pour vos droits, Sahbi prendra des mesures correctives et effectuera les notifications requises.</p>
              </section>

              <section>
                <h2>13. Mineurs</h2>
                <p>Sahbi est réservé aux 18 ans et plus. En cas de suspicion qu'un utilisateur est mineur, nous pouvons suspendre le compte.</p>
              </section>

              <section>
                <h2>14. Vos droits (Loi 09-08)</h2>
                <p>Vous disposez notamment de : droit d'accès (sans délais et gratuitement) ; droit de rectification (corrections dans un délai franc de 10 jours) ; droit d'opposition (notamment prospection).</p>
                <p><strong>Contact :</strong> privacy@sahbi.ma</p>
                <p>Vous pouvez également contacter la CNDP.</p>
              </section>

              <section>
                <h2>15. Modifications</h2>
                <p>Nous pouvons mettre à jour cette politique. La version applicable est celle publiée avec sa date d'effet.</p>
                <p className={styles.contactBlock}>
                  <Mail size={20} />
                  © 2025 Sahbi — Tous droits réservés | privacy@sahbi.ma
                </p>
              </section>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
