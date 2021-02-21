import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import BtnAjoutRessource from './BtnAjoutRessource';
import '../style/Appli.scss'

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          <BtnAjoutRessource type="ajout-dossier" />
        </section>
    </div>
  );
}
