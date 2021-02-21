import '../style/Dossier.scss'
import Fab from '@material-ui/core/Fab';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, titre, couleur, dateModif}) {
  const bgCouleur = {backgroundColor:couleur};
  return (
    <article className="Dossier" style={bgCouleur}>
      <div className="couverture">
        <span className="deplacer">
          <Fab disabled color="primary" aria-label="add">
            <SortIcon />
          </Fab>
        </span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <button><MoreVertIcon /></button>
    </article>
  );
}