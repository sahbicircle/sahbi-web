import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./LegalPage.module.scss";

export default function TermsPage() {
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
                <FileText size={40} />
              </div>
              <h1>Conditions générales d'utilisation — SAHBI (CGU)</h1>
              <p className={styles.updated}>Dernière mise à jour : 09/03/2026 · Date d'entrée en vigueur : 09/03/2026</p>
            </div>

            <div className={styles.content}>
              <section>
                <h2>1. Objet et acceptation</h2>
                <p>Les présentes CGU régissent l'accès et l'utilisation de l'application Sahbi ainsi que du site internet. En créant un compte, en accédant à la plateforme ou en cliquant sur « J'accepte », l'utilisateur conclut un contrat électronique avec Sahbi. Conformément à la législation marocaine relative aux échanges juridiques électroniques, ce contrat possède la même valeur juridique qu'un contrat écrit. Si vous n'acceptez pas ces CGU, vous ne devez pas utiliser Sahbi.</p>
              </section>

              <section>
                <h2>2. Description du service</h2>
                <p>Sahbi est une plateforme de mise en relation sociale permettant à des utilisateurs de participer à des rencontres amicales en groupe et à des activités organisées dans des lieux publics ou partenaires. Les rencontres sont généralement organisées en groupes de six personnes, avec une flexibilité possible entre cinq et sept participants. L'objectif de Sahbi est de favoriser les rencontres amicales et les interactions sociales positives dans un environnement sécurisé.</p>
              </section>

              <section>
                <h2>3. Éligibilité</h2>
                <p>Pour utiliser Sahbi, vous devez : être âgé d'au moins 18 ans ; fournir des informations exactes et à jour ; accepter de réaliser, lorsque cela est demandé, une vérification d'identité ou de liveness (selfie dynamique ou procédure équivalente). Sahbi se réserve le droit de suspendre ou refuser un compte si ces conditions ne sont pas respectées.</p>
              </section>

              <section>
                <h2>4. Compte, sécurité et vérification</h2>
                <p>Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toute activité effectuée sur votre compte. Vous vous engagez à ne pas partager votre compte, signaler toute utilisation frauduleuse et maintenir vos informations à jour. La vérification liveness vise à limiter la fraude et les faux profils et peut conditionner l'accès à certaines fonctionnalités.</p>
              </section>

              <section>
                <h2>5. Règles de conduite et sécurité</h2>
                <p>Les comportements suivants sont strictement interdits : harcèlement, discours haineux, menaces, intimidation, discrimination, atteintes à la dignité, comportements dangereux ou inappropriés. Les premières rencontres doivent se dérouler dans des lieux publics ou partenaires. La possession ou consommation de substances illicites lors d'un événement Sahbi peut entraîner suspension ou bannissement.</p>
              </section>

              <section>
                <h2>6. Sahbi n'est pas une app de dating</h2>
                <p>Sahbi est conçu comme une plateforme de rencontres sociales et amicales, et non comme un service de rencontre amoureuse. Des relations peuvent naturellement naître entre adultes consentants. Cependant il est interdit de harceler un utilisateur, exercer une pression romantique ou sexuelle, ou créer un environnement de dating inconfortable pour le groupe.</p>
              </section>

              <section>
                <h2>7. Matching, quiz et groupes</h2>
                <p>Le système de matching se base notamment sur la ville, les disponibilités, les centres d'intérêt, les langues et certaines préférences sociales. Le quiz de préférences sociales est destiné à améliorer la qualité des groupes et peut être modifié ou réinitialisé à tout moment.</p>
              </section>

              <section>
                <h2>8. Politique no-show</h2>
                <p>Annulation moins de 24h : 1 strike. No-show : 2 strikes. 3 strikes sur 90 jours : suspension 14 jours. 5 strikes : suspension 30 jours. En cas d'abus ou de risque pour la sécurité, Sahbi peut appliquer une suspension immédiate ou un bannissement.</p>
              </section>

              <section>
                <h2>9. Lieux partenaires</h2>
                <p>Les lieux partenaires sont des établissements indépendants. Sauf indication contraire, les utilisateurs paient directement leurs consommations auprès du lieu. Sahbi n'est pas responsable de la qualité du service ou des produits proposés par les établissements partenaires.</p>
              </section>

              <section>
                <h2>10. Paiements et remboursements</h2>
                <p>Si Sahbi propose des services payants, les règles de la loi marocaine n°31-08 relative à la protection du consommateur s'appliquent. Avant toute réservation ou achat, Sahbi affiche clairement le prix, ce qui est inclus, les conditions d'annulation et les éventuelles pénalités no-show.</p>
              </section>

              <section>
                <h2>11. Contenus utilisateurs</h2>
                <p>Les utilisateurs restent responsables des contenus publiés (photos, bios, commentaires). En publiant du contenu, vous accordez à Sahbi une licence non exclusive, mondiale et gratuite limitée à l'exploitation nécessaire au fonctionnement du service.</p>
              </section>

              <section>
                <h2>12. Signalements et modération</h2>
                <p>Les comportements inappropriés peuvent être signalés via l'application ou à safety@sahbi.ma. Selon la gravité, Sahbi peut avertir, limiter des fonctionnalités, suspendre ou bannir un utilisateur. Les contestations peuvent être adressées à support@sahbi.ma.</p>
              </section>

              <section>
                <h2>13. Propriété intellectuelle</h2>
                <p>La marque Sahbi, l'application, le design et le code sont la propriété de MOKAN ou de ses partenaires. L'utilisateur dispose d'une licence personnelle, non transférable et non commerciale.</p>
              </section>

              <section>
                <h2>14. Limitation de responsabilité</h2>
                <p>Sahbi met en place des mesures raisonnables de sécurité mais ne peut garantir l'absence totale de risques liés aux interactions humaines. Dans les limites autorisées par la loi, Sahbi n'est pas responsable des actes des utilisateurs ni des services des lieux partenaires.</p>
              </section>

              <section>
                <h2>15. Durée et résiliation</h2>
                <p>Les utilisateurs peuvent supprimer leur compte à tout moment. Sahbi peut suspendre ou résilier un compte en cas de violation des CGU ou de risque pour la communauté.</p>
              </section>

              <section>
                <h2>16. Modifications</h2>
                <p>Sahbi peut modifier les CGU à tout moment. La version mise à jour sera publiée sur l'application ou le site. En cas de modification substantielle, une acceptation explicite pourra être demandée.</p>
              </section>

              <section>
                <h2>17. Droit applicable</h2>
                <p>Les présentes CGU sont régies par le droit marocain. En cas de litige, une tentative de résolution amiable pourra être engagée via support@sahbi.ma. À défaut d'accord, les tribunaux compétents seront ceux de Casablanca ou Marrakech.</p>
              </section>

              <section>
                <h2>18. Langue faisant foi</h2>
                <p>Les présentes CGU sont rédigées en français, qui fait foi en cas de litige. Toute traduction est fournie à titre informatif.</p>
              </section>

              <section>
                <h2>Annexe – Mentions légales</h2>
                <p><strong>Éditeur :</strong> MOKAN</p>
                <p><strong>Adresse :</strong> 228 boulevard Mohamed V, Casablanca</p>
                <p><strong>ICE :</strong> 003420537000074</p>
                <p><strong>Support :</strong> support@sahbi.ma</p>
                <p><strong>Confidentialité :</strong> privacy@sahbi.ma</p>
                <p><strong>Sécurité :</strong> safety@sahbi.ma</p>
              </section>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
